import { motion } from "framer-motion";

export default function FlatsError({ children }: { children: string }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }} // Start from below
      animate={{ y: 0, opacity: 1 }} // Move to normal position
      transition={{ duration: 2, ease: "easeOut" }}
      className="bg-acsent rounded-radius text-3xl p-[1vw] mt-[3vh] w-fit text-bg2"
    >
      {children}
    </motion.div>
  );
}
