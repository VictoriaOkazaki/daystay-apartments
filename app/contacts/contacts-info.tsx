"use client";

import MyImage from "../my-image";
import ContactsInfoBox from "./contacts-info-box";

import { LatLngExpression } from "leaflet";
import dynamic from "next/dynamic";
import { useLayoutEffect, useState } from "react";
const Map = dynamic(() => import("@/app/map"), { ssr: false });
import { v4 as uuidv4 } from "uuid";

export default function ContactsInfo() {
  const center: LatLngExpression = [40.3715436442641, 49.84208935288282];

  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth <= 540);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-inside-mob lg:mt-inside flex flex-col lg:flex-row gap-[1.3vw] relative">
      <MyImage
        className="w-full h-[32vh] rounded-radius-mob lg:rounded-none lg:w-1/3 lg:h-auto order-2 lg:order-1"
        aspectRatio="581 / 652"
        src="/images/contact/cont-3.png"
        alt="company banner"
      />
      <div className="flex flex-col justify-between items-start grow lg:order-1 h-[48vh] lg:h-auto">
        <a
          href="https://maps.app.goo.gl/uvCadzRVYSGmd38v6"
          className="text-base lg:text-2xl underline"
        >
          улица Узеира Гаджибекова, дом 7, квартира 16/26 (вход с улицы)
        </a>
        <span className="text-base lg:text-2xl my-[2.3vh] lg:my-3">
          рядом с Baku Book Center и магазином Olivia, напротив супермаркета
          Bravo и банка ATB
        </span>
        <Map
          key={uuidv4()}
          centerLatLng={center}
          adress="улица Узеира Гаджибекова, дом 7"
          markerSrc="/images/logo-pin.svg"
          vw={isMobile ? 0.1 : 0.05}
        />
      </div>
      <ContactsInfoBox />
    </div>
  );
}
