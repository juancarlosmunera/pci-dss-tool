import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PlatformRole } from "@prisma/client";
import { ArrowLeft, UserCircle, ShieldCheck, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  addDomainAssignment,
  removeDomainAssignment,
  toggleUserActive,
} from "./actions";

export const metadata = { title: "Admin — User Detail" };

const PCI_DOMAINS = [
  "Build and Maintain a Secure Network and Systems",
  "Protect Account Data",
  "Maintain a Vulnerability Management Program",
  "Implement Strong Access Control Measures",
  "Regularly Monitor and Test Networks",
  "Maintain an Information Security Policy",
] as const;

const ASSIGNABLE_ROLES: PlatformRole[] = [
  PlatformRole.CONTROL_OWNER,
  PlatformRole.OPERATOR,
  PlatformRole.VIEWER,
];

const ROLE_COLORS: Record<PlatformRole, string> = {
  ADMIN: "bg-red-100 text-red-700 border-red-200",
  CONTROL_OWNER: "bg-blue-100 text-blue-700 border-blue-200",
  OPERATOR: "bg-green-100 text-green-700 border-green-200",
  VIEWER: "bg-slate-100 text-slate-600 border-slate-200",
};

async function getUser(id: string) {
  return prisma.user.findUnique({
    where: { id },
    include: {
      domainAssignments: {
        orderBy: { createdAt: "asc" },
      },
    },
  });
}

type Params = Promise<{ id: string }>;

export default async function AdminUserDetailPage({
  params,
}: {
  params: Params;
}) {
  const session = await auth();
  const { id } = await params;
  const user = await getUser(id);

  if (!user) notFound();

  const adminId = session?.user?.id ?? "";

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Back */}
      <Link
        href="/admin/users"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Users
      </Link>

      {/* Profile */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-slate-200 flex items-center justify-center">
                <UserCircle className="h-8 w-8 text-slate-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  {user.name ?? "Unknown User"}
                </h1>
                <p className="text-slate-500 text-sm">{user.email}</p>
              </div>
            </div>
            <form
              action={async () => {
                "use server";
                await toggleUserActive(user.id, !user.isActive);
              }}
            >
              <Button
                type="submit"
                variant={user.isActive ? "destructive" : "outline"}
                size="sm"
              >
                {user.isActive ? "Deactivate" : "Activate"}
              </Button>
            </form>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-500 font-medium">Department</p>
              <p className="text-slate-900 mt-0.5">
                {user.department ?? "—"}
              </p>
            </div>
            <div>
              <p className="text-slate-500 font-medium">Job Title</p>
              <p className="text-slate-900 mt-0.5">{user.jobTitle ?? "—"}</p>
            </div>
            <div>
              <p className="text-slate-500 font-medium">Status</p>
              <Badge
                className={cn(
                  "mt-0.5 text-xs",
                  user.isActive
                    ? "bg-green-100 text-green-700 border-green-200"
                    : "bg-red-100 text-red-700 border-red-200"
                )}
              >
                {user.isActive ? "Active" : "Inactive"}
              </Badge>
            </div>
            <div>
              <p className="text-slate-500 font-medium">Last Login</p>
              <p className="text-slate-900 mt-0.5">
                {user.lastLoginAt
                  ? new Date(user.lastLoginAt).toLocaleString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "Never"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Domain Assignments */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-base font-semibold text-slate-700 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" /> Domain Assignments
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {user.domainAssignments.length === 0 ? (
            <p className="px-6 py-8 text-center text-slate-400 text-sm">
              No domain assignments yet.
            </p>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-600">
                    Domain
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">
                    Role
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">
                    Assigned
                  </th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {user.domainAssignments.map((assignment) => (
                  <tr key={assignment.id} className="border-b hover:bg-slate-50">
                    <td className="px-4 py-3 text-slate-900">
                      {assignment.domain}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        className={cn(
                          "text-xs",
                          ROLE_COLORS[assignment.role]
                        )}
                      >
                        {assignment.role.replace("_", " ")}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-slate-500 text-xs">
                      {new Date(assignment.createdAt).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "short", day: "numeric" }
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <form
                        action={async () => {
                          "use server";
                          await removeDomainAssignment(
                            assignment.id,
                            user.id
                          );
                        }}
                      >
                        <Button
                          type="submit"
                          variant="ghost"
                          size="sm"
                          className="h-7 px-2 text-red-600 hover:text-red-800 hover:bg-red-50"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>

      <Separator className="my-6" />

      {/* Add Assignment */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold text-slate-700">
            Add Domain Assignment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action={async (formData: FormData) => {
              "use server";
              const domain = formData.get("domain") as string;
              const role = formData.get("role") as PlatformRole;
              if (!domain || !role) return;
              await addDomainAssignment(user.id, domain, role, adminId);
            }}
            className="flex flex-wrap gap-3 items-end"
          >
            <div className="flex-1 min-w-[200px]">
              <label className="text-xs font-medium text-slate-600 mb-1 block">
                Domain
              </label>
              <select
                name="domain"
                required
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select a domain…</option>
                {PCI_DOMAINS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className="min-w-[160px]">
              <label className="text-xs font-medium text-slate-600 mb-1 block">
                Role
              </label>
              <select
                name="role"
                required
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select a role…</option>
                {ASSIGNABLE_ROLES.map((r) => (
                  <option key={r} value={r}>
                    {r.replace("_", " ")}
                  </option>
                ))}
              </select>
            </div>

            <Button type="submit">Add Assignment</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
