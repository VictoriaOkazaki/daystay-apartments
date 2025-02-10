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
        `self-start px-[3.13vw] py-[2.78vh] rounded-radius bg-acsent font-prata text-2xl text-mainBg 
      hover:scale-105 transition ease-in-out`,
        className
      )}
    >
      {children}
    </button>
  );
}
