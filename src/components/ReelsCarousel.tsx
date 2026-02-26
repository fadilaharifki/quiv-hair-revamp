"use client";

import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import InstagramReelEmbed from "./InstagramEmberd";
import { ChevronLeft, ChevronRight, MonitorPlay } from "lucide-react";

export function ReelsCarousel({ reelsUrls }: { reelsUrls: string[] }) {
  const [api, setApi] = useState<CarouselApi | undefined>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full group">
      {/* --- HEADER CONTROLS: Technical Metadata --- */}
      <div className="flex justify-between items-center mb-6 px-1">
        <div className="flex items-center gap-3">
          <div className="bg-clinical-blue p-1.5">
            <MonitorPlay size={14} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-clinical-gray-dark uppercase tracking-widest">
              Live_Feed_Stream
            </span>
            <span className="text-[8px] font-mono text-clinical-gray-medium uppercase">
              Status: Encoded_Stable
            </span>
          </div>
        </div>

        {/* Counter Instrument */}
        <div className="flex items-center gap-4">
          <div className="text-[10px] font-mono font-bold text-clinical-blue bg-clinical-blue/5 px-3 py-1 border border-clinical-blue/20">
            [{String(current).padStart(2, "0")} {String(count).padStart(2, "0")}
            ]
          </div>

          <div className="flex gap-px bg-clinical-border border border-clinical-border">
            <button
              onClick={() => api?.scrollPrev()}
              className="bg-clinical-white p-2 hover:bg-clinical-blue hover:text-white transition-colors text-clinical-gray-dark disabled:opacity-30"
              disabled={!api?.canScrollPrev()}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="bg-clinical-white p-2 hover:bg-clinical-blue hover:text-white transition-colors text-clinical-gray-dark disabled:opacity-30"
              disabled={!api?.canScrollNext()}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* --- MAIN CAROUSEL --- */}
      <div className="relative border border-clinical-border p-1 bg-clinical-gray-light/30">
        {/* Dekorasi Sudut Lab */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-clinical-blue z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-clinical-blue z-10 pointer-events-none" />

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {reelsUrls.map((url, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="relative group/item overflow-hidden bg-clinical-white border border-clinical-border aspect-[9/16]">
                  {/* Index Label per Slide */}
                  <div className="absolute top-3 right-3 z-10 text-[8px] font-mono font-bold bg-black/60 text-white px-2 py-1 backdrop-blur-md">
                    REF_{String(index + 1).padStart(2, "0")}
                  </div>

                  <InstagramReelEmbed url={url} />

                  {/* Scanning Overlay Effect */}
                  <div className="absolute inset-0 border-x-2 border-clinical-blue/0 group-hover/item:border-clinical-blue/20 transition-all pointer-events-none" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* --- FOOTER DECORATION --- */}
      <div className="mt-4 flex justify-between items-center opacity-40">
        <div className="h-[1px] flex-1 bg-clinical-border" />
        <span className="text-[7px] font-mono px-4 tracking-[0.5em] text-clinical-gray-medium uppercase">
          Data_Transmission_Verified
        </span>
        <div className="h-[1px] flex-1 bg-clinical-border" />
      </div>
    </div>
  );
}
