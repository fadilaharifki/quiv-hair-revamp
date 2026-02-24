/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import useScreenSize from "@/hooks/useScreenSize";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { menus } from "../navbar";
import { useEffect, useState } from "react";
import { useToggleStore } from "@/stores/useToggleStore";

const BottomBar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const { breakpoint } = useScreenSize();
  const { setIsOpen } = useToggleStore();
  const pathname = usePathname();

  useEffect(() => {
    if (breakpoint === "sm" && pathname === "/" && activeMenu !== "The Brand") {
      setTimeout(() => {
        setIsOpen(true);
      }, 100);
    } else {
      setIsOpen(false);
    }
  }, [activeMenu, pathname]);

  const bottomMenus = menus.filter((item) => item.isBottomBar);

  return (
    <>
      {breakpoint === "sm" && (
        <nav className="md:hidden fixed bottom-2 left-1/2 -translate-x-1/2 w-[92%] max-w-[400px] bg-navy-blue/80 backdrop-blur-xl border border-gold-deep/20 z-[100] px-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden">
          <div className="flex justify-around items-center h-16">
            {bottomMenus.map((menu, idx) => {
              // Perbaikan pemanggilan icon jika berupa function/component
              const Icon = menu.icon;
              const isActive = pathname === menu.value;

              return (
                <Link
                  key={idx}
                  href={menu.value}
                  className="relative flex flex-col items-center justify-center flex-1 h-full group"
                >
                  {/* Indikator Cahaya di Atas Icon saat Aktif */}
                  {isActive && (
                    <div className="absolute top-0 w-8 h-[2px] bg-gold-deep shadow-[0_0_15px_#B8860B] animate-pulse" />
                  )}

                  <div
                    className={twMerge(
                      "relative z-10 flex flex-col items-center justify-center transition-all duration-500",
                      isActive ? "-translate-y-1" : "translate-y-0",
                    )}
                  >
                    <div
                      className={twMerge(
                        "p-2 rounded-full transition-all duration-300",
                        isActive
                          ? "text-gold-deep drop-shadow-[0_0_8px_rgba(184,134,11,0.6)]"
                          : "text-white/40 group-hover:text-white/70",
                      )}
                    >
                      <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                    </div>

                    <span
                      className={twMerge(
                        "text-[7px] uppercase tracking-[0.2em] font-black transition-all duration-500 overflow-hidden whitespace-nowrap",
                        isActive
                          ? "h-3 opacity-100 mt-0 text-gold-deep"
                          : "h-0 opacity-0 mt-0 text-transparent",
                      )}
                    >
                      {menu.name.replace("The Brand", "Home")}
                    </span>
                  </div>

                  {/* Background Glow Halus saat Aktif */}
                  {isActive && (
                    <div className="absolute inset-0 bg-radial-gradient from-gold-deep/10 to-transparent opacity-50 pointer-events-none" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </>
  );
};

export default BottomBar;
