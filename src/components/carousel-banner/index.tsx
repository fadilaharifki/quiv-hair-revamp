"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import NextIcon from "@/assets/icon/next-icon";
import PrevIcon from "@/assets/icon/prev-icon";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";
import { EmblaCarouselType } from "embla-carousel";
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];

interface ChildInterface {
  name: string;
  url: string;
  span: number | string;
}

interface DataInterface {
  child: ChildInterface[];
  span: number | string;
}

interface CarouselInterface {
  data: DataInterface[];
  opts?: CarouselOptions;
  buttonNextPrev?: boolean;
  dotButton?: boolean;
  autoPlay?: boolean;
  delay?: number;
}

export function CarouselBannerComponent({
  data = [],
  opts = {
    align: "start",
    loop: true,
  },
  buttonNextPrev = false,
  dotButton = false,
  autoPlay = false,
  delay = 4000,
}: CarouselInterface) {
  const intervalRef = useRef<number | any>(null);

  const [api, setApi] = useState<CarouselApi>();
  const nextIconRef = useRef<HTMLDivElement>(null);
  const prevIconRef = useRef<HTMLDivElement>(null);
  const [isHoveredNext, setIsHoveredNext] = useState(false);
  const [isHoveredPrev, setIsHoveredPrev] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const goToPrevious = () => {
    api?.scrollPrev();
  };

  const goToNext = () => {
    api?.scrollNext();
  };

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        api?.scrollNext();
      }, delay);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }
  }, [api, autoPlay, delay]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    },
    [api]
  );

  const onInit = useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;

    onInit(api);
    onSelect(api);
    api.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [api, onInit, onSelect]);

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
        setApi={setApi}
        className="w-screen justify-center items-center min-h-screen"
        opts={opts}
      >
        <CarouselContent>
          {data.map((items, index) => (
            <CarouselItem key={index} className={twMerge(`flex flex-row`)}>
              {items.child.map((itemImage, idx) => {
                return (
                  <div
                    key={idx}
                    className={twMerge(`basis-${itemImage.span}/${items.span}`)}
                  >
                    <Image
                      className="flex min-h-screen w-screen object-cover grayscale"
                      width={100}
                      height={100}
                      alt={itemImage.name}
                      src={itemImage.url}
                    />
                  </div>
                );
              })}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className="absolute inset-0 flex items-center flex-col justify-center ">
          <div className="w-[80%] sm:w-[50%] flex flex-col items-center justify-between gap-8 sm:gap-16">
            <div className="text-white text-[40px] sm:text-[50px] font-bold text-center font-bell-mt text-shadow leading-none shadow-gray-500">
              The act of styling one’s hair should be a ceremonious one
            </div>
            <div className="text-white text-lg sm:text-xl font-inter font-thin text-center text-shadow shadow-gray-500">
              Shop the best natural men’s hairstyling products, shampoo,
              conditioner, shaving, and skincare.
            </div>
            <div className="flex">
              <Button
                variant="outline"
                className="bg-transparent text-white text-sm sm:text-lg w-52 "
              >
                See more
              </Button>
            </div>
          </div>
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
          {dotButton && (
            <div className="flex gap-2 mt-10">
              {data.map((e, i) => {
                return (
                  <div
                    onClick={() => {
                      onDotButtonClick(i);
                    }}
                    key={i}
                    className={twMerge(
                      "cursor-pointer h-2 w-2 rounded-full hover:bg-white bg-gray-400",
                      selectedIndex === i ? "bg-white" : "bg-gray-400"
                    )}
                  ></div>
                );
              })}
            </div>
          )}
        </div>
      </Carousel>
    </>
  );
}
