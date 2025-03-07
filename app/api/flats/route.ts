import { NextRequest, NextResponse } from "next/server";
import { db } from "../firebase";

export async function POST(req: NextRequest) {
  const body = await req.json(); // Parse JSON body
  const { name, roomsCount } = body; // Extract fields

  console.log("Add new flat", name, roomsCount);

  return NextResponse.json({ message: "Successfully added!" }, { status: 200 });
}

export async function GET() {
  const flatsRef = db.collection("flats");
  const snapshot = await flatsRef.get();
  const flats = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return NextResponse.json(flats, { status: 200 });
}
