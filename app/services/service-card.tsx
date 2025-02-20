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
        `p-[4.2vw] lg:p-[2.1vw] h-[23vh] md:h-[36vh] lg:h-[18vw] rounded-radiusMob lg:rounded-radius 
        flex flex-col justify-between`,
        index % 2 === 0 ? "bg-yellow" : "bg-bg2"
      )}
    >
      <div className="">
        <div className="flex items-center">
          <MyImage
            className="w-4 h-4 lg:w-[1.3vw]"
            aspectRatio="1"
            src={
              index % 2 === 0
                ? "/images/plus-red.svg"
                : "/images/plus-yellow.svg"
            }
            alt="plus"
          />
          <h3 className="ml-[1.7vw] lg:ml-[0.8vw] text-xl lg:text-3xl font-prata">
            {title}
          </h3>
        </div>
        <div
          className="h-[0.5px] w-[calc(100% + 8.4vw)] lg:w-[calc(100% + 4.2vw)] bg-text 
          mt-[2vh] lg:mt-[2vh] m-[-4.2vw] lg:m-[-2.1vw]"
        ></div>
      </div>
      <p className="text-base lg:text-2xl">{text}</p>
    </li>
  );
}
