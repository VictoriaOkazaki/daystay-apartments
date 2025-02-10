import FooterCopyrights from "./footer-copyrights";
import FooterLinks from "./footer-links";

export default function Footer() {
  return (
    <footer className="bg-bg2 rounded-t-radius py-[3.7vh] px-[1vw] mt-[20vh]">
      <FooterLinks />
      <FooterCopyrights />
    </footer>
  );
}
