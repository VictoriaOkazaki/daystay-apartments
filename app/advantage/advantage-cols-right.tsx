import MyImage from "../my-image";
import SecondaryButton from "../secondary-button";

const link =
  "https://www.tripadvisor.ru/Attractions-g293934-Activities-Baku_Absheron_Region.html";

export default function AdvColsRight() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div
        className="flex flex-col justify-between
      w-full bg-yellow rounded-radius p-[2.08vw] pb-0 h-[63%]"
      >
        <div>
          <h3 className="text-3xl font-prata">
            Близость к достопримечательностям
          </h3>
          <p className="text-xl mt-8">
            До многих памятников архитектуры, музеев и парков можно дойти
            пешком. К остальным можно легко заказать такси или поехать на
            автобусе и метро.
          </p>
        </div>
        <SecondaryButton
          onClick={() => window.open(link, "_blank")}
          className="ml-[-2.08vw]"
        >
          Достопримечательности Баку
          <MyImage
            width="1.7vw"
            height="1.7vw"
            src="/images/owl.svg"
            alt="owl"
            className="ml-2"
          />
        </SecondaryButton>
      </div>
      <div className="w-full bg-red rounded-radius p-[2.08vw] grow mt-5">
        <h3 className="text-3xl font-prata">
          Вы почувствуете себя настоящим{" "}
          <span className="font-marckScript">бакинцем</span>
        </h3>
        <p className="text-xl mt-8">
          Вы прочувствуете атмосферу города, сняв жилье именно на Торговой. Вы
          увидите современный и старый облик Баку, всегда будете в центре
          культурной жизни города.
        </p>
      </div>
    </div>
  );
}
