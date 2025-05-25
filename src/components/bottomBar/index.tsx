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
  const bottomBarCount = bottomMenus.length;

  return (
    <>
      {breakpoint === "sm" && (
        <nav
          className={twMerge(
            "sticky bottom-0 h-20 px-2 bg-white grid justify-around items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-30 md:hidden"
          )}
          style={{
            gridTemplateColumns: `repeat(${bottomBarCount}, minmax(0, 1fr))`,
          }}
        >
          {bottomMenus.map((menu, idx) => {
            const isActive = pathname === menu.value;

            return (
              <Link
                href={menu.value}
                key={idx}
                onClick={() => {
                  setActiveMenu(menu.name);
                }}
                className={twMerge(
                  "flex flex-col items-center justify-start gap-1 relative transition-all duration-300 ease-in-out"
                )}
              >
                {menu.icon && (
                  <div
                    className={twMerge(
                      "transition-all duration-300 ease-in-out p-2",
                      isActive ? "bg-navy-blue rounded-full" : "bg-transparent"
                    )}
                  >
                    {menu.icon(
                      isActive
                        ? "text-white transition-colors duration-300 ease-in-out"
                        : "text-light-primary-navbar transition-colors duration-300 ease-in-out"
                    )}
                  </div>
                )}

                <div
                  className={twMerge(
                    "text-xs transition-colors duration-300 ease-in-out text-center leading-tight max-w-[60px] truncate",
                    isActive
                      ? "text-navy-blue font-semibold"
                      : "text-light-primary-navbar"
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
