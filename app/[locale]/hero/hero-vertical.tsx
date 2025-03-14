import { useTranslations } from "next-intl";
import SocialLinks from "../social-links";

export default function HeroVertical() {
  const t = useTranslations("HomePage.hero");
  return (
    <div className="flex flex-col items-center gap-[3.4vw] lg:w-fit">
      <div
        style={{
          writingMode: "vertical-lr",
          textOrientation: "mixed",
        }}
        className="w-fit rotate-180 text-sm lg:text-xl "
      >
        {t("vertical")}
      </div>
      <div
        className=" w-[0.5px] bg-text
      h-[9.3vh] lg:h-[16.57vh] my-[2vh] lg:my-[2.96vh]"
      ></div>
      <SocialLinks margin="mb-[2.96vh]" />
    </div>
  );
}
