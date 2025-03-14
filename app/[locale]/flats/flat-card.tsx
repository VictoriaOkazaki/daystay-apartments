"use client";

import MyImage from "../my-image";
import { useRouter } from "@/i18n/navigation";
import { FlatDetails } from "./types";
import {
  roomCountNaming,
  sleepCountNaming,
} from "@/app/[locale]/utils/lang-rules";
import { useLocale, useTranslations } from "next-intl";

export default function FlatCard({ flat }: { flat: FlatDetails }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/flats-page/${flat.id}`);
  };

  const t = useTranslations("HomePage.flats");
  const locale = useLocale() as "en" | "ru";
  const flatTexts = flat[locale];
  return (
    <button
      onClick={handleCardClick}
      className="relative flex flex-col text-left rounded-radius-mob lg:rounded-radius overflow-hidden bg-bg"
    >
      <div
        className="absolute text-acsent font-prata text-2xl lg:text-3xl bg-bg2 bg-opacity-70 
      rounded-[4.3vw] lg:rounded-[1vw] z-10 w-1/4 lg:w-1/3 text-center p-[1.7vw] lg:p-[0.4vw] right-0"
      >
        {flat.price} AZN
      </div>

      <MyImage
        src={flat.gallery[0]}
        alt={flatTexts.name}
        width="100%"
        aspectRatio="3/2"
      />
      <h3 className="font-prata text-xl my-[1.5vh] w-full lg:w-[90%] px-[5%]">
        {flatTexts.name}
      </h3>
      <ul className="grid grid-cols-2 bg-main-bg rounded-radius py-[1vh] px-[5%] w-full">
        <li className="text-lg lg:text-xl">
          {flat.area} {t("area")}
        </li>
        <li className="text-lg lg:text-xl">
          {flat.floor}/{flat.maxFloor} {t("floor")}
        </li>
        <li className="text-lg lg:text-xl">
          {flat.roomCount} {roomCountNaming(flat.roomCount, locale)}
        </li>
        <li className="text-lg lg:text-xl">
          {flat.sleepingCount} {sleepCountNaming(flat.sleepingCount, locale)}
        </li>
      </ul>
    </button>
  );
}
