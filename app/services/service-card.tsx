import clsx from "clsx";
import MyImage from "../my-image";

export default function ServiceCard({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index: number;
}) {
  return (
    <li
      className={clsx(
        "p-[2.1vw] h-[18vw] rounded-radius flex flex-col justify-between",
        index % 2 === 0 ? "bg-yellow" : "bg-bg2"
      )}
    >
      <div className="">
        <div className="flex">
          <MyImage
            width="1.3vw"
            aspectRatio="1"
            src={
              index % 2 === 0
                ? "/images/plus-red.svg"
                : "/images/plus-yellow.svg"
            }
            alt="plus"
          />
          <h3 className="ml-[0.8vw] text-3xl font-prata">{title}</h3>
        </div>
        <div className="h-[0.5px] w-[calc(100% + 4.2vw)] bg-text mt-[2vh] m-[-2.1vw]"></div>
      </div>
      <p className="text-2xl">{text}</p>
    </li>
  );
}
