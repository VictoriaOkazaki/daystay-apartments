import PhoneList from "../phone-list";
import SocialLinks from "../social-links";

export default function ContactsInfoBox() {
  return (
    <div className="absolute bottom-[-11%] p-[1vw] w-[41%] rounded-radius bg-bg bg-opacity-80 flex justify-between">
      <PhoneList />
      <div>
        <a
          href="mailto:day-stay-apartments@mail.ru"
          className="underline text-2xl block"
        >
          day-stay-apartments@mail.ru
        </a>
        <SocialLinks className="flex mt-4" margin="mr-[1.7vw] " />
      </div>
    </div>
  );
}
