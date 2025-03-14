import { useTranslations } from "next-intl";

export default function FLatsPriceRange({
  choiceMinPrice,
  setChoiceMinPrice,
  choiceMaxPrice,
  setChoiceMaxPrice,
}: {
  choiceMinPrice: string;
  setChoiceMinPrice: (newValue: string) => void;
  choiceMaxPrice: string;
  setChoiceMaxPrice: (newValue: string) => void;
}) {
  const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setChoiceMinPrice(newValue); // Allow empty input
  };
  const handleChangeMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/\D/g, "");
    setChoiceMaxPrice(newValue);
  };

  const t = useTranslations("HomePage.flats");

  return (
    <div className="text-xl lg:text-3xl">
      {t("rangeFrom")}
      <input
        style={{ background: "none", width: "3ch" }}
        className="m-2 border-b-[1px] border-text text-acsent focus:outline-hidden"
        type="text"
        value={choiceMinPrice ?? ""}
        onChange={handleChangeMinPrice}
      />
      {t("rangeTo")}
      <input
        style={{ background: "none", width: "3ch" }}
        className="m-2 border-b-[1px] border-text text-acsent focus:outline-hidden"
        value={choiceMaxPrice ?? ""}
        onChange={handleChangeMaxPrice}
        type="text"
      />
    </div>
  );
}
