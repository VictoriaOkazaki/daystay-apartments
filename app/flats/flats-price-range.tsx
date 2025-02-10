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

  return (
    <div className="text-3xl">
      Цена от
      <input
        style={{ background: "none", width: "3ch" }}
        className="m-2 border-b-[1px] border-text text-acsent focus:outline-none"
        type="text"
        value={choiceMinPrice ?? ""}
        onChange={handleChangeMinPrice}
      />
      до
      <input
        style={{ background: "none", width: "3ch" }}
        className="m-2 border-b-[1px] border-text text-acsent"
        value={choiceMaxPrice ?? ""}
        onChange={handleChangeMaxPrice}
        type="text"
      />
    </div>
  );
}
