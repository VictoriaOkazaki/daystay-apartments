import MyImage from "../my-image";

export default function ContactFormBannerDecor() {
  return (
    <div className="col-span-7 bg-bg2 rounded-radius p-[4.2vw] h-[70vh] relative">
      <h3 className="font-prata text-5xl leading-snug">
        Остались вопросы или нужна помощь в выборе{" "}
        <span className="font-marckScript">квартиры</span>?{" "}
      </h3>

      <MyImage
        src="/images/contact/cont-2.png"
        alt="apartaments"
        height="21%"
        aspectRatio="1"
        className="!absolute left-[3.5vw] bottom-[8.6vh]"
      />
      <MyImage
        src="/images/contact/cont-1.png"
        alt="apartaments"
        height="52%"
        aspectRatio="651 / 396"
        className="!absolute right-[2vw] bottom-[4vh]"
      />
    </div>
  );
}
