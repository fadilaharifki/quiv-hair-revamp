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
} from "lucide-react";
import { useEffect, useState } from "react";
import { useToggleStore } from "@/stores/useToggleStore";
import { useRegionStore } from "@/stores/useRegionStore";
import { useAuthStore } from "@/stores/useAuthStore";
import { Button } from "@/components/ui/button";
import { useLogoutUser } from "@/hooks/api/useLogoutUser";

export const menus = [
  { icon: HomeIcon, value: "/", name: "The Brand", isBottomBar: true },
  {
    icon: ShoppingBagIcon,
    value: "/why-quiv",
    name: "WhyQuiv",
    isBottomBar: true,
  },
  { icon: BookIcon, value: "/look-book", name: "Lookbook", isBottomBar: true },
  { icon: NewspaperIcon, value: "/feeds", name: "Feeds", isBottomBar: true },
  {
    icon: InfoIcon,
    value: "/got-questions",
    name: "Got Questions",
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
        scrolled
          ? "h-16 bg-navy-blue/90 backdrop-blur-md border-b border-gold-deep/20"
          : "h-24 bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-12">
        {/* --- LOGO --- */}
        <div className="flex-1">
          <Link href="/" className="group inline-block">
            <Image
              width={scrolled ? 70 : 90}
              height={35}
              src={Logo}
              alt="Logo"
              className="transition-all duration-500 brightness-110 group-hover:scale-105"
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
                  "text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-300 relative py-2",
                  isActive
                    ? "text-gold-deep"
                    : "text-white/50 hover:text-white",
                )}
              >
                {menu.name}
                <span
                  className={twMerge(
                    "absolute bottom-0 left-0 h-[1.5px] bg-gold-deep transition-all duration-500",
                    isActive ? "w-full" : "w-0",
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* --- RIGHT ACTION --- */}
        <div className="flex-1 flex items-center justify-end gap-6">
          {/* Region Switcher */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1.5 backdrop-blur-sm">
            <button
              onClick={() => setRegion("ID")}
              className={twMerge(
                "flex items-center gap-1.5 text-[9px] font-bold tracking-widest transition-all px-3 py-1 rounded-full",
                region === "ID"
                  ? "bg-white/10 text-gold-deep"
                  : "text-white/30 hover:text-white",
              )}
            >
              <span>IDR</span>
            </button>
            <button
              onClick={() => setRegion("INT")}
              className={twMerge(
                "flex items-center gap-1.5 text-[9px] font-bold tracking-widest transition-all px-3 py-1 rounded-full",
                region === "INT"
                  ? "bg-white/10 text-gold-deep"
                  : "text-white/30 hover:text-white",
              )}
            >
              <span>USD</span>
            </button>
          </div>

          {/* --- AUTH ACTION --- */}
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end">
                <span className="text-[8px] text-white/40 uppercase tracking-widest">
                  Account
                </span>
                <span className="text-[10px] text-white font-bold tracking-wide uppercase">
                  {user.full_name?.split(" ")[0]}
                </span>
              </div>
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="group flex items-center gap-2 text-white/70 hover:text-red-500 transition-colors p-2"
              >
                <LogOut className="w-4 h-4 text-red-500/80 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Logout
                </span>
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button
                variant="ghost"
                className="group flex items-center gap-2 text-white/70 hover:text-gold-deep transition-colors"
              >
                <UserCircle className="w-4 h-4 text-gold-deep group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Login
                </span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
