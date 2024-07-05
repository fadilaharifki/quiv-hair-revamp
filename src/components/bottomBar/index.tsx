"use client";

import useScreenSize from "@/hooks/useScreenSize";
import {
  DiamondIcon,
  HomeIcon,
  NewspaperIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const BottomBar = () => {
  const { breakpoint } = useScreenSize();
  const pathname = usePathname();
  const menus = [
    {
      icon: (className: string) => <HomeIcon className={className} />,
      path: "/",
      name: "Home",
    },
    {
      icon: (className: string) => <ShoppingBagIcon className={className} />,
      path: "/products",
      name: "Products",
    },
    {
      icon: (className: string) => <DiamondIcon className={className} />,
      path: "/quiz",
      name: "Quiz",
    },
    {
      icon: (className: string) => <NewspaperIcon className={className} />,
      path: "/blog",
      name: "Blog",
    },
    {
      icon: (className: string) => <PhoneIcon className={className} />,
      path: "/contact",
      name: "Contact",
    },
  ];
  return (
    <>
      {breakpoint === "sm" && (
        <nav
          className={twMerge(
            "sticky bottom-0 h-20 bg-white grid justify-around items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-50 grid-cols-5"
          )}
        >
          {menus.map((menu, idx) => {
            return (
              <Link
                className={twMerge(
                  "flex flex-col justify-center items-center gap-2"
                )}
                href={menu.path}
                key={idx}
              >
                {menu.icon(
                  `${
                    pathname === menu.path
                      ? "text-navy-blue"
                      : "text-light-brown-navbar"
                  }`
                )}
                <div
                  className={twMerge(
                    "text-xs",
                    pathname === menu.path
                      ? "text-navy-blue"
                      : "text-light-brown-navbar"
                  )}
                >
                  {menu.name}
                </div>
              </Link>
            );
          })}
        </nav>
      )}
    </>
  );
};

export default BottomBar;
