import { motion } from "framer-motion";

export default function FlatsError({ children }: { children: string }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }} // Start from below
      animate={{ y: 0, opacity: 1 }} // Move to normal position
      transition={{ duration: 2, ease: "easeOut" }}
      className="bg-acsent rounded-radiusMob lg:rounded-radius text-2xl lg:text-3xl 
      px-[4vw] py-[2vw] lg:px-[2vw] lg:py-[1vw] mt-[3vh] w-fit text-bg2"
    >
      {children}
    </motion.div>
  );
}
