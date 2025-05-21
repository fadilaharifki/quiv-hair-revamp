"use client";

import React, { useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import InstagramReelEmbed from "./InstagramEmberd";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ChevronLeftCircle,
  ChevronRightCircle,
} from "lucide-react";

export function ReelsCarousel({ reelsUrls }: { reelsUrls: string[] }) {
  const [api, setApi] = useState<CarouselApi | undefined>();

  return (
    <div className="relative">
      <button
        onClick={() => api?.scrollPrev()}
        className="absolute left-5 top-[40%] z-10"
      >
        <ChevronLeftCircle color="white" size={30} />
      </button>
      <button
        onClick={() => api?.scrollNext()}
        className="absolute right-5 top-[40%] z-10"
      >
        <ChevronRightCircle color="white" size={30} />
      </button>

      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        className="w-full"
      >
        <CarouselContent>
          {reelsUrls.map((url, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <InstagramReelEmbed url={url} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
