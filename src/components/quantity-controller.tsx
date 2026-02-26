"use client";

import { Minus, Plus } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface QuantityControllerProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onChange: (value: number) => void;
  className?: string;
  size?: "sm" | "lg";
}

export const QuantityController = ({
  quantity,
  onIncrease,
  onDecrease,
  onChange,
  className,
  size = "lg",
}: QuantityControllerProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 0) {
      onChange(val);
    } else if (e.target.value === "") {
      onChange(0); // Biarkan kosong sementara saat user menghapus
    }
  };

  const handleBlur = () => {
    if (quantity === 0) {
      onDecrease(); // Jika ditinggal dalam keadaan 0 atau kosong, hapus dari cart via store logic
    }
  };

  const isSmall = size === "sm";

  return (
    <div
      className={twMerge(
        "flex items-center border-2 border-clinical-blue bg-white overflow-hidden",
        isSmall ? "h-10" : "h-16",
        className,
      )}
    >
      {/* MINUS BUTTON */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDecrease();
        }}
        className="flex-1 flex items-center justify-center h-full hover:bg-clinical-blue/5 transition-colors border-r border-clinical-blue/20"
      >
        <Minus size={isSmall ? 14 : 18} className="text-clinical-blue" />
      </button>

      {/* INPUT FIELD (BISA DIKETIK) */}
      <div className="flex-[1.5] flex flex-col items-center justify-center bg-clinical-blue/5 h-full relative">
        {!isSmall && (
          <span className="text-[7px] font-bold text-clinical-blue/50 uppercase tracking-tighter absolute top-1.5">
            Qty
          </span>
        )}
        <input
          type="number"
          value={quantity === 0 ? "" : quantity}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onClick={(e) => e.stopPropagation()}
          className={twMerge(
            "w-full bg-transparent text-center font-mono font-black text-clinical-blue outline-none border-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
            isSmall ? "text-sm" : "text-xl pt-2",
          )}
        />
      </div>

      {/* PLUS BUTTON */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onIncrease();
        }}
        className="flex-1 flex items-center justify-center h-full hover:bg-clinical-blue/5 transition-colors border-l border-clinical-blue/20"
      >
        <Plus size={isSmall ? 14 : 18} className="text-clinical-blue" />
      </button>
    </div>
  );
};
