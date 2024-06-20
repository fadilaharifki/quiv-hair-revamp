"use client";

import NextIcon from "@/assets/icon/next-icon";
import PrevIcon from "@/assets/icon/prev-icon";
import { formatCurrency } from "@/lib/utils";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface DataInterface {
  name: string;
  url: string;
  price: string;
}

interface PaginationComponentInterface {
  data: DataInterface[];
  isPagination?: boolean;
}

const PaginationComponent = ({
  data,
  isPagination = true,
}: PaginationComponentInterface) => {
  const nextIconRef = useRef<HTMLDivElement>(null);
  const prevIconRef = useRef<HTMLDivElement>(null);
  const [isHoveredNext, setIsHoveredNext] = useState(false);
  const [isHoveredPrev, setIsHoveredPrev] = useState(false);

  const goToPrevious = () => {};

  const goToNext = () => {};

  useEffect(() => {
    const handleMouseEnter = () => setIsHoveredNext(true);
    const handleMouseLeave = () => setIsHoveredNext(false);

    const iconElement = nextIconRef.current;
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

  useEffect(() => {
    const handleMouseEnter = () => setIsHoveredPrev(true);
    const handleMouseLeave = () => setIsHoveredPrev(false);

    const iconElement = prevIconRef.current;
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
    <div className="w-screen flex flex-col justify-center items-center px-10 font-bell-mt">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-20">
        {data.map((item, i) => {
          return (
            <div key={i}>
              <div className="flex justify-center align-middle items-center ">
                <Image
                  className="w-[90px] h-[100px] sm:w-[198px] sm:h-[231px] flex justify-center items-center"
                  width={300}
                  height={300}
                  alt={item.name}
                  src={item.url}
                ></Image>
              </div>
              <div className="font-test text-xl sm:text-2xl text-center text-navy-blue">
                {item.name}
              </div>
              <div className="font-inter text-lg sm:text-xl text-center font-thin text-light-blue">
                {formatCurrency(Number(item.price ?? 0))}
              </div>
            </div>
          );
        })}
      </div>

      {isPagination && (
        <div className="mt-32 text-center text-sm text-muted-foreground flex gap-10">
          <div
            ref={prevIconRef}
            className="hover:bg-navy-blue cursor-pointer p-1 rounded-full"
          >
            <PrevIcon
              color={isHoveredPrev ? "#ffffff" : "#383838"}
              onClick={goToPrevious}
            />
          </div>
          <div
            ref={nextIconRef}
            className="hover:bg-navy-blue cursor-pointer p-1 rounded-full"
          >
            <NextIcon
              color={isHoveredNext ? "#ffffff" : "#383838"}
              onClick={goToNext}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaginationComponent;
