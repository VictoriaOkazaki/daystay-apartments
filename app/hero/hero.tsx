"use client";
import MyImage from "../my-image";
import HeroVertical from "./hero-vertical";
import HeroOffer from "./hero-offer";
import HeroAdvantageList from "./hero-advantage-list";

export default function Hero() {
  return (
    <section id="hero" className="flex pr-0 mt-[6.3vh] relative">
      <div className="flex w-[60%] rounded-radius bg-bg2 p-[2.08vw]">
        <HeroVertical />
        <HeroOffer />
      </div>
      <div className="w-[40%]">
        <MyImage
          // width="100%"
          height="100%"
          src="/images/home-img.png"
          alt="torgovaya"
          className="rounded-radius"
          priority={true}
        />
      </div>
      <HeroAdvantageList />
    </section>
  );
}
