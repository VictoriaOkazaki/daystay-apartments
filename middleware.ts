import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeAccessToken } from "./app/api/jwt";

type Route = {
  pathname: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
};
const NO_AUTH_NEEDED_ROUTES: Route[] = [
  { pathname: "/api/login", method: "POST" },
];

const checkPath = async (request: NextRequest) => {
  const needAuth = !NO_AUTH_NEEDED_ROUTES.some(
    (route) =>
      route.pathname === request.nextUrl.pathname &&
      route.method === request.method
  );

  if (needAuth) {
    const isAuth = await decodeAccessToken(request);
    if (!isAuth) {
      return NextResponse.json({ message: "unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
};

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    return await checkPath(request);
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|icons|scripts).*)",
  ],
};
