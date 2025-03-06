import { FlatDetails } from "@/app/flats/types";
import { roomCountNaming } from "@/app/utils/lang-rules";

export default function FlatTop({ flat }: { flat: FlatDetails }) {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="bg-bg2 rounded-radius-mob lg:rounded-radius p-[3.4vw] lg:p-[1.04vw] w-full lg:w-fit">
        <h1 className="font-prata text-xl lg:text-3xl">{flat.name}</h1>
        <ul className="mt-[3vh] lg:mt-[2.2vh] grid grid-cols-2 gap-y-[2vh] lg:flex lg:gap-[7%]">
          <span className="text-base lg:text-2xl">{flat.adress}</span>
          <span className="text-base lg:text-2xl text-end lg:text-start">
            этаж {flat.floor}/{flat.maxFloor}
          </span>
          <span className="text-base lg:text-2xl">{flat.area}м2</span>
          <span className="text-base lg:text-2xl text-end lg:text-start">
            {flat.roomCount} {roomCountNaming(flat.roomCount)}
          </span>
        </ul>
      </div>
      <div className="bg-yellow rounded-[4.3vw] lg:rounded-radius p-[3.4vw] lg:p-[1.04vw] w-fit mt-[2.5vh] lg:mt-0">
        <span className="font-prata text-base lg:text-2xl">Вид из окна</span>
        <div className="text-sm lg:text-xl mt-[1.5vh] lg:mt-[2.2vh]">
          {flat.viewFromWindow}
        </div>
      </div>
    </div>
  );
}
