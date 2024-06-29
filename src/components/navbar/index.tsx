"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Logo from "../../assets/svg/logo.svg";
import Search from "../../assets/svg/search.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const menus = [
  {
    value: "/about-us",
    name: "About Us",
  },
  {
    value: "/products",
    name: "Products",
  },
  {
    value: "/look-book",
    name: "Lookbook",
  },
  {
    value: "/blog",
    name: "Blog",
  },
  {
    value: "/faq",
    name: "FAQs",
  },
  {
    value: "/contact",
    name: "Contact",
  },
];

const NavBar = () => {
  const pathname = usePathname();
  const refNav = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== lastScrollY) {
        setIsScrolling(true);
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      setIsScrolling(false);
    }, 150);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [lastScrollY]);

  const renderMenu = () => {
    return (
      <div className="flex flex-col sm:flex-row justify-evenly w-full gap-3 sm:gap-0">
        {menus.map((menu, idx) => {
          return (
            <Link
              key={idx}
              href={menu.value}
              className={twMerge(
                "  pb-2 text-white transition duration-300 ease-in-out",
                !openMenu
                  ? pathname === menu.value
                    ? "border-b-[1px] pb-2 border-white font-semibold hover:border-b-[1px] hover:border-white"
                    : "border-b-[1px] border-transparent font-semibold hover:border-b-[1px] hover:border-white"
                  : pathname === menu.value
                  ? "font-semibold"
                  : ""
              )}
            >
              {menu.name}
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={`sticky top-0 z-50 ${
        isScrolling ? "opacity-0" : "opacity-100"
      } transition-opacity duration-500`}
    >
      <div
        ref={refNav}
        className={twMerge(
          "grid grid-cols-3 sm:grid-cols-5 w-screen px-10 sm:px-0 h-20 bg-transparent bg-light-brown-navbar justify-center items-center fixed bg-opacity-50 z-50"
        )}
      >
        <div className="sm:hidden flex justify-start items-center">
          <div
            className={`transform transition-transform duration-500 ${
              openMenu ? "rotate-180" : ""
            }`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {!openMenu ? (
              <MenuIcon size={30} color="#ffffff" strokeWidth={2.25} />
            ) : (
              <X size={30} color="#ffffff" strokeWidth={2.25} />
            )}
          </div>
        </div>
        <div className="flex sm:justify-center items-center">
          <Link href={"/"}>
            <Image width={100} height={100} src={Logo} alt="Logo"></Image>
          </Link>
        </div>
        <div className="hidden sm:flex justify-evenly items-center col-span-3">
          {renderMenu()}
        </div>
        <div className="flex sm:flex justify-end sm:justify-center items-center">
          <Image width={25} height={25} src={Search} alt="Search"></Image>
        </div>
      </div>
      <div
        className={twMerge(
          "transition-all duration-500 ease-in-out w-screen",
          openMenu
            ? `grid grid-cols-2 sm:grid-cols-5 px-10 sm:px-0 bg-transparent bg-light-brown-navbar justify-center absolute items-center bg-opacity-50 z-50`
            : "hidden"
        )}
        style={{ top: `${refNav?.current?.offsetHeight}px` }}
      >
        <div className="flex flex-col gap-4">{renderMenu()}</div>
      </div>
    </div>
  );
};

export default NavBar;
