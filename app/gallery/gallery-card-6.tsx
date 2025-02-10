import MyImage from "../my-image";

export default function GalleryCardSix() {
  return (
    <div className="rounded-radius col-span-3 bg-acsent2">
      <MyImage
        src="/images/gallery/gal-6.png"
        alt="romantic dinner"
        width="100%"
        aspectRatio="433 / 468"
        className="overflow-hidden rounded-radius"
      />
    </div>
  );
}
