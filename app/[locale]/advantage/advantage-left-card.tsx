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
        `flex relative justify-between bg-yellow 
        flex-col  rounded-radius-mob lg:rounded-radius p-[4.27vw] lg:p-[2.08vw]`,
        spanCol,
        flexCol
      )}
    >
      <div className={textWidth}>
        <h3 className="text-xl lg:text-3xl font-prata">{title}</h3>
        <p className="text-base lg:text-xl mt-4 lg:mt-8">{text}</p>
      </div>

      <MyImage
        className="self-end mt-6 lg:mt-0"
        width={imageWidth}
        height={imageHeight}
        aspectRatio={imageRatio}
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
  );
}
