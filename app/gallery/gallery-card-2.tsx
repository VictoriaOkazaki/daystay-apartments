import MyImage from "../my-image";

export default function GalleryCardTwo() {
  return (
    <div
      className="lg:h-auto rounded-radiusMob lg:rounded-radius lg:col-span-3
    flex flex-col justify-between items-center bg-acsent2 p-[4.27vw] lg:p-[1.3vw]"
    >
      <span className="text-base lg:text-2xl">
        Торговая, она же Площадь фонтанов, она же улица Низами
      </span>
      <MyImage
        src="/images/gallery/gal-2.png"
        alt="torgovaya baku"
        className="w-[78%] lg:w-full"
        aspectRatio="404 / 390"
      />
    </div>
  );
}
