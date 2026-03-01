import type { Session } from "next-auth";
import { PlatformRole } from "@prisma/client";
import { prisma } from "@/lib/prisma";

// Auth bypass — returns a hardcoded admin session for all requests.
// Replace with real auth when ready.
export async function auth(): Promise<Session> {
  // Ensure the mock admin user exists in the DB so FK constraints pass.
  const user = await prisma.user.upsert({
    where: { email: "admin@pcidss.local" },
    create: {
      email: "admin@pcidss.local",
      name: "Local Admin",
      platformRoles: [PlatformRole.ADMIN],
      isActive: true,
    },
    update: {},
    select: { id: true },
  });

  return {
    user: {
      id: user.id,
      name: "Local Admin",
      email: "admin@pcidss.local",
      image: null,
      platformRoles: [PlatformRole.ADMIN],
      domainAssignments: [],
      isAdmin: true,
    },
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toISOString(),
  };
}
