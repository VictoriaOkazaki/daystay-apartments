import MyImage from "../my-image";

export default function GalleryCardSix() {
  return (
    <div className="rounded-radiusMob lg:rounded-radius lg:col-span-3 bg-acsent2">
      <MyImage
        src="/images/gallery/gal-6.png"
        alt="romantic dinner"
        width="100%"
        height="100%"
        aspectRatio="426 / 444"
        className="overflow-hidden rounded-radiusMob lg:rounded-radius"
      />
    </div>
  );
}
