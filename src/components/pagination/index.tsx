"use client";

import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ShieldCheck, Pipette, Zap, ChevronRight } from "lucide-react";

interface DataInterface {
  name: string;
  url: string;
  price?: string;
  path?: string;
  disable?: boolean;
}

interface PaginationComponentInterface {
  data: DataInterface[];
  isPagination?: boolean;
  isOnClick?: boolean;
  onClick?: (item: DataInterface) => void;
}

const PaginationComponent = ({
  data,
  isOnClick,
  onClick = () => {},
}: PaginationComponentInterface) => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  // Grid Mobile selalu 1 kolom, Tablet 2 kolom, Desktop disesuaikan
  const gridLayout =
    data.length === 1
      ? "grid-cols-1"
      : data.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="w-full flex flex-col justify-center items-center py-4 md:py-10">
      <div
        className={twMerge(
          "grid gap-px bg-clinical-border border-y md:border border-clinical-border w-full",
          gridLayout,
        )}
      >
        {data.map((item, i) => {
          const isDisabled = item.disable;
          const isHovered = hoveredIndex === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setMousePos({ x: 0, y: 0 });
              }}
              onMouseMove={isHovered ? handleMouseMove : undefined}
              className={twMerge(
                "group relative bg-clinical-white p-6 sm:p-10 flex flex-col transition-all duration-500 overflow-hidden",
                isOnClick && !isDisabled
                  ? "cursor-pointer active:bg-clinical-gray-light/30"
                  : "cursor-default",
                isDisabled && "bg-clinical-gray-light/50",
              )}
              onClick={() => {
                onClick(item);
                if (isOnClick && item.path && !isDisabled)
                  router.push(item.path);
              }}
            >
              {/* UNIT HEADER: Technical Metadata */}
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-[9px] font-mono font-bold text-clinical-blue uppercase tracking-widest">
                    Unit_ID: {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[7px] md:text-[8px] font-medium text-clinical-gray-medium uppercase tracking-tighter mt-1">
                    System.Batch_v2.0
                  </span>
                </div>
                {isDisabled ? (
                  <div className="flex items-center gap-1 px-1.5 py-0.5 md:px-2 md:py-1 bg-clinical-gray-dark/5 border border-clinical-border">
                    <Pipette
                      size={8}
                      className="text-clinical-gray-medium md:size-10"
                    />
                    <p className="text-[7px] md:text-[8px] tracking-widest font-bold text-clinical-gray-medium uppercase">
                      Testing
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 px-1.5 py-0.5 md:px-2 md:py-1 bg-clinical-blue/10 border border-clinical-blue/20">
                    <ShieldCheck
                      size={8}
                      className="text-clinical-blue md:size-10"
                    />
                    <p className="text-[7px] md:text-[8px] tracking-widest font-bold text-clinical-blue uppercase">
                      Verified
                    </p>
                  </div>
                )}
              </div>

              {/* IMAGE SECTION - Scaled for Mobile */}
              <div className="relative aspect-square flex items-center justify-center mb-6 md:mb-10">
                <div
                  className={twMerge(
                    "absolute inset-0 z-20 pointer-events-none border-y border-clinical-blue/20 transition-all duration-1000",
                    isHovered ? "h-full opacity-100" : "h-0 opacity-0",
                  )}
                />

                <div
                  className="relative z-10 transition-transform duration-500 ease-out"
                  style={{
                    transform:
                      isHovered && window.innerWidth > 768
                        ? `translate3d(${mousePos.x * 15}px, ${mousePos.y * 15}px, 0)`
                        : "translate3d(0,0,0)",
                  }}
                >
                  <Image
                    className={twMerge(
                      "w-[140px] sm:w-[200px] md:w-[240px] h-auto object-contain transition-all duration-700",
                      isHovered ? "scale-105" : "scale-100",
                      isDisabled && "grayscale brightness-125 opacity-40",
                    )}
                    width={500}
                    height={500}
                    alt={item.name}
                    src={item.url}
                  />
                </div>

                <div className="absolute top-0 right-0 p-1 md:p-2 opacity-20 md:opacity-10 group-hover:opacity-100 transition-opacity">
                  <Zap size={12} className="text-clinical-blue md:size-14" />
                </div>
              </div>

              {/* TEXT SECTION: Spec Data */}
              <div className="mt-auto pt-6 md:pt-8 border-t border-clinical-border flex flex-col items-start gap-3 md:gap-4">
                <h3
                  className={twMerge(
                    "text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-tighter leading-tight transition-colors duration-300",
                    isHovered
                      ? "text-clinical-blue"
                      : "text-clinical-gray-dark",
                  )}
                >
                  {item.name}
                </h3>

                <div className="flex justify-between items-center w-full">
                  {item.price && !isDisabled ? (
                    <p className="text-xs md:text-sm font-bold font-mono text-clinical-gray-medium">
                      {formatCurrency(Number(item.price))}
                    </p>
                  ) : (
                    <span className="text-[9px] md:text-[10px] uppercase font-bold text-clinical-gray-medium/40">
                      Access Restricted
                    </span>
                  )}

                  {!isDisabled && (
                    <div className="flex items-center gap-1 text-[8px] md:text-[9px] font-bold text-clinical-blue uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all">
                      <span>View</span>
                      <ChevronRight size={10} strokeWidth={3} />
                    </div>
                  )}
                </div>
              </div>

              {/* Technical Marker Detail (Mobile Visible) */}
              <div className="absolute bottom-0 left-0 w-1 h-1 bg-clinical-blue/20" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaginationComponent;
