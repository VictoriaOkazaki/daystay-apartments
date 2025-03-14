"use client";
import Footer from "@/app/[locale]/footer/footer";
import Header from "@/app/[locale]/header/header";
import { useParams } from "next/navigation";
import FlatTop from "./flat-top";
import FlatContent from "./flat-content";
import { flats } from "@/app/[locale]/flats/flats-data";
import FlatError from "./flat-error";

export default function FlatDetailsPage() {
  const params = useParams();
  const flatId = params.id;
  if (!flatId) return <p>Loading...</p>;

  const flat = flats.find((elem) => elem.id === flatId);
  if (!flat) return <FlatError />;

  return (
    <div className="p-[4.27vw] lg:p-[3.13vw] pb-0 lg:pb-0">
      <Header />
      <section className="mt-section">
        <FlatTop flat={flat} />
        <FlatContent flat={flat} />
      </section>
      <Footer />
    </div>
  );
}
