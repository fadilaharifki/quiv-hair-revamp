"use client";

import { benefitIcon, getPromotion } from "@/constants/data";
import Logo from "../../assets/svg/logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ChevronRight, Dna, Globe, Truck } from "lucide-react"; // Using Dna instead of Flask for a subtle tech feel
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

      {/* --- SECTION 4.5: GLOBAL DISTRIBUTION PROTOCOL --- */}
      <section className="py-24 bg-clinical-white border-t border-clinical-border overflow-hidden relative">
        {/* Watermark Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-clinical-blue/[0.02] pointer-events-none uppercase tracking-tighter whitespace-nowrap">
          Global_Access
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-clinical-blue font-bold tracking-[0.4em] text-[10px] uppercase flex items-center gap-2 mb-4">
                  <Globe size={14} /> Logistics_Network
                </span>
                <h2 className="text-4xl md:text-5xl font-semibold text-clinical-gray-dark tracking-tighter uppercase leading-none mb-6">
                  Worldwide <br />{" "}
                  <span className="text-clinical-blue">Deployment.</span>
                </h2>
                <p className="text-clinical-gray-medium text-sm leading-relaxed max-w-md font-medium">
                  Sistem distribusi kami dirancang untuk menjangkau profesional
                  dan individu di seluruh dunia. Kami melayani pengiriman
                  internasional dengan protokol pelacakan real-time untuk
                  menjamin integritas produk hingga ke tangan Anda.
                </p>
              </div>

              <div className="flex flex-wrap gap-12">
                <div className="flex flex-col gap-2">
                  <span className="text-clinical-blue font-mono text-xl font-bold">
                    190+
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-clinical-gray-medium">
                    Countries_Served
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-clinical-blue font-mono text-xl font-bold">
                    3-7
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-clinical-gray-medium">
                    Avg_Transit_Days
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-clinical-blue font-mono text-xl font-bold">
                    Safe
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-clinical-gray-medium">
                    Express_Handling
                  </span>
                </div>
              </div>
            </div>

            {/* Logistics Visual Card */}
            <div className="border border-clinical-border bg-clinical-gray-light/30 p-8 md:p-12 relative">
              <div className="absolute top-4 right-4 flex gap-1">
                <div className="w-1.5 h-1.5 bg-clinical-blue" />
                <div className="w-1.5 h-1.5 bg-clinical-blue/30" />
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-clinical-border">
                  <Truck className="text-clinical-blue mt-1" size={20} />
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">
                      Standard Global Shipping
                    </h4>
                    <p className="text-[9px] text-clinical-gray-medium uppercase">
                      Fully tracked international service via authorized
                      couriers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 border border-clinical-blue flex items-center justify-center">
                    <div className="w-2 h-2 bg-clinical-blue" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">
                      Customs Clearance Protocol
                    </h4>
                    <p className="text-[9px] text-clinical-gray-medium uppercase">
                      Automated documentation for seamless border entry.
                    </p>
                  </div>
                </div>

                <Link
                  href="/shipping-policy"
                  className="inline-flex items-center gap-2 text-[10px] font-bold text-clinical-blue uppercase tracking-[0.2em] pt-4 hover:gap-4 transition-all group"
                >
                  Read Shipping_Protocol{" "}
                  <ChevronRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
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
