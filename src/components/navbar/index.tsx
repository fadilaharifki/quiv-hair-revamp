"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Logo from "../../assets/svg/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  ShoppingBagIcon,
  BookIcon,
  NewspaperIcon,
  InfoIcon,
  UserCircle,
  LogOut,
  Globe,
  Coins,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useRegionStore } from "@/stores/useRegionStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { Button } from "@/components/ui/button";
import { useLogoutUser } from "@/hooks/api/useLogoutUser";

export const menus = [
  { icon: HomeIcon, value: "/", name: "The Brand", isBottomBar: true },
  {
    icon: ShoppingBagIcon,
    value: "/why-quiv",
    name: "Why Quiv",
    isBottomBar: true,
  },
  { icon: BookIcon, value: "/look-book", name: "Look book", isBottomBar: true },
  { icon: NewspaperIcon, value: "/feeds", name: "Feeds", isBottomBar: true },
  {
    icon: InfoIcon,
    value: "/got-questions",
    name: "FAQ",
    isBottomBar: true,
  },
];

const NavBar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { region, setRegion } = useRegionStore();
  const { mutate: logoutTrigger } = useLogoutUser();
  const { user } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    logoutTrigger();
  };

  return (
    <nav
      className={twMerge(
        "fixed top-0 w-full z-[100] transition-all duration-500 hidden md:block",
        // Menggunakan clinical-blue solid agar teks putih terlihat sangat jelas
        scrolled
          ? "h-16 bg-clinical-blue shadow-lg border-b border-clinical-white/10"
          : "h-20 bg-clinical-blue/95 backdrop-blur-md",
      )}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-12">
        {/* --- LOGO --- */}
        <div className="flex-1">
          <Link href="/" className="group inline-block">
            <Image
              width={scrolled ? 70 : 85}
              height={35}
              src={Logo}
              alt="Logo"
              // Memastikan logo putih bersih di atas biru
              className="transition-all duration-500 brightness-0 invert opacity-100 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* --- DESKTOP MENU --- */}
        <div className="flex items-center justify-center gap-10">
          {menus.map((menu, idx) => {
            const isActive = pathname === menu.value;
            return (
              <Link
                key={idx}
                href={menu.value}
                className={twMerge(
                  "text-[10px] tracking-[0.25em] uppercase font-semibold transition-all duration-300 relative py-2",
                  isActive
                    ? "text-clinical-white"
                    : "text-clinical-blue-light/60 hover:text-clinical-white",
                )}
              >
                {menu.name}
                <span
                  className={twMerge(
                    "absolute bottom-0 left-0 h-[2px] bg-clinical-white transition-all duration-500",
                    isActive ? "w-full" : "w-0",
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* --- RIGHT ACTION --- */}
        <div className="flex-1 flex items-center justify-end gap-6">
          {/* Region Switcher - Compact Clinical Version */}
          <div className="flex items-center bg-clinical-white/5 border border-clinical-white/10 p-0.5 rounded-none group relative">
            {/* Minimalist Switcher Button - IDR */}
            <button
              onClick={() => setRegion("ID")}
              className={twMerge(
                "flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] transition-all px-3 py-2",
                region === "ID"
                  ? "bg-clinical-white text-clinical-blue shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                  : "text-clinical-blue-light/30 hover:text-clinical-white/60",
              )}
            >
              <Coins
                size={15}
                strokeWidth={2.5}
                className={region === "ID" ? "opacity-100" : "opacity-40"}
              />
              IDR
            </button>

            {/* Vertical Technical Divider */}
            <div className="w-[1px] h-3 bg-clinical-white/10 mx-0.5" />

            {/* Minimalist Switcher Button - USD */}
            <button
              onClick={() => setRegion("INT")}
              className={twMerge(
                "flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] transition-all px-3 py-2",
                region === "INT"
                  ? "bg-clinical-white text-clinical-blue shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                  : "text-clinical-blue-light/30 hover:text-clinical-white/60",
              )}
            >
              <Globe
                size={15}
                strokeWidth={2.5}
                className={region === "INT" ? "opacity-100" : "opacity-40"}
              />
              USD
            </button>

            {/* Subtle Corner Detail (Aesthetic Only) */}
            <div className="absolute -top-[1px] -right-[1px] w-1 h-1 border-t border-r border-clinical-blue/40 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Auth Action */}
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-clinical-white font-bold uppercase tracking-widest">
                {user.full_name?.split(" ")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="text-clinical-white/60 hover:text-clinical-white"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link href="/login">
              <Button
                variant="outline"
                className="border-clinical-white/30 text-clinical-white hover:bg-clinical-white hover:text-clinical-blue rounded-none h-10 px-6 text-[10px] font-semibold uppercase tracking-widest transition-all"
              >
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
