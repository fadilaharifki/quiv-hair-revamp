"use client";

import { useRegionStore } from "@/stores/useRegionStore";
import { useCartStore } from "@/stores/useCartStore"; // Import store cart
import { twMerge } from "tailwind-merge";
import { Globe, Coins } from "lucide-react";

interface RegionSwitcherProps {
  variant?: "navbar" | "sidebar" | "footer";
  className?: string;
}

const RegionSwitcher = ({
  variant = "navbar",
  className,
}: RegionSwitcherProps) => {
  const { region, setRegion } = useRegionStore();
  const { updateCurrencyRecord } = useCartStore(); // Ambil action record

  // Fungsi handler untuk sinkronisasi dua store
  const handleRegionSwitch = (target: "ID" | "INT") => {
    // 1. Update Region UI (Zustand Region Store)
    setRegion(target);

    // 2. Update Persist Record di Cart (Zustand Cart Store)
    const currencyTarget = target === "INT" ? "USD" : "IDR";
    updateCurrencyRecord(currencyTarget);
  };

  // Mapping gaya berdasarkan variant
  const styles = {
    navbar: {
      container: "bg-clinical-white/5 border border-clinical-white/10",
      active: "bg-clinical-white text-clinical-blue shadow-md",
      inactive: "text-clinical-blue-light/30 hover:text-clinical-white/60",
      divider: "bg-clinical-white/10",
    },
    sidebar: {
      container: "bg-clinical-gray-light border border-clinical-border",
      active: "bg-clinical-blue text-white",
      inactive: "text-clinical-gray-medium hover:text-clinical-blue",
      divider: "bg-clinical-border",
    },
    footer: {
      container: "bg-white/5 border border-white/10",
      active: "bg-white text-clinical-gray-dark",
      inactive: "text-white/40 hover:text-white",
      divider: "bg-white/10",
    },
  }[variant];

  return (
    <div
      className={twMerge(
        "flex items-center p-0.5 rounded-none group relative transition-all",
        styles.container,
        className,
      )}
    >
      {/* Minimalist Switcher Button - IDR */}
      <button
        onClick={() => handleRegionSwitch("ID")}
        className={twMerge(
          "flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] transition-all px-3 py-2",
          region === "ID" ? styles.active : styles.inactive,
        )}
      >
        <Coins
          size={14}
          strokeWidth={2.5}
          className={region === "ID" ? "opacity-100" : "opacity-40"}
        />
        IDR
      </button>

      {/* Vertical Technical Divider */}
      <div className={twMerge("w-[1px] h-3 mx-0.5", styles.divider)} />

      {/* Minimalist Switcher Button - USD */}
      <button
        onClick={() => handleRegionSwitch("INT")}
        className={twMerge(
          "flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] transition-all px-3 py-2",
          region === "INT" ? styles.active : styles.inactive,
        )}
      >
        <Globe
          size={14}
          strokeWidth={2.5}
          className={region === "INT" ? "opacity-100" : "opacity-40"}
        />
        USD
      </button>
    </div>
  );
};

export default RegionSwitcher;
