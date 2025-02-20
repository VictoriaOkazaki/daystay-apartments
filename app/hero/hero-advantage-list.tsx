import HeroAdvantage from "./hero-advantage";

const advantages = [
  "Безопасные сделки",
  "Удобное местоположение",
  "Забота о гостях и поддержка 24/7",
  "Полная комплектация квартир",
];
export default function HeroAdvantageList() {
  return (
    <div
      className="absolute grid bg-bg opacity-80 h-fit
      w-[79%] lg:w-fit
    right-0 top-[44vh] sm:top-[65vh] lg:right-[5.4%] lg:top-[78.8%]
    grid-cols-1 gap-y-[3.4vw] lg:grid-cols-2 lg:gap-x-[3.33vw] lg:gap-y-[5.19vh]
    rounded-radiusMob lg:rounded-radius p-[4.3vw] lg:p-[2.08vw]"
    >
      {advantages.map((item) => (
        <HeroAdvantage text={item} key={item} />
      ))}
    </div>
  );
}
