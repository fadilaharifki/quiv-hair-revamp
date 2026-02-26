"use client";

import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ShieldCheck, Zap, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/useCartStore";
import { useRegionStore } from "@/stores/useRegionStore";
import { ProductInterface } from "@/types/product";
import { QuantityController } from "../quantity-controller";

interface PaginationComponentInterface {
  data: ProductInterface[];
  isPagination?: boolean;
  isOnClick?: boolean;
  onClick?: (item: ProductInterface) => void;
}

const PaginationComponent = ({
  data,
  isOnClick,
  onClick = () => {},
}: PaginationComponentInterface) => {
  const router = useRouter();
  const { items, addItem, updateQuantity, setItemQuantity } = useCartStore();
  const { currency, region } = useRegionStore();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const gridLayout =
    data.length === 1
      ? "grid-cols-1 max-w-md mx-auto"
      : data.length === 2
        ? "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto";

  return (
    <div className="w-full flex flex-col justify-center items-center py-6 md:py-12 px-4 md:px-8">
      <div
        className={twMerge(
          "grid gap-px bg-clinical-border border border-clinical-border w-full shadow-sm",
          gridLayout,
        )}
      >
        {data.map((item, i) => {
          const isDisabled = item.disable;
          const isHovered = hoveredIndex === i;

          // Cek item di cart
          const cartItem = items.find((cart) => cart.id === item.id);

          // Ambil harga berdasarkan currency store (IDR/USD)
          const activePrice = item.pricing?.find(
            (p) => p.currency === currency,
          );

          return (
            <div
              key={item.id || i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setMousePos({ x: 0, y: 0 });
              }}
              onMouseMove={isHovered ? handleMouseMove : undefined}
              className={twMerge(
                "group relative bg-clinical-white p-5 md:p-8 flex flex-col transition-all duration-500 overflow-hidden min-h-[450px]",
                isDisabled && "bg-clinical-gray-light/50",
              )}
            >
              {/* KLIK AREA */}
              <div
                className={twMerge(
                  "flex-1 flex flex-col",
                  !isDisabled && "cursor-pointer",
                )}
                onClick={() => {
                  if (isOnClick && item.slug && !isDisabled)
                    router.push(`/why-quiv/${item.slug}`);
                  onClick(item);
                }}
              >
                {/* UNIT HEADER */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-col">
                    <span className="text-[7px] font-mono font-bold text-clinical-blue uppercase tracking-[0.2em]">
                      Unit_ID: {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {!isDisabled && (
                    <div className="flex items-center gap-1 px-1.5 py-0.5 bg-clinical-blue/5 border border-clinical-blue/10">
                      <ShieldCheck size={8} className="text-clinical-blue" />
                      <p className="text-[7px] tracking-widest font-bold text-clinical-blue uppercase">
                        Verified
                      </p>
                    </div>
                  )}
                </div>

                {/* IMAGE SECTION */}
                <div className="relative flex-1 flex items-center justify-center mb-6">
                  <div
                    className="relative z-10 transition-transform duration-500 ease-out"
                    style={{
                      transform:
                        isHovered &&
                        typeof window !== "undefined" &&
                        window.innerWidth > 768
                          ? `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`
                          : "translate3d(0,0,0)",
                    }}
                  >
                    <Image
                      className={twMerge(
                        "w-[120px] md:w-[160px] h-auto object-contain transition-all duration-700",
                        isHovered ? "scale-110" : "scale-100",
                        isDisabled && "grayscale brightness-125 opacity-40",
                      )}
                      width={400}
                      height={400}
                      alt={item.name}
                      src={item.thumbnail || item.gallery?.[0] || ""}
                    />
                  </div>
                  <div className="absolute top-0 right-0 p-1 opacity-10 group-hover:opacity-100 transition-opacity">
                    <Zap size={10} className="text-clinical-blue" />
                  </div>
                </div>

                {/* TEXT SECTION */}
                <div className="mb-4">
                  <h3
                    className={twMerge(
                      "text-base md:text-lg font-bold uppercase tracking-tight transition-colors duration-300",
                      isHovered
                        ? "text-clinical-blue"
                        : "text-clinical-gray-dark",
                    )}
                  >
                    {item.name} - {item.type}
                  </h3>
                  {activePrice && !isDisabled ? (
                    <p className="text-[11px] font-mono font-bold text-clinical-gray-medium/80">
                      {formatCurrency(activePrice.value, currency)}
                    </p>
                  ) : (
                    <span className="text-[8px] uppercase font-bold text-clinical-gray-medium/30 italic">
                      {isDisabled ? "Restricted" : "Pricing_Error"}
                    </span>
                  )}
                </div>
              </div>

              {/* ACTION AREA (Checkout / Quantity Logic) */}
              <div className="mt-auto pt-4 border-t border-clinical-border">
                {!isDisabled && (
                  <div className="relative z-30">
                    {!cartItem ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Memasukkan item ke cart dengan referensi harga yang benar
                          addItem(item);
                        }}
                        className="w-full flex items-center justify-center gap-2 bg-clinical-blue py-3 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-clinical-gray-dark transition-colors"
                      >
                        <ShoppingCart size={12} />
                        Add To Cart
                      </button>
                    ) : (
                      <QuantityController
                        size="sm"
                        quantity={cartItem.quantity}
                        onIncrease={() => updateQuantity(item.id, 1)}
                        onDecrease={() => updateQuantity(item.id, -1)}
                        onChange={(val) => setItemQuantity(item.id, val)}
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Technical Marker Corner */}
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-clinical-blue/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaginationComponent;
