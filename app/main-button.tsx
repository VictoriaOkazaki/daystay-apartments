import clsx from "clsx";

export default function MainButton({
  children,
  onClick,
  type,
  className,
}: {
  children: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        `self-start bg-acsent font-prata text-mainBg 
      hover:scale-105 transition ease-in-out px-[8.55vw] py-[4.28vw] lg:px-[3.13vw] lg:py-[1.57vw]
      rounded-radiusMob lg:rounded-radius text-base lg:text-2xl`,
        className
      )}
    >
      {children}
    </button>
  );
}
