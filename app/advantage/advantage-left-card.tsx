import clsx from "clsx";
import MyImage from "../my-image";

export default function AdvLeftCard({
  flexCol,
  spanCol,
  textWidth,
  imageHeight,
  imageWidth,
  imageRatio,
  imageSrc,
  imageAlt,
  title,
  text,
}: {
  flexCol?: string;
  spanCol?: string;
  textWidth: string;
  imageHeight?: string;
  imageWidth?: string;
  imageRatio: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className={clsx(
        "flex relative justify-between bg-yellow rounded-radius p-[2.08vw]",
        spanCol,
        flexCol
      )}
    >
      <div className={textWidth}>
        <h3 className="text-3xl font-prata">{title}</h3>
        <p className="text-xl mt-8">{text}</p>
      </div>

      <MyImage
        className="self-end"
        width={imageWidth}
        height={imageHeight}
        aspectRatio={imageRatio}
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
  );
}
