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
        `w-fit bg-acsent2 py-5 px-10 lg:py-6 lg:px-12 text-base lg:text-2xl font-prata
      flex items-center justify-between
      rounded-radiusMob lg:rounded-radius
  hover:scale-105 transition ease-in-out`,
        className
      )}
    >
      {children}
    </button>
  );
}
