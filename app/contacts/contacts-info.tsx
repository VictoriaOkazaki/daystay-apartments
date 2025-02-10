"use client";

import MyImage from "../my-image";
import ContactsInfoBox from "./contacts-info-box";

import { LatLngExpression } from "leaflet";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/app/map"), { ssr: false });

export default function ContactsInfo() {
  const center: LatLngExpression = [40.3715436442641, 49.84208935288282];

  return (
    <div className="mt-inside flex gap-[1.3vw] relative">
      <MyImage
        width="32%"
        aspectRatio="581 / 652"
        src="/images/contact/cont-3.png"
        alt="company banner"
      />
      <div className="flex flex-col justify-between items-start grow">
        <a
          href="https://maps.app.goo.gl/uvCadzRVYSGmd38v6"
          className="text-2xl underline"
        >
          улица Узеира Гаджибекова, дом 7, квартира 16/26 (вход с улицы)
        </a>
        <span className="text-2xl">
          рядом с Baku Book Center и магазином Olivia, напротив супермаркета
          Bravo и банка ATB
        </span>
        <Map
          centerLatLng={center}
          adress="улица Узеира Гаджибекова, дом 7"
          markerSrc="/images/logo-pin.svg"
          vw={0.05}
        />
      </div>
      <ContactsInfoBox />
    </div>
  );
}
