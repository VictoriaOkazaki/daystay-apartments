import { useEffect } from "react";
import ContactForm from "../contacts/contact-form";
import MyImage from "../my-image";
import clsx from "clsx";

export default function PopupForm({
  isOpen,
  setIsOpen,
  setShowPopup,
}: {
  isOpen: boolean;
  setIsOpen: (newVal: boolean) => void;
  setShowPopup: (newVal: boolean) => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
    setTimeout(() => setShowPopup(false), 300);
  };

  return (
    <div
      className={clsx(
        ` w-[100vw] h-[100vh]
    fixed top-0 left-0 backdrop-blur-sm  
  transform transition-opacity duration-300 ease-in`,
        isOpen ? "bg-text bg-opacity-180" : "bg-opacity-0"
      )}
      style={{ animation: "fadeIn 0.3s forwards", zIndex: "200" }}
    >
      <div
        className={clsx(
          `w-full h-full flex justify-center items-center 
        transform transition-transform duration-300 ease-in`,
          isOpen ? "scale-100" : "scale-95"
        )}
      >
        <button
          onClick={closePopup}
          className="absolute top-[4.2vw] right-[4.2vw] w-[2.6vw] h-[2.6vw] bg-acsent2 
      flex items-center justify-center rounded-radius"
        >
          <MyImage
            width="1.3vw"
            aspectRatio="1"
            src="/images/red-cross.svg"
            alt="close"
          />
        </button>
        <ContactForm className="h-[70%]" />
      </div>
    </div>
  );
}
