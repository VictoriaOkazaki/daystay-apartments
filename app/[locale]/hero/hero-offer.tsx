import MainButton from "../main-button";
import { scrollToFlatsSection } from "../flats/flats";
import { useTranslations } from "next-intl";

export default function HeroOffer() {
  const t = useTranslations("HomePage.hero");
  return (
    <div
      className="flex flex-col justify-between  
    ml-[9.3%] lg:ml-[7.7%] h-[66.7%] lg:h-auto space-y-[4vh] lg:space-y-0 lg:gap-[11vh]"
    >
      <span className="text-base lg:text-2xl">{t("span")}</span>
      <h1 className="text-3xl lg:text-6xl font-prata">
        {t("offerPart1")}{" "}
        <span className="font-marck-script">{t("offerPart2")}</span>
        <br></br>
        {t("offerPart3")}
      </h1>
      <MainButton onClick={scrollToFlatsSection}>{t("button")}</MainButton>
    </div>
  );
}
