"use client";

import Image from "next/image";
import LookBookImage from "../../assets/image/look-book-image.svg";
import ArrowDown from "@/components/arrow-down";
import { describe } from "node:test";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";
import { TitleComponent } from "@/components/title";

const LookBookPageModules = () => {
  const handleScroll = () => {
    const element = document.getElementById("day-to-day-style-0");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const dataImage = [
    {
      url: "/image/look-book/image1.png",
      name: "Image 1",
      position: "right",
      className: "bg-light-gray text-navy-blue text-lg sm:text-5xl flex-col",
      description:
        "When it came to men’s grooming products, there weren’t many high-quality, harmful chemical-free options available at prices that were in proportion with what they offered. ",
      title: "Style",
      firstTitle: "Day-to-Day",
      lastTitle: "Style",
      button: (
        <Button
          variant="outline"
          className="bg-transparent text-navy-blue hover:text-white hover:bg-navy-blue border-navy-blue text-sm sm:text-lg w-52 "
        >
          Shop Now
        </Button>
      ),
    },
    {
      url: "/image/look-book/image2.png",
      name: "Image 2",
      position: "left",
      className: "bg-navy-blue text-white text-lg sm:text-5xl flex-col",
      description:
        "When it came to men’s grooming products, there weren’t many high-quality, harmful chemical-free options available at prices that were in proportion with what they offered. ",
      title: "Classy Style",
      firstTitle: "Classy",
      lastTitle: "Style",
      button: (
        <Button
          variant="outline"
          className="bg-transparent text-white hover:text-navy-blue text-sm sm:text-lg w-40 sm:w-52 "
        >
          Shop Now
        </Button>
      ),
    },
    {
      url: "/image/look-book/image3.png",
      name: "Image 3",
      position: "right",
      className:
        "bg-light-primary bg-opacity-50 text-navy-blue text-lg sm:text-5xl flex-col",
      description:
        "When it came to men’s grooming products, there weren’t many high-quality, harmful chemical-free options available at prices that were in proportion with what they offered. ",
      title: "Clean Style",
      firstTitle: "Clean",
      lastTitle: "Style",
      button: (
        <Button
          variant="outline"
          className="bg-transparent text-navy-blue hover:text-white hover:bg-navy-blue border-navy-blue text-sm sm:text-lg w-52 "
        >
          Shop Now
        </Button>
      ),
    },
  ];

  return (
    <div>
      <div className="h-screen">
        <Image
          className="h-screen w-screen object-cover grayscale"
          fill
          src={"/image/look-book/banner.png"}
          alt="look book image"
        ></Image>
        <div className="absolute inset-0 bg-light-primary bg-opacity-25 shadow-lg rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center justify-between gap-5">
            <h1 className="text-white text-3xl sm:text-[48px] leading-none text-center font-light text-shadow tracking-wide shadow-gray-500">
              LookBook
            </h1>
            <div className="text-white text-sm sm:text-lg   text-center text-shadow shadow-gray-500">
              Natural ingredients, proven to perform the best
            </div>
          </div>
        </div>
        <ArrowDown onClick={handleScroll} />
      </div>
      {dataImage.map((e, idx) => {
        return (
          <div
            id={`day-to-day-style-${idx}`}
            key={idx}
            className="min-h-screen flex flex-col sm:flex-row"
          >
            <div
              className={twMerge(
                "flex-col flex justify-center gap-11",
                e.position === "left"
                  ? "basis-2/6 bg-navy-blue px-10"
                  : "basis-4/6",
                e.className
              )}
            >
              {e.position === "left" ? (
                <div className="flex gap-5 flex-col py-10 sm:p-0">
                  <TitleComponent
                    firstTitle={e.firstTitle}
                    lastTitle={e.lastTitle}
                    classNameContainer={e.className}
                  />
                  <div className="text-2xl font-light">{e.description}</div>
                  <div>{e.button}</div>
                </div>
              ) : (
                <Image
                  className={twMerge("flex h-full w-full")}
                  width={286}
                  height={286}
                  alt={e.name}
                  src={e.url}
                />
              )}
            </div>
            <div
              className={twMerge(
                "flex justify-center items-center flex-col ",
                e.position === "left"
                  ? "basis-4/6"
                  : "basis-2/6 bg-navy-blue px-10",
                e.className
              )}
            >
              {e.position === "left" ? (
                <Image
                  className={twMerge("flex h-full w-full")}
                  width={286}
                  height={286}
                  alt={e.name}
                  src={e.url}
                />
              ) : (
                <div className="flex flex-col gap-5 sm:gap-10 py-10 sm:p-0">
                  <TitleComponent
                    firstTitle={e.firstTitle}
                    lastTitle={e.lastTitle}
                    classNameContainer={e.className}
                  />
                  <div className="text-2xl font-light">{e.description}</div>
                  <div>{e.button}</div>
                </div>
              )}
            </div>
          </div>
        );
      })}
      <div className="relative h-[500px] sm:h-screen">
        <Image
          className={twMerge("flex h-full w-full object-obtain")}
          width={286}
          height={286}
          src={"/image/look-book/image6.png"}
          alt="look book image"
        ></Image>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] h-[50%] flex flex-col items-center justify-evenly">
            <h1 className="text-white text-4xl sm:text-[60px] font-bold text-center  text-shadow shadow-gray-500">
              Simple Style
            </h1>
            <div className="w-8/12 text-white text-lg sm:text-2xl   text-center text-shadow shadow-gray-500">
              When it came to men’s grooming products, there weren’t many
              high-quality, harmful chemical-free options available at prices
              that were in proportion with what they offered.
            </div>
            <div>
              <Button
                variant="outline"
                className="bg-transparent text-white hover:text-navy-blue text-sm sm:text-lg w-40 sm:w-52 "
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookBookPageModules;
