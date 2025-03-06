import MyImage from "../my-image";

export default function GalleryCardThree() {
  return (
    <div
      className="rounded-radius-mob lg:rounded-radius lg:col-span-3
     border-text border p-[4.27vw] lg:p-[1.3vw] flex flex-col justify-between"
    >
      <span className="text-base lg:text-2xl font-prata">
        Мы принимали гостей из самых разных стран мира
      </span>
      <MyImage
        src="/images/gallery/gal-3.svg"
        alt="countries"
        width="100%"
        className="mt-[3vh] lg:mt-0"
        aspectRatio="384 / 258"
      />
    </div>
  );
}
