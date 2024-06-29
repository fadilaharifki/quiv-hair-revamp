"use client";

import ArrowDown from "@/components/arrow-down";
import PaginationComponent from "@/components/pagination";
import { TitleComponent } from "@/components/title";
import { dataImageFine, dataImageFlex } from "@/constants/data";
import Image from "next/image";

const ProductsPageModules = () => {
  const dataImage = [
    {
      url: "/image/product/product1.png",
      title: "Bestseller",
    },
    {
      url: "/image/product/product2.png",
      title: "New collections",
    },
  ];

  const dataImageAllProduct = [...dataImageFlex, ...dataImageFine];

  const handleScroll = () => {
    const element = document.getElementById("all-product");
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
          src={"/image/product/banner.png"}
          alt="home image"
        ></Image>
        <div className="absolute inset-0 bg-light-brown bg-opacity-25 shadow-lg rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center justify-between gap-5">
            <h1 className="text-white text-3xl sm:text-[48px] leading-none text-center font-light text-shadow tracking-wide shadow-gray-500">
              Products
            </h1>
            <div className="text-white text-sm sm:text-lg   text-center text-shadow shadow-gray-700">
              Natural ingredients, proven to perform the best
            </div>
          </div>
        </div>
        <ArrowDown onClick={handleScroll} />
      </div>
      {/* <div
        id="our-collection"
        className="flex bg-navy-blue my-10 flex-col justify-center items-center py-10 tems-center gap-10"
      >
        <h1 className="flex  text-center text-3xl sm:text-[50px] font-bold text-white">
          Our collection
        </h1>
        <div className="flex w-10/12 sm:w-8/12 sm:text-center   text-lg sm:text-2xl font-light text-white">
          When it came to men’s grooming products, there weren’t many
          high-quality, harmful chemical-free options available at prices that
          were in proportion with what they offered.
        </div>
        <div className="flex sm:flex-row flex-col gap-4 p-5">
          {dataImage.map((e, i) => {
            return (
              <div key={i} className="relative">
                <Image
                  className="h-[500px] sm:h-[724px] w-[589px] object-obtain rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110"
                  width={286}
                  height={286}
                  src={e.url}
                  alt={e.title}
                ></Image>
                <div className="text-white text-2xl text-center sm:text-4xl absolute top-10 left-1/2 transform -translate-x-1/2 text-shadow shadow-black">
                  {e.title}
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      <div
        id="all-product"
        className="flex mt-10 flex-col justify-center py-5 sm:py-20 items-center gap-10"
      >
        <TitleComponent firstTitle="ALL" lastTitle="PRODUCT" />
        <div className="mt-20">
          <PaginationComponent isOnClick data={dataImageAllProduct} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPageModules;
