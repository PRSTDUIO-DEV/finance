import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      <motion.a
        href="https://line.me/ti/p/~viewtonhome"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="flex items-center justify-center w-14 h-14 bg-[#06C755] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all"
        aria-label="ติดต่อ LINE"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
      <motion.a
        href="tel:0812345678"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        className="flex items-center justify-center w-14 h-14 bg-[#C41E3A] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all animate-pulse"
        aria-label="โทรหาเรา"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
