import HeroAdvantage from "./hero-advantage";

const advantages = [
  "Безопасные сделки",
  "Удобное местоположение",
  "Забота о гостях и поддержка 24/7",
  "Полная комплектация квартир",
];
export default function HeroAdvantageList() {
  return (
    <div className="absolute right-[5.4%] bottom-[-14.6%] grid grid-cols-2 gap-x-[3.33vw] gap-y-[5.19vh] bg-bg opacity-80 rounded-radius p-[2.08vw]">
      {advantages.map((item) => (
        <HeroAdvantage text={item} key={item} />
      ))}
    </div>
  );
}
