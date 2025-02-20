import MyImage from "../my-image";

export default function HeroAdvantage({ text }: { text: string }) {
  return (
    <div className="flex gap-[2.5vw] lg:gap-[1.25vw] items-center lg:items-start">
      <div className="w-[2.5vw] lg:w-[1.25vw]">
        <MyImage
          width="100%"
          aspectRatio="1"
          src="/images/plus-red.svg"
          alt="plus"
        />
      </div>
      <span className="leading-8 lg:w-[23.3vw] text-xl lg:text-3xl">
        {text}
      </span>
    </div>
  );
}
