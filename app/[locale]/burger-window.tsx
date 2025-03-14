"use client";
import { usePathname } from "@/i18n/navigation";
import { scrollToFlatsSection } from "./flats/flats";
import MainButton from "./main-button";
import Menu from "./menu";
import PhoneList from "./phone-list";
import SocialLinks from "./social-links";

import { useTranslations } from "next-intl";

export default function BurgerWindow({ close }: { close: () => void }) {
  const pathName = usePathname();
  const isFlatsSubpage = /^\/flats-page\/.+$/.test(pathName);

  const t = useTranslations("HomePage");

  return (
    <div className="absolute bg-bg w-screen h-screen z-30 m-[-4.27vw] inset-0 pl-[20vw] py-[16vh] pr-[4.27vw]">
      <div className="h-full flex flex-col justify-between">
        <Menu close={close} className="flex flex-col items-start gap-y-[3vh]" />
        <div className="flex justify-between items-end">
          <PhoneList />
          <SocialLinks margin="mb-[2.96vh]" />
        </div>
        {!isFlatsSubpage && (
          <MainButton
            onClick={() => {
              scrollToFlatsSection();
              close();
            }}
          >
            {t("burger")}
          </MainButton>
        )}
      </div>
    </div>
  );
}
