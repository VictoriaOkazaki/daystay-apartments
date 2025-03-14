import MyImage from "@/app/[locale]/my-image";
import clsx from "clsx";

export default function FlatGalleryButton({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        `absolute top-[calc(50%-3.8vw)] lg:top-[calc(50%-0.63vw)] z-20 bg-bg bg-opacity-70 
        w-[6.8vw] h-[6.8vw] lg:w-[2.5vw] lg:h-[2.5vw] 
          flex justify-center items-center rounded-full`,
        className
      )}
    >
      <MyImage
        src="/images/slider-arrow.svg"
        alt="slider"
        className="w-[1.9vw] lg:w-[0.63vw]"
        aspectRatio="1 / 2"
      />
    </button>
  );
}
