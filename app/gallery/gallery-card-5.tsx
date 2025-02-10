import MyImage from "../my-image";

export default function GalleryCardFive() {
  return (
    <div className="rounded-radius col-span-6 bg-red py-[1.3vw] px-[2.6vw] flex justify-between">
      <h4 className="text-5xl font-prata w-[28%] mt-[1.5vw] leading-tight">
        Лучшая локация в городе
      </h4>
      <MyImage
        src="/images/gallery/gal-5.png"
        alt="apartaments"
        width="62%"
        aspectRatio="504 / 427"
      />
    </div>
  );
}
