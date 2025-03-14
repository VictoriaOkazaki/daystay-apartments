"use client";

import FlatsCircleButton from "@/app/[locale]/flats/flats-search-btn";
import { FlatDetails } from "@/app/[locale]/flats/types";
import QuestionIcon from "@/app/[locale]/icons/question-icon";
import MainButton from "@/app/[locale]/main-button";
import PopupForm from "@/app/[locale]/popups/popup-form";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function FlatBook({ flat }: { flat: FlatDetails }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleBookClick = () => {
    router.push(`${pathname}/book?flatId=${flat.id}`);
  };

  const openPopup = () => {
    setShowPopup(true);
    setTimeout(() => setIsPopupOpen(true), 10);
  };

  const t = useTranslations("FlatPage");

  return (
    <>
      <div
        className="order-1 lg:order-4 flex flex-col mt-[1.2vh] lg:mt-0 
      gap-[2.3vh] lg:gap-[3vh] lg:place-self-end lg:col-start-6 mb-[5vh] lg:mb-0"
      >
        <div>
          <span className="font-prata text-xl lg:text-3xl mr-[0.8vw]">
            {flat.price} AZN
          </span>{" "}
          <span className="text-base lg:text-2xl">{t("per-day")}</span>
        </div>
        <MainButton onClick={handleBookClick}>{t("book-btn")}</MainButton>
        <FlatsCircleButton
          handleClick={openPopup}
          renderChildIcon={(isHovered: boolean) => (
            <QuestionIcon isHovered={isHovered} />
          )}
        >
          {t("question-btn")}
        </FlatsCircleButton>
      </div>
      {showPopup && (
        <PopupForm
          isOpen={isPopupOpen}
          setIsOpen={(newVal) => setIsPopupOpen(newVal)}
          setShowPopup={(newVal) => setShowPopup(newVal)}
        />
      )}
    </>
  );
}
