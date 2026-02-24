"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { instagram } from "@/constants/data";
import { ReelsCarousel } from "@/components/ReelsCarousel";
import { TitleComponent } from "@/components/title";
import { twMerge } from "tailwind-merge";

const LookBookPageModules = () => {
  const galery = [
    "/image/look-book/galery-1.webp",
    "/image/look-book/galery-2.webp",
    "/image/look-book/galery-3.webp",
    "/image/look-book/galery-4.webp",
    "/image/look-book/galery-5.webp",
  ];

  const reelsUrls = [
    "https://www.instagram.com/reel/DM61a8cv-Zc/",
    "https://www.instagram.com/reel/DLCpZNlvRdk/",
    "https://www.instagram.com/reel/DMLCiH8PWCO/",
    "https://www.instagram.com/reel/DKN7PIjSLDn/",
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] md:h-screen w-full overflow-hidden">
        <Image
          className="h-full w-full object-cover brightness-50 scale-105 transition-transform duration-[3000ms]"
          height={1200}
          width={1920}
          src="/image/look-book/lookbook-banner.webp"
          alt="Lookbook Banner"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-gold-deep font-mono tracking-[0.5em] text-[10px] uppercase mb-4">
            Archive
          </span>
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase font-montserrat">
            Lookbook
          </h1>
        </div>
      </section>

      {/* --- GALLERY SECTION (EDITORIAL GRID) --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center mb-20">
          <TitleComponent firstTitle="Visual" lastTitle="Archive" />
          <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase mt-4">
            Curated Style & Movement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
          {/* Item 1 - Besar (Vertical) */}
          <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl">
            <Image
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              src={galery[0]}
              alt="Gallery 1"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Item 2 - Horizontal */}
          <div className="md:col-span-8 md:row-span-1 group relative overflow-hidden rounded-2xl">
            <Image
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              src={galery[1]}
              alt="Gallery 2"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Item 3 & 4 - Square */}
          <div className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-2xl">
            <Image
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              src={galery[2]}
              alt="Gallery 3"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          <div className="md:col-span-4 md:row-span-1 group relative overflow-hidden rounded-2xl">
            <Image
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              src={galery[3]}
              alt="Gallery 4"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </section>

      {/* --- SOCIAL PROOF (REELS) --- */}
      <section className="bg-[#050505] py-24 border-y border-white/5">
        <div className="mb-16">
          <TitleComponent firstTitle="What" lastTitle="They Said" />
          <div className="flex justify-center mt-2">
            <div className="h-[1px] w-12 bg-gold-deep/50" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <ReelsCarousel reelsUrls={reelsUrls} />
        </div>
      </section>

      {/* --- CTA SECTION (CALL TO ACTION) --- */}
      <section className="py-32 px-6 flex justify-center">
        <div className="max-w-2xl w-full bg-navy-blue/10 border border-gold-deep/20 backdrop-blur-md rounded-[40px] p-12 text-center relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-deep/10 blur-[60px] rounded-full" />

          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase">
                Submit Your Style
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Styled with Quiv? Tag{" "}
                <span className="text-gold-deep font-bold">@quiv.hair</span> or
                submit your photo to be featured in our global archive.
              </p>
            </div>

            <Button
              onClick={() => window.open(instagram, "_blank")}
              className="bg-gold-deep hover:bg-gold-deep/80 text-black font-black uppercase tracking-[0.2em] text-[10px] px-10 py-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(184,134,11,0.3)]"
            >
              Upload on Instagram
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LookBookPageModules;
