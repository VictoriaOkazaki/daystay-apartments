"use client";
import { useState } from "react";
import PhoneIcon from "./icons/phone-icon";

export default function Phone({ phone }: { phone: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="group flex items-center justify-start"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <PhoneIcon isHovered={isHovered} />
      <a
        className="font-prata text-xl pr-7 group-hover:text-acsent"
        href={`tel:${phone}`}
      >
        {phone}
      </a>
      <span className="text-xl leading-5 text-acsent">24/7</span>
    </div>
  );
}
