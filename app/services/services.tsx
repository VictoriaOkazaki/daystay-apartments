import ServiceCard from "./service-card";
import { servicesInfo } from "./services-data";

export default function Services() {
  return (
    <section id="services" className="mt-section">
      <h2 className="font-prata text-2xl lg:text-5xl w-[71vw] lg:w-[35vw] leading-snug">
        Мы <span className="font-marckScript">заботимся</span> о наших гостях и
        помогаем во всем
      </h2>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-[2.3vh] lg:gap-x-[1vw] lg:gap-y-[3.7vh] mt-insideMob lg:mt-inside">
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
