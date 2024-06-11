"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import { useEffect, useRef, useState } from "react";
import NextIcon from "@/assets/icon/next-icon";
import PrevIcon from "@/assets/icon/prev-icon";

interface DataInterface {
  name: string;
  url: string;
  price: string;
}

interface CarouselInterface {
  data: DataInterface[];
}

export function CarouselProductComponent({ data = [] }: CarouselInterface) {
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
        setApi={setApi}
        className="w-9/12 justify-center items-center align-middle"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 flex justify-end flex-col"
            >
              <Image
                width={300}
                height={300}
                alt={item.name}
                src={item.url}
              ></Image>
              <div className="font-test text-2xl text-center text-navy-blue">
                {item.name}
              </div>
              <div className="font-inter text-xl text-center font-thin text-light-blue">
                {formatCurrency(Number(item.price ?? 0))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
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
    </>
  );
}
