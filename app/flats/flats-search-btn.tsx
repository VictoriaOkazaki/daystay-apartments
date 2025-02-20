"use client";

import clsx from "clsx";
import { ReactNode, useState } from "react";

export default function FlatsCircleButton({
  handleClick,
  children,
  renderChildIcon,
}: {
  handleClick: () => void;
  children: ReactNode;
  renderChildIcon: (isHovered: boolean) => ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <button
      className={clsx(
        "flex items-center font-prata text-xl lg:text-2xl transition ease-in",
        isHovered && "text-acsent"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      <div
        className="bg-acsent2 ml-[2.5vw] lg:ml-[1vw] p-[2.5vw] lg:p-[1vw]
        w-[10.3vw] h-[10.3vw] lg:w-[3.8vw] lg:h-[3.8vw] flex items-center justify-center rounded-full"
      >
        {renderChildIcon(isHovered)}
      </div>
    </button>
  );
}
