import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { mapTokenRoles, loadDomainAssignments } from "@/lib/auth-helpers";
import { PlatformRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const azureConfigured =
  !!process.env.AZURE_AD_CLIENT_ID &&
  !!process.env.AZURE_AD_CLIENT_SECRET &&
  !!process.env.AZURE_AD_TENANT_ID;

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  // Adapter only needed for Azure AD SSO (creates Account records on first login).
  // Credentials + JWT work without it and the adapter causes CallbackRouteError
  // when no Account record exists for the credentials user.
  adapter: azureConfigured ? PrismaAdapter(prisma) : undefined,
  session: { strategy: "jwt" },

  providers: [
    ...(azureConfigured
      ? [
          MicrosoftEntraID({
            clientId: process.env.AZURE_AD_CLIENT_ID!,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
            issuer: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID!}/v2.0`,
            authorization: {
              params: {
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
        ]
      : []),

    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
          select: {
            id: true,
            email: true,
            name: true,
            image: true,
            passwordHash: true,
            isActive: true,
          },
        });

        if (!user?.passwordHash || !user.isActive) return null;

        const valid = await bcrypt.compare(
          credentials.password as string,
          user.passwordHash
        );
        if (!valid) return null;

        return { id: user.id, email: user.email, name: user.name, image: user.image };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      const userId = token.id as string | undefined;
      if (!userId) return session;

      const dbUser = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, platformRoles: true, isActive: true },
      });

      if (!dbUser?.isActive) {
        return { ...session, user: { ...session.user, id: "" } };
      }

      const domainAssignments = await loadDomainAssignments(userId);

      session.user.id = userId;
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
