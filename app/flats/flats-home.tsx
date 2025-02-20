"use client";

import SecondaryButton from "../secondary-button";
import Flats from "./flats";
import { useRouter } from "next/navigation";

const sliceStart = 0;
const sliceEnd = 9;

export default function FlatsHome() {
  const router = useRouter();

  const handleAllFlatsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/flats-page");
  };
  return (
    <Flats sliceStart={sliceStart} sliceEnd={sliceEnd}>
      <SecondaryButton
        className="mt-insideMob lg:mt-inside self-end"
        onClick={handleAllFlatsClick}
      >
        Все варианты
      </SecondaryButton>
    </Flats>
  );
}
