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
        "flex items-center font-prata text-2xl transition ease-in",
        isHovered && "text-acsent"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      <div
        className="bg-acsent2 ml-[1vw] p-[1vw]
        w-[3.8vw] h-[3.8vw] flex items-center justify-center rounded-full"
      >
        {renderChildIcon(isHovered)}
      </div>
    </button>
  );
}
