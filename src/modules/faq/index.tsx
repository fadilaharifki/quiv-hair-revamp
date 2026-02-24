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
      question: "How to order?",
      answer:
        "Reach quiv on our Whatsapp, Social Media and directly buy at your favourite marketplace for a faster shop.",
    },
    {
      question: "How much you get in 1 bottle?",
      answer:
        "Inside Quiv is 80g of innovative formula for your daily hair grooming.",
    },
    {
      question: "What’s the difference between both products?",
      answer:
        "Flex is for a dry matte texture (hair powder style), and Fine is for a smoother, glossy looks (clay/pomade style).",
    },
    {
      question: "How to apply Quiv?",
      answer:
        "One or two pump to your hand, spread enough then apply to your hair and style! Best result after shower with a hair dryer.",
    },
    {
      question: "Does Quiv support daily use?",
      answer:
        "Quiv is made for active men. Compact and easy to carry for sports, work, or hangouts.",
    },
    {
      question: "Does Quiv safe for my hair?",
      answer:
        "BPOM certified, nutritions added for healthier hair, and easy-to-wash. Definitely safe.",
    },
  ];

  const handleScroll = () => {
    const element = document.getElementById("faq-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] md:h-screen w-full overflow-hidden bg-black">
        <Image
          className="h-full w-full object-cover opacity-60 md:scale-105"
          height={1200}
          width={1920}
          src={"/image/got-question/banner.webp"}
          alt="FAQ Banner"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-navy-blue">
          <ArrowDown onClick={handleScroll} className="animate-bounce" />
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section
        id="faq-section"
        className="max-w-4xl mx-auto py-16 md:py-24 px-5 md:px-0"
      >
        <div className="flex flex-col items-center mb-12 md:mb-20">
          <TitleComponent
            firstTitle="FREQUENTLY"
            lastTitle="ASKED"
            variant="light"
            classNameContainer="scale-90 md:scale-100"
          />
          <div className="h-[2px] w-10 md:w-12 bg-gold-deep mt-3 md:mt-4" />
        </div>

        <Accordion
          type="single"
          collapsible
          onValueChange={setActiveFaq}
          className="w-full space-y-3 md:space-y-4"
        >
          {dataFaq.map((faq, idx) => {
            const itemValue = `item-${idx}`;
            const isActive = activeFaq === itemValue;

            return (
              <AccordionItem
                key={idx}
                value={itemValue}
                className={twMerge(
                  "border transition-all duration-300 overflow-hidden",
                  "rounded-[16px] md:rounded-[24px] px-5 md:px-10", // Smaller radius on mobile
                  isActive
                    ? "bg-navy-blue border-navy-blue md:scale-[1.02] shadow-xl"
                    : "bg-gray-50/80 border-gray-100 hover:border-gold-deep/30",
                )}
              >
                <AccordionTrigger
                  className={twMerge(
                    "py-5 md:py-8 text-start text-base md:text-xl font-semibold italic uppercase tracking-tighter no-underline hover:no-underline",
                    isActive ? "text-gold-deep" : "text-navy-blue",
                  )}
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span
                      className={twMerge(
                        "text-[9px] md:text-[10px] font-mono font-bold tracking-widest transition-colors",
                        isActive ? "text-white/30" : "text-gray-300",
                      )}
                    >
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="leading-tight">{faq.question}</span>
                  </div>
                </AccordionTrigger>

                <AccordionContent
                  className={twMerge(
                    "pb-6 md:pb-8 text-xs md:text-base leading-relaxed",
                    isActive ? "text-gray-300" : "text-gray-600",
                  )}
                >
                  <div className="max-w-2xl border-l-[1.5px] border-gold-deep/50 pl-4 md:pl-6 ml-1">
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
