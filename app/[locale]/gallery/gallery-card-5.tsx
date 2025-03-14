import { useTranslations } from "next-intl";
import MyImage from "../my-image";

export default function GalleryCardFive() {
  const t = useTranslations("HomePage.gallery");
  return (
    <div
      className="rounded-radius-mob lg:rounded-radius lg:col-span-6
     bg-red p-[4.27vw] lg:py-[1.3vw] lg:px-[2.6vw] flex flex-col lg:flex-row justify-between"
    >
      <h4 className="text-2xl lg:text-5xl font-prata lg:w-[28%] mt-[1.5vw] leading-tight">
        {t("card5Title")}
      </h4>
      <MyImage
        src="/images/gallery/gal-5.png"
        alt="apartaments"
        className="self-center w-full lg:w-4/6 mt-2"
        aspectRatio="504 / 427"
      />
    </div>
  );
}
