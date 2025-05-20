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

const FaqPageModules = () => {
  const [activeFaq, setActiveFaq] = useState<number | null | undefined>(null);

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
        "Flex is for a dry matte texture on your hair (mostly like hair powder products), and Fine is for a smoother texture and glossy looks (mostly like using clay/pomade)",
    },
    {
      question: "How to apply Quiv?",
      answer:
        "One or two pump to your hand, no need to excessively spreading into your palm, just enough spread then apply to your hair and style! For best result use after a shower following a hair dryer.",
    },
    {
      question: "Does Quiv support daily use?",
      answer:
        "Quiv is made for an active men. Complete a daily men routine with Quiv, from sport to work to hangouts, you can bring Quiv compact bottle easily on your mobility.",
    },
    {
      question: "Does Quiv safe for my hair?",
      answer:
        "With BPOM certified, trusted by most active men, nutritions added for your healthier hair, easy-to-wash after use, Quiv is definitely safe.",
    },
  ];

  const handleScroll = () => {
    const element = document.getElementById("what-quiv");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="h-screen">
        <Image
          className="h-screen w-screen object-cover"
          height={1000}
          width={1000}
          src={"/image/got-question/banner.webp"}
          alt="got-question banner image"
        ></Image>
        {/* <div className="absolute inset-0 bg-light-primary bg-opacity-25 shadow-lg rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center justify-between gap-5">
            <h1 className="text-white text-3xl sm:text-[48px] leading-none text-center font-light text-shadow tracking-wide shadow-gray-500">
              Frequently asked questions
            </h1>
            <div className="text-white text-sm sm:text-lg   text-center text-shadow shadow-gray-500">
              Natural ingredients, proven to perform the best
            </div>
          </div>
        </div>
        <ArrowDown onClick={handleScroll} /> */}
      </div>
      <div id="what-quiv" className="min-h-screen">
        <div className="p-5 sm:p-20">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-5 sm:gap-10"
          >
            {dataFaq.map((faq, idx) => {
              return (
                <AccordionItem
                  onClick={() => {
                    setActiveFaq(idx);
                  }}
                  key={idx}
                  className={twMerge(
                    "border-[1px] px-10 rounded-lg border-navy-blue",
                    activeFaq === idx
                      ? "bg-navy-blue text-white"
                      : "bg-white text-brown"
                  )}
                  value={`item-${idx}`}
                >
                  <AccordionTrigger
                    className={twMerge(
                      "text-start text-2xl sm:text-4xl font-medium hover:font-bold",
                      activeFaq === idx ? "font-bold" : ""
                    )}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg sm:text-2xl font-normal">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqPageModules;
