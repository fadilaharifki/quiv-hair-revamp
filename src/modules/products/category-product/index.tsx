"use client";

import { CategoryProductsPageInterface } from "@/app/why-quiv/[category]/page";
import LoadingLine from "@/components/LoadingLine";
import PaginationComponent from "@/components/pagination";
import { TitleComponent } from "@/components/title";
import { Button } from "@/components/ui/button";
import { PRODUCTS_REGISTRY } from "@/constants/data";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { Beaker, ClipboardList, ShoppingCart, Info } from "lucide-react";
import { useCartStore } from "@/stores/useCartStore";
import { useRegionStore } from "@/stores/useRegionStore";
import { QuantityController } from "@/components/quantity-controller";

const CategoryProductsPageModules = ({
  props,
}: {
  props: CategoryProductsPageInterface;
}) => {
  const router = useRouter();

  // Zustand Stores
  const { items, addItem, updateQuantity, setItemQuantity } = useCartStore();
  const { currency, region } = useRegionStore();

  const categorySlug = props?.params?.category?.toLowerCase();

  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"description" | "howToUse">(
    "description",
  );

  // Memoize Product Data
  const product = useMemo(
    () => PRODUCTS_REGISTRY.find((p) => p.slug === categorySlug),
    [categorySlug],
  );

  // Ambil harga yang aktif berdasarkan currency store
  const activePrice = useMemo(() => {
    return product?.pricing?.find((p) => p.currency === currency);
  }, [product, currency]);

  // Filter produk lainnya untuk rekomendasi
  const otherProducts = useMemo(
    () => PRODUCTS_REGISTRY.filter((p) => p.slug !== categorySlug),
    [categorySlug],
  );

  // Cek status keranjang
  const cartItem = useMemo(
    () => items.find((item) => item.id === product?.id),
    [items, product],
  );

  useEffect(() => {
    setIsLoading(true);
    if (product) setActiveImage(product.gallery[0] || product.thumbnail);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [product]);

  if (isLoading)
    return (
      <div className="h-screen w-full flex items-center justify-center bg-clinical-white">
        <LoadingLine />
      </div>
    );

  if (!product)
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="font-mono text-xs tracking-widest uppercase">
          System.Error: Product_Not_Found
        </p>
      </div>
    );

  return (
    <div className="bg-clinical-white min-h-screen font-inter">
      {/* --- STATUS BAR --- */}
      <div className="max-w-7xl mx-auto px-6 pt-28 hidden md:flex items-center gap-3 text-[9px] font-bold text-clinical-gray-medium uppercase tracking-[0.2em]">
        <span className="opacity-50">Archive</span>
        <span className="text-clinical-blue">/</span>
        <span className="text-clinical-gray-dark">{product.name}</span>
      </div>

      {/* --- MAIN PRODUCT VIEW --- */}
      <main className="max-w-7xl mx-auto px-6 py-8 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT: DESKTOP THUMBS */}
          <div className="hidden lg:flex lg:col-span-2 flex-col gap-4">
            {product.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={twMerge(
                  "relative aspect-square border-2 transition-all duration-300 bg-clinical-gray-light/30 overflow-hidden",
                  activeImage === img
                    ? "border-clinical-blue shadow-md"
                    : "border-clinical-border opacity-50 hover:opacity-100 hover:border-clinical-blue/30",
                )}
              >
                <Image
                  src={img}
                  alt={`view-${idx}`}
                  fill
                  className="object-contain p-2"
                />
              </button>
            ))}
          </div>

          {/* CENTER: PRIMARY DISPLAY */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
            <div className="border border-clinical-border bg-clinical-gray-light/20 aspect-square flex items-center justify-center relative overflow-hidden group">
              <div
                className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#0047AB 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-[85%] h-[85%]"
                >
                  <Image
                    src={activeImage}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* MOBILE GALLERY */}
            <div className="flex lg:hidden gap-3 overflow-x-auto no-scrollbar py-2">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={twMerge(
                    "relative h-20 w-20 flex-shrink-0 border-2 bg-clinical-gray-light/30",
                    activeImage === img
                      ? "border-clinical-blue"
                      : "border-clinical-border opacity-60",
                  )}
                >
                  <Image
                    src={img}
                    alt="thumb"
                    fill
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: DATA & ACTIONS */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-8 lg:pl-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="px-2 py-1 bg-clinical-blue text-white text-[8px] font-bold tracking-widest uppercase">
                  Formula_v2.0
                </div>
                <span className="text-[10px] font-bold text-clinical-blue uppercase tracking-[0.3em]">
                  {product.type}
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-clinical-gray-dark tracking-tighter uppercase leading-none">
                {product.name}
                <span className="text-clinical-blue">.</span>
              </h1>
              <p className="text-[10px] font-bold text-clinical-gray-medium uppercase tracking-[0.4em] border-l-2 border-clinical-blue pl-4">
                Reference_UID:{" "}
                <span className="text-clinical-gray-dark">{product.id}</span>
              </p>
            </div>

            <p className="text-sm md:text-base text-clinical-gray-medium leading-relaxed font-medium max-w-sm">
              {product.shortDesc}
            </p>

            <div className="pt-6 space-y-8 border-t border-clinical-border/50">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-bold text-clinical-blue uppercase tracking-widest">
                  Commercial_Value
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-black text-clinical-gray-dark font-mono">
                    {formatCurrency(activePrice?.value ?? 0, currency)}
                  </span>
                </div>
              </div>

              {/* ACTION BUTTON / QUANTITY CONTROLLER */}
              <div className="w-full lg:w-max min-w-[240px]">
                {!cartItem ? (
                  <Button
                    onClick={() => addItem(product)}
                    className="w-full h-16 rounded-none bg-clinical-blue hover:bg-clinical-gray-dark text-white font-bold uppercase tracking-[0.3em] text-[11px] group transition-all"
                  >
                    <ShoppingCart
                      size={16}
                      className="mr-3 group-hover:translate-x-1 transition-transform"
                    />
                    Add To Cart
                  </Button>
                ) : (
                  <QuantityController
                    quantity={cartItem.quantity}
                    onIncrease={() => updateQuantity(product.id, 1)}
                    onDecrease={() => updateQuantity(product.id, -1)}
                    onChange={(val) => setItemQuantity(product.id, val)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- PROTOCOL TABS --- */}
      <section className="bg-clinical-gray-dark py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex gap-8 md:gap-12 border-b border-white/10 mb-12 overflow-x-auto no-scrollbar">
            {[
              {
                id: "description",
                label: "Technical_Specs",
                icon: <Info size={12} />,
              },
              {
                id: "howToUse",
                label: "Deployment_Protocol",
                icon: <ClipboardList size={12} />,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={twMerge(
                  "pb-4 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 transition-all whitespace-nowrap",
                  activeTab === tab.id
                    ? "text-clinical-blue border-b-2 border-clinical-blue"
                    : "text-white/30 hover:text-white",
                )}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <div className="min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === "description" ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    <p className="text-white/70 text-lg leading-relaxed font-medium">
                      {product.longDesc}
                    </p>
                    <div className="bg-white/[0.03] border border-white/10 p-8 space-y-6">
                      <div className="flex items-center gap-3 text-clinical-blue">
                        <Beaker size={18} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                          Compound_Analysis
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-1">
                          <span className="text-white/30 text-[9px] uppercase font-bold">
                            Base_Matrix
                          </span>
                          <p className="text-white text-[11px] font-mono">
                            WATER_SOLUBLE
                          </p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-white/30 text-[9px] uppercase font-bold">
                            Stability_Grade
                          </span>
                          <p className="text-white text-[11px] font-mono">
                            OPTIMAL_ALPHA
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-px md:bg-white/10 border md:border-white/10">
                    {product.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="bg-clinical-gray-dark p-8 md:p-10 flex flex-col border border-white/5 md:border-none"
                      >
                        <span className="text-clinical-blue font-mono text-[10px] font-bold mb-4">
                          P_0{idx + 1}
                        </span>
                        <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-3">
                          {step.title}
                        </h4>
                        <p className="text-white/40 text-[11px] leading-relaxed font-medium uppercase">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- RECOMMENDATIONS --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <TitleComponent
            firstTitle="Other"
            lastTitle="Products"
            variant="primary"
          />
          <div className="h-px w-16 bg-clinical-blue mt-4" />
        </div>
        <PaginationComponent
          isPagination={false}
          data={otherProducts}
          isOnClick
        />
      </section>
    </div>
  );
};

export default CategoryProductsPageModules;
