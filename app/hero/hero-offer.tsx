import MainButton from "../main-button";
import { scrollToAdvantageSection } from "../advantage/advantage";

export default function HeroOffer() {
  return (
    <div className="h-full flex flex-col gap-[11vh] justify-between ml-[7.7%]">
      <span className="text-2xl">
        Старинные здания, уютные маленькие дворики, высокие потолки&nbsp;—
        аутентичная атмосфера города
      </span>
      <h1 className="text-6xl font-prata">
        Снимите квартиру посуточно на{" "}
        <span className="font-marckScript">Торговой</span>
        <br></br>—&nbsp;в самом центре Баку
      </h1>
      <MainButton onClick={scrollToAdvantageSection}>Забронировать</MainButton>
    </div>
  );
}
