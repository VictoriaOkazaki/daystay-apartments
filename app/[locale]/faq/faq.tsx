"use client";

import { useState } from "react";
import FaqAccordionItem from "./faq-accordion-item";
import { faqDataRu } from "./faq-data-ru";
import { useLocale, useTranslations } from "next-intl";
import { faqDataEn } from "./faq-data-en";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const t = useTranslations("HomePage.faq");
  const locale = useLocale();
  let faqData;
  if (locale === "ru") {
    faqData = faqDataRu;
  } else if (locale === "en") {
    faqData = faqDataEn;
  } else {
    faqData = faqDataRu;
  }

  return (
    <section id="faq" className="mt-section">
      <h2 className="font-prata text-2xl lg:text-5xl">{t("title")}</h2>
      <div
        className="mt-inside-mob lg:mt-inside grid grid-cols-1 lg:grid-cols-2 gap-[1.5vh] lg:gap-[1.3vw]"
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
