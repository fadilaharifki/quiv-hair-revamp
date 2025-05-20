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
import { useRouter } from "next/navigation";
import useScreenSize from "@/hooks/useScreenSize";

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];

interface ChildInterface {
  name: string;
  url: string;
  span: number | string;
}

interface DataInterface {
  id: string;
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
  title?: string;
  description?: string;
  classNameImage?: string;
  classNameImageContainer?: string;
  onClick?: (val: string) => void;
  isBgOpacity?: boolean;
}

export function CarouselBannerComponent({
  data = [],
  opts = { align: "start", loop: true },
  buttonNextPrev = false,
  dotButton = false,
  autoPlay = false,
  delay = 4000,
  title,
  description,
  classNameImage,
  classNameImageContainer,
  isBgOpacity = true,
  onClick,
}: CarouselInterface) {
  const intervalRef = useRef<number | any>(null);
  const [api, setApi] = useState<CarouselApi>();
  const nextIconRef = useRef<HTMLDivElement>(null);
  const prevIconRef = useRef<HTMLDivElement>(null);
  const [isHoveredNext, setIsHoveredNext] = useState(false);
  const [isHoveredPrev, setIsHoveredPrev] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const { breakpoint } = useScreenSize();
  const router = useRouter();

  const goToPrevious = () => api?.scrollPrev();
  const goToNext = () => api?.scrollNext();

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        api?.scrollNext();
      }, delay);

      return () => clearInterval(intervalRef.current);
    }
  }, [api, autoPlay, delay]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
      clearInterval(intervalRef.current);
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
    const iconElement = nextIconRef.current;
    const handleMouseEnter = () => setIsHoveredNext(true);
    const handleMouseLeave = () => setIsHoveredNext(false);
    iconElement?.addEventListener("mouseenter", handleMouseEnter);
    iconElement?.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      iconElement?.removeEventListener("mouseenter", handleMouseEnter);
      iconElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const iconElement = prevIconRef.current;
    const handleMouseEnter = () => setIsHoveredPrev(true);
    const handleMouseLeave = () => setIsHoveredPrev(false);
    iconElement?.addEventListener("mouseenter", handleMouseEnter);
    iconElement?.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      iconElement?.removeEventListener("mouseenter", handleMouseEnter);
      iconElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Carousel
      setApi={setApi}
      className={twMerge(
        "w-screen justify-center items-center md:min-h-screen",
        breakpoint === "sm" ? "min-h-screen" : ""
      )}
      opts={opts}
    >
      <CarouselContent>
        {data.map((items, index) => (
          <CarouselItem key={index} className={twMerge(`flex flex-row`)}>
            {items.child.map((itemImage, idx) => {
              const flexBasisValue = (+itemImage?.span / +items?.span) * 100;
              return (
                <div
                  className={twMerge("md:h-screen", classNameImageContainer)}
                  key={idx}
                  style={{ flexBasis: `${flexBasisValue}%` }}
                >
                  <Image
                    className={twMerge(
                      "flex md:min-h-screen w-screen object-cover grayscale",
                      classNameImage,
                      breakpoint === "sm" ? "min-h-screen" : ""
                    )}
                    width={1000}
                    height={1000}
                    alt={itemImage.name}
                    src={itemImage.url}
                  />
                </div>
              );
            })}
          </CarouselItem>
        ))}
      </CarouselContent>
      {isBgOpacity && (
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      )}
      <div className="absolute inset-0 flex items-center flex-col justify-center ">
        <div className="flex flex-col items-center justify-between gap-8 sm:gap-16">
          <div className="w-[80%] sm:w-[60%] text-white text-2xl sm:text-[50px] font-bold text-center uppercase  text-shadow leading-none shadow-gray-500">
            {title}
          </div>
          <div className="w-[80%] sm:w-[40%] text-white text-base sm:text-xl  font-thin text-center text-shadow shadow-gray-500">
            {description}
          </div>
          {typeof onClick === "function" && (
            <div className="flex">
              <Button
                variant="outline"
                className="bg-transparent text-white text-sm sm:text-lg w-40 sm:w-52"
                onClick={() => {
                  const currentId = data[selectedIndex]?.id;
                  if (typeof onClick === "function") {
                    onClick(currentId);
                  }
                }}
              >
                See more
              </Button>
            </div>
          )}
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
            {data.map((_, i) => (
              <div
                key={i}
                onClick={() => onDotButtonClick(i)}
                className={twMerge(
                  "cursor-pointer h-2 w-2 rounded-full hover:bg-white bg-gray-400",
                  selectedIndex === i ? "bg-white" : "bg-gray-400"
                )}
              ></div>
            ))}
          </div>
        )}
      </div>
    </Carousel>
  );
}
