import SocialLinks from "../social-links";

export default function HeroVertical() {
  return (
    <div className="flex flex-col items-center justify-between w-fit">
      <div
        style={{
          writingMode: "vertical-lr",
          textOrientation: "mixed",
        }}
        className="text-xl w-fit rotate-180"
      >
        Мы в соцсетях
      </div>
      <div className="h-[16.57vh] w-[1px] my-[2.96vh] bg-text"></div>
      <SocialLinks margin="mb-[2.96vh]" />
    </div>
  );
}
