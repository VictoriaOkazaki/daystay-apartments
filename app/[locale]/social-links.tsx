"use client";
import { useState } from "react";
import AirbnbIcon from "./icons/airbnb-icon";
import FacebookIcon from "./icons/facebook-icon";
import InstagramIcon from "./icons/instagram-icon";
import WhatsappIcon from "./icons/whatsapp-icon";
import clsx from "clsx";

export default function SocialLinks({
  className,
  margin,
}: {
  className?: string;
  margin: string;
}) {
  const [hoveredList, setHoveredList] = useState([false, false, false, false]);

  const handleMouseEnter = (index: number) =>
    setHoveredList((prev) => {
      return prev.map((val, i) => {
        return index === i ? true : val;
      });
    });

  const handleMouseLeave = (index: number) =>
    setHoveredList((prev) => {
      return prev.map((val, i) => {
        return index === i ? false : val;
      });
    });

  const links = [
    {
      href: "https://web.whatsapp.com/",
      icon: <WhatsappIcon isHovered={hoveredList[1]} />,
      label: "Whatsapp",
    },
    {
      href: "https://facebook.com/",
      icon: <FacebookIcon isHovered={hoveredList[1]} />,
      label: "Facebook",
    },
    {
      href: "https://instagram.com/",
      icon: <InstagramIcon isHovered={hoveredList[2]} />,
      label: "Instagram",
    },
    {
      href: "https://airbnb.com/",
      icon: <AirbnbIcon isHovered={hoveredList[3]} />,
      label: "Airbnb",
    },
  ];

  return (
    <div className={clsx(className)}>
      {links.map((link, index) => (
        <div
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          key={index}
          className={clsx(
            "last:mb-0 last:mr-0 hover:scale-110 transition ease-in-out",
            margin
          )}
        >
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        </div>
      ))}
    </div>
  );
}
