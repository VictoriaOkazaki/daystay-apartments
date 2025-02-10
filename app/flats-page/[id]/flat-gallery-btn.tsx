import MyImage from "@/app/my-image";
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
        `absolute top-[calc(50%-0.63vw)] z-20 bg-bg bg-opacity-70 w-[2.5vw] h-[2.5vw] 
          flex justify-center items-center rounded-radius`,
        className
      )}
    >
      <MyImage
        src="/images/slider-arrow.svg"
        alt="previous"
        width="0.63vw"
        aspectRatio="1 / 2"
      />
    </button>
  );
}
