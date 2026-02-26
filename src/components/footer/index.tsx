/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Logo from "../../assets/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { menus } from "../navbar";
import React from "react";
import { phoneNumber, phoneNumberDash } from "@/constants/data";
import { FlaskConical, ShieldCheck } from "lucide-react";

const Footer = () => {
  const router = useRouter();

  const menusFooter = [
    {
      name: "Directory",
      menu: menus.map((m) => ({ name: m.name, value: m.value })),
    },
    {
      name: "Support",
      menu: [
        { name: "FAQ", value: "/got-questions" },
        { name: "Shipping Protocol", value: "#" },
      ],
    },
    {
      name: "Assistance",
      menu: [
        {
          name: `WhatsApp: ${phoneNumberDash}`,
          value: `https://wa.me/${phoneNumber}`,
        },
        {
          name: "Email: admin@quivhair.com",
          value: "mailto:admin@quivhair.com",
        },
      ],
    },
  ];

  return (
    // Background menggunakan clinical-white murni
    <footer className="bg-clinical-white border-t border-clinical-border pt-20 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Identity Column */}
          <div className="lg:col-span-2 space-y-6">
            <Image
              onClick={() => router.push("/")}
              className="cursor-pointer mix-blend-multiply opacity-90 transition-all w-28 h-auto"
              width={120}
              height={35}
              src={Logo}
              alt="Quiv Logo"
            />
            <div className="space-y-4">
              <p className="text-clinical-gray-medium text-[12px] leading-relaxed max-w-[280px] font-medium">
                Quiv Professional Hair Science™ is dedicated to the development
                of high-performance formulations through rigorous laboratory
                standards.
              </p>
              {/* Clinical Badge - Menggunakan blue-light & clinical-blue */}
              <div className="flex items-center gap-2 text-clinical-blue font-black text-[9px] uppercase tracking-widest border border-clinical-blue/20 w-fit px-3 py-1 bg-clinical-blue-light">
                <ShieldCheck size={12} /> Laboratory Tested
              </div>
            </div>
          </div>

          {/* Navigation Groups */}
          {menusFooter.map((group, idx) => (
            <div key={idx} className="space-y-6">
              {/* Heading menggunakan gray-dark untuk kontras profesional */}
              <h4 className="text-clinical-gray-dark text-[10px] font-black uppercase tracking-[0.25em] border-b border-clinical-blue pb-2 w-fit">
                {group.name}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.menu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.value}
                      className="text-clinical-gray-medium hover:text-clinical-blue text-[11px] font-bold transition-all duration-300 block whitespace-nowrap uppercase tracking-wider"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Clinical Compliance Style */}
        <div className="mt-20 pt-8 border-t border-clinical-gray-light flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            {/* Teks hak cipta menggunakan gray-dark */}
            <p className="text-[10px] text-clinical-gray-dark uppercase tracking-widest font-black">
              © 2025 QUIV PROFESSIONAL HAIR SCIENCE.
            </p>
            <span className="hidden md:block h-3 w-[1px] bg-clinical-border" />
            <p className="text-[10px] text-clinical-gray-medium uppercase tracking-tighter font-medium">
              Authorized Digital Dispensing
            </p>
          </div>

          <div className="flex gap-6 items-center">
            {/* Tagline menggunakan opacity dari clinical-blue */}
            <div className="flex items-center gap-2 text-clinical-blue/50 font-black italic text-[10px] tracking-[0.4em] uppercase">
              <FlaskConical size={14} />
              #QuivClinical
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
