import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Users, ShieldCheck, PlugZap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = { title: "Admin" };

async function getAdminStats() {
  const [userCount, assignmentCount, snConfig] = await Promise.all([
    prisma.user.count({ where: { isActive: true } }),
    prisma.domainAssignment.count(),
    prisma.integrationConfig.findUnique({ where: { provider: "servicenow" } }),
  ]);
  return { userCount, assignmentCount, snConfig };
}

export default async function AdminPage() {
  const stats = await getAdminStats();

  const tiles = [
    {
      title: "Active Users",
      value: stats.userCount,
      href: "/admin/users",
      icon: Users,
      desc: "Manage users and domain assignments",
    },
    {
      title: "Domain Assignments",
      value: stats.assignmentCount,
      href: "/admin/users",
      icon: ShieldCheck,
      desc: "Control Owner / Operator assignments",
    },
    {
      title: "ServiceNow",
      value: stats.snConfig?.isEnabled ? "Enabled" : "Disabled",
      href: "/admin/settings/servicenow",
      icon: PlugZap,
      desc: stats.snConfig?.instanceUrl
        ? `Instance: ${stats.snConfig.instanceUrl}`
        : "Not configured",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-900 mb-1">Admin Panel</h1>
      <p className="text-slate-500 mb-8">
        Manage users, role assignments, and integrations.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {tiles.map(({ title, value, href, icon: Icon, desc }) => (
          <Link key={href + title} href={href}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer border-slate-200">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold text-slate-700">
                    {title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-slate-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-slate-900">{value}</p>
                <p className="text-xs text-slate-400 mt-1">{desc}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
