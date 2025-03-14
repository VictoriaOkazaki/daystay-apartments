"use client";

import { FlatDetails } from "@/app/[locale]/flats/types";
import FlatGalleryButton from "./flat-gallery-btn";
import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import MyImage from "@/app/[locale]/my-image";

export default function FlatGallery({ flat }: { flat: FlatDetails }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrevClick = () => {
    setDirection(-1);
    setImgIndex(
      (prevIndex) => (prevIndex - 1 + flat.gallery.length) % flat.gallery.length
    );
  };
  const handleNextClick = () => {
    setDirection(1);
    setImgIndex((prevIndex) => (prevIndex + 1) % flat.gallery.length);
  };

  const handleDragEnd = (e: MouseEvent | TouchEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      handlePrevClick();
    } else if (info.offset.x < -100) {
      handleNextClick();
    }
  };
  return (
    <div className="w-full min-h-[267px] md:min-h-[400px] rounded-radius-mob lg:rounded-radius overflow-hidden relative">
      <FlatGalleryButton onClick={handlePrevClick} />
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={imgIndex}
          className="absolute w-full h-full"
          initial={{ x: direction * 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -direction * 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          drag="x" // Enable horizontal dragging
          dragConstraints={{ left: 0, right: 0 }} // Don't allow vertical drag
          dragElastic={0.2} // Make dragging feel more natural
          onDragEnd={handleDragEnd} // Handle drag end event
        >
          <MyImage
            priority={imgIndex === 0 ? true : false}
            aspectRatio="426 / 267"
            src={flat.gallery[imgIndex]}
            alt="apartment"
            className="w-full h-full object-cover rounded-s-radius-mob lg:rounded-radius"
          />
        </motion.div>
      </AnimatePresence>

      <FlatGalleryButton
        onClick={handleNextClick}
        className="rotate-180 right-0"
      />
    </div>
  );
}
