"use client";

import { CategoryProductsPageInterface } from "@/app/why-quiv/[category]/page";
import LoadingLine from "@/components/LoadingLine";
import PaginationComponent from "@/components/pagination";
import { TitleComponent } from "@/components/title";
import { Button } from "@/components/ui/button";
import { dataImageFine, dataImageFlex } from "@/constants/data";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

type ActiveTabsType = "description" | "howToUse";

const imageProduct: any = {
  flex: [
    {
      id: 1,
      url: "/image/the-brand/flexcap.webp",
      type: "Liquified Hair Powder",
      ability: "Dry Matte Finish",
      price: 129000,
      description:
        "Strong hold, no messy powder. Flex is your go-to for textured, effortless styles with a dry matte finish. Easy-to-wash and sweat friendly.",
    },
    {
      id: 2,
      url: "/image/the-brand/flexcom.webp",
      type: "Liquified Hair Powder",
      ability: "Dry Matte Finish",
      price: 129000,
      description:
        "Strong hold, no messy powder. Flex is your go-to for textured, effortless styles with a dry matte finish. Easy-to-wash and sweat friendly.",
    },
    {
      id: 3,
      url: "/image/the-brand/flexproduct.webp",
      type: "Liquified Hair Powder",
      ability: "Dry Matte Finish",
      price: 129000,
      description:
        "Strong hold, no messy powder. Flex is your go-to for textured, effortless styles with a dry matte finish. Easy-to-wash and sweat friendly.",
    },
  ],
  fine: [
    {
      id: 1,
      url: "/image/the-brand/finecap.webp",
      type: "Clay Creme",
      ability: "Smooth Glossy Finish",
      price: 129000,
      description:
        "The perfect combo of shine and control. Fine is designed for those who want a clean, polished look without the greasiness of gel or pomade.",
    },
    {
      id: 2,
      url: "/image/the-brand/finecap.webp",
      type: "Clay Creme",
      ability: "Smooth Glossy Finish",
      price: 129000,
      description:
        "The perfect combo of shine and control. Fine is designed for those who want a clean, polished look without the greasiness of gel or pomade.",
    },
    {
      id: 3,
      url: "/image/the-brand/finesp.webp",
      type: "Clay Creme",
      ability: "Smooth Glossy Finish",
      price: 129000,
      description:
        "The perfect combo of shine and control. Fine is designed for those who want a clean, polished look without the greasiness of gel or pomade.",
    },
  ],
};

const CategoryProductsPageModules = ({
  props,
}: {
  props: CategoryProductsPageInterface;
}) => {
  const router = useRouter();
  const category = props?.params?.category?.toLowerCase();

  const [activeTab, setActiveTab] = useState<ActiveTabsType>("description");
  const [imageProductActive, setImageProductActive] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      if (category && imageProduct[category]) {
        setImageProductActive(imageProduct[category][0]);
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [category]);

  const productDetails = useMemo(() => {
    const data: any = {
      flex: {
        longDesc:
          "Experience the evolution of hair styling with Flex. Our innovative liquified powder formula provides instant volume and a bone-dry matte finish that lasts all day. Designed for the active man, it's sweat-resistant yet remarkably easy to wash out at the end of the day. No flakes, no stickiness, just pure texture.",
        steps: [
          {
            title: "Prep",
            desc: "For best results, use a hairdryer on clean hair first.",
          },
          {
            title: "Application",
            desc: "Pump 1-2 times into palms and work through the roots.",
          },
          {
            title: "Detailing",
            desc: "Use your fingers to pinch and pull hair for maximum texture.",
          },
        ],
      },
      fine: {
        longDesc:
          "Quiv Fine is the bridge between a classic pomade and a modern clay. It offers a healthy natural gloss that makes hair look vibrant without the heavy grease of traditional products. Perfect for clean, slicked-back looks or smart-casual styles that require precise definition and a soft-to-touch feel.",
        steps: [
          {
            title: "Dampen",
            desc: "Works best on slightly damp or towel-dried hair.",
          },
          {
            title: "Distribution",
            desc: "Spread a small amount between palms until evenly heated.",
          },
          {
            title: "Finishing",
            desc: "Apply from back to front and use a comb for a sharp look.",
          },
        ],
      },
    };
    return data[category] || data.flex;
  }, [category]);

  if (isLoading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <LoadingLine />
      </div>
    );

  if (isNotFound)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
        <h1 className="text-8xl font-extrabold italic tracking-tighter text-navy-blue/10 uppercase mb-4">
          404
        </h1>
        <p className="text-gray-500 uppercase tracking-widest text-sm mb-8 font-medium">
          Product Category Not Found
        </p>
        <Button
          className="rounded-full px-10 py-6 bg-navy-blue hover:bg-gold-deep"
          onClick={() => router.replace("/feeds")}
        >
          Back to Feed
        </Button>
      </div>
    );

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO PRODUCT SECTION --- */}
      <section className="grid grid-cols-1 lg:grid-cols-12 pt-32 pb-16 px-6 md:px-16 max-w-7xl mx-auto gap-8 lg:gap-16">
        <div className="hidden lg:flex lg:col-span-1 flex-col gap-5 justify-center">
          {imageProduct[category]?.map((item: any, idx: number) => {
            const isActive = imageProductActive?.id === item.id;
            return (
              <button
                key={idx}
                onClick={() => setImageProductActive(item)}
                className="group relative flex items-center justify-center"
              >
                {/* Indikator Garis di samping thumbnail yang aktif */}
                <div
                  className={twMerge(
                    "absolute -left-6 w-1 bg-gold-deep transition-all duration-500 rounded-full",
                    isActive ? "h-8 opacity-100" : "h-0 opacity-0",
                  )}
                />

                <div
                  className={twMerge(
                    "relative h-20 w-20 rounded-2xl overflow-hidden transition-all duration-500",
                    "border border-transparent bg-white shadow-sm",
                    isActive
                      ? "ring-2 ring-gold-deep ring-offset-4 scale-110 shadow-xl"
                      : "opacity-40 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-105",
                  )}
                >
                  <Image
                    src={item.url}
                    alt="thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
              </button>
            );
          })}
        </div>

        <div className="col-span-1 lg:col-span-6 flex items-center justify-center relative min-h-[400px] md:min-h-[600px]">
          {/* Layer Background Glow - Memberi kesan dimensi */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent rounded-[40px] md:rounded-[80px] -z-10" />

          <div className="relative h-[300px] w-[300px] md:h-[550px] md:w-[550px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={imageProductActive?.id} // Trigger animasi setiap ID berubah
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="relative w-full h-full cursor-zoom-in"
              >
                <Image
                  src={imageProductActive?.url}
                  alt="main-product"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* THUMBNAILS (BOTTOM - MOBILE) */}
        <div className="lg:hidden flex justify-center gap-4 py-4">
          {imageProduct[category]?.map((item: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setImageProductActive(item)}
              className={twMerge(
                "relative h-16 w-16 rounded-xl overflow-hidden border-2 transition-all",
                imageProductActive?.id === item.id
                  ? "border-gold-deep"
                  : "border-transparent opacity-60",
              )}
            >
              <Image
                src={item.url}
                alt="thumbnail"
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* PRODUCT INFO (RIGHT SIDE) */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-8">
          <div className="space-y-3">
            <span className="text-gold-deep font-bold uppercase tracking-[0.4em] text-[9px] md:text-[11px] block">
              {imageProductActive?.type}
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold italic uppercase tracking-tighter text-navy-blue leading-[0.8]">
              {category}
            </h1>
            <p className="text-gray-400 font-medium tracking-[0.2em] text-[10px] md:text-xs uppercase">
              {imageProductActive?.ability}
            </p>
          </div>

          <p className="text-base md:text-lg text-navy-blue/70 font-light leading-relaxed max-w-md">
            {imageProductActive?.description}
          </p>

          <div className="space-y-6 pt-4">
            <div className="flex items-baseline gap-4">
              <span className="text-3xl md:text-4xl font-extrabold text-navy-blue italic">
                {formatCurrency(imageProductActive?.price || 0)}
              </span>
              <span className="text-gray-300 font-light text-sm">
                / 80G NETTO
              </span>
            </div>
            <Button className="w-full md:w-max px-16 py-8 rounded-full bg-navy-blue hover:bg-gold-deep text-white hover:text-navy-blue transition-all duration-500 font-bold uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-navy-blue/20">
              Order via Whatsapp
            </Button>
          </div>
        </div>
      </section>

      {/* --- INFO TABS (DARK MODE SECTION) --- */}
      <section className="bg-navy-blue py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-8 md:gap-16 mb-16 border-b border-white/10">
            {["description", "howToUse"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as ActiveTabsType)}
                className={twMerge(
                  "pb-6 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] transition-all relative",
                  activeTab === tab
                    ? "text-gold-deep"
                    : "text-white/40 hover:text-white",
                )}
              >
                {tab === "description" ? "Deep Description" : "Instruction"}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-deep" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[200px] flex items-center justify-center">
            {activeTab === "description" ? (
              <p className="text-center text-white/70 leading-[2.2] font-light text-sm md:text-lg italic">
                {productDetails.longDesc}
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                {productDetails.steps.map((step: any, i: number) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center space-y-4"
                  >
                    <div className="h-12 w-12 rounded-full border border-gold-deep/30 flex items-center justify-center text-gold-deep font-bold italic">
                      0{i + 1}
                    </div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-xs">
                      {step.title}
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- RECOMMENDATIONS --- */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <TitleComponent
              firstTitle="Recommended"
              lastTitle="Products"
              classNameContainer="uppercase"
              variant="light"
            />
            <div className="h-[2px] w-12 bg-gold-deep mt-4" />
          </div>

          <PaginationComponent
            isPagination={false}
            data={category === "flex" ? dataImageFine : dataImageFlex}
            isOnClick
          />
        </div>
      </section>

      {/* --- FOOTER SPACING --- */}
      <div className="h-20 bg-white" />
    </div>
  );
};

export default CategoryProductsPageModules;
