import { FlatDetails } from "@/app/flats/types";
import { roomCountNaming } from "@/app/utils/lang-rules";

export default function FlatTop({ flat }: { flat: FlatDetails }) {
  return (
    <div className="flex justify-between">
      <div className="bg-bg2 rounded-radius p-[1.04vw] w-fit">
        <h1 className="font-prata text-3xl">{flat.name}</h1>
        <ul className="mt-[2.2vh] flex gap-[7%]">
          <span className="text-2xl">{flat.adress}</span>
          <span className="text-2xl">
            этаж {flat.floor}/{flat.maxFloor}
          </span>
          <span className="text-2xl">{flat.area}м2</span>
          <span className="text-2xl">
            {flat.roomCount} {roomCountNaming(flat.roomCount)}
          </span>
        </ul>
      </div>
      <div className="bg-yellow rounded-radius p-[1.04vw] w-fit">
        <span className="font-prata text-2xl">Вид из окна</span>
        <div className="text-xl mt-[2.2vh]">{flat.viewFromWindow}</div>
      </div>
    </div>
  );
}
