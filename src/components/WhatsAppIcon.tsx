"use client";

import { phoneNumber } from "@/constants/data";
import { PhoneCall } from "lucide-react";

export default function WhatsAppIcon() {
  return (
    <div className="fixed bottom-24 md:bottom-6 right-6 z-50 p-1 rounded-full bg-primary hover:bg-light-primary-navbar">
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className=" p-3 rounded-full shadow-lg transition border-4 border-white flex items-center justify-center"
      >
        <PhoneCall size={28} color="white" />
      </a>
    </div>
  );
}
