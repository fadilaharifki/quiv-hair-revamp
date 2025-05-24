"use client";

import ArrowDown from "@/components/arrow-down";
import { CarouselBannerComponent } from "@/components/carousel-banner";
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

  const dataCarousel = [
    {
      id: "1",
      span: 1,
      child: [
        {
          name: "People 1",
          span: 1,
          url: "/image/why-quiv/banner-why-quiv-2.webp",
        },
      ],
    },
    {
      id: "2",
      span: 1,
      child: [
        {
          name: "People 2",
          span: 1,
          url: "/image/why-quiv/banner-why-quiv-3.webp",
        },
      ],
    },
  ];
  return (
    <div>
      <section className="md:h-screen">
        <Image
          className="md:h-screen w-screen object-contain md:object-cover"
          height={1000}
          width={1000}
          src={"/image/why-quiv/banner-whyquiv-hero.webp"}
          alt="home image"
        ></Image>
        {/* <div className="absolute inset-0 bg-light-primary bg-opacity-25 shadow-lg rounded-md"></div>
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
        <ArrowDown onClick={handleScroll} /> */}
      </section>

      <section
        id="all-product"
        className="flex mt-10 flex-col justify-center py-5 sm:py-20 items-center gap-10"
      >
        <TitleComponent firstTitle="ALL" lastTitle="PRODUCT" />
        <div className="mt-20">
          <PaginationComponent isOnClick data={dataImageAllProduct} />
        </div>
      </section>
      <section>
        <div className="flex justify-center py-10">
          <TitleComponent firstTitle="Quiv" lastTitle="Flex" />
        </div>
        <Image
          className="md:h-screen w-screen object-cover"
          height={1000}
          width={1000}
          src={"/image/why-quiv/WhyQuiv-kandungan.webp"}
          alt="home image"
        ></Image>
      </section>
      <section>
        <div className="flex justify-center pt-10">
          <TitleComponent firstTitle="For" lastTitle="Active Men" />
        </div>
        <div className="md:min-h-screen flex justify-center items-center flex-col">
          <CarouselBannerComponent
            data={dataCarousel}
            autoPlay
            classNameImageContainer="h-auto"
            classNameImage="object-contain h-auto grayscale-0"
            isBgOpacity={false}
          />
        </div>
      </section>
    </div>
  );
};

export default ProductsPageModules;
