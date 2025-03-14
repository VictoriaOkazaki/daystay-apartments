import { useLocale, useTranslations } from "next-intl";
import ServiceCard from "./service-card";
import { servicesInfoRu } from "./services-data-ru";
import { servicesInfoEn } from "./services-data-en";

export default function Services() {
  const t = useTranslations("HomePage.services");

  const locale = useLocale();

  let servicesInfo;
  if (locale === "ru") {
    servicesInfo = servicesInfoRu;
  } else if (locale === "en") {
    servicesInfo = servicesInfoEn;
  } else {
    servicesInfo = servicesInfoRu;
  }

  return (
    <section id="services" className="mt-section">
      <h2 className="font-prata text-2xl lg:text-5xl w-[71vw] lg:w-[35vw] leading-snug">
        {t("title1")} <span className="font-marck-script">{t("title2")}</span>{" "}
        {t("title3")}
      </h2>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-[2.3vh] lg:gap-x-[1vw] lg:gap-y-[3.7vh] mt-inside-mob lg:mt-inside">
        {servicesInfo.map((service, index) => (
          <ServiceCard
            title={service.title}
            text={service.text}
            key={index}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
}
export function scrollToServiceSection() {
  const elem = document.getElementById("services");
  elem?.scrollIntoView({ behavior: "smooth" });
}
