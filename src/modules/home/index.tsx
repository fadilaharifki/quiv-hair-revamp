"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CarouselProductComponent } from "@/components/carousel-product";
import { CarouselBannerComponent } from "@/components/carousel-banner";
import CardProduct from "@/components/card-product";
import useScreenSize from "@/hooks/useScreenSize";
import { useEffect } from "react";

const HomePageModules = () => {
  const { width, height, breakpoint } = useScreenSize();

  const dataImage = [
    {
      name: "QUIV Hair Wax",
      price: "140000",
      url: "/image/home/hairwax1.png",
    },
    {
      name: "QUIV Hair Wax",
      price: "140000",
      url: "/image/home/hairwax2.png",
    },
    {
      name: "QUIV Hair Wax",
      price: "140000",
      url: "/image/home/hairwax3.png",
    },
    {
      name: "QUIV Hair Wax",
      price: "140000",
      url: "/image/home/hairwax3.png",
    },
    {
      name: "QUIV Hair Wax",
      price: "140000",
      url: "/image/home/hairwax3.png",
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
          <div className="w-[80%] flex flex-col items-center h-72 justify-between">
            <div className="text-white text-4xl sm:text-[60px] leading-none font-bold text-center font-bell-mt text-shadow shadow-black">
              Botanically rich formulations protect, repair, and promote healthy
              hair
            </div>
            <div>
              <Button
                variant="outline"
                className=" bg-transparent text-white hover:text-black text-sm sm:text-lg w-52"
              >
                See more
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 min-h-screen py-10">
        <div className="sm:col-span-1 py-10 sm:py-0 bg-navy-blue flex-col flex justify-center px-10 gap-4 sm:gap-11">
          <div className="text-white text-4xl sm:text-[50px] font-bell-mt font-semibold">
            Bestsellers
          </div>
          <div className="text-white text-xl sm:text-2xl font-inter font-light">
            Shop the best natural men’s hairstyling products, shampoo,
            conditioner, shaving, and skincare.{" "}
          </div>
          <div>
            <Button
              variant="outline"
              className="bg-transparent text-white hover:text-black text-sm sm:text-lg w-52 "
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
            classNameCarouselItem="basis-1/1 lg:basis-1/4 flex justify-end flex-col"
            data={dataImage}
          />
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center flex-col">
        <CarouselBannerComponent dotButton data={dataImage2} autoPlay />
      </div>
      <div className="gap-5 sm:gap-0 py-20 sm:h-screen flex justify-evenly items-center flex-col bg-light-brown-one">
        <div className="flex font-bell-mt text-4xl sm:text-[50px] font-bold">
          New collections
        </div>
        <div className="flex justify-center items-center flex-col px-10">
          <CarouselProductComponent
            orientation={breakpoint === "sm" ? "vertical" : "horizontal"}
            buttonNextPrev={false}
            classNameCarouselContent={breakpoint === "sm" ? "h-[450px]" : ""}
            classNameCarouselItem="basis-1/1 lg:basis-1/4 flex justify-end flex-col"
            data={dataImage}
          />
        </div>
        <div className="flex">
          <Button
            variant="outline"
            className="bg-transparent text-black text-sm sm:text-lg w-52 border-black hover:border-none"
          >
            See more
          </Button>
        </div>
      </div>

      <div className="flex items-center flex-col gap-10 py-20">
        <div className="flex font-bell-mt text-center text-4xl sm:text-[50px] font-bold leading-tight">
          Our blogs
        </div>
        <div className="w-4/12 flex text-center font-inter text-xl font-light leading-tight">
          Shop the best natural men’s hairstyling products, shampoo,
          conditioner, shaving, and skincare.
        </div>
        <div className="flex">
          <Button
            variant="outline"
            className="bg-transparent text-black text-sm sm:text-lg w-52 border-black hover:border-none"
          >
            See more
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-5 sm:px-32">
          {dataImage3.map((product, idx) => {
            return (
              <div key={idx}>
                <CardProduct
                  product={product}
                  footer={
                    <div className="flex justify-center">
                      <Button
                        variant="outline"
                        className="bg-transparent text-white hover:text-navy-blue text-sm sm:text-lg w-52 border-white hover:border-none"
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
  );
};

export default HomePageModules;
