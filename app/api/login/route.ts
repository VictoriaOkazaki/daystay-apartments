import { NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/edge-config";
import { generateAccessToken } from "../jwt";

type User = { login: string; password: string };

export async function POST(req: NextRequest) {
  const body = await req.json(); // Parse JSON body
  const { login, password } = body; // Extract fields

  const admins = await get<User[]>("admins");

  const isAdmin = admins?.some(
    (el) => el.password === password && el.login === login
  );

  console.log(login, password, admins, isAdmin);

  if (!isAdmin) {
    return NextResponse.json({ message: "Auth failed!" }, { status: 400 });
  }

  const accessToken = await generateAccessToken(login);

  console.log("generated acsess token", accessToken);

  return NextResponse.json(
    { message: "Success login!", accessToken },
    { status: 200 }
  );
}
