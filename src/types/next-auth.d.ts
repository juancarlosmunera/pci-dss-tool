import type { PlatformRole } from "@prisma/client";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image?: string | null;
      platformRoles: PlatformRole[];
      domainAssignments: { domain: string; role: PlatformRole }[];
      isAdmin: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    platformRoles?: PlatformRole[];
    domainAssignments?: { domain: string; role: PlatformRole }[];
    isAdmin?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    platformRoles: PlatformRole[];
    domainAssignments: { domain: string; role: PlatformRole }[];
    isAdmin: boolean;
    entraObjectId?: string;
  }
}
