"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Logo from "../../assets/svg/logo.svg";
import Search from "../../assets/svg/search.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookIcon,
  CircleX,
  HomeIcon,
  InfoIcon,
  MenuIcon,
  NewspaperIcon,
  PhoneIcon,
  SearchIcon,
  ShoppingBagIcon,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import useScreenSize from "@/hooks/useScreenSize";
import { useToggleStore } from "@/stores/useToggleStore";

export const menus = [
  {
    icon: (className: string) => <HomeIcon className={className} />,
    value: "/",
    name: "The Brand",
    isBottomBar: true,
  },
  {
    icon: (className: string) => <ShoppingBagIcon className={className} />,
    value: "/why-quiv",
    name: "WhyQuiv",
    isBottomBar: true,
  },
  // {
  //   icon: (className: string) => <DiamondIcon className={className} />,
  //   value: "/quiz",
  //   name: "Quiz",
  // isBottomBar:true,
  // },
  {
    icon: (className: string) => <BookIcon className={className} />,
    value: "/look-book",
    name: "Lookbook",
    isBottomBar: true,
  },
  {
    icon: (className: string) => <NewspaperIcon className={className} />,
    value: "/feeds",
    name: "Feeds",
    isBottomBar: true,
  },
  {
    icon: (className: string) => <InfoIcon className={className} />,
    value: "/got-questions",
    name: "Got Questions",
    isBottomBar: true,
  },
];

const NavBar = () => {
  const pathname = usePathname();
  const refNav = useRef<HTMLDivElement>(null);
  const { width, breakpoint } = useScreenSize();
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openSearch, setOpenSearch] = useState(false);
  const { setIsOpen } = useToggleStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== lastScrollY) {
        setIsScrolling(true);
        setOpenMenu(false);
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
    <nav className="sticky top-0 z-50">
      <div
        ref={refNav}
        className={twMerge(
          "grid grid-cols-3 sm:grid-cols-7 w-screen px-10 sm:px-0 h-20 bg-transparent bg-light-primary-navbar justify-center items-center"
        )}
      >
        <div className="sm:hidden flex justify-start items-center">
          <div
            className={`transform transition-transform duration-500 ${
              openMenu ? "rotate-180" : ""
            }`}
            onClick={() => {
              setOpenSearch(false);
              setOpenMenu(!openMenu);
            }}
          >
            {!openMenu ? (
              <MenuIcon size={30} color="#ffffff" strokeWidth={2.25} />
            ) : (
              <X size={30} color="#ffffff" strokeWidth={2.25} />
            )}
          </div>
        </div>
        {openSearch && breakpoint !== "sm" ? (
          <div className="flex w-screen px-5">
            <Input
              placeholder="Search . . . "
              suffix={
                <div className="flex flex-row gap-5">
                  <SearchIcon className=" cursor-pointer hover:scale-125 duration-300" />
                  <CircleX
                    className=" cursor-pointer hover:scale-125 duration-300"
                    onClick={() => {
                      setOpenSearch(!openSearch);
                    }}
                  />
                </div>
              }
            />
          </div>
        ) : (
          <>
            <div className="flex sm:justify-center items-center col-span-1">
              <Link
                href={"/"}
                onClick={() => {
                  if (pathname === "/") {
                    // window.location.reload();
                    setIsOpen(true);
                  }
                }}
              >
                <Image width={100} height={100} src={Logo} alt="Logo"></Image>
              </Link>
            </div>
            <div className="col-span-1"></div>
            <div className="hidden sm:flex justify-around items-center col-span-4">
              {renderMenu()}
            </div>
            <div
              className="hidden justify-end sm:justify-center items-center"
              onClick={() => {
                setOpenSearch(!openSearch);
                setOpenMenu(false);
              }}
            >
              <SearchIcon
                color="#ffffff"
                className=" cursor-pointer hover:scale-125 duration-300"
              />
            </div>
          </>
        )}
      </div>
      {openMenu && (
        <div
          className={twMerge(
            "transition-all duration-500 ease-in-out w-screen py-5",
            openMenu
              ? `grid grid-cols-2 sm:grid-cols-5 px-10 sm:px-0 bg-transparent bg-light-primary-navbar justify-center absolute items-center z-50`
              : "hidden"
          )}
          style={{ top: `${refNav?.current?.offsetHeight}px` }}
        >
          <div className="flex flex-col gap-4">{renderMenu()}</div>
        </div>
      )}
      {openSearch && breakpoint === "sm" && (
        <div
          className={twMerge(
            "transition-all duration-500 ease-in-out w-screen py-5",
            openSearch
              ? `grid grid-cols-2 sm:grid-cols-5 pb-10 bg-transparent bg-light-primary-navbar justify-center absolute items-center z-50`
              : "hidden"
          )}
          style={{ top: `${refNav?.current?.offsetHeight}px` }}
        >
          <div className="flex w-screen px-5">
            <Input placeholder="Search . . . " suffix={<SearchIcon />} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
