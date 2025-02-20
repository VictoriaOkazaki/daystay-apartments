"use client";

import { useState } from "react";
import FaqAccordionItem from "./faq-accordion-item";
import { faqData } from "./faq-data";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="mt-section">
      <h2 className="font-prata text-2xl lg:text-5xl">
        Ответы на частые вопросы
      </h2>
      <div
        className="mt-insideMob lg:mt-inside grid grid-cols-1 lg:grid-cols-2 gap-[1.5vh] lg:gap-[1.3vw]"
        style={{ gridAutoRows: "min-content" }}
      >
        {faqData.map((faq, index) => (
          <FaqAccordionItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isActive={activeIndex === index}
            onClick={() => handleAccordionClick(index)}
          />
        ))}
      </div>
    </section>
  );
}

export function scrollToFaqSection() {
  const elem = document.getElementById("faq");
  elem?.scrollIntoView({ behavior: "smooth" });
}
