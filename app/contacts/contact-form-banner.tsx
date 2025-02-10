import ContactForm from "./contact-form";
import ContactFormBannerDecor from "./contact-form-banner-decor";

export default function ContactFormBanner() {
  return (
    <div className="grid grid-cols-12 mt-section ">
      <ContactFormBannerDecor />
      <ContactForm />
    </div>
  );
}
