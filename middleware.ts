// middleware.ts (place in the root of your project, or inside /src if you use src folder)

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only match the exact root path "/"
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/home";
    return NextResponse.redirect(url, 308); // 308 preserves method & body
  }

  // For everything else → do nothing, let Next.js/Vercel handle it
  return NextResponse.next();
}

// Optional: Improve performance by limiting matcher to only the root
export const config = {
  matcher: "/",
};
