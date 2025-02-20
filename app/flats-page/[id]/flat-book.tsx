"use client";

import FlatsCircleButton from "@/app/flats/flats-search-btn";
import { FlatDetails } from "@/app/flats/types";
import QuestionIcon from "@/app/icons/question-icon";
import MainButton from "@/app/main-button";
import PopupForm from "@/app/popups/popup-form";
import { useState } from "react";

export default function FlatBook({ flat }: { flat: FlatDetails }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleBookClick = () => {};

  const openPopup = () => {
    setShowPopup(true);
    setTimeout(() => setIsPopupOpen(true), 10);
  };

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
          <span className="text-base lg:text-2xl">в сутки</span>
        </div>
        <MainButton onClick={handleBookClick}>Забронировать</MainButton>
        <FlatsCircleButton
          handleClick={openPopup}
          renderChildIcon={(isHovered: boolean) => (
            <QuestionIcon isHovered={isHovered} />
          )}
        >
          Задать вопрос
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

// TODO handleBookClick
