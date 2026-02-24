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
  SearchIcon,
  TvIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useToggleStore } from "@/stores/useToggleStore";

// Menu data tetap sama
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
  const { setIsOpen } = useToggleStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- TOP NAVBAR (Desktop Only) --- */}
      <nav
        className={twMerge(
          "fixed top-0 w-full z-[100] transition-all duration-500 hidden md:block",
          scrolled
            ? "h-16 bg-navy-blue/90 backdrop-blur-md border-b border-gold-deep/20"
            : "h-24 bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-12">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/" onClick={() => setIsOpen(true)} className="group">
              <Image
                width={scrolled ? 80 : 100}
                height={40}
                src={Logo}
                alt="Logo"
                className="transition-all duration-500 brightness-110"
              />
            </Link>
          </div>

          {/* Desktop Menu Tengah */}
          <div className="flex items-center justify-center gap-8">
            {menus.map((menu, idx) => {
              const isActive = pathname === menu.value;
              return (
                <Link
                  key={idx}
                  href={menu.value}
                  className={twMerge(
                    "text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-300 relative py-2",
                    isActive
                      ? "text-gold-deep"
                      : "text-white/60 hover:text-white",
                  )}
                >
                  {menu.name}
                  <span
                    className={twMerge(
                      "absolute bottom-0 left-0 h-[1px] bg-gold-deep transition-all duration-500",
                      isActive ? "w-full" : "w-0",
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Action */}
          <div className="flex-1 flex justify-end">
            <button className="text-white hover:text-gold-deep transition-colors">
              <SearchIcon size={18} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
