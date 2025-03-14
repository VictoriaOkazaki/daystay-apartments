"use client";
import { useTranslations } from "next-intl";
import { AdvColsLeft } from "./advantage-cols-left";
import AdvColsRight from "./advantage-cols-right";

export default function Advantage() {
  const t = useTranslations("HomePage.advantages");
  return (
    <section id="adv" className="mt-section lg:mt-[22vh]">
      <h2 className="leading-snug font-prata text-2xl lg:text-5xl w-[77vw] lg:w-[50vw]">
        {t("title")}
      </h2>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 mt-inside-mob lg:mt-inside">
        <AdvColsLeft />
        <AdvColsRight />
      </div>
    </section>
  );
}

export function scrollToAdvantageSection() {
  const elem = document.getElementById("adv");
  elem?.scrollIntoView({ behavior: "smooth" });
}
