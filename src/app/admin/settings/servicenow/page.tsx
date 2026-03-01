import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/mock-auth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PlugZap, CheckCircle, XCircle } from "lucide-react";
import { saveServiceNowConfig } from "./actions";

export const metadata = { title: "Admin — ServiceNow Integration" };

async function getSnConfig() {
  return prisma.integrationConfig.findUnique({
    where: { provider: "servicenow" },
  });
}

export default async function ServiceNowSettingsPage() {
  await auth();
  const config = await getSnConfig();
  const creds = (config?.credentials as Record<string, string>) ?? {};
  const authMethod = config?.authMethod ?? "basic";

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <PlugZap className="h-6 w-6" /> ServiceNow Integration
        </h1>
        <p className="text-slate-500 mt-1">
          Configure the ServiceNow connection for automatic incident management
          when items become non-compliant.
        </p>
      </div>

      {/* Status Banner */}
      <div className="mb-6 flex items-center gap-3 p-4 rounded-lg border bg-slate-50">
        {config?.isEnabled ? (
          <CheckCircle className="h-5 w-5 text-slate-500 shrink-0" />
        ) : (
          <XCircle className="h-5 w-5 text-slate-400 shrink-0" />
        )}
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-900">
            Integration is{" "}
            <Badge
              className={
                config?.isEnabled
                  ? "bg-green-100 text-green-700 border-green-200"
                  : "bg-slate-100 text-slate-600 border-slate-200"
              }
            >
              {config?.isEnabled ? "Enabled" : "Disabled"}
            </Badge>
          </p>
          {config?.instanceUrl && (
            <p className="text-xs text-slate-500 mt-0.5">
              Instance: {config.instanceUrl}
            </p>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={undefined}
          formAction="/api/admin/servicenow/test"
          type="button"
          id="test-connection-btn"
        >
          Test Connection
        </Button>
      </div>

      {/* Config Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold text-slate-700">
            Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={saveServiceNowConfig} className="space-y-6">
            {/* Instance URL */}
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                Instance URL
              </label>
              <Input
                name="instanceUrl"
                type="url"
                placeholder="https://yourinstance.service-now.com"
                defaultValue={config?.instanceUrl ?? ""}
                required
              />
              <p className="text-xs text-slate-400 mt-1">
                The base URL of your ServiceNow instance (no trailing slash).
              </p>
            </div>

            {/* Auth Method */}
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                Authentication Method
              </label>
              <select
                name="authMethod"
                defaultValue={authMethod}
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="basic">Basic Auth (Username + Password)</option>
                <option value="oauth">OAuth 2.0 (Client ID + Secret)</option>
              </select>
            </div>

            <Separator />

            {/* Basic Auth Credentials */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-700">
                Credentials
              </p>

              {/* Basic auth fields */}
              <div className="grid grid-cols-2 gap-4" id="basic-auth-fields">
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1 block">
                    Username
                  </label>
                  <Input
                    name="username"
                    placeholder="service-account@company.com"
                    defaultValue={creds.username ?? ""}
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1 block">
                    Password
                  </label>
                  <Input
                    name="password"
                    type="password"
                    placeholder={
                      creds.password ? "••••••••" : "Enter password"
                    }
                    autoComplete="new-password"
                  />
                  {creds.password && (
                    <p className="text-xs text-slate-400 mt-1">
                      Leave blank to keep existing password.
                    </p>
                  )}
                </div>
              </div>

              {/* OAuth fields */}
              <div className="grid grid-cols-2 gap-4" id="oauth-fields">
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1 block">
                    Client ID
                  </label>
                  <Input
                    name="clientId"
                    placeholder="OAuth client ID"
                    defaultValue={creds.clientId ?? ""}
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1 block">
                    Client Secret
                  </label>
                  <Input
                    name="clientSecret"
                    type="password"
                    placeholder={
                      creds.clientSecret ? "••••••••" : "Enter client secret"
                    }
                    autoComplete="new-password"
                  />
                  {creds.clientSecret && (
                    <p className="text-xs text-slate-400 mt-1">
                      Leave blank to keep existing secret.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <Separator />

            {/* Webhook Secret */}
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1.5 block">
                Webhook Secret
              </label>
              <Input
                name="webhookSecret"
                type="password"
                placeholder={
                  config?.webhookSecret
                    ? "••••••••"
                    : "Optional — used to verify inbound webhooks"
                }
                autoComplete="new-password"
              />
              {config?.webhookSecret && (
                <p className="text-xs text-slate-400 mt-1">
                  A secret is already configured. Leave blank to keep it.
                </p>
              )}
            </div>

            {/* Enable toggle */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="isEnabled"
                id="isEnabled"
                defaultChecked={config?.isEnabled ?? false}
                className="h-4 w-4 rounded border-gray-300 text-slate-700"
              />
              <label
                htmlFor="isEnabled"
                className="text-sm font-medium text-slate-700"
              >
                Enable integration
              </label>
            </div>

            <div className="flex gap-3">
              <Button type="submit">Save Configuration</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
