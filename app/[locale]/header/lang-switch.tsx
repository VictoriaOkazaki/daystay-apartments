"use client";

import { usePathname, redirect } from "@/i18n/navigation";
import { useState } from "react";
import clsx from "clsx";
import { useLocale } from "next-intl";

const locales = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
];

export default function LangSwitch() {
  const pathname = usePathname();

  const changeLocale = (locale: string) => {
    redirect({ locale, href: { pathname } });
  };

  const [isOpen, setIsOpen] = useState(false);

  const locale = useLocale();
  const [choice, setChoice] = useState(locale);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const handleLangClick = (v: string) => {
    setIsOpen(false);
    changeLocale(v);
    setChoice(v);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleButtonClick}
        className="px-2 py-0.5 lg:px-3 lg:py-1 tex-base lg:text-xl rounded-lg border border-acsent2"
      >
        {choice}
        {isOpen && (
          <ul className="absolute bg-yellow rounded-2xl overflow-hidden mt-[1.1vh] lg:mt-[2.2vh] z-10">
            {locales.map(({ code, label }) => (
              <li
                className={clsx(
                  "hover:bg-red text-base lg:text-2xl px-4 py-2 cursor-pointer",
                  code === choice ? "bg-red" : ""
                )}
                key={code}
                onClick={() => handleLangClick(code)}
              >
                {label}
              </li>
            ))}
          </ul>
        )}
      </button>
    </div>
  );
}
