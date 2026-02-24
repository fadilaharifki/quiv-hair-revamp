/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import useScreenSize from "@/hooks/useScreenSize";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { useToggleStore } from "@/stores/useToggleStore";
import { useAuthStore } from "@/stores/useAuthStore"; // Import Auth Store
import {
  HomeIcon,
  ShoppingBagIcon,
  BookIcon,
  NewspaperIcon,
  UserCircle,
} from "lucide-react";

const BottomBar = () => {
  const { breakpoint } = useScreenSize();
  const { setIsOpen } = useToggleStore();
  const pathname = usePathname();

  // Ambil data user dari Zustand
  const { user } = useAuthStore();

  // Mapping menu secara dinamis berdasarkan status login
  const bottomMenus = [
    { icon: HomeIcon, value: "/", name: "Home" },
    { icon: ShoppingBagIcon, value: "/why-quiv", name: "WhyQuiv" },
    { icon: BookIcon, value: "/look-book", name: "Lookbook" },
    { icon: NewspaperIcon, value: "/feeds", name: "Feeds" },
    {
      icon: UserCircle,
      // Jika login ke /account, jika tidak ke /login
      value: user ? "/account" : "/login",
      name: user ? "Account" : "Login",
    },
  ];

  useEffect(() => {
    // Logic lama kamu untuk auto-open menu di home mobile
    if (breakpoint === "sm" && pathname === "/") {
      // Kamu bisa sesuaikan logic activeMenu di sini jika perlu
    }
  }, [pathname, breakpoint]);

  return (
    <>
      {breakpoint === "sm" && (
        <nav className="md:hidden fixed bottom-2 left-1/2 -translate-x-1/2 w-[92%] max-w-[400px] bg-navy-blue/80 backdrop-blur-2xl border border-white/5 z-[100] px-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-3xl overflow-hidden">
          <div className="flex justify-around items-center h-18 py-2">
            {bottomMenus.map((menu, idx) => {
              const Icon = menu.icon;
              // Check active status
              const isActive = pathname === menu.value;

              return (
                <Link
                  key={idx}
                  href={menu.value}
                  className="relative flex flex-col items-center justify-center flex-1 h-full group"
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                    <div className="absolute -top-2 w-10 h-[3px] bg-gold-deep rounded-full shadow-[0_0_15px_#B8860B]" />
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
                          ? "text-gold-deep drop-shadow-[0_0_10px_rgba(184,134,11,0.8)]"
                          : "text-white/30 group-hover:text-white/70",
                      )}
                    >
                      {/* Tampilkan Avatar User jika sudah login di menu Account */}
                      {user && menu.name === "Account" ? (
                        <div
                          className={twMerge(
                            "w-6 h-6 rounded-full overflow-hidden border",
                            isActive ? "border-gold-deep" : "border-white/20",
                          )}
                        >
                          <img
                            src={
                              user.avatar_url ||
                              "https://avatar.vercel.sh/guest"
                            }
                            alt="profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                      )}
                    </div>

                    <span
                      className={twMerge(
                        "text-[8px] uppercase tracking-[0.15em] font-black transition-all duration-500",
                        isActive
                          ? "h-3 opacity-100 scale-100 text-gold-deep"
                          : "h-0 opacity-0 scale-50 text-transparent",
                      )}
                    >
                      {menu.name}
                    </span>
                  </div>

                  {/* Glow Effect Background */}
                  {isActive && (
                    <div className="absolute inset-x-2 inset-y-2 bg-gold-deep/5 blur-xl rounded-full pointer-events-none" />
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
