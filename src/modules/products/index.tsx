"use client";

import ArrowDown from "@/components/arrow-down";
import { CarouselBannerComponent } from "@/components/carousel-banner";
import PaginationComponent from "@/components/pagination";
import { TitleComponent } from "@/components/title";
import { dataImageFine, dataImageFlex } from "@/constants/data";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";

const ProductsPageModules = () => {
  const dataImageAllProduct = [...dataImageFlex, ...dataImageFine];

  const handleScroll = () => {
    const element = document.getElementById("all-product");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const dataCarousel = [
    {
      id: "1",
      span: 1,
      child: [
        {
          name: "People 1",
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
          name: "People 2",
          span: 1,
          url: "/image/why-quiv/banner-why-quiv-3.webp",
        },
      ],
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
        <Image
          className="h-full w-full object-cover brightness-75 transition-scale duration-1000"
          height={1200}
          width={1920}
          src="/image/why-quiv/banner-whyquiv-hero.webp"
          alt="Hero Product"
          priority
        />
        {/* Overlay Gradient untuk Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-gold-deep font-mono tracking-[0.5em] text-[10px] uppercase mb-4 animate-fade-in">
            Premium Engineering
          </span>
          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase font-montserrat">
            Products
          </h1>
          <p className="mt-6 text-gray-400 font-light tracking-[0.2em] text-xs md:text-sm uppercase max-w-md">
            Natural ingredients, proven to perform at the highest level.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ArrowDown onClick={handleScroll} className="animate-bounce" />
        </div>
      </section>

      {/* --- ALL PRODUCTS SECTION --- */}
      <section id="all-product" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <TitleComponent firstTitle="ALL" lastTitle="COLLECTIONS" />
          <div className="h-[1px] w-12 bg-gold-deep mt-4" />
        </div>

        <div className="relative">
          <PaginationComponent
            onClick={(e) => {
              if (e.disable) {
                toast({
                  variant: "default",
                  title: "🚀 Coming Soon",
                  duration: 2000,
                  description:
                    "This series is currently under laboratory testing.",
                });
              }
            }}
            isOnClick
            data={dataImageAllProduct}
          />
        </div>
      </section>

      {/* --- FEATURED: QUIV FLEX (INGREDIENTS) --- */}
      <section className="bg-[#0a0a0a] py-20 border-y border-white/5">
        <div className="flex justify-center mb-16">
          <TitleComponent firstTitle="The" lastTitle="Formula" />
        </div>
        <div className="relative group max-w-[95%] mx-auto overflow-hidden rounded-xl border border-white/5">
          <Image
            className="w-full h-auto object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
            height={1080}
            width={1920}
            src="/image/why-quiv/WhyQuiv-kandungan.webp"
            alt="Product Formula"
          />
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-deep/5 blur-[100px] pointer-events-none" />
        </div>
      </section>

      {/* --- CAROUSEL: ACTIVE MEN --- */}
      <section className="py-24">
        <div className="flex flex-col items-center mb-16">
          <TitleComponent firstTitle="Built For" lastTitle="Active Men" />
          <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase mt-2 font-bold">
            Series 01 / Movement
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-white/5 bg-navy-blue/10 backdrop-blur-sm p-4">
            <CarouselBannerComponent
              data={dataCarousel}
              autoPlay
              classNameImageContainer="h-auto aspect-video"
              classNameImage="object-cover w-full h-full"
              isBgOpacity={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPageModules;
