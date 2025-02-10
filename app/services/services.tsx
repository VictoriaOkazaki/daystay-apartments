import ServiceCard from "./service-card";
import { servicesInfo } from "./services-data";

export default function Services() {
  return (
    <section id="services" className="mt-section">
      <h2 className="font-prata text-5xl w-[35vw] leading-snug">
        Мы <span className="font-marckScript">заботимся</span> о наших гостях и
        помогаем во всем
      </h2>
      <ul className="grid grid-cols-3 gap-x-[1vw] gap-y-[3.7vh] mt-inside">
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
