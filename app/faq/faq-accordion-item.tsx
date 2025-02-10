import MyImage from "../my-image";
import { AccordionItemProps } from "./types";
import { easeIn, motion } from "framer-motion";

export default function FaqAccordionItem({
  question,
  answer,
  isActive,
  onClick,
}: AccordionItemProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-radius bg-bg p-[1.7vw] overflow-hidden w-full place-self-start "
    >
      <div className="flex justify-between items-start text-left">
        <span className="text-3xl">{question}</span>
        <motion.div
          animate={{ rotate: isActive ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <MyImage
            src="/images/plus-red.svg"
            alt="plus"
            width="1.3vw"
            aspectRatio="1"
            className="ml-[0.8vw]"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
        // exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: easeIn }}
        className="overflow-hidden "
      >
        <div className=" text-left text-2xl mt-[2.2vh] w-[95%]">{answer}</div>
      </motion.div>
    </button>
  );
}
