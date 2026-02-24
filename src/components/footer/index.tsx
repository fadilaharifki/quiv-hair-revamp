/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Logo from "../../assets/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { menus } from "../navbar";
import React from "react";
import { phoneNumber, phoneNumberDash } from "@/constants/data";

const Footer = () => {
  const router = useRouter();

  const menusFooter = [
    {
      name: "Navigation",
      menu: menus.map((m) => ({ name: m.name, value: m.value })),
    },
    {
      name: "Support",
      menu: [
        { name: "FAQ", value: "/got-questions" },
        { name: "Shipping Policy", value: "#" },
      ],
    },
    {
      name: "Contact Us",
      menu: [
        { name: phoneNumberDash, value: `https://wa.me/${phoneNumber}` },
        { name: "Email", value: "mailto:admin@quivhair.com" },
      ],
    },
  ];

  return (
    <footer className="bg-black border-t border-gold-deep/10 pt-12 pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
          {/* Brand Identity Column - Less Spacing */}
          <div className="lg:col-span-2 space-y-4">
            <Image
              onClick={() => router.push("/")}
              className="cursor-pointer brightness-110 opacity-90 transition-all w-24 h-auto"
              width={100}
              height={30}
              src={Logo}
              alt="Quiv Logo"
            />
            <p className="text-gray-500 text-[11px] leading-relaxed max-w-[240px] font-light">
              Pushing the boundaries of hair precision. Engineering
              next-generation solutions for the modern lifestyle.
            </p>
          </div>

          {/* Dynamic Menus - Tight Spacing */}
          {menusFooter.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-gold-deep text-[9px] font-black uppercase tracking-[0.2em]">
                {group.name}
              </h4>
              <ul className="flex flex-col gap-2">
                {group.menu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.value}
                      className="text-gray-400 hover:text-white text-[12px] font-light transition-colors duration-300 block whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar Footer - Reduced Margin Top */}
        <div className="mt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] text-gray-600 uppercase tracking-widest font-medium">
            © 2026 QUIV HAIR.
          </p>
          <div className="flex gap-4 items-center opacity-40">
            <span className="text-[9px] text-gray-700 tracking-[0.3em] uppercase font-black italic">
              #QUIVTHEGAME
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
