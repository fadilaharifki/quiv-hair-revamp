"use client";

import NextIcon from "@/assets/icon/next-icon";
import { ArrowDown01, ArrowDownCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ArrawDownInterface {
  className?: string;
  onClick?: () => void;
}

const ArrowDown = ({ className, onClick = () => {} }: ArrawDownInterface) => {
  const IconRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const iconElement = IconRef.current;
    if (iconElement) {
      iconElement.addEventListener("mouseenter", handleMouseEnter);
      iconElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (iconElement) {
        iconElement.removeEventListener("mouseenter", handleMouseEnter);
        iconElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={IconRef}
      onClick={onClick}
      className={twMerge(
        "absolute bottom-20  bg-white hover:bg-navy-blue left-1/2 transform -translate-x-1/2 cursor-pointer p-1 rounded-full ",
        className,
      )}
    >
      <ArrowDownCircle color={isHovered ? "#ffffff" : "#383838"} />
    </div>
  );
};

export default ArrowDown;
