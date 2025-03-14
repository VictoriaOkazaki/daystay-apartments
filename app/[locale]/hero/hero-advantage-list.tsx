import { useTranslations } from "next-intl";
import HeroAdvantage from "./hero-advantage";

export default function HeroAdvantageList() {
  const t = useTranslations("HomePage.heroAdvantages");
  const advantages = [t("adv1"), t("adv2"), t("adv3"), t("adv4")];

  return (
    <div
      className="absolute grid bg-bg opacity-80 h-fit
      w-[79%] lg:w-fit
    right-0 top-[44vh] sm:top-[65vh] lg:right-[5.4%] lg:top-[78.8%]
    grid-cols-1 gap-y-[3.4vw] lg:grid-cols-2 lg:gap-x-[3.33vw] lg:gap-y-[5.19vh]
    rounded-radius-mob lg:rounded-radius p-[4.3vw] lg:p-[2.08vw]"
    >
      {advantages.map((item) => (
        <HeroAdvantage text={item} key={item} />
      ))}
    </div>
  );
}
