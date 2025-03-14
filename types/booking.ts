export type Booking = {
  id: string;
  flatId: string;
  dateFrom: string;
  dateTo: string;
  name: string;
  phone: string;
  email: string;
  time: string;
  comment: string;
  status: "unpaid" | "paid";
};

export type BookingWithoutId = Omit<Booking, "id">;
