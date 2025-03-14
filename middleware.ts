import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkAuthed } from "./app/api/auth-middleware";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    return await checkAuthed(request);
  }
  if (!request.nextUrl.pathname.startsWith("/admin")) {
    return intlMiddleware(request);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|icons|scripts).*)",
  ],
};
