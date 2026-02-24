"use client";

import NextIcon from "@/assets/icon/next-icon";
import PrevIcon from "@/assets/icon/prev-icon";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";

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
  isPagination = true,
  isOnClick,
  onClick = () => {},
}: PaginationComponentInterface) => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Ref untuk efek parallax sederhana
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
      ? "grid-cols-1"
      : data.length === 2
        ? "grid-cols-2"
        : "grid-cols-2 lg:grid-cols-3";

  return (
    <div className="w-full flex flex-col justify-center items-center px-6">
      <div className={twMerge("grid gap-20 lg:gap-32", gridLayout)}>
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
                "group relative flex flex-col items-center transition-all duration-700",
                isOnClick && !isDisabled ? "cursor-pointer" : "cursor-default",
                isDisabled && "opacity-30 grayscale",
              )}
              onClick={() => {
                onClick(item);
                if (isOnClick && item.path && !isDisabled)
                  router.push(item.path);
              }}
            >
              {/* Card Badge (New/Coming Soon) */}
              {isDisabled && (
                <div className="absolute -top-4 z-20 bg-white/5 border border-white/10 px-3 py-1 backdrop-blur-md rounded-full">
                  <p className="text-[8px] tracking-[0.3em] font-black text-gold-deep uppercase">
                    Reserved
                  </p>
                </div>
              )}

              {/* IMAGE SECTION - Floating & Parallax Effect */}
              <div className="relative mb-12 flex items-center justify-center">
                {/* Dynamic Glow Base */}
                <div
                  className={twMerge(
                    "absolute w-[150%] h-[150%] rounded-full transition-all duration-1000 blur-[80px] pointer-events-none",
                    isHovered
                      ? "bg-gold-deep/15 opacity-100 scale-110"
                      : "bg-transparent opacity-0 scale-90",
                  )}
                />

                {/* The Product Image */}
                <div
                  className="relative z-10 transition-all duration-500 ease-out"
                  style={{
                    transform: isHovered
                      ? `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0) rotateX(${mousePos.y * -10}deg) rotateY(${mousePos.x * 10}deg)`
                      : "translate3d(0,0,0)",
                  }}
                >
                  <Image
                    className={twMerge(
                      "w-[140px] sm:w-[260px] h-auto rounded-3xl object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)] transition-transform duration-700",
                      isHovered ? "scale-105" : "scale-100",
                    )}
                    width={500}
                    height={500}
                    alt={item.name}
                    src={item.url}
                  />
                </div>

                {/* Decorative Elements on Hover */}
                <div
                  className={twMerge(
                    "absolute -bottom-4 w-12 h-[1px] bg-gold-deep transition-all duration-700",
                    isHovered ? "w-24 opacity-100" : "w-0 opacity-0",
                  )}
                />
              </div>

              {/* TEXT SECTION */}
              <div className="space-y-3 text-center z-20">
                <div className="overflow-hidden">
                  <h3
                    className={twMerge(
                      "text-2xl sm:text-3xl font-semibold italic tracking-tighter transition-all duration-500 uppercase",
                      isHovered
                        ? "text-gold-deep translate-y-0"
                        : "text-white/90",
                    )}
                  >
                    {item.name}
                  </h3>
                </div>

                <div className="flex flex-col items-center gap-1">
                  {item.price && !isDisabled ? (
                    <p className="text-xs sm:text-sm font-light tracking-[0.4em] text-gray-500 group-hover:text-gray-300 transition-colors">
                      {formatCurrency(Number(item.price))}
                    </p>
                  ) : (
                    isDisabled && (
                      <span className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-bold">
                        Laboratory testing
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Hover Background Accent (Glass) */}
              <div
                className={twMerge(
                  "absolute -inset-x-8 -inset-y-12 bg-white/[0.02] border border-white/[0.05] rounded-[40px] -z-10 transition-all duration-700 backdrop-blur-[2px]",
                  isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95",
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaginationComponent;
