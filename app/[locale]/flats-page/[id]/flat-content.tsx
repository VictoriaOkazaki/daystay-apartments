"use client";

import { FlatDetails } from "@/app/[locale]/flats/types";
import FlatGallery from "./flat-gallery";
import FlatConveniencesCards from "./flat-conveniences-cards";
import FlatBook from "./flat-book";
import SecondaryButton from "@/app/[locale]/secondary-button";
import { useRouter } from "@/i18n/navigation";
import { v4 as uuidv4 } from "uuid";

import { LatLngExpression } from "leaflet";
import dynamic from "next/dynamic";
import { useLayoutEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
const Map = dynamic(() => import("@/app/[locale]/map"), { ssr: false });

export default function FlatContent({ flat }: { flat: FlatDetails }) {
  const router = useRouter();
  const handleOthersClick = () => {
    router.push("/flats-page");
  };

  const center: LatLngExpression = [flat.longitude, flat.latitude];

  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth <= 540);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const t = useTranslations("FlatPage");
  const locale = useLocale() as "en" | "ru";
  const flatTexts = flat[locale];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-inside-mob lg:mt-inside gap-[2.5vh] lg:gap-[4.17vw]">
        <FlatGallery flat={flat} />
        <div className="flex flex-col gap-[2.5vh] lg:gap-[3.7vh]">
          <p className="text-base lg:text-2xl order-2 lg:order-1">
            {flatTexts.description}
          </p>
          <div
            className="order-1 lg:order-2 bg-yellow rounded-[4.3vw] lg:rounded-radius 
          p-[3.4vw] lg:p-[1.04vw] flex flex-col gap-[1.5vh] lg:gap-[2.2vh] w-full lg:w-fit"
          >
            <span className="font-prata text-base lg:text-2xl">
              {t("sleeping-desc")}: {flat.sleepingCount}
            </span>
            <span className="text-sm lg:text-xl">
              {flatTexts.sleepCountDetails}
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-y-[2.5vh] lg:gap-[1.04vw] mt-inside-mob lg:mt-inside">
        <FlatConveniencesCards flat={flat} />
        <FlatBook flat={flat} />
      </div>
      <div className="mt-inside-mob lg:mt-inside">
        <span className="text-base lg:text-2xl">{flatTexts.adress}</span>
        <div
          className="w-full lg:w-[60vw] h-[40vh] lg:h-[53vh] rounded-radius-mob 
        lg:rounded-radius overflow-hidden mt-[2.5vh] lg:mt-[3.7vh]"
        >
          <Map
            key={uuidv4()}
            centerLatLng={center}
            adress={flatTexts.adress}
            markerSrc="/images/pin.svg"
            vw={isMobile ? 0.1 : 0.04}
          />
        </div>
      </div>
      <SecondaryButton onClick={handleOthersClick} className="mt-inside">
        {t("others-btn")}
      </SecondaryButton>
    </>
  );
}
