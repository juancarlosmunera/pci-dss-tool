import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes that don't require authentication
const PUBLIC_PATHS = [
  "/auth/signin",
  "/auth/error",
  "/api/auth",
  "/api/webhooks/servicenow", // SN webhook uses its own shared-secret auth
  "/api/scim",                // SCIM provisioning uses Bearer token auth
];

function isPublic(pathname: string): boolean {
  return PUBLIC_PATHS.some((p) => pathname.startsWith(p));
}

function isAdminPath(pathname: string): boolean {
  return pathname.startsWith("/admin");
}

export default auth(function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow public paths through
  if (isPublic(pathname)) return NextResponse.next();

  // Require authentication
  if (!req.auth?.user?.id) {
    const signInUrl = new URL("/auth/signin", req.url);
    signInUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(signInUrl);
  }

  // Admin routes require ADMIN platform role
  if (isAdminPath(pathname) && !req.auth.user.isAdmin) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
