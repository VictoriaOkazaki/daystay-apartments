import Flats from "../flats/flats";
import Footer from "../footer/footer";
import Header from "../header/header";

export default function FlatsPage() {
  return (
    <div className="p-[4.27vw] lg:p-[3.13vw] pb-0 lg:pb-0">
      <Header />
      <Flats />
      <Footer />
    </div>
  );
}
