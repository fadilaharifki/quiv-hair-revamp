"use client";

import ArrowDown from "@/components/arrow-down";
import CardProduct from "@/components/card-product";
import Image from "next/image";

const AboutUsPageModules = () => {
  const dataImage = [
    {
      url: "/image/about-us/image1.png",
      title: "Natural Ingredients",
    },
    {
      url: "/image/about-us/image2.png",
      title: "No Harmful Chemical",
    },
    {
      url: "/image/about-us/image3.png",
      title: "Cruelty Free",
    },
  ];

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
          <div className="w-[80%] flex flex-col items-center justify-between">
            <div className="text-white text-[60px] font-bold text-center bell-mt text-shadow shadow-gray-500">
              About Us
            </div>
            <div className="text-white text-lg font-inter text-center text-shadow shadow-gray-500">
              Natural ingredients, proven to perform the best
            </div>
          </div>
        </div>
        <ArrowDown onClick={handleScroll} />
      </div>
      <div id="about-quiv" className="grid grid-cols-4 h-screen py-10">
        <div className="col-span-1 bg-light-brown-one  flex-col flex justify-center px-10 gap-11">
          <div className="text-navy-blue text-[50px] font-bell-mt font-semibold">
            About QUIV
          </div>
          <div className="text-navy-blue text-2xl font-inter font-light leading-tight">
            Shop the best natural men’s hairstyling products, shampoo,
            conditioner, shaving, and skincare.
          </div>
        </div>
        <div className="col-span-3 flex justify-center flex-row items-center bg-navy-blue gap-10">
          {dataImage.map((product, idx) => {
            return (
              <div key={idx}>
                <CardProduct
                  classNameImage="w-20 h-20"
                  classNameCard="w-[260px] h-[325px] flex justify-center align-center flex-col"
                  classNameTitle="text-xl font-light"
                  product={product}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-screen gap-10 border-black py-10 border-y-2">
        <div className="flex bell-mt text-center text-[50px] font-bold">
          Our story
        </div>
        <div className="flex w-10/12 ">
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
          <div className="flex text-center font-inter text-2xl font-light">
            When it came to men’s grooming products, there weren’t many
            high-quality, harmful chemical-free options available at prices that
            were in proportion with what they offered. That’s the reason why
            Vanity Men was founded. Vanity Men is more than just a brand; it’s a
            lifestyle. We explore every option when it comes to developing our
            products.
          </div>
          <div className="flex text-center font-inter text-2xl font-light leading-tight">
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
