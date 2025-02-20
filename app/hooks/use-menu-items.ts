import { useRouter, usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { scrollToFlatsSection } from "../flats/flats";
import { scrollToAdvantageSection } from "../advantage/advantage";
import { scrollToServiceSection } from "../services/services";
import { scrollToFaqSection } from "../faq/faq";
import { scrollToContactSection } from "../contacts/contacts";

export const useMenuItems = () => {
  const router = useRouter();
  const homeMenuItems = [
    {
      id: uuidv4(),
      name: "Преимущества",
      goTo: scrollToAdvantageSection,
      active: false,
    },
    {
      id: uuidv4(),
      name: "Квартиры",
      goTo: scrollToFlatsSection,
      active: false,
    },
    {
      id: uuidv4(),
      name: "Услуги",
      goTo: scrollToServiceSection,
      active: false,
    },
    {
      id: uuidv4(),
      name: "Вопросы",
      goTo: scrollToFaqSection,
      active: false,
    },
    {
      id: uuidv4(),
      name: "Контакты",
      goTo: scrollToContactSection,
      active: false,
    },
  ];

  const flatsMenuItems = [
    {
      id: uuidv4(),
      name: "Главная",
      active: false,
      goTo: () => {
        router.push("/");
      },
    },
    {
      id: uuidv4(),
      name: "Квартиры",
      active: true,
      goTo: () => {
        router.push("/flats-page");
      },
    },
  ];

  const pathname = usePathname();

  const isFlatPage = pathname.includes("/flats-page");
  const menuItems = isFlatPage ? flatsMenuItems : homeMenuItems;

  return menuItems;
};
