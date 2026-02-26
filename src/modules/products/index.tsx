"use client";

import ArrowDown from "@/components/arrow-down";
import { CarouselBannerComponent } from "@/components/carousel-banner";
import PaginationComponent from "@/components/pagination";
import { TitleComponent } from "@/components/title";
import { PRODUCTS_REGISTRY } from "@/constants/data";
import Image from "next/image";
import { Activity, Beaker, Box, ChevronRight, Cpu } from "lucide-react";
import { toast } from "sonner";

const ProductsPageModules = () => {
  const handleScroll = () => {
    const element = document.getElementById("inventory-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dataCarousel = [
    {
      id: "1",
      span: 1,
      child: [
        {
          name: "System Series 01",
          span: 1,
          url: "/image/why-quiv/banner-why-quiv-2.webp",
        },
      ],
    },
    {
      id: "2",
      span: 1,
      child: [
        {
          name: "System Series 02",
          span: 1,
          url: "/image/why-quiv/banner-why-quiv-3.webp",
        },
      ],
    },
  ];

  return (
    <div className="bg-clinical-white text-clinical-gray-dark font-inter min-h-screen">
      {/* --- HERO: TECHNICAL OVERVIEW --- */}
      <section className="relative h-[70vh] md:h-[90vh] w-full overflow-hidden bg-clinical-gray-dark">
        <Image
          className="h-full w-full object-cover opacity-80"
          height={1200}
          width={1920}
          src="/image/why-quiv/banner-whyquiv-hero.webp"
          alt="Technical Series Hero"
          priority
        />
        {/* Blue Tint Overlay */}
        <div className="absolute inset-0 bg-clinical-blue/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-clinical-white via-transparent to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-3 mb-6 bg-clinical-white/10 backdrop-blur-md px-4 py-2 border border-clinical-white/20">
            <Cpu size={14} className="text-clinical-blue" />
            <span className="text-clinical-white font-bold tracking-[0.5em] text-[10px] uppercase">
              Production Standard v.2.6
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase font-montserrat text-clinical-white">
            Product
            <span className="text-clinical-blue text-glow">Systems.</span>
          </h1>
          <p className="mt-8 text-clinical-white font-medium tracking-tight text-sm md:text-base max-w-xl leading-relaxed">
            Standardized chemical compositions engineered for high-intensity
            performance and structural stability.
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 group">
          <ArrowDown
            onClick={handleScroll}
            className="text-clinical-blue animate-bounce cursor-pointer transition-transform group-hover:scale-125"
          />
        </div>
      </section>

      {/* --- INVENTORY: DYNAMIC GRID --- */}
      <section id="inventory-grid" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="text-left">
            <div className="flex items-center gap-2 text-clinical-blue mb-2">
              <Box size={14} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                Release Archive
              </span>
              ]
            </div>
            <TitleComponent firstTitle="Product" lastTitle="INVENTORY" />
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-clinical-border mx-10 mb-4" />
          <p className="text-clinical-gray-medium text-xs font-mono max-w-[200px] text-right">
            [ STATUS: AVAILABLE ]
            <br />
            REF_INDEX: 01-12
          </p>
        </div>

        <div className="relative border border-clinical-border bg-clinical-gray-light/30 p-1">
          <PaginationComponent
            onClick={(e) => {
              if (e.disable) {
                toast.warning("Under Validation", {
                  description:
                    "Unit currently under final batch certification.",
                });
              }
            }}
            isOnClick
            data={PRODUCTS_REGISTRY}
          />
        </div>
      </section>

      {/* --- METHODOLOGY: SPLIT FEATURE --- */}
      <section className="bg-clinical-gray-dark py-0 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-clinical-white border-y lg:border-y-0 lg:border-r border-clinical-border">
            <div className="flex items-center gap-4 text-clinical-blue mb-8">
              <Beaker size={20} />
              <div className="h-[1px] w-12 bg-clinical-blue" />
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter uppercase text-clinical-gray-dark mb-8 leading-none">
              Formula <br />{" "}
              <span className="text-clinical-blue">Architecture</span>
            </h2>
            <p className="text-clinical-gray-medium font-medium text-lg leading-relaxed mb-12">
              Every solution undergoes rigorous testing to ensure molecular
              integrity remains intact under 180°C heat and rapid acceleration.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-clinical-border pt-12">
              <div>
                <h4 className="text-clinical-blue font-bold text-[10px] uppercase tracking-widest mb-2">
                  Viscosity
                </h4>
                <p className="text-clinical-gray-dark font-mono text-sm">
                  OPTIMIZED (V-04)
                </p>
              </div>
              <div>
                <h4 className="text-clinical-blue font-bold text-[10px] uppercase tracking-widest mb-2">
                  Longevity
                </h4>
                <p className="text-clinical-gray-dark font-mono text-sm">
                  12-HOUR MATRIX
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative min-h-[500px] bg-clinical-gray-light">
            <Image
              className="w-full h-full object-cover"
              height={1080}
              width={1920}
              src="/image/why-quiv/WhyQuiv-kandungan.webp"
              alt="Formula Architecture Diagram"
            />
            {/* Technical Detail Overlay */}
            <div className="absolute inset-0 bg-clinical-blue/5 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* --- PERFORMANCE: CAROUSEL ARCHIVE --- */}
      <section className="py-32 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="flex items-center gap-2 text-clinical-blue mb-4">
              <Activity size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                Movement Optimization
              </span>
            </div>
            <TitleComponent
              firstTitle="SYSTEMS"
              lastTitle="IN USE"
              variant="secondary"
            />
          </div>

          <div className="relative group">
            {/* Industrial Border Styling */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-clinical-blue pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-clinical-blue pointer-events-none" />

            <div className="overflow-hidden border border-clinical-border p-4 bg-clinical-white">
              <CarouselBannerComponent
                data={dataCarousel}
                autoPlay
                classNameImageContainer="h-auto aspect-video md:aspect-[21/9]"
                classNameImage="object-cover w-full h-full transition-transform duration-[2000ms] group-hover:scale-105"
                isBgOpacity={false}
              />
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <button className="flex items-center gap-4 group text-clinical-gray-dark hover:text-clinical-blue transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em]">
                Request Batch Technical Sheet
              </span>
              <ChevronRight
                size={16}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPageModules;
