import Logo from "../logo";
import Menu from "../menu";
import PhoneList from "../phone-list";
import SocialLinks from "../social-links";
import FooterToTopButton from "./footer-to-top-btn";
import { photoLinks } from "./photo-links";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2 flex flex-col justify-between">
        <Logo />
        <PhoneList />
      </div>
      <div className="flex flex-col gap-[4.4vh]">
        <h3 className="font-prata text-2xl">Меню</h3>
        <Menu className="flex-col items-start gap-4" />
      </div>
      <div className="col-span-2 flex flex-col gap-[2.2vh]">
        <h3 className="font-prata text-2xl">Фото</h3>
        <ul>
          {photoLinks.map((photo, index) => (
            <li key={index} className="hover:text-acsent mb-2 last:mb-0">
              <a href={photo.link} target="_blank">
                {photo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-end gap-y-[6vh]">
        <FooterToTopButton />
        <SocialLinks margin="mr-[1.7vw]" className="flex mt-4" />
      </div>
    </div>
  );
}
