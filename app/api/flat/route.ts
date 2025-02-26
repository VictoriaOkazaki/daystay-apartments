import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json(); // Parse JSON body
  const { name, roomsCount } = body; // Extract fields

  console.log("Add new flat", name, roomsCount);

  return NextResponse.json({ message: "Successfully added!" }, { status: 200 });
}
