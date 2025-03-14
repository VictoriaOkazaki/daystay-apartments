import { useTranslations } from "next-intl";
import MyImage from "../my-image";

export default function ContactFormBannerDecor() {
  const t = useTranslations("HomePage.contacts");

  return (
    <div
      className="lg:col-span-7 bg-bg2 rounded-radius-mob lg:rounded-radius 
    px-[4.27vw] py-[8.54vw] lg:p-[4.2vw] h-[60vh] md:h-[90vh] lg:h-[70vh] relative"
    >
      <h3 className="font-prata text-2xl lg:text-5xl leading-snug">
        {t("title")} <span className="font-marck-script">{t("title2")}</span>?{" "}
      </h3>
      <MyImage
        src="/images/contact/cont-2.png"
        alt="apartaments"
        aspectRatio="1"
        className="absolute! h-1/5 lg:h-1/4 left-[4.27vw] lg:left-[3.5vw] bottom-[8.54vw] lg:bottom-[8.6vh]"
      />
      <MyImage
        src="/images/contact/cont-1.png"
        alt="apartaments"
        aspectRatio="651 / 396"
        className="absolute! w-4/5 lg:h-1/2 lg:w-auto right-1/10 lg:right-[2vw] top-[23%] lg:bottom-[4vh] lg:top-auto"
      />
    </div>
  );
}
