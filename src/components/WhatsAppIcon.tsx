"use client";

import { phoneNumber } from "@/constants/data";
import { MessageSquareText, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppIcon() {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi Quiv! I'd like to ask about the products.",
  )}`;

  return (
    <div className="fixed bottom-24 md:bottom-8 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center"
      >
        {/* Ring Animasi (Ping Effect) */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-deep opacity-20" />

        {/* Tooltip - Muncul saat hover (Desktop) */}
        <span className="absolute right-full mr-4 px-4 py-2 rounded-xl bg-navy-blue text-white text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
          Ask me about product
        </span>

        {/* Tombol Utama */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-navy-blue text-white shadow-[0_20px_40px_rgba(0,0,51,0.3)] border border-white/10 transition-colors group-hover:bg-gold-deep group-hover:text-navy-blue"
        >
          {/* Ganti PhoneCall ke MessageSquareText agar lebih relevan dengan Chat */}
          <PhoneCall size={24} strokeWidth={2} />

          {/* Badge Notifikasi Kecil */}
          <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-gold-deep border-2 border-navy-blue group-hover:border-gold-deep transition-colors" />
        </motion.div>
      </a>
    </div>
  );
}
