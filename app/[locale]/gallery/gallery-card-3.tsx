import { useLocale, useTranslations } from "next-intl";
import MyImage from "../my-image";

export default function GalleryCardThree() {
  const t = useTranslations("HomePage.gallery");
  const locale = useLocale();

  let imgSrc;
  if (locale === "ru") {
    imgSrc = "/images/gallery/gal-3-ru.svg";
  } else if (locale === "en") {
    imgSrc = "/images/gallery/gal-3-en.svg";
  } else {
    imgSrc = "/images/gallery/gal-3-en.svg";
  }

  return (
    <div
      className="rounded-radius-mob lg:rounded-radius lg:col-span-3
     border-text border p-[4.27vw] lg:p-[1.3vw] flex flex-col justify-between"
    >
      <span className="text-base lg:text-2xl font-prata">
        {t("card3Title")}
      </span>
      <MyImage
        src={imgSrc}
        alt="countries"
        width="100%"
        className="mt-[3vh] lg:mt-0"
        aspectRatio="384 / 258"
      />
    </div>
  );
}
