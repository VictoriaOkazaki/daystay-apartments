"use client";

import { useTranslations } from "next-intl";
import SecondaryButton from "../secondary-button";
import Flats from "./flats";
import { useRouter } from "@/i18n/navigation";

const sliceStart = 0;
const sliceEnd = 9;

export default function FlatsHome() {
  const router = useRouter();

  const handleAllFlatsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/flats-page");
  };

  const t = useTranslations("HomePage.flats");
  return (
    <Flats sliceStart={sliceStart} sliceEnd={sliceEnd}>
      <SecondaryButton
        className="mt-inside-mob lg:mt-inside self-end"
        onClick={handleAllFlatsClick}
      >
        {t("button")}
      </SecondaryButton>
    </Flats>
  );
}
