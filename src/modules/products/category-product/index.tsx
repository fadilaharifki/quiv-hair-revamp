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
import { Beaker, ClipboardList, ShoppingCart, Zap, Info } from "lucide-react";

type ActiveTabsType = "description" | "howToUse";

// Data lokal tetap sama namun visual mapping diubah
const imageProduct: any = {
  flex: [
    {
      id: 1,
      url: "/image/the-brand/flexcap.webp",
      type: "LIQUIFIED_POWDER",
      ability: "DRY_MATTE_FINISH",
      price: 129000,
      description:
        "Strong hold, no messy powder. Flex is your go-to for textured, effortless styles with a dry matte finish. Easy-to-wash and sweat friendly.",
    },
    {
      id: 2,
      url: "/image/the-brand/flexcom.webp",
      type: "LIQUIFIED_POWDER",
      ability: "DRY_MATTE_FINISH",
      price: 129000,
      description:
        "Strong hold, no messy powder. Flex is your go-to for textured, effortless styles with a dry matte finish. Easy-to-wash and sweat friendly.",
    },
    {
      id: 3,
      url: "/image/the-brand/flexproduct.webp",
      type: "LIQUIFIED_POWDER",
      ability: "DRY_MATTE_FINISH",
      price: 129000,
      description:
        "Strong hold, no messy powder. Flex is your go-to for textured, effortless styles with a dry matte finish. Easy-to-wash and sweat friendly.",
    },
  ],
  fine: [
    {
      id: 1,
      url: "/image/the-brand/finecap.webp",
      type: "CLAY_CREME",
      ability: "SMOOTH_GLOSSY_FINISH",
      price: 129000,
      description:
        "The perfect combo of shine and control. Fine is designed for those who want a clean, polished look without the greasiness.",
    },
    {
      id: 2,
      url: "/image/the-brand/finecap.webp",
      type: "CLAY_CREME",
      ability: "SMOOTH_GLOSSY_FINISH",
      price: 129000,
      description:
        "The perfect combo of shine and control. Fine is designed for those who want a clean, polished look without the greasiness.",
    },
    {
      id: 3,
      url: "/image/the-brand/finesp.webp",
      type: "CLAY_CREME",
      ability: "SMOOTH_GLOSSY_FINISH",
      price: 129000,
      description:
        "The perfect combo of shine and control. Fine is designed for those who want a clean, polished look without the greasiness.",
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
          "Experience the evolution of hair styling with Flex. Our innovative liquified powder formula provides instant volume and a bone-dry matte finish that lasts all day. Designed for the active man, it's sweat-resistant yet remarkably easy to wash out. No flakes, no stickiness, just pure texture mapping.",
        steps: [
          {
            title: "PRE_PREP",
            desc: "Use hairdryer on clean hair to stabilize base.",
          },
          {
            title: "APPLY_MASS",
            desc: "Pump 1-2 times into palms and work through roots.",
          },
          {
            title: "DETAIL_FIX",
            desc: "Pinch and pull hair for maximum structural texture.",
          },
        ],
      },
      fine: {
        longDesc:
          "Quiv Fine is the bridge between a classic pomade and a modern clay. It offers a healthy natural gloss that makes hair look vibrant without heavy grease. Perfect for clean, slicked-back looks or smart-casual styles that require precise definition and a soft-to-touch feel.",
        steps: [
          {
            title: "HYDRATE",
            desc: "Works best on slightly damp or towel-dried hair.",
          },
          {
            title: "DISTRIBUTE",
            desc: "Spread small amount between palms until heated.",
          },
          {
            title: "CALIBRATE",
            desc: "Apply from back to front. Use comb for sharp finish.",
          },
        ],
      },
    };
    return data[category] || data.flex;
  }, [category]);

  if (isLoading)
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-clinical-white">
        <LoadingLine />
      </div>
    );

  if (isNotFound)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-clinical-white px-6 text-center">
        <h1 className="text-8xl font-bold tracking-tighter text-clinical-blue/10 uppercase mb-4">
          ERR_404
        </h1>
        <p className="text-clinical-gray-medium uppercase tracking-[0.5em] text-xs mb-8 font-bold">
          Category Not Identified
        </p>
        <Button
          className="rounded-none px-10 py-6 bg-clinical-gray-dark"
          onClick={() => router.replace("/feeds")}
        >
          RETURN_TO_ARCHIVE
        </Button>
      </div>
    );

  return (
    <div className="bg-clinical-white min-h-screen font-inter">
      {/* --- BREADCRUMB / STATUS BAR --- */}
      <div className="max-w-7xl mx-auto px-6 pt-24 hidden md:flex items-center gap-4 text-[10px] font-bold text-clinical-gray-medium uppercase tracking-widest">
        <span>ARCHIVE</span> <span className="text-clinical-blue">/</span>
        <span>PRODUCTS</span> <span className="text-clinical-blue">/</span>
        <span className="text-clinical-blue">{category}</span>
      </div>

      {/* --- PRODUCT DISPLAY SECTION --- */}
      <section className="grid grid-cols-1 lg:grid-cols-12 py-16 px-6 md:px-16 max-w-7xl mx-auto gap-8 lg:gap-16">
        {/* THUMBNAILS (LEFT) */}
        <div className="hidden lg:flex lg:col-span-1 flex-col gap-4 justify-center">
          {imageProduct[category]?.map((item: any, idx: number) => {
            const isActive = imageProductActive?.id === item.id;
            return (
              <button
                key={idx}
                onClick={() => setImageProductActive(item)}
                className="relative h-20 w-20 group"
              >
                <div
                  className={twMerge(
                    "absolute inset-0 border transition-all duration-300",
                    isActive
                      ? "border-clinical-blue p-1"
                      : "border-clinical-border group-hover:border-clinical-blue/50",
                  )}
                >
                  <div className="relative h-full w-full bg-clinical-gray-light">
                    <Image
                      src={item.url}
                      alt="thumb"
                      fill
                      className={twMerge(
                        "object-cover",
                        !isActive && "grayscale",
                      )}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* MAIN DISPLAY */}
        <div className="col-span-1 lg:col-span-6 flex items-center justify-center relative border border-clinical-border bg-clinical-gray-light/30 min-h-[400px] md:min-h-[600px]">
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-2 h-2 bg-clinical-blue" />
            <div className="w-2 h-2 bg-clinical-border" />
          </div>
          <div className="relative h-[300px] w-[300px] md:h-[500px] md:w-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={imageProductActive?.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full"
              >
                <Image
                  src={imageProductActive?.url}
                  alt="main-product"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE THUMBS */}
        <div className="lg:hidden flex justify-center gap-2">
          {imageProduct[category]?.map((item: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setImageProductActive(item)}
              className={twMerge(
                "h-14 w-14 border",
                imageProductActive?.id === item.id
                  ? "border-clinical-blue"
                  : "border-clinical-border",
              )}
            >
              <Image
                src={item.url}
                alt="thumb"
                width={56}
                height={56}
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* PRODUCT INFO */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-clinical-blue/10 px-3 py-1 border border-clinical-blue/20">
              <Zap size={12} className="text-clinical-blue" />
              <span className="text-clinical-blue font-bold uppercase tracking-[0.2em] text-[10px]">
                {imageProductActive?.type}
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-semibold uppercase tracking-tighter text-clinical-gray-dark leading-none">
              {category}
              <span className="text-clinical-blue">.</span>
            </h1>
            <p className="text-clinical-gray-medium font-bold tracking-[0.3em] text-[10px] uppercase border-l-2 border-clinical-blue pl-4">
              Property: {imageProductActive?.ability}
            </p>
          </div>

          <p className="text-sm md:text-base text-clinical-gray-medium font-medium leading-relaxed max-w-md">
            {imageProductActive?.description}
          </p>

          <div className="pt-6 space-y-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-clinical-gray-medium tracking-widest mb-1">
                UNIT_PRICE
              </span>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-clinical-gray-dark">
                  {formatCurrency(imageProductActive?.price || 0)}
                </span>
                <span className="text-clinical-gray-medium font-mono text-xs">
                  / 80G_NET
                </span>
              </div>
            </div>

            <Button className="w-full md:w-max px-12 py-7 rounded-none bg-clinical-blue hover:bg-clinical-gray-dark text-white transition-all font-bold uppercase tracking-widest text-[10px] flex gap-3">
              <ShoppingCart size={16} />
              INITIALIZE_ORDER
            </Button>
          </div>
        </div>
      </section>

      {/* --- SPECIFICATION TABS --- */}
      <section className="bg-clinical-gray-dark py-24 px-6 border-y border-clinical-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-12 mb-16 overflow-x-auto no-scrollbar">
            {["description", "howToUse"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as ActiveTabsType)}
                className={twMerge(
                  "pb-4 text-[10px] font-bold uppercase tracking-[0.4em] transition-all relative whitespace-nowrap",
                  activeTab === tab
                    ? "text-clinical-blue"
                    : "text-white/30 hover:text-white",
                )}
              >
                <span className="flex items-center gap-2">
                  {tab === "description" ? (
                    <Info size={14} />
                  ) : (
                    <ClipboardList size={14} />
                  )}
                  {tab === "description" ? "Tech_Specs" : "Usage_Protocol"}
                </span>
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-clinical-blue" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[200px]">
            {activeTab === "description" ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <p className="text-white/70 leading-relaxed font-medium text-lg">
                  {productDetails.longDesc}
                </p>
                <div className="border border-white/10 p-8 bg-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <Beaker className="text-clinical-blue" size={24} />
                    <span className="text-white font-bold tracking-widest text-[10px]">
                      FORMULA_LOG_V2
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40 text-[10px] uppercase">
                        Solubility
                      </span>
                      <span className="text-white text-[10px] font-mono">
                        HIGH_WATER_BASE
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40 text-[10px] uppercase">
                        Finish
                      </span>
                      <span className="text-white text-[10px] font-mono">
                        {category === "flex" ? "MATTE_0%" : "GLOSS_40%"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
                {productDetails.steps.map((step: any, i: number) => (
                  <div
                    key={i}
                    className="bg-clinical-gray-dark p-10 flex flex-col gap-6"
                  >
                    <span className="text-clinical-blue font-mono text-xs font-bold">
                      [0{i + 1}]
                    </span>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm">
                      {step.title}
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed font-medium">
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
      <section className="py-32 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-20">
            <TitleComponent
              firstTitle="CROSS"
              lastTitle="REFERENCE"
              variant="primary"
            />
            <p className="text-clinical-gray-medium text-[10px] font-bold tracking-[0.4em] uppercase mt-4">
              Related Formula Inventory
            </p>
          </div>

          <PaginationComponent
            isPagination={false}
            data={category === "flex" ? dataImageFine : dataImageFlex}
            isOnClick
          />
        </div>
      </section>
    </div>
  );
};

export default CategoryProductsPageModules;
