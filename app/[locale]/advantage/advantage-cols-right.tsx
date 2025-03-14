import { useTranslations } from "next-intl";
import MyImage from "../my-image";
import SecondaryButton from "../secondary-button";

const link =
  "https://www.tripadvisor.ru/Attractions-g293934-Activities-Baku_Absheron_Region.html";

export default function AdvColsRight() {
  const t = useTranslations("HomePage.advantages");
  return (
    <div className="flex flex-col justify-between h-full">
      <div
        className="flex flex-col justify-between relative
      w-full bg-yellow 
      rounded-radius-mob lg:rounded-radius p-[4.27vw] lg:p-[2.08vw] pb-0 lg:pb-0 h-[30vh] md:h-[50vh] lg:h-[63%]"
      >
        <div>
          <h3 className="text-xl lg:text-3xl font-prata">{t("card4Title")}</h3>
          <p className="text-base lg:text-xl mt-4 lg:mt-8">{t("card4Text")}</p>
        </div>
        <SecondaryButton
          onClick={() => window.open(link, "_blank")}
          className="absolute bottom-0 right-0 lg:left-0"
        >
          {t("card4Btn")}
          <MyImage
            aspectRatio="1"
            src="/images/owl.svg"
            alt="owl"
            className="ml-2 w-[5.13vw] lg:w-[1.7vw]"
          />
        </SecondaryButton>
      </div>
      <div
        className="w-full bg-red flex flex-col justify-between
      rounded-radius-mob lg:rounded-radius p-[4.27vw] lg:p-[2.08vw] grow mt-5"
      >
        <h3 className="text-xl lg:text-3xl font-prata">
          {t("card5Title1")}{" "}
          <span className="font-marck-script">{t("card5Title2")}</span>
        </h3>
        <p className="text-base lg:text-xl mt-4 lg:mt-8">{t("card5Text")}</p>
      </div>
    </div>
  );
}
