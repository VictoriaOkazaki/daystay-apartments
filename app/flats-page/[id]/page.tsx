"use client";
import Footer from "@/app/footer/footer";
import Header from "@/app/header/header";
import { useParams } from "next/navigation";
import FlatTop from "./flat-top";
import FlatContent from "./flat-content";
import { flats } from "@/app/flats/flats-data";
import FlatError from "./flat-error";

export default function FlatDetailsPage() {
  const params = useParams();
  const flatId = params.id;
  if (!flatId) return <p>Loading...</p>;

  const flat = flats.find((elem) => elem.id === flatId);
  if (!flat) return <FlatError />;

  return (
    <div className="p-[3.13vw] pb-0">
      <Header />
      <section className="mt-section">
        <FlatTop flat={flat} />
        <FlatContent flat={flat} />
      </section>
      <Footer />
    </div>
  );
}
