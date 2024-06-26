"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CarouselProductComponent } from "@/components/carousel-product";
import { CarouselBannerComponent } from "@/components/carousel-banner";
import CardProduct from "@/components/card-product";
import useScreenSize from "@/hooks/useScreenSize";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const HomePageModules = () => {
  const { width, breakpoint } = useScreenSize();

  const router = useRouter();

  const dataImage = [
    {
      name: "FLEX - Liquified Hair Powder",
      price: "000000",
      path: "/products/flex",
      url: "/image/general/image1.png",
    },
    {
      name: "FINE - Liquified Hair Powder",
      price: "000000",
      path: "/products/fine",

      url: "/image/general/image1.png",
    },
    {
      name: "FLEX - Liquified Hair Powder",
      price: "000000",
      path: "/products/flex",
      url: "/image/general/image1.png",
    },
    {
      name: "FINE - Liquified Hair Powder",
      price: "000000",
      path: "/products/fine",
      url: "/image/general/image1.png",
    },
  ];

  const dataImage2 = [
    {
      span: 2,
      child: [
        {
          name: "People 1",
          span: 1,
          url: "/image/home/people1.png",
        },
        {
          name: "People 2",
          span: 1,
          url: "/image/home/people2.png",
        },
      ],
    },
    {
      span: 3,
      child: [
        {
          name: "People 2",
          span: 1,
          url: "/image/home/people2.png",
        },
        {
          name: "People 2",
          span: 2,
          url: "/image/home/people3.png",
        },
      ],
    },
    {
      span: 3,
      child: [
        {
          name: "People 3",
          span: 1,
          url: "/image/home/people3.png",
        },
        {
          name: "People 1",
          span: 2,
          url: "/image/home/people1.png",
        },
      ],
    },
  ];

  const dataImage3 = [
    {
      url: "/image/home/cuttinghair1.png",
      title: "I’m putting what in my hair?",
      description:
        "Shop the best natural men’s hairstyling products, shampoo, conditioner, shaving, and skincare. Hanz de Fuko’s clean ",
    },
    {
      url: "/image/home/cuttinghair2.png",
      title: "I’m putting what in my hair?",
      description:
        "Shop the best natural men’s hairstyling products, shampoo, conditioner, shaving, and skincare. Hanz de Fuko’s clean ",
    },
    {
      url: "/image/home/cuttinghair3.png",
      title: "I’m putting what in my hair?",
      description:
        "Shop the best natural men’s hairstyling products, shampoo, conditioner, shaving, and skincare. Hanz de Fuko’s clean ",
    },
  ];

  const dynamicWidth = dataImage3.length * width;

  return (
    <div>
      <div className="h-screen">
        <Image
          className=" h-screen w-screen object-cover"
          fill
          src={"/image/home/banner.png"}
          alt="home image"
        ></Image>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center h-52 sm:h-82 justify-between">
            <h1 className="text-white text-3xl sm:text-[48px] uppercase leading-none font-black text-center font-inter text-shadow shadow-black">
              Botanically rich formulations protect, repair, and promote healthy
              hair
            </h1>
            <div>
              <Button
                variant="outline"
                className="bg-transparent text-white hover:text-black text-sm sm:text-lg w-40 sm:w-52"
                onClick={() => {
                  router.push("/about-us");
                }}
              >
                See more
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 min-h-screen py-10">
        <div className="sm:col-span-1 py-10 sm:py-0 bg-navy-blue flex-col flex justify-center px-10 gap-4 sm:gap-11">
          <h1 className="text-white text-4xl text-center sm:text-left sm:text-[50px] font-bell-mt font-semibold">
            Bestsellers
          </h1>
          <div className="text-white text-center sm:text-left text-xl sm:text-2xl font-inter font-light">
            Shop the best natural men’s hairstyling products, shampoo,
            conditioner, shaving, and skincare.{" "}
          </div>
          <div className="text-center sm:text-left">
            <Button
              variant="outline"
              className="bg-transparent text-white hover:text-black text-sm sm:text-lg w-40 sm:w-52"
            >
              See more
            </Button>
          </div>
        </div>
        <div className="col-span-3 mt-20 sm:mt-0 flex justify-center items-center flex-col">
          <CarouselProductComponent
            orientation={"horizontal"}
            buttonNextPrev={true}
            classNameCarousel="h-auto"
            classNameCarouselItem="lg:basis-1/2 flex justify-end flex-col"
            data={dataImage}
            isOnClick
          />
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center flex-col">
        <CarouselBannerComponent dotButton data={dataImage2} autoPlay />
      </div>
      <div className="gap-5 sm:gap-0 py-20 sm:h-screen flex justify-evenly items-center flex-col bg-light-brown-one">
        <h1 className="flex font-bell-mt text-4xl sm:text-[50px] font-bold">
          New collections
        </h1>
        <div className="flex justify-center items-center flex-col px-10">
          <CarouselProductComponent
            orientation={breakpoint === "sm" ? "vertical" : "horizontal"}
            buttonNextPrev={false}
            classNameCarouselContent={breakpoint === "sm" ? "h-[450px]" : ""}
            classNameCarouselItem="basis-1/1 lg:basis-1/3 flex justify-end flex-col"
            data={dataImage}
            isOnClick
          />
        </div>
        <div className="flex">
          <Button
            variant="outline"
            className="bg-transparent text-black text-sm sm:text-lg w-40 sm:w-52 border-black hover:border-none"
          >
            See more
          </Button>
        </div>
      </div>

      <div className="flex items-center flex-col gap-10 py-20">
        <h1 className="flex font-bell-mt text-center text-4xl sm:text-[50px] font-bold leading-tight">
          Our blogs
        </h1>
        <div className="w-9/12 sm:w-4/12 flex text-center font-inter text-xl font-light leading-tight">
          Shop the best natural men’s hairstyling products, shampoo,
          conditioner, shaving, and skincare.
        </div>
        <div className="flex">
          <Button
            variant="outline"
            className="bg-transparent text-black text-sm sm:text-lg w-40 sm:w-52 border-black hover:border-none"
          >
            See more
          </Button>
        </div>
        <div className="w-screen overflow-x-auto sm:overflow-hidden">
          <div
            className={twMerge(
              "grid grid-cols-3 grid-flow-row gap-2 sm:gap-10 px-2 sm:px-32 "
            )}
            style={
              breakpoint === "sm" ? { width: `${dynamicWidth}px` } : undefined
            }
          >
            {dataImage3.map((product, idx) => {
              return (
                <div key={idx}>
                  <CardProduct
                    position={breakpoint === "sm" ? "horizontal" : "vertical"}
                    product={product}
                    footer={
                      <div className="flex justify-center">
                        <Button
                          variant="outline"
                          className="bg-transparent text-white hover:text-navy-blue text-sm sm:text-lg w-40 sm:w-52 border-white hover:border-none"
                        >
                          See more
                        </Button>
                      </div>
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageModules;
