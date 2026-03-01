import { NextResponse } from "next/server";

// Auth disabled — all routes are publicly accessible
export default function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
