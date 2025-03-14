import DropdownList from "@/app/[locale]/dropdown-list";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function BookFormTimeSlots({
  selectedTime,
  setSelectedTime,
}: {
  selectedTime: string;
  setSelectedTime: (newVal: string) => void;
}) {
  const timeVariants = [
    "00:00 — 01:00",
    "01:00 — 02:00",
    "02:00 — 03:00",
    "03:00 — 04:00",
    "04:00 — 05:00",
    "05:00 — 06:00",
    "06:00 — 07:00",
    "07:00 — 08:00",
    "08:00 — 09:00",
    "09:00 — 10:00",
    "10:00 — 11:00",
    "11:00 — 12:00",
    "12:00 — 13:00",
    "13:00 — 14:00",
    "14:00 — 15:00",
    "15:00 — 16:00",
    "16:00 — 17:00",
    "17:00 — 18:00",
    "18:00 — 19:00",
    "19:00 — 20:00",
    "20:00 — 21:00",
    "21:00 — 22:00",
    "22:00 — 23:00",
    "23:00 — 00:00",
  ];
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (v: string) => {
    setIsOpen(false);
    setSelectedTime(v);
  };

  const t = useTranslations("BookingPage");

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="mt-inside-mob lg:mt-inside text-base lg:text-xl bg-bg rounded-radius-mob lg:rounded-radius
        px-[4vw] py-[2vw] lg:px-[2vw] lg:py-[1vw]"
      >
        {t("choose-time")}
      </button>
      {!isOpen && !selectedTime && (
        <div className="mt-2 lg:mt-4 text-sm lg:text-lg text-acsent">
          {t("available")}
        </div>
      )}
      {isOpen && (
        <DropdownList
          className="w-fit grid grid-cols-3 lg:gap-[0.5vw]"
          choice={selectedTime}
          onClick={handleMenuItemClick}
          variants={timeVariants}
        />
      )}
      {selectedTime && (
        <div className="mt-4 lg:mt-8 text-lg lg:text-2xl">
          {t("selected-time")}:{" "}
          <span className="text-acsent font-prata">{selectedTime}</span>
        </div>
      )}
    </div>
  );
}
