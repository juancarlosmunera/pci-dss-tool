# Azure Deployment Guide

This guide covers deploying the PCI DSS Compliance Platform to **Azure App Service** using containers. The same container image can also be deployed to Azure Container Apps if you prefer serverless scaling.

---

## Required Azure Resources

| Resource | Purpose | Recommended SKU |
|---|---|---|
| App Service Plan | Hosts the container | B2 or higher (1+ vCPU, 3.5GB RAM) |
| App Service (Linux) | Runs the Next.js app | — |
| Azure Database for PostgreSQL Flexible Server | Production database | Standard_B2ms or higher |
| Azure Container Registry (ACR) | Stores Docker images | Basic |
| Azure Blob Storage | Evidence file uploads | Standard LRS |
| Azure Key Vault *(optional)* | Secrets management | Standard |

---

## Part 1 — Database

### 1.1 Create PostgreSQL Flexible Server

```bash
az postgres flexible-server create \
  --name pci-platform-db \
  --resource-group <rg> \
  --location eastus \
  --admin-user pci \
  --admin-password <secure-password> \
  --sku-name Standard_B2ms \
  --tier Burstable \
  --version 16 \
  --public-access 0.0.0.0
```

### 1.2 Create the database

```bash
az postgres flexible-server db create \
  --resource-group <rg> \
  --server-name pci-platform-db \
  --database-name pci_platform
```

### 1.3 Run migrations

From your local machine (or CI pipeline) with `DATABASE_URL` pointing to the Azure server:

```bash
npx prisma migrate deploy
npx prisma db seed
```

> Use `migrate deploy` (not `dev`) in production — it applies pending migrations without creating new ones.

---

## Part 2 — Container Image

### 2.1 Create a Dockerfile

Create `Dockerfile` in the project root:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npx prisma generate
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
```

Add to `next.config.ts`:

```typescript
const nextConfig = {
  output: "standalone",
  // ... existing config
};
```

### 2.2 Build and push to ACR

```bash
# Log in to ACR
az acr login --name <acr-name>

# Build and push
docker build -t <acr-name>.azurecr.io/pci-platform:latest .
docker push <acr-name>.azurecr.io/pci-platform:latest
```

---

## Part 3 — App Service

### 3.1 Create the App Service

```bash
az webapp create \
  --resource-group <rg> \
  --plan <app-service-plan> \
  --name pci-compliance-platform \
  --deployment-container-image-name <acr-name>.azurecr.io/pci-platform:latest
```

### 3.2 Configure environment variables

Set all required environment variables on the App Service:

```bash
az webapp config appsettings set \
  --resource-group <rg> \
  --name pci-compliance-platform \
  --settings \
    DATABASE_URL="postgresql://pci:<password>@pci-platform-db.postgres.database.azure.com/pci_platform?schema=public&sslmode=require" \
    AZURE_AD_CLIENT_ID="<value>" \
    AZURE_AD_CLIENT_SECRET="<value>" \
    AZURE_AD_TENANT_ID="<value>" \
    NEXTAUTH_SECRET="<value>" \
    NEXTAUTH_URL="https://pci-compliance-platform.azurewebsites.net" \
    SCIM_PROVISIONING_SECRET="<value>" \
    AZURE_STORAGE_CONNECTION_STRING="<value>" \
    AZURE_STORAGE_CONTAINER="evidence" \
    WEBSITES_PORT="3000"
```

### 3.3 Enable ACR pull

```bash
# Grant App Service identity access to ACR
az webapp identity assign --resource-group <rg> --name pci-compliance-platform

# Get the principal ID
PRINCIPAL_ID=$(az webapp identity show --resource-group <rg> --name pci-compliance-platform --query principalId -o tsv)

# Grant AcrPull role
ACR_ID=$(az acr show --name <acr-name> --query id -o tsv)
az role assignment create --assignee $PRINCIPAL_ID --scope $ACR_ID --role AcrPull
```

### 3.4 Update App Registration redirect URI

Add your production URL to the App Registration:

- In Azure Portal → App Registration → Authentication → Redirect URIs
- Add: `https://pci-compliance-platform.azurewebsites.net/api/auth/callback/azure-ad`

---

## Part 4 — CI/CD (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

env:
  ACR_NAME: <your-acr-name>
  IMAGE_NAME: pci-platform
  APP_SERVICE_NAME: pci-compliance-platform
  RESOURCE_GROUP: <your-rg>

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Log in to Azure
        uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}

      - name: Log in to ACR
        run: az acr login --name ${{ env.ACR_NAME }}

      - name: Build and push image
        run: |
          docker build -t ${{ env.ACR_NAME }}.azurecr.io/${{ env.IMAGE_NAME }}:${{ github.sha }} .
          docker push ${{ env.ACR_NAME }}.azurecr.io/${{ env.IMAGE_NAME }}:${{ github.sha }}

      - name: Deploy to App Service
        run: |
          az webapp config container set \
            --resource-group ${{ env.RESOURCE_GROUP }} \
            --name ${{ env.APP_SERVICE_NAME }} \
            --container-image-name ${{ env.ACR_NAME }}.azurecr.io/${{ env.IMAGE_NAME }}:${{ github.sha }}
          az webapp restart \
            --resource-group ${{ env.RESOURCE_GROUP }} \
            --name ${{ env.APP_SERVICE_NAME }}
```

Create the `AZURE_CREDENTIALS` secret in GitHub:

```bash
az ad sp create-for-rbac \
  --name pci-platform-deploy \
  --role contributor \
  --scopes /subscriptions/<subscription-id>/resourceGroups/<rg> \
  --sdk-auth
```

Paste the JSON output as the `AZURE_CREDENTIALS` repository secret.

---

## Part 5 — Evidence Storage (Azure Blob)

The `Evidence.filePath` field currently stores a local path string. For production, replace this with Azure Blob upload:

1. Create a Storage Account and container named `evidence`
2. Set `AZURE_STORAGE_CONNECTION_STRING` and `AZURE_STORAGE_CONTAINER=evidence`
3. In the evidence upload API route, use `@azure/storage-blob` to upload and store the Blob URL

---

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `AZURE_AD_CLIENT_ID` | Yes | App Registration client ID |
| `AZURE_AD_CLIENT_SECRET` | Yes | App Registration client secret |
| `AZURE_AD_TENANT_ID` | Yes | Azure tenant ID |
| `NEXTAUTH_SECRET` | Yes | Random 32-char secret (`openssl rand -base64 32`) |
| `NEXTAUTH_URL` | Yes | Full public URL of the app |
| `SCIM_PROVISIONING_SECRET` | Yes | Bearer token for SCIM endpoints |
| `AZURE_STORAGE_CONNECTION_STRING` | Evidence uploads | Azure Blob Storage connection string |
| `AZURE_STORAGE_CONTAINER` | Evidence uploads | Container name (default: `evidence`) |

---

## Post-deployment checklist

- [ ] App Registration redirect URI updated with production URL
- [ ] SCIM Tenant URL updated in Enterprise Application provisioning config
- [ ] Prisma migrations applied (`prisma migrate deploy`)
- [ ] Requirements seed applied (`prisma db seed`)
- [ ] ServiceNow Business Rule webhook URL updated to production URL
- [ ] At least one ADMIN user provisioned (via SCIM or manual DB insert)
- [ ] SSL certificate active (automatic on App Service with `.azurewebsites.net` domain)
