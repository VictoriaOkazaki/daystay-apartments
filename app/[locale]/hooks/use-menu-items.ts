import { useRouter, usePathname } from "@/i18n/navigation";
import { v4 as uuidv4 } from "uuid";
import { scrollToFlatsSection } from "../flats/flats";
import { scrollToAdvantageSection } from "../advantage/advantage";
import { scrollToServiceSection } from "../services/services";
import { scrollToFaqSection } from "../faq/faq";
import { scrollToContactSection } from "../contacts/contacts";

import { useTranslations } from "next-intl";

export const useMenuItems = () => {
  const router = useRouter();
  const t = useTranslations("HomePage.menu");
  const homeMenuItems = [
    {
      id: uuidv4(),
      name: t("adv"),
      goTo: scrollToAdvantageSection,
      active: false,
    },
    {
      id: uuidv4(),
      name: t("flats"),
      goTo: scrollToFlatsSection,
      active: false,
    },
    {
      id: uuidv4(),
      name: t("service"),
      goTo: scrollToServiceSection,
      active: false,
    },
    {
      id: uuidv4(),
      name: t("faq"),
      goTo: scrollToFaqSection,
      active: false,
    },
    {
      id: uuidv4(),
      name: t("contact"),
      goTo: scrollToContactSection,
      active: false,
    },
  ];

  const flatsMenuItems = [
    {
      id: uuidv4(),
      name: t("home"),
      active: false,
      goTo: () => {
        router.push("/");
      },
    },
    {
      id: uuidv4(),
      name: t("flats"),
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
