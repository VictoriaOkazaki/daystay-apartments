import FlatConvenience from "./flat-convenience";
import { FlatDetails } from "@/app/flats/types";

export default function FlatConveniencesCards({ flat }: { flat: FlatDetails }) {
  const mainConveniences = flat.conveniences.main;
  const kitchenConveniences = flat.conveniences.kitchen;
  const toiletConveniences = flat.conveniences.toilet;

  return (
    <>
      <ul className="order-2 lg:order-1 bg-bg rounded-radiusMob lg:rounded-radius p-[3.4vw] lg:p-[1.04vw] w-[76vw] lg:w-auto">
        <h4 className="font-prata text-base lg:text-2xl mb-[2.2vh] ml-[9.8vw] lg:ml-[1.45vw]">
          Основные удобства
        </h4>
        <FlatConvenience has={mainConveniences.hasLift}>лифт</FlatConvenience>
        <FlatConvenience has={mainConveniences.hasParking}>
          парковка
        </FlatConvenience>
        <FlatConvenience has={mainConveniences.hasConditioner}>
          кондиционер
        </FlatConvenience>
        <FlatConvenience has={mainConveniences.hasTV}>
          телевизор
        </FlatConvenience>
        <FlatConvenience has={mainConveniences.hasWiFi}>wifi</FlatConvenience>
        <FlatConvenience has={mainConveniences.hasTextile}>
          полотенца, постельное бельё
        </FlatConvenience>
        <FlatConvenience has={mainConveniences.hasLaundry}>
          стиральная машина
        </FlatConvenience>
        <FlatConvenience has={mainConveniences.hasIron}>утюг</FlatConvenience>
      </ul>
      <ul
        className="order-3 lg:order-2 bg-bg rounded-radiusMob lg:rounded-radius p-[3.4vw] lg:p-[1.04vw] 
      lg:place-self-end w-[76vw] lg:w-auto"
      >
        <h4 className="font-prata text-base lg:text-2xl mb-[2.2vh] ml-[9.8vw] lg:ml-[1.45vw]">
          Кухня
        </h4>
        <FlatConvenience has={kitchenConveniences.hasKettle}>
          чайник
        </FlatConvenience>
        <FlatConvenience has={kitchenConveniences.hasFridge}>
          холодильник
        </FlatConvenience>
        <FlatConvenience has={kitchenConveniences.hasGasStove}>
          газовая плита
        </FlatConvenience>
        <FlatConvenience has={kitchenConveniences.hasMicrowave}>
          микроволновка
        </FlatConvenience>
        <FlatConvenience has={kitchenConveniences.hasTableWare}>
          посуда и столовые приборы
        </FlatConvenience>
      </ul>
      <ul
        className="order-4 lg:order-3 bg-bg rounded-radiusMob lg:rounded-radius p-[3.4vw] lg:p-[1.04vw] 
      lg:place-self-end w-[76vw] lg:w-auto"
      >
        <h4 className="font-prata text-base lg:text-2xl mb-[2.2vh] ml-[9.8vw] lg:ml-[1.45vw]">
          Ванная комната
        </h4>
        <FlatConvenience has={toiletConveniences.hasHairDryer}>
          фен
        </FlatConvenience>
        <FlatConvenience has={toiletConveniences.hasShower}>
          душ
        </FlatConvenience>
        <FlatConvenience has={toiletConveniences.hasSlippers}>
          тапочки
        </FlatConvenience>
        <FlatConvenience has={toiletConveniences.hasToiletries}>
          туалетные принадлежности
        </FlatConvenience>
      </ul>
    </>
  );
}
