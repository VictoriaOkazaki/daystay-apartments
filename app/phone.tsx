"use client";
import { useState } from "react";
import PhoneIcon from "./icons/phone-icon";

export default function Phone({ phone }: { phone: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="flex items-center w-fit justify-between"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <PhoneIcon isHovered={isHovered} />
      <a
        className="font-prata hover:text-acsent
        text-base lg:text-xl pr-2 lg:pr-7"
        href={`tel:${phone}`}
      >
        {phone}
      </a>
      <span className="leading-5 text-acsent text-base lg:text-xl">24/7</span>
    </div>
  );
}
