import MyImage from "../my-image";

export default function GalleryCardOne() {
  return (
    <div
      className="rounded-radius-mob lg:rounded-radius lg:col-span-6 bg-yellow flex 
    h-[43vh] lg:h-auto pl-[4.27vw] lg:pl-[2.1vw]"
    >
      <div
        className="w-[72%] lg:w-[79%] flex flex-col justify-between
      my-[4.27vw] lg:my-[2.1vw]"
      >
        <h3 className="font-prata text-2xl lg:text-5xl leading-tight">
          Day-Stay занимается сдачей квартир в Баку посуточно с 2015 года
        </h3>
        <p className="text-xl lg:text-3xl">
          и не является просто посредником, а полноценно сопровождает своих
          клиентов
        </p>
      </div>
      <MyImage
        src="/images/gallery/gal-1.png"
        className=""
        alt="apartaments"
        height="100%"
        aspectRatio="190 / 465"
      />
    </div>
  );
}
