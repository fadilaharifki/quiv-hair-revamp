"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CarouselProductComponent } from "@/components/carousel-product";
import { CarouselBannerComponent } from "@/components/carousel-banner";
import CardProduct from "@/components/card-product";
import useScreenSize from "@/hooks/useScreenSize";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { benefitIcon } from "@/constants/data";
import { formatUrl } from "@/lib/utils";
import { TitleComponent } from "@/components/title";
import FullScreenDrawer from "@/components/drawer";
import AppPageModuls from "../link";

const HomePageModules = () => {
  const { width, breakpoint } = useScreenSize();

  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const dataImage = [
    {
      name: "FLEX - Liquified Hair Powder",
      path: "/products/flex",
      url: "/image/general/image1_flex.png",
    },
    {
      name: "FINE - Liquified Hair Powder",
      path: "/products/fine",
      url: "/image/general/image1_fine.png",
    },
    {
      name: "FLEX - Liquified Hair Powder",
      path: "/products/flex",
      url: "/image/general/image1_flex.png",
    },
    {
      name: "FINE - Liquified Hair Powder",
      path: "/products/fine",
      url: "/image/general/image1_fine.png",
    },
  ];

  const dataImage2 = [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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
      title: "Three tips for getting perfect vacation hair",
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
      <FullScreenDrawer isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <AppPageModuls
          onClose={() => {
            setIsOpen(!isOpen);
            localStorage.setItem("isOpen", "false");
          }}
        />
      </FullScreenDrawer>
      <div className="min-h-screen">
        <Image
          className=" h-screen w-screen object-cover"
          fill
          src={"/image/home/image.png"}
          alt="home image"
        ></Image>
        <div className="absolute inset-0 bg-light-primary-three bg-opacity-40 shadow-lg  rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center h-52 sm:h-82 justify-between">
            <h1 className="text-white text-3xl sm:text-[48px] leading-none text-center font-light  text-shadow shadow-black tracking-wide">
              Botanically rich formulations protect, repair, and promote healthy
              hair
            </h1>
            <div>
              <Button
                variant="outline"
                className="bg-transparent text-white hover:text-black text-sm sm:text-lg w-40 sm:w-52"
                onClick={() => {
                  router.push("/the-brand");
                }}
              >
                See more
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="flex justify-evenly my-10 bg-soft-gray gap-10 py-20 flex-wrap">
          {benefitIcon.map((product, idx) => {
            return (
              <div key={idx}>
                <CardProduct
                  classNameImage="w-20 h-20"
                  classNameCard="w-[260px] h-[105px] sm:h-[263px] sm:w-[263px] flex justify-center align-center flex-col"
                  classNameTitle="text-xl font-light"
                  classNameCardContent="flex flex-row sm:flex-col item-center p-0 sm:p-6"
                  product={product}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="min-h-screen">
        <div className="flex flex-col px-5 sm:px-10">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:basis-4/6 flex sm:justify-end">
              <Image
                className="flex w-screen h-auto sm:w-[400px] sm:h-[400px] object-cover grayscale"
                width={1000}
                height={1000}
                alt="flex"
                src="/image/home/productFlex.png"
              />
            </div>
            <div className="basis-2/6 z-10">
              <div className="flex flex-col gap-5 px-5 pb-5 sm:p-0 sm:col-span-2 text-navy-blue justify-center">
                <div>
                  <h1 className="font-bold text-4xl">FLEX</h1>
                  <div className="text-lg font-light">
                    Liquified Hair Powder
                  </div>
                </div>
                <div className="text-sm sm:text-2xl font-light">
                  Dry Matte Finish
                </div>
                <div className="tex-sm sm:text-lg font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla
                  non neque finibus, eget aliquet mi eleifend. Proin suscipit
                  malesuada molestie. In semper euismod odio, suscipit cursus
                  lacus rhoncus.
                </div>
                <Button
                  variant="outline"
                  className="hover:bg-navy-blue mt-10 hover:text-white text-navy-blue border-navy-blue text-sm sm:text-lg w-40 sm:w-52"
                  onClick={() => {
                    router.push("/products/flex");
                  }}
                >
                  See product
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mt-20 mb-44 sm:-mt-44">
            {breakpoint === "sm" && (
              <div className="sm:basis-4/6 flex justify-start">
                <Image
                  className="flex  w-screen h-auto sm:w-[400px] sm:h-[400px] object-cover grayscale"
                  width={1000}
                  height={1000}
                  alt="flex"
                  src="/image/home/productFine.png"
                />
              </div>
            )}
            <div className="basis-2/6 z-10">
              <div className="flex flex-col gap-5 px-5 pb-5 sm:p-0 sm:col-span-2 text-navy-blue justify-center">
                <div>
                  <h1 className="font-bold text-4xl">FINE</h1>
                  <div className="text-lg font-light">
                    Liquified Hair Powder
                  </div>
                </div>
                <div className="text-sm sm:text-2xl font-light">
                  smooth glossy Finish
                </div>
                <div className="tex-sm sm:text-lg font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla
                  non neque finibus, eget aliquet mi eleifend. Proin suscipit
                  malesuada molestie. In semper euismod odio, suscipit cursus
                  lacus rhoncus.
                </div>
                <Button
                  variant="outline"
                  className="hover:bg-navy-blue mt-10 hover:text-white text-navy-blue border-navy-blue text-sm sm:text-lg w-40 sm:w-52"
                  onClick={() => {
                    router.push("/products/fine");
                  }}
                >
                  See product
                </Button>
              </div>
            </div>
            {breakpoint !== "sm" && (
              <div className="sm:basis-4/6 flex justify-start">
                <Image
                  className="flex  w-screen h-auto sm:w-[400px] sm:h-[400px] object-cover grayscale"
                  width={1000}
                  height={1000}
                  alt="flex"
                  src="/image/home/productFine.png"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center flex-col">
        <CarouselBannerComponent dotButton data={dataImage2} autoPlay />
      </div>
      <div className="text-center px-5 gap-5 sm:gap-0 py-20 sm:h-screen flex justify-evenly items-center flex-col bg-light-primary-one">
        <TitleComponent firstTitle="OUR" lastTitle="PRODUCTS" />
        <h3 className="text-2xl w-[80%] leading-7 sm:leading-10 text-center sm:text-[40px] font-extralight text-navy-blue">
          Choose the QUIV products that fits you!
        </h3>
        <div className="flex">
          <Button
            onClick={() => {
              router.push("/products");
            }}
            variant="outline"
            className="bg-transparent text-navy-blue text-sm sm:text-lg w-40 sm:w-52 border-black hover:border-none"
          >
            All products
          </Button>
        </div>
        <div className="flex justify-center items-center flex-col px-10">
          <CarouselProductComponent
            classNameCarousel="h-auto"
            classNameCarouselContent={"flex item-center sm:h-[450px]"}
            classNameCarouselItem="basis-full lg:basis-full"
            classNameImage="w-[200px] h-[200px] sm:w-[300px] sm:h-[350px]"
            data={dataImage}
            originButtonNextPrev
            buttonNextPrev={false}
            isOnClick
          />
        </div>
      </div>

      <div className="flex items-center flex-col gap-10 py-20 text-navy-blue">
        <TitleComponent firstTitle="OUR" lastTitle="BLOGS" />
        <h3 className="text-2xl w-[80%] leading-7 sm:leading-10 text-center sm:text-[40px] font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          aliquet ante sed egestas laoreet.
        </h3>
        <div className="flex">
          <Button
            onClick={() => {
              router.push("/blog");
            }}
            variant="outline"
            className="bg-transparent text-sm sm:text-lg w-40 sm:w-52 border-black hover:border-none"
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
                          onClick={() => {
                            router.push(`/feeds/${formatUrl(product.title)}`);
                          }}
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
