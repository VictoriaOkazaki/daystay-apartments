import ContactFormBanner from "./contact-form-banner";
import ContactsInfo from "./contacts-info";

export default function Contacts() {
  return (
    <section id="contact">
      <ContactFormBanner />
      <div className="mt-section">
        <h2 className="font-prata text-2xl lg:text-5xl">
          Как с нами связаться
        </h2>
        <ContactsInfo />
      </div>
    </section>
  );
}

export function scrollToContactSection() {
  const elem = document.getElementById("contact");
  elem?.scrollIntoView({ behavior: "smooth" });
}
