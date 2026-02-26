"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { instagram } from "@/constants/data";
import { ReelsCarousel } from "@/components/ReelsCarousel";
import { TitleComponent } from "@/components/title";
import { Instagram, Scan, Maximize2, Activity } from "lucide-react";

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
    <div className="bg-clinical-white text-clinical-gray-dark min-h-screen font-inter">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-clinical-gray-dark">
        <Image
          className="h-full w-full object-cover"
          height={1200}
          width={1920}
          src="/image/look-book/lookbook-banner.webp"
          alt="Lookbook System Archive"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-clinical-white via-transparent to-black/10" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-clinical-blue font-bold tracking-[0.5em] text-[10px] uppercase mb-4 bg-clinical-white/80 backdrop-blur-sm px-4 py-2 border border-clinical-blue/20">
            System Archive
          </span>
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase font-montserrat text-clinical-white">
            LOOK<span className="text-clinical-blue text-glow">BOOK.</span>
          </h1>
        </div>
      </section>

      {/* --- GALLERY SECTION: IMPROVED GRID --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col items-center mb-24">
          <TitleComponent
            firstTitle="Visual"
            lastTitle="Library"
            variant="primary"
          />
          <div className="flex items-center gap-4 mt-6">
            <Activity className="text-clinical-blue" size={14} />
            <p className="text-clinical-gray-medium text-[10px] font-bold tracking-[0.4em] uppercase">
              Curated Result Mapping
            </p>
          </div>
        </div>

        {/* Modular Grid System 
            Using a defined height for rows to ensure images are visible
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-clinical-border border border-clinical-border">
          {/* Item 1: Large Vertical Feature */}
          <div className="md:col-span-4 md:row-span-2 relative h-[500px] md:h-auto group overflow-hidden bg-clinical-gray-light">
            <Image
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              src={galery[0]}
              alt="Archive 01"
            />
            <div className="absolute top-4 left-4 bg-clinical-blue text-white text-[8px] font-bold px-2 py-1 uppercase tracking-widest z-10">
              LOG_A01
            </div>
          </div>

          {/* Item 2: Wide Horizontal */}
          <div className="md:col-span-8 md:row-span-1 relative h-[300px] md:h-[400px] group overflow-hidden bg-clinical-gray-light">
            <Image
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              src={galery[1]}
              alt="Archive 02"
            />
            <div className="absolute top-4 left-4 bg-clinical-blue text-white text-[8px] font-bold px-2 py-1 uppercase tracking-widest z-10">
              LOG_A02
            </div>
          </div>

          {/* Item 3: Square */}
          <div className="md:col-span-4 md:row-span-1 relative h-[300px] md:h-[400px] group overflow-hidden bg-clinical-gray-light border-r border-clinical-border">
            <Image
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              src={galery[2]}
              alt="Archive 03"
            />
            <div className="absolute inset-0 bg-clinical-blue/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Maximize2 className="text-white" size={24} />
            </div>
          </div>

          {/* Item 4: Square */}
          <div className="md:col-span-4 md:row-span-1 relative h-[300px] md:h-[400px] group overflow-hidden bg-clinical-gray-light">
            <Image
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              src={galery[3]}
              alt="Archive 04"
            />
            <div className="absolute bottom-4 right-4 text-clinical-gray-dark/40 text-[9px] font-mono tracking-tighter z-10">
              SCAN_TYPE_B
            </div>
          </div>

          {/* Item 5: Full Width Mobile / Third Column Desktop */}
          <div className="md:col-span-12 lg:col-span-12 relative h-[300px] md:h-[500px] group overflow-hidden bg-clinical-gray-light border-t border-clinical-border">
            <Image
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              src={galery[4]}
              alt="Archive 05"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-clinical-blue/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6">
              <span className="text-white text-[10px] font-bold tracking-[.3em] uppercase bg-clinical-blue px-3 py-1">
                Standardized Result
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOCIAL LOGS --- */}
      <section className="bg-clinical-blue-light/20 py-24 border-y border-clinical-border">
        <div className="mb-20 px-6">
          <TitleComponent
            firstTitle="Technical"
            lastTitle="Motion"
            variant="secondary"
          />
          <p className="text-center text-clinical-gray-medium text-[10px] font-bold tracking-[0.3em] uppercase mt-4">
            Live Stability Dynamics
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <ReelsCarousel reelsUrls={reelsUrls} />
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 px-6 flex justify-center bg-clinical-white">
        <div className="max-w-3xl w-full border-t-2 border-clinical-blue pt-16 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-clinical-white px-6">
            <Scan className="text-clinical-blue" size={32} />
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter uppercase text-clinical-gray-dark">
                Identify Your Style
              </h2>
              <p className="text-clinical-gray-medium text-sm md:text-base font-medium max-w-xl mx-auto">
                Tag{" "}
                <span className="text-clinical-blue font-bold">@quiv.hair</span>{" "}
                to standardize your look in our clinical database.
              </p>
            </div>

            <Button
              onClick={() => window.open(instagram, "_blank")}
              className="bg-clinical-blue hover:bg-clinical-gray-dark text-clinical-white font-bold uppercase tracking-widest text-[10px] px-12 py-8 rounded-none transition-all"
            >
              <Instagram className="mr-3" size={16} />
              Open Digital Portal
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LookBookPageModules;
