import MyImage from "../my-image";

export default function GalleryCardTwo() {
  return (
    <div className="rounded-radius col-span-3 bg-acsent2 p-[1.3vw]">
      <span className="text-2xl">
        Торговая, она же Площадь фонтанов, она же улица Низами
      </span>
      <MyImage
        src="/images/gallery/gal-2.png"
        alt="torgovaya baku"
        width="100%"
        aspectRatio="404 / 390"
      />
    </div>
  );
}
