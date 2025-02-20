import Logo from "../logo";
import Menu from "../menu";
import PhoneList from "../phone-list";
import SocialLinks from "../social-links";
import FooterToTopButton from "./footer-to-top-btn";
import { photoLinks } from "./photo-links";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-y-[7.5vh] lg:grid-cols-6">
      <div className="order-1 lg:col-span-2 flex flex-col justify-between gap-[2vh]">
        <Logo />
        <PhoneList />
      </div>
      <div className="order-3 lg:order-2 flex flex-col justify-between">
        <h3 className="font-prata text-xl lg:text-2xl">Меню</h3>
        <Menu className="flex flex-col items-start gap-4" />
      </div>
      <div className="order-4 lg:order-3 lg:col-span-2 flex flex-col gap-[2.2vh]">
        <h3 className="font-prata text-xl lg:text-2xl">Фото</h3>
        <ul>
          {photoLinks.map((photo, index) => (
            <li
              key={index}
              className="text-base lg:text-xl hover:text-acsent mb-2 last:mb-0"
            >
              <a href={photo.link} target="_blank">
                {photo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="order-2 lg:order-4 flex flex-col items-end justify-between lg:justify-normal gap-y-[6vh]">
        <FooterToTopButton />
        <SocialLinks margin="mr-[3.8vw] lg:mr-[1.7vw]" className="flex mt-4" />
      </div>
    </div>
  );
}
