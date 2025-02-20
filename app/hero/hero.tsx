"use client";
import MyImage from "../my-image";
import HeroVertical from "./hero-vertical";
import HeroOffer from "./hero-offer";
import HeroAdvantageList from "./hero-advantage-list";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex relative 
     mt-[1.85vh] lg:mt-[6.3vh] flex-col lg:flex-row lg:pr-0"
    >
      <div
        className="flex bg-bg2 
        rounded-radiusMob lg:rounded-radius
      h-[60vh] sm:h-[80vh] lg:h-fit p-[4.27vw] lg:p-[2.08vw] w-full lg:w-[60%]"
      >
        <HeroVertical />
        <HeroOffer />
      </div>
      <div className="w-full lg:w-[40%] h-[44vh] sm:h-[60vh] lg:h-auto">
        <MyImage
          height="100%"
          src="/images/home-img.png"
          alt="torgovaya"
          className="rounded-radiusMob lg:rounded-radius"
          priority={true}
        />
      </div>
      <HeroAdvantageList />
    </section>
  );
}
