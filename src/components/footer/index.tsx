"use client";

import LogoBlack from "../../assets/svg/logo-black.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { menus } from "../navbar";
import React from "react";
import { phoneNumber, phoneNumberDash } from "@/constants/data";

interface MenuItem {
  name?: string;
  url?: string;
  value?: string;
  target?: string;
  icon?: (className: string) => React.ReactNode;
}

interface MenuGroup {
  value?: string;
  name: string;
  typeTitle?: string;
  address?: string;
  menu?: MenuItem[];
}

const Footer = () => {
  const router = useRouter();
  const menusFooter: MenuGroup[] = [
    {
      name: LogoBlack,
      typeTitle: "icon",
      address: "",
    },
    {
      name: "Main Menu",
      menu: [...menus],
    },
    {
      name: "",
      menu: [],
    },
    {
      name: "",
      menu: [],
    },
    {
      name: "Contact",
      menu: [
        {
          name: phoneNumberDash,
          url: `https://wa.me/${phoneNumber}`,
          target: "_blank",
        },
        {
          name: "admin@quivhair.com",
          url: "mailto:admin@quivhair.com",
          target: "_blank",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-screen bg-[#E8E3DC]">
      <div className=" bg-soft-gray w-screen grid grid-cols-1 sm:grid-cols-5 p-10 gap-5 sm:gap-10 sm:px-32">
        {menusFooter.map((item, idx) => {
          if (item.typeTitle === "icon") {
            return (
              <div key={idx}>
                <Image
                  onClick={() => {
                    router.push("/");
                  }}
                  className="mb-5 sm:mb-10 cursor-pointer scale-110"
                  width={100}
                  height={100}
                  src={LogoBlack}
                  alt="Logo"
                ></Image>
                <div className="flex flex-col   font-medium hover:font-semibold text-sm sm:text-lg gap-4">
                  {item.address}
                </div>
              </div>
            );
          }
          return (
            <div key={idx}>
              <div
                className={twMerge(
                  "flex flex-col font-light text-sm sm:text-lg mb-5 sm:mb-10"
                )}
              >
                {item.name}
              </div>
              <div className="flex flex-col   text-sm sm:text-lg gap-2 sm:gap-4">
                {item.menu?.map((menu, index) => {
                  if (!menu.value) {
                    return (
                      <span
                        className={
                          "cursor-not-allowed font-normal hover:font-medium"
                        }
                        key={index}
                      >
                        {menu.name}
                      </span>
                    );
                  }
                  return (
                    <Link
                      href={menu.value}
                      className="font-normal hover:font-medium"
                      key={index}
                      target={menu?.target}
                    >
                      {menu.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div>
        <div className="border-b border-navy-blue w-screen border-2 sm:my-10"></div>
        <div className="flex flex-col   font-base text-sm sm:text-lg text-center mt-5 sm:mt-20">
          © All Rights Reserved 2024 - QUIV
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
