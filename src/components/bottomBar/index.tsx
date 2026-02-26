/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import useScreenSize from "@/hooks/useScreenSize";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";
import { useToggleStore } from "@/stores/useToggleStore";
import { useAuthStore } from "@/stores/useAuthStore";
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
  const { user } = useAuthStore();

  const bottomMenus = [
    { icon: HomeIcon, value: "/", name: "Home" },
    { icon: ShoppingBagIcon, value: "/why-quiv", name: "WhyQuiv" },
    { icon: BookIcon, value: "/look-book", name: "Lookbook" },
    { icon: NewspaperIcon, value: "/feeds", name: "Feeds" },
    {
      icon: UserCircle,
      value: user ? "/account" : "/login",
      name: user ? "Account" : "Login",
    },
  ];

  return (
    <>
      {breakpoint === "sm" && (
        <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[420px] bg-clinical-white/95 backdrop-blur-xl border border-clinical-border z-[100] px-1 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-none overflow-hidden">
          {/* Technical Corner Accents */}
          <div className="absolute top-0 left-0 w-1 h-1 bg-clinical-blue" />
          <div className="absolute top-0 right-0 w-1 h-1 bg-clinical-blue" />

          <div className="flex justify-around items-center h-16 py-1">
            {bottomMenus.map((menu, idx) => {
              const Icon = menu.icon;
              const isActive = pathname === menu.value;

              return (
                <Link
                  key={idx}
                  href={menu.value}
                  className="relative flex flex-col items-center justify-center flex-1 h-full group transition-all"
                >
                  <div
                    className={twMerge(
                      "relative z-10 flex flex-col items-center justify-center transition-all duration-300",
                      isActive ? "scale-105" : "scale-100",
                    )}
                  >
                    <div
                      className={twMerge(
                        "p-1.5 transition-all duration-300",
                        isActive
                          ? "text-clinical-blue"
                          : "text-clinical-gray-medium/40",
                      )}
                    >
                      {user && menu.name === "Account" ? (
                        <div
                          className={twMerge(
                            "w-5 h-5 overflow-hidden border transition-colors",
                            isActive
                              ? "border-clinical-blue"
                              : "border-clinical-border",
                          )}
                        >
                          <img
                            src={
                              user.avatar_url ||
                              "https://avatar.vercel.sh/guest"
                            }
                            alt="profile"
                            className={twMerge(
                              "w-full h-full object-cover transition-all",
                              !isActive && "grayscale opacity-50",
                            )}
                          />
                        </div>
                      ) : (
                        <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
                      )}
                    </div>

                    <span
                      className={twMerge(
                        "text-[7px] font-bold uppercase tracking-[0.2em] transition-all duration-300",
                        isActive
                          ? "opacity-100 text-clinical-blue mt-0.5"
                          : "opacity-0 h-0 text-transparent pointer-events-none",
                      )}
                    >
                      {menu.name}
                    </span>
                  </div>

                  {/* Active Indicator: Bottom Border */}
                  {isActive && (
                    <div className="absolute bottom-0 w-full h-[2px] bg-clinical-blue" />
                  )}

                  {/* Micro Status Dot */}
                  {isActive && (
                    <div className="absolute top-2 right-1/4 w-1 h-1 bg-clinical-blue rounded-full animate-pulse" />
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
