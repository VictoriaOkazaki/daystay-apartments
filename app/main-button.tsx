import clsx from "clsx";
import { ReactNode } from "react";

export default function MainButton({
  children,
  onClick,
  type,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        `self-start bg-acsent font-prata text-main-bg text-left
      hover:scale-105 transition ease-in-out px-[6vw] py-[3vw] lg:px-[3.13vw] lg:py-[1.57vw]
      rounded-radius-mob lg:rounded-radius text-base lg:text-2xl`,
        className
      )}
    >
      {children}
    </button>
  );
}
