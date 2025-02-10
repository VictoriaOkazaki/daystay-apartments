"use client";
import Services from "./services/services";
import Advantage from "./advantage/advantage";
import Faq from "./faq/faq";
import FlatsHome from "./flats/flats-home";
import Gallery from "./gallery/gallery";
import Header from "./header/header";
import Hero from "./hero/hero";
import Contacts from "./contacts/contacts";
import Footer from "./footer/footer";

export default function Home() {
  return (
    <div className="p-[3.13vw] pb-0">
      <Header />
      <Hero />
      <Advantage />
      <FlatsHome />
      <Services />
      <Gallery />
      <Faq />
      <Contacts />
      <Footer />
    </div>
  );
}
