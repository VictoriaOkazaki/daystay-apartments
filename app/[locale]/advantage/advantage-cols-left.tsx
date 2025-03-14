import { useTranslations } from "next-intl";
import AdvLeftCard from "./advantage-left-card";

export function AdvColsLeft() {
  const t = useTranslations("HomePage.advantages");
  return (
    <div className="grid gap-5 lg:gap-[1.8vh] grid-cols-1 lg:grid-cols-2 lg:col-span-2">
      <AdvLeftCard
        spanCol="lg:col-span-2"
        flexCol="lg:flex-row"
        textWidth="w-full lg:w-[65%]"
        imageHeight="30vh"
        imageRatio="379/325"
        imageSrc="/images/advantages/adv-1.png"
        imageAlt="cafes"
        title={t("card1Title")}
        text={t("card1Text")}
      />
      <AdvLeftCard
        flexCol="flex-col"
        textWidth="w-full"
        imageHeight="26vh"
        imageRatio="344/285"
        imageSrc="/images/advantages/adv-2.png"
        imageAlt="torgovaya"
        title={t("card2Title")}
        text={t("card2Text")}
      />
      <AdvLeftCard
        flexCol="flex-col"
        textWidth="w-full"
        imageWidth="100%"
        imageRatio="547/214"
        imageSrc="/images/advantages/adv-3.png"
        imageAlt="sweets"
        title={t("card3Title")}
        text={t("card3Text")}
      />
    </div>
  );
}
