"use client";
import { flats } from "@/app/[locale]/flats/flats-data";
import { DatePickerWithRange } from "./date-picker-with-range";
import { useSearchParams } from "next/navigation";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

import BookFlatInfo from "./book-flat-info";
import { useState } from "react";
import BookForm, { UserData } from "./book-form";
import MainButton from "@/app/[locale]/main-button";
import Logo from "@/app/[locale]/logo";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function BookingPage() {
  const flat = useFlat();

  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  const [userData, setUserData] = useState<UserData>({
    name: "",
    phone: "",
    email: "",
    time: "",
    note: "",
  });

  const [error, setError] = useState(false);

  const router = useRouter();

  const handleButtonClick = () => {
    if (
      userData.name === "" ||
      userData.phone === "" ||
      userData.email === "" ||
      userData.time === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    router.push(
      `/payment?flatId=${
        flat?.id
      }&dateFrom=${dateRange?.from?.toISOString()}&dateTo=${dateRange?.to?.toISOString()}`
    );
    console.log("form data submitted", flat, dateRange, userData);
  };

  const t = useTranslations("BookingPage");

  return (
    <section className="p-[4.27vw] lg:p-[3.13vw] pb-0">
      <Logo className="absolute top-[4.27vw] right-[4.27vw] lg:top-[3.13vw] lg:right-[3.13vw]" />
      <h1 className="font-prata text-3xl lg:text-4xl w-0.5 lg:w-full">
        {t("title")}
      </h1>
      {flat && <BookFlatInfo flat={flat} dateRange={dateRange} />}
      <h2 className="mt-section text-xl lg:text-2xl">{t("choose-date")}</h2>
      <DatePickerWithRange
        date={dateRange}
        setDate={(newVal) => setDateRange(newVal)}
      />
      <BookForm userData={userData} setUserData={setUserData} />
      {error && (
        <div className="text-lg lg:text-2xl text-acsent mt-[2.5vh] lg:mt-[3.7vh]">
          {t("form-error")}: {userData.name === "" && `${t("name")},`}
          {userData.phone === "" && ` ${t("phone")},`}
          {userData.email === "" && " Email,"}
          {userData.time === "" && ` ${t("arrive-time")}`}
        </div>
      )}
      <MainButton
        onClick={handleButtonClick}
        className="mt-inside-mob lg:mt-inside"
        type="submit"
      >
        {t("to-payment-btn")}
      </MainButton>
    </section>
  );
}

function useFlat() {
  const searchParams = useSearchParams();
  const flatId = searchParams.get("flatId");

  return flats.find((el) => el.id === flatId);
}
