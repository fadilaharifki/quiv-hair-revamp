"use client";

import { benefitIcon, getPromotion, instagram } from "@/constants/data";
import Logo from "../../assets/svg/logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useScreenSize from "@/hooks/useScreenSize";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useToggleStore } from "@/stores/useToggleStore";
import LoadingLine from "@/components/LoadingLine";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Instagram, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { trackButtonClick } from "@/lib/fbq";
import { twMerge } from "tailwind-merge";

const AboutUsPageModules = () => {
  const { breakpoint } = useScreenSize();
  const { hasHydrated } = useToggleStore();
  const [loading] = useState(false);
  const router = useRouter();
  const flag = false;

  if (!hasHydrated)
    return (
      <div className="h-screen">
        <LoadingLine />
      </div>
    );

  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-gold-deep/30 font-inter">
      {loading && <LoadingLine />}

      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/banner_1.mp4" type="video/mp4" />
        </video>

        {/* Overlay Cinematic */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-navy-blue/20 to-[#0a0a0a]" />

        <div className="relative z-10 flex flex-col items-center max-w-5xl px-6 text-center">
          <Image
            width={180}
            height={180}
            src={Logo}
            alt="Quiv Logo"
            className="mb-10 animate-fade-in brightness-110"
          />

          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 uppercase italic font-montserrat">
            Redefining{" "}
            <span className="text-gold-deep drop-shadow-[0_0_15px_rgba(184,134,11,0.4)]">
              Hair Precision.
            </span>
          </h1>

          {/* Linktree style Actions */}
          <div className="w-full max-w-md space-y-4 mt-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full h-16 text-sm tracking-[0.25em] font-black uppercase bg-gold-deep hover:bg-white text-white hover:text-navy-blue border-none rounded-none transition-all duration-500 shadow-[0_0_20px_rgba(184,134,11,0.2)] group">
                  <ShoppingBag className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
                  Shop Our Products
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[calc(100vw-2rem)] max-w-md bg-navy-blue border-gold-deep/20 text-white rounded-none backdrop-blur-xl z-[70] p-0">
                <DropdownMenuItem
                  asChild
                  className="focus:bg-gold-deep py-5 px-6 rounded-none cursor-pointer border-b border-white/5 uppercase text-[10px] tracking-widest font-bold"
                >
                  <Link href="https://shopee.co.id/quiv.hair" target="_blank">
                    Shopee Official
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="focus:bg-gold-deep py-5 px-6 rounded-none cursor-pointer uppercase text-[10px] tracking-widest font-bold"
                >
                  <Link
                    href="https://www.tokopedia.com/quivhair"
                    target="_blank"
                  >
                    Tokopedia Store
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-16 text-sm tracking-[0.25em] font-bold uppercase bg-white/5 hover:bg-white/10 text-white border-gold-deep/30 rounded-none transition-all duration-300 backdrop-blur-md"
                >
                  Follow Us
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[calc(100vw-2rem)] max-w-md bg-navy-blue border-gold-deep/20 text-white rounded-none backdrop-blur-xl z-[70] p-0">
                <DropdownMenuItem
                  asChild
                  className="focus:bg-gold-deep py-5 px-6 rounded-none cursor-pointer uppercase text-[10px] tracking-widest font-bold"
                >
                  <Link href={instagram} target="_blank">
                    Instagram
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="focus:bg-gold-deep py-5 px-6 rounded-none cursor-pointer uppercase text-[10px] tracking-widest font-bold"
                >
                  <Link
                    href="https://www.tiktok.com/@quiv_hair"
                    target="_blank"
                  >
                    TikTok
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              asChild
              variant="outline"
              className="w-full h-16 text-sm tracking-[0.25em] font-bold uppercase border-gold-deep/50 text-gold-deep hover:bg-gold-deep hover:text-white rounded-none transition-all duration-500 bg-transparent group"
            >
              <Link href={getPromotion} target="_blank">
                <Globe className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get Promotion
              </Link>
            </Button>
          </div>

          <p className="mt-12 text-[10px] tracking-[0.8em] text-gray-500 uppercase font-black animate-pulse">
            #QuivTheGame
          </p>
        </div>
      </section>

      {/* --- PHILOSOPHY (ABOUT QUIV) --- */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] items-center border-y border-white/5 bg-navy-blue">
        <div className="relative h-full min-h-[450px] overflow-hidden">
          <Image
            src="/image/the-brand/introduction.webp"
            alt="Intro"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-105"
          />
        </div>
        <div className="p-12 md:p-24 space-y-8">
          <div className="flex items-center gap-4 text-gold-deep mb-6 tracking-[0.4em] font-bold text-xs uppercase">
            <div className="w-12 h-[1px] bg-gold-deep" /> Origins
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase leading-tight font-montserrat tracking-tighter">
            About <br /> <span className="text-white italic">Quiv Hair.</span>
          </h2>
          <div className="space-y-6 text-light-gray/70 font-light text-lg leading-relaxed max-w-xl">
            <p>
              QUIV HAIR was born to push the boundaries of what hair products
              can do. Inspired by modern lifestyles, we focus on innovation,
              simplicity, and results that keep up with you—wherever life takes
              you.
            </p>
            <p className="pt-4 border-t border-white/10">
              No more outdated formulas. Quiv creates next-generation solutions
              that are easy to use, reliable, and built for everyday and
              everyone confidence.
            </p>
          </div>
        </div>
      </section>

      {/* --- PRODUCT SHOWCASE --- */}
      <section className="py-20 lg:py-32 px-6 max-w-7xl mx-auto overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="flex flex-col-reverse md:flex-col lg:grid lg:grid-cols-3 items-center gap-16 lg:gap-0">
          {/* --- FINE (Muncul ke-2 di Mobile, ke-1 di Desktop) --- */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 z-20">
            <div className="w-[65%] lg:w-[85%]">
              <Image
                src="/image/the-brand/finesp.webp"
                width={600}
                height={700}
                alt="Fine"
                className="flex md:hidden object-contain drop-shadow-[30px_30px_60px_rgba(0,0,0,0.6)] rotate-12"
              />
            </div>

            <div className="space-y-1">
              <h3 className="text-5xl lg:text-6xl font-black italic font-montserrat text-white/20 tracking-tighter">
                FINE
              </h3>
              <p className="text-xs lg:text-sm text-gray-500 font-bold uppercase tracking-[0.3em]">
                Clay Creme
              </p>
            </div>
            <p className="text-xl lg:text-2xl font-light text-gray-400 italic">
              smooth glossy Finish
            </p>
            <p className="text-gray-600 text-sm leading-relaxed font-light max-w-xs">
              The perfect combo of shine and control. Designed for a clean,
              polished look without the greasiness. Locks your hair in place
              with a natural gloss finish.
            </p>
            <button
              disabled
              className="mt-4 border border-white/5 bg-white/[0.02] px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>

          {/* --- CENTER: PRODUCT VISUAL (Responsive Overlap) --- */}
          <div className="hidden md:flex order-1 lg:order-2 relative h-[350px] sm:h-[450px] lg:h-[600px] w-full max-w-[500px] mx-auto items-center justify-center">
            {/* Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold-deep/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Produk FLEX (Top Right) */}
            <div className="absolute -top-5 lg:-top-10 -right-5 lg:-right-16 w-[65%] lg:w-[85%] transform rotate-[15deg] transition-all duration-700 hover:rotate-[10deg] hover:scale-105 z-10">
              <Image
                src="/image/the-brand/flexproduct.webp"
                width={600}
                height={700}
                alt="Flex"
                className="object-contain drop-shadow-[30px_30px_60px_rgba(0,0,0,0.6)] -rotate-12"
              />
            </div>

            {/* Produk FINE (Bottom Left) */}
            <div className="absolute -bottom-5 lg:-bottom-10 -left-5 lg:-left-16 w-[65%] lg:w-[85%] transform -rotate-[10deg] transition-all duration-700 hover:rotate-[-5deg] hover:scale-105 grayscale opacity-40 z-0">
              <Image
                src="/image/the-brand/finesp.webp"
                width={600}
                height={700}
                alt="Fine"
                className="object-contain drop-shadow-[30px_30px_60px_rgba(0,0,0,0.6)] rotate-12"
              />
            </div>
          </div>

          {/* --- FLEX (Muncul ke-3 di Mobile, ke-3 di Desktop) --- */}
          <div className="order-3 lg:order-3 flex flex-col items-center lg:items-end text-center lg:text-right space-y-4 z-20">
            <div className="w-[65%] lg:w-[85%]">
              <Image
                src="/image/the-brand/flexproduct.webp"
                width={600}
                height={700}
                alt="Flex"
                className="flex md:hidden object-contain drop-shadow-[30px_30px_60px_rgba(0,0,0,0.6)] -rotate-12"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-5xl lg:text-6xl font-black italic font-montserrat text-white tracking-tighter drop-shadow-[0_0_15px_rgba(184,134,11,0.3)]">
                FLEX
              </h3>
              <p className="text-xs lg:text-sm text-gold-deep font-bold uppercase tracking-[0.3em]">
                Liquified Hair Powder
              </p>
            </div>
            <p className="text-xl lg:text-2xl font-light text-white italic">
              Dry Matte Finish
            </p>
            <p className="text-light-gray/60 text-sm leading-relaxed font-light max-w-xs">
              Strong hold, no messy powder. Flex is your go-to for textured,
              effortless styles. Keeps your hair looking clean, styled, and
              natural — wherever you go.
            </p>
            <Button
              onClick={() => router.push("/why-quiv/flex")}
              className="mt-4 rounded-none bg-gold-deep hover:bg-white text-white hover:text-navy-blue border-none px-12 h-14 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-xl shadow-gold-deep/10"
            >
              See product details
            </Button>
          </div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="bg-[#0a0a0a] border-y border-gold-deep/10 py-32 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-deep/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header kecil untuk konteks */}
          <div className="flex flex-col items-center mb-16">
            <div className="h-10 w-[1px] bg-gold-deep/40 mb-4" />
            <span className="text-[10px] tracking-[0.5em] text-gold-deep font-black uppercase">
              Engineered Excellence
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefitIcon.map((benefit, idx) => (
              <div
                key={idx}
                className="group relative p-10 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-md transition-all duration-700 hover:border-gold-deep/40 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gold-deep/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                  <div className="mb-12 flex justify-between items-center">
                    {/* Icon dengan container glass */}
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gold-deep/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      <Image
                        src={benefit.url}
                        width={50}
                        height={50}
                        alt={benefit.title}
                        className="relative grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 brightness-125"
                      />
                    </div>

                    {/* Index Number dengan font yang lebih elegan */}
                    <span className="text-5xl font-black italic tracking-tighter text-white/[0.03] group-hover:text-gold-deep/10 transition-colors duration-700">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold uppercase font-montserrat tracking-[0.2em] mb-4 text-white group-hover:text-gold-deep transition-colors duration-500">
                    {benefit.title}
                  </h4>

                  {/* Animated Divider Line */}
                  <div className="relative h-[1px] w-full bg-white/10 mt-6 overflow-hidden">
                    <div className="absolute inset-0 w-12 bg-gold-deep group-hover:w-full transition-all duration-1000 ease-in-out" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER BANNER --- */}
      <section className="relative h-[70vh] flex items-center justify-center border-t border-gold-deep/20 overflow-hidden">
        <Image
          src="/image/the-brand/banner-thebrand-2.webp"
          alt="Footer Banner"
          fill
          className="object-cover opacity-20 grayscale scale-110"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter italic opacity-30 mb-6 text-gold-deep leading-none uppercase">
            #QuivTheGame
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gold-deep/30" />
            <p className="tracking-[1em] text-white font-black uppercase text-[10px]">
              Authorized Digital Laboratory
            </p>
            <div className="h-[1px] w-12 bg-gold-deep/30" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPageModules;
