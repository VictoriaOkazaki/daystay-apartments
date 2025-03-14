import { NextRequest, NextResponse } from "next/server";
import { db } from "../firebase";
import { Booking, BookingWithoutId } from "@/types/booking";

export async function POST(req: NextRequest) {
  const body = await req.json(); // Parse JSON body
  const { flatId, dateFrom, dateTo, name, phone, email, time, comment } = body; // Extract fields

  const booking: BookingWithoutId = {
    flatId,
    dateFrom,
    dateTo,
    name,
    phone,
    email,
    time,
    comment,
    status: "unpaid",
  };

  console.log("Add new booking", booking);

  const bookingsRef = db.collection("bookings");
  const docRef = await bookingsRef.add(booking);

  return NextResponse.json({ bookingId: docRef.id }, { status: 200 });
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const bookingId = url.searchParams.get("id");

  const bookingsRef = db.collection("bookings");

  if (bookingId !== null) {
    const docRef = bookingsRef.doc(bookingId);
    const doc = await docRef.get();
    const booking: Booking = {
      id: doc.id,
      ...(doc.data() as BookingWithoutId),
    };

    return NextResponse.json(booking, { status: 200 });
  }

  // Get the current date in ISO format (set to midnight to ignore time)
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Set the time to midnight to only compare the date part
  const currentDateISO = currentDate.toISOString(); // Convert to ISO string format

  // Получить только оплаченные
  const snapshot = await bookingsRef
    .where("status", "==", "paid")
    .where("dateFrom", ">=", currentDateISO)
    .get();
  const bookings: Booking[] = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as BookingWithoutId),
  }));

  return NextResponse.json(bookings, { status: 200 });
}

export async function PUT(request: NextResponse) {
  const url = new URL(request.url);
  const bookingId = url.searchParams.get("id");

  const bookingsRef = db.collection("bookings");

  if (bookingId === null) {
    return NextResponse.json({ message: "Not found" }, { status: 400 });
  }

  const bookingsDoc = bookingsRef.doc(bookingId);

  await bookingsDoc.update({ status: "paid" });

  return NextResponse.json({ message: "Successfully paid!" }, { status: 200 });
}
