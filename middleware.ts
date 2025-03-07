import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkAuthed } from "./app/api/auth-middleware";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    return await checkAuthed(request);
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|icons|scripts).*)",
  ],
};
