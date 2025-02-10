import MyImage from "../my-image";

export default function GalleryCardThree() {
  return (
    <div className="rounded-radius col-span-3 border-text border p-[1.3vw] flex flex-col justify-between">
      <span className="text-2xl font-prata">
        Мы принимали гостей из самых разных стран мира
      </span>
      <MyImage
        src="/images/gallery/gal-3.svg"
        alt="countries"
        width="100%"
        aspectRatio="384 / 258"
      />
    </div>
  );
}
