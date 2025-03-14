import { useTranslations } from "next-intl";
import FlatCard from "./flat-card";
import FlatsError from "./flats-error";
import { FlatDetails } from "./types";

export default function FlatsList({
  filteredFlats,
  isFilterError,
}: {
  filteredFlats: FlatDetails[];
  isFilterError: boolean;
}) {
  const t = useTranslations("HomePage.flats");
  return (
    <>
      {filteredFlats.length !== 0 ? (
        <ul
          className="grid mt-inside-mob lg:mt-inside 
        grid-cols-1 gap-y-[5vh] lg:grid-cols-3 lg:gap-x-[8.7vw] lg:gap-y-[3.3vh]"
        >
          {filteredFlats.map((flat) => (
            <FlatCard key={flat.id} flat={flat} />
          ))}
        </ul>
      ) : isFilterError ? (
        <FlatsError>{t("error1")}</FlatsError>
      ) : (
        <FlatsError>{t("error2")}</FlatsError>
      )}
    </>
  );
}
