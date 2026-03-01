import type { Session } from "next-auth";
import { PlatformRole } from "@prisma/client";

// Auth bypass — returns a hardcoded admin session for all requests.
// Replace with real auth when ready.
export async function auth(): Promise<Session> {
  return {
    user: {
      id: "local-admin",
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
