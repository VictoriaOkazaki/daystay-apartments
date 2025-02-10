"use client";
import { AdvColsLeft } from "./advantage-cols-left";
import AdvColsRight from "./advantage-cols-right";

export default function Advantage() {
  return (
    <section id="adv" className="mt-[22vh]">
      <h2 className="w-[50vw] text-5xl leading-snug font-prata">
        Что вам даст проживание в&nbsp;самом сердце Баку
      </h2>
      <div className="grid grid-cols-3 gap-5 mt-inside">
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
