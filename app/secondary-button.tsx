import clsx from "clsx";
import { ReactNode } from "react";

export default function SecondaryButton({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `bg-acsent2 rounded-radius h-[16%] py-[1.56vw] px-[3.13vw] text-2xl font-prata
      flex items-center justify-around
  hover:scale-105 transition ease-in-out`,
        className
      )}
    >
      {children}
    </button>
  );
}
