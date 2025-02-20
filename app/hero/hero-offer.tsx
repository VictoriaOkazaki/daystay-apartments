import MainButton from "../main-button";
import { scrollToFlatsSection } from "../flats/flats";

export default function HeroOffer() {
  return (
    <div
      className="flex flex-col justify-between  
    ml-[9.3%] lg:ml-[7.7%] h-[66.7%] lg:h-auto space-y-[4vh] lg:space-y-0 lg:gap-[11vh]"
    >
      <span className="text-base lg:text-2xl">
        Старинные здания, уютные маленькие дворики, высокие потолки&nbsp;—
        аутентичная атмосфера города
      </span>
      <h1 className="text-3xl lg:text-6xl font-prata">
        Снимите квартиру посуточно на{" "}
        <span className="font-marckScript">Торговой</span>
        <br></br>—&nbsp;в самом центре Баку
      </h1>
      <MainButton onClick={scrollToFlatsSection}>Забронировать</MainButton>
    </div>
  );
}
