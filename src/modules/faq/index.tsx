"use client";

import ArrowDown from "@/components/arrow-down";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { TitleComponent } from "@/components/title";

const FaqPageModules = () => {
  const [activeFaq, setActiveFaq] = useState<string | undefined>(undefined);

  const dataFaq = [
    {
      question: "Acquisition Process",
      answer:
        "Connect with our official channels via WhatsApp, verified Social Media, or our authorized digital storefronts for immediate processing.",
    },
    {
      question: "Volume Specifications",
      answer:
        "Each unit contains 80g of our high-efficiency formulation, engineered for consistent daily application.",
    },
    {
      question: "System Comparison: Flex vs Fine",
      answer:
        "Flex is designed for a dry, high-definition matte texture. Fine is developed for a smooth, high-integrity finish with subtle reflection.",
    },
    {
      question: "Application Methodology",
      answer:
        "Dispense one to two pumps into palms, distribute evenly, and apply to hair. For optimal structural integrity, apply after cleansing and utilize thermal styling (hair dryer).",
    },
    {
      question: "Usage Frequency",
      answer:
        "Our formulas are built for high-performance lifestyles. The compact housing is engineered for mobility, suitable for professional and active environments.",
    },
    {
      question: "Integrity and Safety",
      answer:
        "All products are quality-certified and enriched with essential nutrients to maintain structural hair health. Formulated for easy removal during standard cleansing.",
    },
  ];

  const handleScroll = () => {
    const element = document.getElementById("faq-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-clinical-white min-h-screen font-inter">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden bg-clinical-gray-dark">
        <Image
          className="h-full w-full object-cover opacity-50 grayscale transition-transform duration-[2000ms] md:scale-105 hover:scale-100"
          height={1200}
          width={1920}
          src={"/image/got-question/banner.webp"}
          alt="Support Header"
          priority
        />
        {/* Subtle Bottom Gradient for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-clinical-white via-transparent to-transparent" />

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-clinical-blue">
          <ArrowDown
            onClick={handleScroll}
            className="animate-bounce cursor-pointer"
          />
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section
        id="faq-section"
        className="max-w-4xl mx-auto py-16 md:py-24 px-5 md:px-0"
      >
        <div className="flex flex-col items-center mb-12 md:mb-20">
          <TitleComponent
            firstTitle="GENERAL"
            lastTitle="INQUIRIES"
            variant="secondary"
            classNameContainer="scale-90 md:scale-100"
          />
          <div className="h-[2px] w-12 bg-clinical-blue mt-4" />
        </div>

        <Accordion
          type="single"
          collapsible
          onValueChange={setActiveFaq}
          className="w-full space-y-4"
        >
          {dataFaq.map((faq, idx) => {
            const itemValue = `item-${idx}`;
            const isActive = activeFaq === itemValue;

            return (
              <AccordionItem
                key={idx}
                value={itemValue}
                className={twMerge(
                  "border transition-all duration-500 overflow-hidden rounded-none",
                  isActive
                    ? "bg-clinical-blue border-clinical-blue shadow-lg"
                    : "bg-clinical-gray-light border-clinical-border hover:border-clinical-blue/40",
                )}
              >
                <AccordionTrigger
                  className={twMerge(
                    "py-6 md:py-8 px-6 md:px-10 text-start text-base md:text-lg font-semibold uppercase tracking-widest no-underline hover:no-underline transition-colors",
                    isActive
                      ? "text-clinical-white"
                      : "text-clinical-gray-dark",
                  )}
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={twMerge(
                        "text-[10px] font-mono font-bold tracking-widest transition-colors",
                        isActive
                          ? "text-clinical-blue-light/40"
                          : "text-clinical-gray-medium",
                      )}
                    >
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="leading-tight">{faq.question}</span>
                  </div>
                </AccordionTrigger>

                <AccordionContent
                  className={twMerge(
                    "pb-8 px-6 md:px-10 text-xs md:text-sm leading-relaxed",
                    isActive
                      ? "text-clinical-blue-light"
                      : "text-clinical-gray-medium",
                  )}
                >
                  <div
                    className={twMerge(
                      "max-w-2xl border-l-[1.5px] pl-6 ml-1 font-medium",
                      isActive
                        ? "border-clinical-white/30"
                        : "border-clinical-blue/30",
                    )}
                  >
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
    </div>
  );
};

export default FaqPageModules;
