import { FlatDetails } from "@/app/[locale]/flats/types";
import { roomCountNaming } from "@/app/[locale]/utils/lang-rules";
import { useLocale, useTranslations } from "next-intl";

export default function FlatTop({ flat }: { flat: FlatDetails }) {
  const t = useTranslations("HomePage.flats");
  const t2 = useTranslations("FlatPage");
  const locale = useLocale() as "en" | "ru";
  const flatTexts = flat[locale];

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="bg-bg2 rounded-radius-mob lg:rounded-radius p-[3.4vw] lg:p-[1.04vw] w-full lg:w-fit">
        <h1 className="font-prata text-xl lg:text-3xl">{flatTexts.name}</h1>
        <ul className="mt-[3vh] lg:mt-[2.2vh] grid grid-cols-2 gap-y-[2vh] lg:flex lg:gap-[7%]">
          <span className="text-base lg:text-2xl">{flatTexts.adress}</span>
          <span className="text-base lg:text-2xl text-end lg:text-start">
            {t("floor")} {flat.floor}/{flat.maxFloor}
          </span>
          <span className="text-base lg:text-2xl">
            {flat.area}
            {t("area")}
          </span>
          <span className="text-base lg:text-2xl text-end lg:text-start">
            {flat.roomCount} {roomCountNaming(flat.roomCount, locale)}
          </span>
        </ul>
      </div>
      <div className="bg-yellow rounded-[4.3vw] lg:rounded-radius p-[3.4vw] lg:p-[1.04vw] w-fit mt-[2.5vh] lg:mt-0">
        <span className="font-prata text-base lg:text-2xl">{t2("view")}</span>
        <div className="text-sm lg:text-xl mt-[1.5vh] lg:mt-[2.2vh]">
          {flatTexts.viewFromWindow}
        </div>
      </div>
    </div>
  );
}
