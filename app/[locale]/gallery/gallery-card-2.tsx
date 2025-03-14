import { useTranslations } from "next-intl";
import MyImage from "../my-image";

export default function GalleryCardTwo() {
  const t = useTranslations("HomePage.gallery");
  return (
    <div
      className="lg:h-auto rounded-radius-mob lg:rounded-radius lg:col-span-3
    flex flex-col justify-between items-center bg-acsent2 p-[4.27vw] lg:p-[1.3vw]"
    >
      <span className="text-base lg:text-2xl">{t("card2Title")}</span>
      <MyImage
        src="/images/gallery/gal-2.png"
        alt="torgovaya baku"
        className="w-[78%] lg:w-full"
        aspectRatio="404 / 390"
      />
    </div>
  );
}
