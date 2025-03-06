import PhoneList from "../phone-list";
import SocialLinks from "../social-links";

export default function ContactsInfoBox() {
  return (
    <div
      className="absolute bottom-[-18%] md:bottom-[-28%] right-0 lg:left-0 lg:bottom-[-11%] p-[4.27vw] lg:p-[1vw] lg:w-[41%] rounded-radius-mob lg:rounded-radius 
    bg-bg bg-opacity-80 flex flex-col gap-[1vh] lg:flex-row justify-between z-10"
    >
      <PhoneList />
      <div>
        <a
          href="mailto:day-stay-apartments@mail.ru"
          className="underline text-base lg:text-2xl block"
        >
          day-stay-apartments@mail.ru
        </a>
        <SocialLinks className="flex mt-4" margin="mr-[1.7vw] " />
      </div>
    </div>
  );
}
