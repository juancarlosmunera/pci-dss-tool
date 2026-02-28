# PCI DSS v4.0.1 Compliance Platform

Internal multi-user compliance management platform for tracking PCI DSS v4.0.1 (Defined Approach) assessments. Users authenticate via Azure Entra ID SSO; roles and provisioning are managed entirely from the Azure portal.

## What it does

- **Requirements Browser** — searchable view of all 323 PCI DSS v4.0.1 requirements, testing procedures, and guidance
- **Assessment Management** — create named assessments, seed all level-3 sub-requirements, track compliance status per requirement
- **Role-scoped Assignments** — Control Owners and Operators are assigned per PCI DSS domain (not globally); users see only their domains in My Controls
- **ServiceNow Integration** — automatically creates incidents for NON_COMPLIANT items; receives status updates back via inbound webhook
- **Admin Panel** — manage users, domain assignments, and the ServiceNow integration config
- **Audit Trail** — every status change is logged with who changed it, when, and from which system

**Scope:** Defined Approach only. No Customized Approach fields.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, React 18, TypeScript) |
| Database | PostgreSQL 16 via Prisma ORM v6 |
| Auth | NextAuth.js v5 beta + `@auth/prisma-adapter` |
| Identity | Azure Entra ID (SSO via OIDC, App Roles, SCIM provisioning) |
| Styling | Tailwind CSS + shadcn/ui |
| Local DB | Docker Compose |
| Evidence Scripts | `packages/evidence-collectors` (git submodule) |

---

## Local Development

### Prerequisites

- Docker & Docker Compose
- Node.js 20+
- An Azure AD tenant with an App Registration configured ([see docs/azure-ad-setup.md](docs/azure-ad-setup.md))

### 1. Configure environment

```bash
cp .env.example .env
```

Fill in the Azure AD values. The database URL works as-is for the Docker Compose setup.

### 2. Start Postgres

```bash
docker-compose up -d
```

> With pgAdmin (port 5050): `docker-compose --profile tools up -d`

### 3. Run migrations

```bash
npx prisma migrate dev --name init
```

### 4. Seed PCI DSS requirements

```bash
npx prisma db seed
```

Loads all 323 requirements and 451 testing procedures from `prisma/data/pci-dss-v4.0.1-seed.ts`.

### 5. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You will be redirected to the Microsoft SSO login page.

---

## Authentication & Roles

Authentication is handled by **Azure Entra ID SSO**. There is no username/password login.

### How roles work

Roles are defined as **Azure AD App Roles** on the App Registration. You assign Entra security groups to these roles in the Enterprise Application. When a user signs in, their roles arrive in the JWT `roles` claim — no Graph API calls needed.

| App Role value | Platform role | Can do |
|---|---|---|
| `PCI.Admin` | `ADMIN` | Full admin access — users, assignments, integrations |
| `PCI.ControlOwner` | `CONTROL_OWNER` | Manage status and evidence for assigned domains |
| `PCI.Operator` | `OPERATOR` | Update status for assigned domains |
| `PCI.Viewer` | `VIEWER` | Read-only access |

### Domain assignments

App Roles define **what** a user can do. **Domain assignments** (set by admins in `/admin/users/[id]`) define **which PCI DSS domain** they're responsible for. A user can be Control Owner on Domain 1 and Operator on Domain 3.

The six PCI DSS domains are:
1. Build and Maintain a Secure Network and Systems
2. Protect Account Data
3. Maintain a Vulnerability Management Program
4. Implement Strong Access Control Measures
5. Regularly Monitor and Test Networks
6. Maintain an Information Security Policy

### User provisioning (SCIM)

Users can be pre-provisioned via **SCIM 2.0** — Azure AD pushes user lifecycle events (create, update, deactivate) before the user ever logs in. See [docs/azure-ad-setup.md](docs/azure-ad-setup.md) for configuration steps.

---

## Pages

| Route | Description |
|---|---|
| `/` | Dashboard |
| `/requirements` | PCI DSS requirements browser (searchable) |
| `/requirements/[number]` | Requirement detail with guidance panel |
| `/assessments` | List all assessments |
| `/assessments/new` | Create assessment (seeds all level-3 requirements) |
| `/assessments/[id]` | Assessment overview with domain progress tiles |
| `/assessments/[id]/domains/[domain]` | Domain view — all items with status chips |
| `/assessments/[id]/items/[itemId]` | Item detail — status, notes, assignees, evidence, SN ticket |
| `/my-controls` | Current user's assigned items across all assessments |
| `/admin` | Admin overview |
| `/admin/users` | User list with role badges and search |
| `/admin/users/[id]` | User profile + domain assignments (add/remove) |
| `/admin/settings/servicenow` | ServiceNow integration config |
| `/auth/signin` | Microsoft SSO login page |

---

## API Routes

### Assessments

```
POST   /api/assessments                                     Create assessment
GET    /api/assessments                                     List assessments
GET    /api/assessments/[id]                                Get with domain progress
PATCH  /api/assessments/[id]                                Update name/status/target
POST   /api/assessments/[id]/seed                          Seed all level-3 items
PATCH  /api/assessments/[id]/items/[itemId]                 Update status, notes, assignees
POST   /api/assessments/[id]/items/[itemId]/servicenow      Create SN incident
GET    /api/assessments/[id]/items/[itemId]/servicenow      Sync status from SN
```

### Admin

```
GET    /api/admin/users                                     List users
PATCH  /api/admin/users/[id]                                Toggle isActive
GET    /api/admin/users/[id]/assignments                    Get domain assignments
POST   /api/admin/users/[id]/assignments                    Add domain assignment
DELETE /api/admin/users/[id]/assignments/[assignmentId]     Remove domain assignment
GET    /api/admin/settings/servicenow                       Get SN config (credentials redacted)
PUT    /api/admin/settings/servicenow                       Upsert SN config
POST   /api/admin/settings/servicenow/test                  Test SN connectivity
```

### Webhooks & Provisioning

```
POST   /api/webhooks/servicenow   Inbound SN state-change webhook (shared-secret auth)
GET    /api/scim/v2/ServiceProviderConfig   SCIM capability metadata
GET    /api/scim/v2/Users                  List/filter users
POST   /api/scim/v2/Users                  Provision user
GET    /api/scim/v2/Users/[id]             Get user
PATCH  /api/scim/v2/Users/[id]             Update/deactivate user
PUT    /api/scim/v2/Users/[id]             Full replacement
```

---

## Project Structure

```
.
├── docker-compose.yml
├── .env.example
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── data/
│       └── pci-dss-v4.0.1-seed.ts
├── docs/
│   ├── azure-ad-setup.md        # App Registration, App Roles, SCIM config
│   ├── servicenow-setup.md      # SN integration configuration
│   └── deployment.md            # Azure App Service deployment guide
├── src/
│   ├── auth.ts                  # NextAuth config (Azure AD + App Roles)
│   ├── middleware.ts             # Route protection
│   ├── types/
│   │   └── next-auth.d.ts       # Session type extensions
│   ├── lib/
│   │   ├── prisma.ts            # Prisma client singleton
│   │   ├── auth-helpers.ts      # mapTokenRoles, loadDomainAssignments
│   │   ├── scim.ts              # SCIM auth validation + response helpers
│   │   └── utils.ts             # cn() utility
│   ├── components/
│   │   ├── sidebar-nav.tsx      # Session-aware navigation sidebar
│   │   └── ui/                  # shadcn/ui components
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx             # Dashboard
│       ├── auth/
│       │   ├── signin/page.tsx
│       │   └── error/page.tsx
│       ├── requirements/        # Requirements browser
│       ├── assessments/         # Assessment management
│       ├── my-controls/         # User's assigned items
│       ├── admin/               # Admin panel
│       └── api/
│           ├── auth/[...nextauth]/route.ts
│           ├── assessments/
│           ├── admin/
│           ├── webhooks/servicenow/route.ts
│           └── scim/v2/         # SCIM 2.0 provisioning endpoints
└── packages/
    └── evidence-collectors/     # Git submodule: evidence collection scripts
```

---

## Database Models

| Model | Purpose |
|---|---|
| `User` | Platform users; `platformRoles` updated from JWT + SCIM |
| `Account` | OAuth account links (NextAuth) |
| `Session` | Active sessions (NextAuth, database strategy) |
| `VerificationToken` | Email verification tokens (NextAuth) |
| `DomainAssignment` | Per-domain role scope (userId + domain + role) |
| `IntegrationConfig` | Integration settings (one row, `provider="servicenow"`) |
| `ServiceNowTicket` | SN incident linked to an AssessmentItem |
| `Requirement` | All 323 PCI DSS v4.0.1 requirements (4-level hierarchy) |
| `TestingProcedure` | 451 assessor testing procedures |
| `Assessment` | A compliance assessment engagement |
| `AssessmentItem` | Per-requirement status within an assessment |
| `Evidence` | Files/artifacts collected as evidence |
| `AuditLog` | Change history; `sourceSystem` distinguishes platform vs. ServiceNow changes |

---

## Further Reading

- [Azure AD App Registration & SCIM Setup](docs/azure-ad-setup.md)
- [ServiceNow Integration Setup](docs/servicenow-setup.md)
- [Azure Deployment Guide](docs/deployment.md)
