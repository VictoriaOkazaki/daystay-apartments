import clsx from "clsx";

export default function BurgerBtn({
  isBurgerOpen,
  setIsBurgerOpen,
}: {
  isBurgerOpen: boolean;
  setIsBurgerOpen: (newVal: boolean) => void;
}) {
  return (
    <button
      onClick={() => setIsBurgerOpen(!isBurgerOpen)}
      className="flex flex-col gap-y-3 items-end z-40"
    >
      <div
        className={clsx(
          "w-[10.3vw] h-[0.5px] bg-text transition-all duration-300",
          isBurgerOpen && "rotate-45 translate-y-[5px]"
        )}
      ></div>
      <div
        className={clsx(
          "w-[10.3vw] h-[0.5px] bg-text transition-all duration-300",
          isBurgerOpen && "-rotate-45 -translate-y-[7px]"
        )}
      ></div>
      <div
        className={clsx(
          "w-[6.8vw] h-[0.5px] bg-text transition-all duration-300",
          isBurgerOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
        )}
      ></div>
    </button>
  );
}
