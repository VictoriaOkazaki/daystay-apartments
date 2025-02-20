import GalleryCardOne from "./gallery-card-1";
import GalleryCardTwo from "./gallery-card-2";
import GalleryCardThree from "./gallery-card-3";
import GalleryCardFour from "./gallery-card-4";
import GalleryCardFive from "./gallery-card-5";
import GalleryCardSix from "./gallery-card-6";

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-[2.3vh] lg:gap-[1vw] mt-section">
      <GalleryCardOne />
      <GalleryCardTwo />
      <GalleryCardThree />
      <GalleryCardFour />
      <GalleryCardFive />
      <GalleryCardSix />
    </div>
  );
}
