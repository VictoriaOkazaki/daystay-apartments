import MyImage from "../my-image";

export default function GalleryCardFour() {
  return (
    <div
      className="rounded-radius-mob lg:rounded-radius lg:col-span-3 
    bg-acsent2 p-[4.27vw] lg:p-[1.3vw] pb-0 overflow-hidden"
    >
      <MyImage
        src="/images/gallery/gal-4.png"
        alt="apartaments"
        width="100%"
        aspectRatio="401 / 452"
        className="translate-y-2"
      />
    </div>
  );
}
