"use client";

import { benefitIcon, getPromotion } from "@/constants/data";
import Logo from "../../assets/svg/logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Dna } from "lucide-react"; // Using Dna instead of Flask for a subtle tech feel
import Link from "next/link";

const AboutUsPageModules = () => {
  const router = useRouter();

  return (
    <div className="bg-clinical-white text-clinical-gray-dark selection:bg-clinical-blue/10 font-inter">
      {/* --- SECTION 1: THE PRECISION HERO --- */}
      <section className="relative min-h-screen flex flex-col lg:flex-row border-b border-clinical-border">
        {/* Left Side: Editorial Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-20 z-10 bg-clinical-white">
          <Image
            width={120}
            height={120}
            src={Logo}
            alt="Quiv Logo"
            className="mb-12 mix-blend-multiply opacity-90"
          />

          <div className="space-y-2 mb-8">
            <span className="text-clinical-blue font-semibold tracking-[0.3em] text-[10px] uppercase flex items-center gap-2">
              <Dna size={14} /> Advanced Engineering
            </span>
            <h1 className="text-5xl md:text-7xl font-semibold text-clinical-gray-dark leading-[1.1] uppercase font-montserrat tracking-tighter">
              Quiv <br /> <span className="text-clinical-blue">Precision.</span>
            </h1>
          </div>

          <p className="text-clinical-gray-medium text-lg max-w-md mb-10 leading-relaxed font-normal">
            Developed at the intersection of structural hair science and
            performance styling. High-efficiency results, validated by rigorous
            quality standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => router.push("/why-quiv")}
              className="h-14 px-8 bg-clinical-blue text-clinical-white rounded-none hover:bg-clinical-gray-dark transition-all uppercase text-[10px] tracking-widest font-semibold"
            >
              Shop the Collection
            </Button>
            <Button
              variant="outline"
              className="h-14 px-8 border-clinical-border text-clinical-gray-dark rounded-none hover:bg-clinical-blue-light transition-all uppercase text-[10px] tracking-widest font-semibold"
            >
              Our Methodology
            </Button>
          </div>
        </div>

        {/* Right Side: Visual Narrative */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] bg-clinical-gray-light overflow-hidden border-l border-clinical-border">
          <video
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 transition-all duration-1000"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/banner_1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-clinical-blue/5" />

          <div className="absolute bottom-10 left-10 p-6 bg-clinical-white/90 backdrop-blur-md border border-clinical-border hidden md:block">
            <p className="text-[10px] font-semibold text-clinical-blue uppercase tracking-widest mb-1">
              Series ID: Q-2025
            </p>
            <p className="text-[9px] text-clinical-gray-medium max-w-[180px] font-medium uppercase">
              Tested for optimal molecular stability and scalp-neutral
              integrity.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: ARCHITECTURE OF STYLE --- */}
      <section className="py-24 px-8 md:px-20 border-b border-clinical-border bg-clinical-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-[10px] font-semibold text-clinical-blue uppercase tracking-[0.5em] mb-6">
              Principles
            </h2>
            <p className="text-3xl font-semibold text-clinical-gray-dark leading-tight mb-8">
              Visualizing hair styling through a lens of absolute accuracy.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-l border-clinical-border pl-0 md:pl-12">
            <div className="space-y-4">
              <h3 className="font-semibold text-clinical-gray-dark uppercase text-sm tracking-wider">
                The Objective
              </h3>
              <p className="text-clinical-gray-medium font-normal text-sm leading-relaxed">
                QUIV HAIR was established to address the need for formula
                transparency. We eliminate unnecessary fillers, focusing
                exclusively on active components that provide maximum hold
                without compromising health.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-clinical-gray-dark uppercase text-sm tracking-wider">
                The Process
              </h3>
              <p className="text-clinical-gray-medium font-normal text-sm leading-relaxed">
                Every formulation undergoes a stability phase to ensure
                consistent texture and high-performance results across various
                environmental conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: PRODUCT COMPARISON --- */}
      <section className="bg-clinical-gray-light py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-semibold text-clinical-gray-dark tracking-tighter uppercase font-montserrat">
                Available <br />
                Systems
              </h2>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-clinical-blue uppercase tracking-widest">
                Release 01 / 02
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-clinical-border border border-clinical-border">
            {/* FLEX CARD */}
            <div className="bg-clinical-white p-12 hover:bg-clinical-blue-light/50 transition-all group">
              <div className="flex justify-between items-start mb-12">
                <span className="bg-clinical-blue text-clinical-white text-[9px] px-3 py-1 font-semibold uppercase tracking-widest">
                  Primary
                </span>
                <span className="text-clinical-border font-semibold text-6xl group-hover:text-clinical-blue/10 transition-colors italic">
                  01
                </span>
              </div>
              <div className="relative h-64 mb-8">
                <Image
                  src="/image/the-brand/flexproduct.webp"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  alt="Flex"
                />
              </div>
              <h3 className="text-3xl font-semibold text-clinical-gray-dark mb-2 italic">
                FLEX
              </h3>
              <p className="text-clinical-blue font-semibold text-[10px] uppercase tracking-widest mb-4 border-b border-clinical-blue/20 pb-4">
                Liquified Styling Powder
              </p>
              <ul className="text-[11px] text-clinical-gray-medium space-y-2 uppercase tracking-tighter font-semibold mb-8">
                <li className="flex justify-between">
                  <span>Finish:</span>{" "}
                  <span className="text-clinical-gray-dark">Ultra Matte</span>
                </li>
                <li className="flex justify-between">
                  <span>Hold:</span>{" "}
                  <span className="text-clinical-gray-dark">High Gravity</span>
                </li>
              </ul>
              <Button
                onClick={() => router.push("/flex")}
                className="w-full bg-transparent border border-clinical-border text-clinical-gray-dark hover:bg-clinical-blue hover:text-clinical-white hover:border-clinical-blue rounded-none font-semibold"
              >
                Detailed Analysis
              </Button>
            </div>

            {/* FINE CARD */}
            <div className="bg-clinical-white p-12 opacity-80">
              <div className="flex justify-between items-start mb-12">
                <span className="bg-clinical-gray-medium text-clinical-white text-[9px] px-3 py-1 font-semibold uppercase tracking-widest">
                  In Queue
                </span>
                <span className="text-clinical-border font-semibold text-6xl italic">
                  02
                </span>
              </div>
              <div className="relative h-64 mb-8 grayscale opacity-50">
                <Image
                  src="/image/the-brand/finesp.webp"
                  fill
                  className="object-contain"
                  alt="Fine"
                />
              </div>
              <h3 className="text-3xl font-semibold text-clinical-gray-medium mb-2 italic">
                FINE
              </h3>
              <p className="text-clinical-gray-medium font-semibold text-[10px] uppercase tracking-widest mb-4 border-b border-clinical-border pb-4">
                Hydrating Clay Formula
              </p>
              <p className="text-[11px] text-clinical-gray-medium italic uppercase tracking-widest mb-8">
                System optimization in progress...
              </p>
              <Button
                disabled
                className="w-full bg-clinical-gray-light text-clinical-gray-medium cursor-not-allowed rounded-none uppercase text-[10px] font-semibold"
              >
                Upcoming Series
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: BENEFITS --- */}
      <section className="py-24 border-t border-clinical-border bg-clinical-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefitIcon.map((benefit, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-clinical-blue-light flex items-center justify-center">
                  <Image
                    src={benefit.url}
                    width={24}
                    height={24}
                    alt={benefit.title}
                    className="opacity-90 mix-blend-multiply"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-clinical-gray-dark uppercase text-xs tracking-[0.2em] mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-clinical-gray-medium text-xs font-medium leading-relaxed">
                    Designed for safety and longevity, ensuring optimal scalp
                    conditions for all hair types.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: MINIMAL FOOTER BANNER --- */}
      <section className="bg-clinical-blue py-16 px-8 text-center flex flex-col items-center">
        <div className="w-full max-w-lg border-y border-clinical-white/20 py-10">
          <h2 className="text-clinical-white font-montserrat font-semibold text-2xl tracking-[0.5em] uppercase mb-4">
            QUIV.SYSTEMS
          </h2>
          <p className="text-clinical-blue-light text-[9px] tracking-[0.8em] uppercase font-semibold">
            Authorized Technical Precision
          </p>
        </div>
        <p className="mt-8 text-clinical-blue-light/60 text-[9px] uppercase tracking-widest font-semibold">
          © 2025 Quiv Professional Hair Science. All Rights Reserved.
        </p>
      </section>
    </div>
  );
};

export default AboutUsPageModules;
