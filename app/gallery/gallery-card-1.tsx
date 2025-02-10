import MyImage from "../my-image";

export default function GalleryCardOne() {
  return (
    <div className="rounded-radius col-span-6 bg-yellow flex">
      <div
        className="w-[79%] h-[calc(100% - (5.5 + 3.7)vh)] flex flex-col justify-between 
    mt-[5.5vh] ml-[5.5vh] mb-[3.7vh]"
      >
        <h3 className="font-prata text-5xl">
          Day-Stay занимается сдачей квартир в Баку посуточно с 2015 года
        </h3>
        <p className="text-3xl">
          и не является просто посредником, а полноценно сопровождает своих
          клиентов
        </p>
      </div>
      <MyImage
        src="/images/gallery/gal-1.png"
        alt="apartaments"
        height="100%"
        aspectRatio="251 / 470"
      />
    </div>
  );
}
