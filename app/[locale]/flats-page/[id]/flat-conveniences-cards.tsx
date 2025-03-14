import { useTranslations } from "next-intl";
import FlatConvenience from "./flat-convenience";
import { FlatDetails } from "@/app/[locale]/flats/types";

export default function FlatConveniencesCards({ flat }: { flat: FlatDetails }) {
  const mainConveniences = flat.conveniences.main;
  const kitchenConveniences = flat.conveniences.kitchen;
  const toiletConveniences = flat.conveniences.toilet;

  const t = useTranslations("FlatPage");

  return (
    <>
      <ul className="order-2 lg:order-1 bg-bg rounded-radius-mob lg:rounded-radius p-[3.4vw] lg:p-[1.04vw] w-[76vw] lg:w-auto">
        <h4 className="font-prata text-base lg:text-2xl mb-[2.2vh] ml-[9.8vw] lg:ml-[1.45vw]">
          {t("main")}
        </h4>
        <FlatConvenience has={mainConveniences.hasLift}>
          {t("lift")}
        </FlatConvenience>
        <FlatConvenience has={mainConveniences.hasParking}>
          {t("parking")}
        </FlatConvenience>
        <FlatConvenience has={mainConveniences.hasConditioner}>
          {t("conditioner")}
        </FlatConvenience>
        <FlatConvenience has={mainConveniences.hasTV}>
          {t("tv")}
        </FlatConvenience>
        <FlatConvenience has={mainConveniences.hasWiFi}>wifi</FlatConvenience>
        <FlatConvenience has={mainConveniences.hasTextile}>
          {t("textile")}
        </FlatConvenience>
        <FlatConvenience has={mainConveniences.hasLaundry}>
          {t("washing-ma")}
        </FlatConvenience>
        <FlatConvenience has={mainConveniences.hasIron}>
          {t("iron")}
        </FlatConvenience>
      </ul>
      <ul
        className="order-3 lg:order-2 bg-bg rounded-radius-mob lg:rounded-radius p-[3.4vw] lg:p-[1.04vw] 
      lg:place-self-end w-[76vw] lg:w-auto"
      >
        <h4 className="font-prata text-base lg:text-2xl mb-[2.2vh] ml-[9.8vw] lg:ml-[1.45vw]">
          {t("kitchen")}
        </h4>
        <FlatConvenience has={kitchenConveniences.hasKettle}>
          {t("kettle")}
        </FlatConvenience>
        <FlatConvenience has={kitchenConveniences.hasFridge}>
          {t("fridge")}
        </FlatConvenience>
        <FlatConvenience has={kitchenConveniences.hasGasStove}>
          {t("gas")}
        </FlatConvenience>
        <FlatConvenience has={kitchenConveniences.hasMicrowave}>
          {t("microwave")}
        </FlatConvenience>
        <FlatConvenience has={kitchenConveniences.hasTableWare}>
          {t("dishes")}
        </FlatConvenience>
      </ul>
      <ul
        className="order-4 lg:order-3 bg-bg rounded-radius-mob lg:rounded-radius p-[3.4vw] lg:p-[1.04vw] 
      lg:place-self-end w-[76vw] lg:w-auto"
      >
        <h4 className="font-prata text-base lg:text-2xl mb-[2.2vh] ml-[9.8vw] lg:ml-[1.45vw]">
          {t("bathroom")}
        </h4>
        <FlatConvenience has={toiletConveniences.hasHairDryer}>
          {t("hair-dryer")}
        </FlatConvenience>
        <FlatConvenience has={toiletConveniences.hasShower}>
          {t("shower")}
        </FlatConvenience>
        <FlatConvenience has={toiletConveniences.hasSlippers}>
          {t("slippers")}
        </FlatConvenience>
        <FlatConvenience has={toiletConveniences.hasToiletries}>
          {t("toiletries")}
        </FlatConvenience>
      </ul>
    </>
  );
}
