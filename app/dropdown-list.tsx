import clsx from "clsx";

export default function DropdownList({
  variants,
  onClick,
  choice,
  className,
}: {
  variants: Array<string>;
  onClick: (v: string) => void;
  choice: string;
  className: string;
}) {
  return (
    <ul
      className={clsx(
        "absolute bg-yellow rounded-2xl overflow-hidden mt-[1.1vh] lg:mt-[2.2vh] z-10",
        className
      )}
    >
      {variants.map((v, index) => (
        <li
          className={clsx(
            "hover:bg-red text-base lg:text-2xl px-4 py-2 cursor-pointer",
            index === variants.findIndex((item) => item === choice)
              ? "bg-red"
              : ""
          )}
          key={index}
          onClick={() => onClick(v)}
        >
          {v}
        </li>
      ))}
    </ul>
  );
}
