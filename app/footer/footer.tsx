import FooterCopyrights from "./footer-copyrights";
import FooterLinks from "./footer-links";

export default function Footer() {
  return (
    <footer
      className="bg-bg2 rounded-t-radius-mob lg:rounded-t-radius 
    p-[3.4vw] lg:py-[3.7vh] lg:px-[1vw] mt-[20vh]"
    >
      <FooterLinks />
      <FooterCopyrights />
    </footer>
  );
}
