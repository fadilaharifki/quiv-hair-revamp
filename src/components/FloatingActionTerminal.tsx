"use client";

import { phoneNumber } from "@/constants/data";
import { PhoneCall, ShieldQuestion, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/stores/useCartStore";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CartDrawer } from "./CartDrawer";

export default function FloatingActionTerminal() {
  const { getTotalItems, _hasHydrated } = useCartStore();
  const totalItems = getTotalItems();

  // State untuk trigger Drawer (nanti kamu tinggal pasang Drawer component di sini)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hi Quiv! I'd like to ask about the technical specs of the products.",
  )}`;

  return (
    <div className="fixed bottom-24 md:bottom-10 right-4 md:right-10 z-[110] flex flex-col gap-4">
      {/* --- CART FLOATING BUTTON --- */}
      <AnimatePresence>
        {_hasHydrated && totalItems > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="group relative flex items-center justify-center"
          >
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative flex h-14 w-14 items-center justify-center bg-clinical-blue text-white shadow-xl border border-clinical-blue transition-all duration-300 hover:bg-clinical-gray-dark"
            >
              <ShoppingCart size={22} strokeWidth={1.5} />

              {/* Counter Badge */}
              <div className="absolute -top-2 -right-2 bg-white text-clinical-blue text-[10px] font-mono font-black h-6 w-6 flex items-center justify-center rounded-none border-2 border-clinical-blue shadow-md">
                {totalItems}
              </div>

              {/* Tooltip */}
              <span className="absolute right-full mr-4 px-3 py-2 bg-clinical-blue text-white text-[9px] font-bold uppercase tracking-[0.2em] whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:flex items-center gap-2">
                Review_Cart_Order
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- WHATSAPP / CONSULTATION BUTTON --- */}
      <div className="group relative flex items-center justify-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative"
        >
          {/* Technical Pulse Effect */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-none bg-clinical-success opacity-10" />

          {/* Clinical Tooltip */}
          <span className="absolute right-full mr-4 px-3 py-2 bg-clinical-gray-dark text-white text-[9px] font-bold uppercase tracking-[0.2em] whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:flex items-center gap-2 border-l-2 border-clinical-blue">
            <ShieldQuestion size={12} className="text-clinical-blue" />
            Technical_Consultation
          </span>

          {/* Main Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex h-14 w-14 items-center justify-center bg-clinical-white text-clinical-gray-dark shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-clinical-border transition-all duration-300 group-hover:border-clinical-blue group-hover:text-clinical-blue"
          >
            <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-clinical-success opacity-0 group-hover:opacity-100 transition-opacity" />

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
      <CartDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen} />
    </div>
  );
}
