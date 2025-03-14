"use client";

import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function FooterCopyrights() {
  const router = useRouter();
  const goToPrivacyPolicy = () => {
    router.push("/privacy-policy-page");
  };

  const t = useTranslations("HomePage.footer");

  return (
    <div className="flex justify-between items-start mt-section flex-col lg:flex-row gap-[2vh] lg:gap-0">
      <span className="text-sm lg:text-xl">
        © Day-Stay Apartments 2024 All rights reserved
      </span>
      <a
        href="https://victoria-kazakova-portfolio.vercel.app/"
        target="_blank"
        className="text-sm lg:text-xl hover:text-acsent"
      >
        {t("developer")}
      </a>
      <button
        onClick={goToPrivacyPolicy}
        className="text-sm lg:text-xl hover:text-acsent"
      >
        {t("privacy")}
      </button>
    </div>
  );
}
