import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeAccessToken } from "./jwt";

type Route = {
  pathname: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD";
};
const NO_AUTH_NEEDED_ROUTES: Route[] = [
  { pathname: "/api/login", method: "POST" },
  { pathname: "/api/flats", method: "GET" },
];

export const checkAuthed = async (request: NextRequest) => {
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
