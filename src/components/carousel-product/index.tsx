"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import NextIcon from "@/assets/icon/next-icon";
import PrevIcon from "@/assets/icon/prev-icon";
import { twMerge } from "tailwind-merge";
import { formatCurrency } from "@/lib/utils";

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];

interface DataInterface {
  name: string;
  url: string;
  price: string;
}

interface CarouselInterface {
  data: DataInterface[];
  opts?: CarouselOptions;
  orientation?: "vertical" | "horizontal";
  buttonNextPrev?: boolean;
  classNameCarouselItem?: string;
  classNameCarousel?: string;
  classNameCarouselContent?: string;
}

export function CarouselProductComponent({
  data = [],
  opts = {
    align: "start",
    loop: true,
  },
  buttonNextPrev = true,
  classNameCarouselItem,
  classNameCarouselContent,
  classNameCarousel,
  orientation,
}: CarouselInterface) {
  const [api, setApi] = useState<CarouselApi>();
  const nextIconRef = useRef<HTMLDivElement>(null);
  const prevIconRef = useRef<HTMLDivElement>(null);
  const [isHoveredNext, setIsHoveredNext] = useState(false);
  const [isHoveredPrev, setIsHoveredPrev] = useState(false);

  const goToPrevious = () => {
    api?.scrollPrev();
  };

  const goToNext = () => {
    api?.scrollNext();
  };

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
    <>
      <Carousel
        orientation={orientation}
        setApi={setApi}
        className={twMerge(
          "w-64 h-[450px] sm:h-auto sm:w-11/12 justify-center items-center align-middle",
          classNameCarousel
        )}
        opts={opts}
      >
        <CarouselContent
          className={twMerge(
            "sm:flex gap-0 sm:gap-4",
            classNameCarouselContent
          )}
        >
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className={twMerge(
                "md:basis-1/2 lg:basis-1/3 flex justify-center item-center flex-col",
                classNameCarouselItem
              )}
            >
              <div className="flex justify-center align-middle items-center ">
                <Image
                  className="w-[100px] h-[170px] sm:w-[198px] sm:h-[231px] flex justify-center items-center"
                  width={300}
                  height={300}
                  alt={item.name}
                  src={item.url}
                ></Image>
              </div>
              <div className="font-test text-lg  sm:text-2xl text-center text-navy-blue">
                {item.name}
              </div>
              <div className="font-inter text-sm sm:text-xl text-center font-thin text-light-blue">
                {formatCurrency(Number(item.price ?? 0))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {buttonNextPrev && (
        <div className="my-10 text-center text-sm text-muted-foreground flex gap-10">
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
    </>
  );
}
