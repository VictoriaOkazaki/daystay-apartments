import { FlatDetails } from "@/app/[locale]/flats/types";
import { calcDayCount, calcTotalPrice } from "@/app/[locale]/lib/booking";
import {
  daysCountNaming,
  roomCountNaming,
} from "@/app/[locale]/utils/lang-rules";
import { useLocale, useTranslations } from "next-intl";
import { DateRange } from "react-day-picker";

export default function BookFlatInfo({
  flat,
  dateRange,
}: {
  flat: FlatDetails;
  dateRange: DateRange | undefined;
}) {
  const dayCount =
    dateRange?.from && dateRange?.to
      ? calcDayCount(dateRange.from, dateRange.to)
      : "";

  const t = useTranslations("BookingPage");
  const locale = useLocale() as "en" | "ru";
  const flatTexts = flat[locale];

  return (
    <div
      className="flex flex-col gap-[1.5vh] mt-section p-[3vw] lg:p-[2.1vw] bg-bg2 w-fit
    rounded-radius-mob lg:rounded-radius"
    >
      <h2 className="font-prata text-2xl lg:text-3xl">{flatTexts.name}</h2>
      <span className="text-sm lg:text-xl">{flatTexts.adress}</span>
      <span className="text-sm lg:text-xl">
        {flat.roomCount} {roomCountNaming(flat.roomCount, locale)}
      </span>
      <span className="text-base lg:text-2xl">
        {t("cost-per")} {dayCount} {daysCountNaming(`${dayCount}`, locale)}{" "}
        <span className="text-acsent font-prata text-xl lg:text-3xl">
          — {calcTotalPrice(flat, +dayCount)} AZN
        </span>
      </span>
    </div>
  );
}
