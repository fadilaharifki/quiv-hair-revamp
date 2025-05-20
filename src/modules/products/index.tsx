"use client";

import ArrowDown from "@/components/arrow-down";
import PaginationComponent from "@/components/pagination";
import { TitleComponent } from "@/components/title";
import { dataImageFine, dataImageFlex } from "@/constants/data";
import Image from "next/image";

const ProductsPageModules = () => {
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
        <div className="absolute inset-0 bg-light-primary bg-opacity-25 shadow-lg rounded-md"></div>
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
