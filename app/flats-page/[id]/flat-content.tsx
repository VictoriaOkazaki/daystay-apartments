"use client";

import { FlatDetails } from "@/app/flats/types";
import FlatGallery from "./flat-gallery";
import FlatConveniencesCards from "./flat-conveniences-cards";
import FlatBook from "./flat-book";
import SecondaryButton from "@/app/secondary-button";
import { useRouter } from "next/navigation";

import { LatLngExpression } from "leaflet";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/app/map"), { ssr: false });

export default function FlatContent({ flat }: { flat: FlatDetails }) {
  const router = useRouter();
  const handleOthersClick = () => {
    router.push("/flats-page");
  };

  const center: LatLngExpression = [flat.longitude, flat.latitude];

  return (
    <>
      <div className="grid grid-cols-2 mt-inside gap-[4.17vw]">
        <FlatGallery flat={flat} />
        <div className="flex flex-col gap-[3.7vh]">
          <p className="text-2xl">{flat.description}</p>
          <div className="bg-yellow rounded-radius p-[1.04vw] flex flex-col gap-[2.2vh] w-fit">
            <span className="font-prata text-2xl">
              Спальные места: {flat.sleepingCount}
            </span>
            <span className="text-xl">{flat.sleepCountDetails}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-[1.04vw] mt-inside">
        <FlatConveniencesCards flat={flat} />
        <FlatBook flat={flat} />
      </div>
      <div className="mt-inside">
        <span className="text-2xl">{flat.adress}</span>
        <div className="w-[60vw] h-[53vh] rounded-radius overflow-hidden mt-[3.7vh]">
          <Map
            centerLatLng={center}
            adress={flat.adress}
            markerSrc="/images/pin.svg"
            vw={0.03}
          />
        </div>
      </div>
      <SecondaryButton onClick={handleOthersClick} className="mt-inside">
        Смотреть другие варианты
      </SecondaryButton>
    </>
  );
}
