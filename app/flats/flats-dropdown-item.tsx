"use client";

import clsx from "clsx";
import { useState } from "react";
import MyImage from "../my-image";
import DropdownList from "../dropdown-list";

export default function FlatsDropDownItem({
  variants,
  variantTitle,
  choice,
  setChoice,
}: {
  variants: Array<string>;
  variantTitle: string;
  choice: string;
  setChoice: (newValue: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuItemClick = (v: string) => {
    setIsOpen(false);
    setChoice(v);
  };
  return (
    <div className="relative w-fit">
      <button
        className="text-xl lg:text-3xl w-full flex items-center"
        onClick={handleButtonClick}
      >
        {variantTitle}
        <MyImage
          aspectRatio="2/1"
          src="/images/arrow.svg"
          alt="arrow"
          className={clsx(
            "inline-block duration-300 ease-in w-[5.13vw] lg:w-[1.25vw] ml-[1.7vw] lg:ml-[0.6vw]",
            isOpen && "rotate-180 origin-left-top"
          )}
        />
      </button>
      {isOpen && (
        <DropdownList
          className="w-full"
          variants={variants}
          choice={choice}
          onClick={handleMenuItemClick}
        />
      )}
      {choice && (
        <div
          className="text-acsent font-prata text-2xl lg:text-3xl bg-acsent2 mt-[1.1vh] lg:mt-[2.2vh]
        w-[10.3vw] h-[10.3vw] lg:w-[3.8vw] lg:h-[3.8vw] flex items-center justify-center rounded-full"
        >
          {choice}
        </div>
      )}
    </div>
  );
}
