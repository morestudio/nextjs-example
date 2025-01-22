import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// https://nextjs.org/docs/app/building-your-application/routing/middleware
export default async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // add vaildation logic here

  // Continue to the next middleware
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
