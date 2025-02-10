import MyImage from "../my-image";

export default function HeroAdvantage({ text }: { text: string }) {
  return (
    <div className="flex gap-[1.25vw] items-start">
      <MyImage
        width="1.25vw"
        height="1.25vw"
        src="/images/plus-red.svg"
        alt="plus"
      />
      <span className="text-3xl leading-8 w-[23.3vw]">{text}</span>
    </div>
  );
}
