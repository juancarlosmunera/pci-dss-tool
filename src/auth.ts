import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { mapTokenRoles, loadDomainAssignments } from "@/lib/auth-helpers";
import { PlatformRole } from "@prisma/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),

  providers: [
    MicrosoftEntraID({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      issuer: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID!}/v2.0`,
      authorization: {
        params: {
          // GroupMember.Read.All removed — roles come from App Roles JWT claim
          scope: "openid profile email User.Read offline_access",
        },
      },
      profile(profile) {
        const p = profile as typeof profile & {
          picture?: string;
          department?: string;
          job_title?: string;
          roles?: string[];
        };
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: p.picture ?? null,
          entraObjectId: profile.oid ?? profile.sub,
          department: p.department ?? null,
          jobTitle: p.job_title ?? null,
        };
      },
    }),
  ],

  session: { strategy: "database" },

  callbacks: {
    async signIn({ user, account, profile }) {
      if (!account || !user.email) return false;

      // Read App Roles from the JWT token's `roles` claim.
      // Azure AD populates this when the user is assigned to an App Role
      // (directly or via a group assigned to the role in the Enterprise App).
      const tokenRoles = (profile as { roles?: string[] })?.roles ?? [];
      const platformRoles = mapTokenRoles(tokenRoles);

      // Update user in DB: store resolved roles, Entra profile, last login
      await prisma.user.update({
        where: { email: user.email },
        data: {
          platformRoles,
          lastLoginAt: new Date(),
          entraObjectId: (user as { entraObjectId?: string }).entraObjectId ?? undefined,
          department: (user as { department?: string }).department ?? undefined,
          jobTitle: (user as { jobTitle?: string }).jobTitle ?? undefined,
        },
      });

      return true;
    },

    async session({ session, user }) {
      // Load roles and domain assignments from DB on every session refresh
      const dbUser = await prisma.user.findUnique({
        where: { id: user.id },
        select: { id: true, platformRoles: true, isActive: true },
      });

      if (!dbUser?.isActive) {
        // Deactivated user — invalidate session
        return { ...session, user: { ...session.user, id: "" } };
      }

      const domainAssignments = await loadDomainAssignments(user.id);

      session.user.id = user.id;
      session.user.platformRoles = dbUser.platformRoles;
      session.user.domainAssignments = domainAssignments;
      session.user.isAdmin = dbUser.platformRoles.includes(PlatformRole.ADMIN);

      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
});
