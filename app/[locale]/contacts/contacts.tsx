import { useTranslations } from "next-intl";
import ContactFormBanner from "./contact-form-banner";
import ContactsInfo from "./contacts-info";

export default function Contacts() {
  const t = useTranslations("HomePage.contacts");

  return (
    <section id="contact">
      <ContactFormBanner />
      <div className="mt-section">
        <h2 className="font-prata text-2xl lg:text-5xl">{t("subtitle")}</h2>
        <ContactsInfo />
      </div>
    </section>
  );
}

export function scrollToContactSection() {
  const elem = document.getElementById("contact");
  elem?.scrollIntoView({ behavior: "smooth" });
}
