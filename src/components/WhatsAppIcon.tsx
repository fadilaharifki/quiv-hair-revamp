"use client";

import { phoneNumber } from "@/constants/data";
import { MessageSquareText, PhoneCall, ShieldQuestion } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppIcon() {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi Quiv! I'd like to ask about the technical specs of the products.",
  )}`;

  return (
    <div className="fixed bottom-24 md:bottom-10 right-4 z-[110]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center"
      >
        {/* Technical Pulse Effect */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-none bg-clinical-blue opacity-10" />

        {/* Clinical Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-2 bg-clinical-gray-dark text-white text-[9px] font-bold uppercase tracking-[0.2em] whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:flex items-center gap-2 border-l-2 border-clinical-blue">
          <ShieldQuestion size={12} className="text-clinical-blue" />
          Technical_Consultation
        </span>

        {/* Main Terminal Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex h-14 w-14 items-center justify-center bg-clinical-white text-clinical-gray-dark shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-clinical-border transition-all duration-300 group-hover:border-clinical-blue group-hover:text-clinical-blue"
        >
          {/* Corner Accent (Technical Detail) */}
          <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-clinical-success opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Menggunakan MessageSquareText sesuai permintaan Anda (WA Chat) */}
          <PhoneCall
            className="text-clinical-success"
            size={22}
            strokeWidth={1.5}
          />

          {/* Active Status Indicator */}
          <div className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clinical-success opacity-40" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-clinical-white border border-clinical-success items-center justify-center">
              <div className="w-1.5 h-1.5 bg-clinical-success rounded-full" />
            </span>
          </div>
        </motion.div>
      </a>
    </div>
  );
}
