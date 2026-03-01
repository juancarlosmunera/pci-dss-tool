import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/mock-auth";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlatformRole } from "@prisma/client";
import { Users, Search, ChevronRight, UserPlus } from "lucide-react";
import { createLocalAdmin } from "./[id]/actions";
import { cn } from "@/lib/utils";

export const metadata = { title: "Admin — Users" };

const ROLE_COLORS: Record<PlatformRole, string> = {
  ADMIN: "bg-red-100 text-red-700 border-red-200",
  CONTROL_OWNER: "bg-slate-100 text-slate-600 border-slate-200",
  OPERATOR: "bg-green-100 text-green-700 border-green-200",
  VIEWER: "bg-slate-100 text-slate-600 border-slate-200",
};

async function getUsers(q?: string) {
  return prisma.user.findMany({
    where: q
      ? {
          OR: [
            { email: { contains: q, mode: "insensitive" } },
            { name: { contains: q, mode: "insensitive" } },
          ],
        }
      : undefined,
    include: {
      domainAssignments: { select: { id: true, domain: true, role: true } },
    },
    orderBy: { name: "asc" },
  });
}

type SearchParams = Promise<{ q?: string }>;

export default async function AdminUsersPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  await auth();
  const { q } = await searchParams;
  const users = await getUsers(q);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Users className="h-6 w-6" /> Users
          </h1>
          <p className="text-slate-500 mt-1">
            {users.length} user{users.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {/* Create Local Admin */}
        <details className="relative">
          <summary className="list-none cursor-pointer">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" /> Create Local Admin
            </Button>
          </summary>
          <div className="absolute right-0 top-10 z-10 bg-white border border-slate-200 rounded-xl shadow-lg p-5 w-80">
            <h3 className="text-sm font-semibold text-slate-800 mb-3">New Local Admin Account</h3>
            <form action={createLocalAdmin} className="space-y-3">
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1 block">Email</label>
                <input name="email" type="email" required placeholder="admin@example.com"
                  className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1 block">Name</label>
                <input name="name" type="text" placeholder="Admin Name"
                  className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1 block">Password (min 8 chars)</label>
                <input name="password" type="password" required minLength={8}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
              </div>
              <Button type="submit" className="w-full">Create</Button>
            </form>
          </div>
        </details>
      </div>

      {/* Search */}
      <form method="GET" className="mb-6 flex gap-2 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            name="q"
            defaultValue={q ?? ""}
            placeholder="Search by name or email…"
            className="pl-9"
          />
        </div>
        <Button type="submit">Search</Button>
        {q && (
          <Link href="/admin/users">
            <Button variant="outline">Clear</Button>
          </Link>
        )}
      </form>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold text-slate-700">
            All Users
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-600">
                    Name
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">
                    Email
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">
                    Department
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">
                    Roles
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">
                    Last Login
                  </th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {users.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-10 text-center text-slate-400"
                    >
                      No users found
                    </td>
                  </tr>
                )}
                {users.map((user) => {
                  // Deduplicate roles across domain assignments
                  const uniqueRoles = Array.from(
                    new Set(user.domainAssignments.map((a) => a.role))
                  ) as PlatformRole[];

                  return (
                    <tr
                      key={user.id}
                      className="border-b hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-3 font-medium text-slate-900">
                        {user.name ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{user.email}</td>
                      <td className="px-4 py-3 text-slate-600">
                        {user.department ?? "—"}
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          className={cn(
                            "text-xs",
                            user.isActive
                              ? "bg-green-100 text-green-700 border-green-200"
                              : "bg-red-100 text-red-700 border-red-200"
                          )}
                        >
                          {user.isActive ? "Active" : "Inactive"}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {uniqueRoles.length === 0 ? (
                            <span className="text-slate-400 text-xs">
                              No roles
                            </span>
                          ) : (
                            uniqueRoles.map((role) => (
                              <Badge
                                key={role}
                                className={cn("text-xs", ROLE_COLORS[role])}
                              >
                                {role.replace("_", " ")}
                              </Badge>
                            ))
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-slate-500 text-xs">
                        {user.lastLoginAt
                          ? new Date(user.lastLoginAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )
                          : "Never"}
                      </td>
                      <td className="px-4 py-3">
                        <Link href={`/admin/users/${user.id}`}>
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
