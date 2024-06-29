"use client";

import ArrowDown from "@/components/arrow-down";
import CardProduct from "@/components/card-product";
import { TitleComponent } from "@/components/title";
import { benefitIcon } from "@/constants/data";
import Image from "next/image";

const AboutUsPageModules = () => {
  const handleScroll = () => {
    const element = document.getElementById("about-quiv");
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
          src={"/image/about-us/banner.png"}
          alt="about us image"
        ></Image>
        <div className="absolute inset-0 bg-light-brown bg-opacity-25 shadow-lg  rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center justify-between gap-5">
            <h1 className="text-white text-3xl sm:text-[48px] leading-none text-center font-light text-shadow tracking-wide shadow-gray-500">
              About Us
            </h1>
            <h2 className="text-white text-sm sm:text-lg   text-center text-shadow shadow-gray-500">
              Natural ingredients, proven to perform the best
            </h2>
          </div>
        </div>
        <ArrowDown onClick={handleScroll} />
      </div>
      <div
        id="about-quiv"
        className="grid grid-cols-1 sm:grid-cols-4 min-h-screen py-10"
      >
        <div className="col-span-1 bg-light-brown-one py-10 sm:py-0 flex-col flex justify-center px-10 gap-11">
          <h1 className="flex text-lg sm:text-4xl gap-x-2 sm:gap-x-3 text-navy-blue">
            <span>ABOUT</span> <span className="font-bold">QUIV</span>
          </h1>
          <div className="text-navy-blue text-2xl   font-light leading-tight">
            Shop the best natural men’s hairstyling products, shampoo,
            conditioner, shaving, and skincare.
          </div>
        </div>
        <div className="col-span-3 flex sm:flex-row flex-col justify-center items-center bg-navy-blue gap-10 py-10 sm:py-0">
          {benefitIcon.map((product, idx) => {
            return (
              <div key={idx}>
                <CardProduct
                  classNameImage="w-20 h-20"
                  classNameCard="w-[260px] h-[105px] sm:h-[325px] flex justify-center align-center flex-col"
                  classNameTitle="text-xl font-light"
                  classNameCardContent="flex flex-row sm:flex-col item-center p-0 sm:p-6"
                  product={product}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-screen gap-5 sm:gap-10 border-navy-blue py-5 sm:py-10 border-y-2">
        <TitleComponent firstTitle="OUR" lastTitle="STORY" />
        <div className="flex w-11/12 sm:w-10/12 ">
          <Image
            className="flex rounded-lg object-contain w-full"
            width={286}
            height={286}
            objectFit="cover"
            src={"/image/about-us/story.png"}
            alt={"story about us"}
          />
        </div>
        <div className="flex flex-col w-10/12 gap-10">
          <div className="flex sm:text-center   text-lg sm:text-2xl font-light">
            When it came to men’s grooming products, there weren’t many
            high-quality, harmful chemical-free options available at prices that
            were in proportion with what they offered. That’s the reason why
            Vanity Men was founded. Vanity Men is more than just a brand; it’s a
            lifestyle. We explore every option when it comes to developing our
            products.
          </div>
          <div className="flex sm:text-center   text-lg sm:text-2xl font-light leading-tight">
            Every ingredient in our products is carefully chosen to deliver
            exceptional results while being kind to your hair and skin. We pay
            close attention to every detail to make sure that using our products
            will be something special for you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPageModules;
