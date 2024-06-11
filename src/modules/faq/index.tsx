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
      question: "What is QUIV?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus congue. Integer ac lorem in nulla consectetur porta rutrum placerat felis.",
    },
    {
      question: "How can I order?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus congue. Integer ac lorem in nulla consectetur porta rutrum placerat felis.",
    },
    {
      question: "How do I become a distributor?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus congue. Integer ac lorem in nulla consectetur porta rutrum placerat felis.",
    },
    {
      question: "What QUIV products would work best for me?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus congue. Integer ac lorem in nulla consectetur porta rutrum placerat felis.",
    },
    {
      question: "Does your company test on animals?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus congue. Integer ac lorem in nulla consectetur porta rutrum placerat felis.",
    },
    {
      question: "Does QUIV products save for any kind of hair?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus congue. Integer ac lorem in nulla consectetur porta rutrum placerat felis.",
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
          className="h-screen w-screen object-cover grayscale"
          fill
          src={"/image/faq/banner.png"}
          alt="faq image"
        ></Image>
        <div className="absolute inset-0 bg-light-brown bg-opacity-25 shadow-lg rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center justify-between">
            <div className="text-white text-[60px] font-bold text-center font-bell-mt text-shadow shadow-gray-500">
              Frequently asked questions
            </div>
            <div className="text-white text-lg font-inter text-center text-shadow shadow-gray-500">
              Natural ingredients, proven to perform the best
            </div>
          </div>
        </div>
        <ArrowDown onClick={handleScroll} />
      </div>
      <div id="what-quiv" className="min-h-screen">
        <div className="p-20">
          <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-10"
          >
            {dataFaq.map((faq, idx) => {
              return (
                <AccordionItem
                  onClick={(e) => {
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
                  <AccordionTrigger className="font-bell-mt text-4xl font-bold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className=" font-inter text-2xl font-normal">
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
