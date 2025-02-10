"use client";

import MyImage from "../my-image";
import { useRouter } from "next/navigation";
import { FlatDetails } from "./types";
import { roomCountNaming, sleepCountNaming } from "@/app/utils/lang-rules";

export default function FlatCard({ flat }: { flat: FlatDetails }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/flats-page/${flat.id}`);
  };
  return (
    <button
      onClick={handleCardClick}
      className="relative flex flex-col text-left rounded-radius overflow-hidden bg-bg"
    >
      <div
        className="absolute text-acsent font-prata text-3xl bg-bg2 bg-opacity-70 
      rounded-[1vw] z-10 w-[31%] text-center p-[0.4vw] right-0"
      >
        {flat.price} AZN
      </div>

      <MyImage
        src={flat.gallery[0]}
        alt={flat.name}
        width="100%"
        aspectRatio="3/2"
      />
      <h3 className="font-prata text-xl my-[1.5vh] w-[90%] px-[5%]">
        {flat.name}
      </h3>
      <ul className="grid grid-cols-2 bg-mainBg rounded-radius py-[1vh] px-[5%] w-full">
        <li className="text-xl">{flat.area} м2</li>
        <li className="text-xl">
          {flat.floor}/{flat.maxFloor} этаж
        </li>
        <li className="text-xl">
          {flat.roomCount} {roomCountNaming(flat.roomCount)}
        </li>
        <li className="text-xl">
          {flat.sleepingCount} {sleepCountNaming(flat.sleepingCount)}
        </li>
      </ul>
    </button>
  );
}
