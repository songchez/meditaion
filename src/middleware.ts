import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.nextUrl.pathname;

  // If it's the root path, just render it
  if (path === "/") {
    return NextResponse.next();
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (
    !session &&
    (path === "/editor" || path === "/meditations" || path === "/tree")
  ) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  } else if (session && (path === "/login" || path === "/register")) {
    return NextResponse.rewrite(new URL("/", req.url));
  }
  return NextResponse.next();
}
