/* eslint-disable react/no-unescaped-entities */
"use client";

import ArrowDown from "@/components/arrow-down";
import CardProduct from "@/components/card-product";
import { TitleComponent } from "@/components/title";
import { benefitIcon, dataImageFlex } from "@/constants/data";
import Logo from "../../assets/svg/logo.svg";
import Image from "next/image";
import PaginationComponent from "@/components/pagination";
import { CarouselBannerComponent } from "@/components/carousel-banner";

const AboutUsPageModules = () => {
  const handleScroll = () => {
    const element = document.getElementById("about-quiv");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const dataImageAllProduct = [...dataImageFlex];

  const dataImageCarousel = [
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

  return (
    <div className="-top-12">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/banner_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30 gap-10">
          <Image width={250} height={250} src={Logo} alt="Logo"></Image>
          <p className="text-lg md:text-2xl font-light px-4">
            Refining Hair Perfection to Impress, Elevate, and Dominate
            <br />
            <span className="font-semibold">#QuivTheGame</span>
          </p>
        </div>
      </div>
      <div
        id="about-quiv"
        className="grid grid-cols-1 md:grid-cols-3 min-h-screen"
      >
        <div className="col-span-1">
          <Image
            src="/image/the-brand/introduction.webp"
            alt="Background"
            width={1000}
            height={1000}
            priority
            className="object-cover h-full object-center z-0"
          />
        </div>

        <div className="col-span-2 bg-light-primary-one py-10 sm:py-0 px-10 flex flex-col justify-center gap-11 text-white overflow-hidden">
          <div className="z-10">
            <h1 className="flex text-lg sm:text-4xl gap-x-2 sm:gap-x-3">
              <span>ABOUT</span> <span className="font-bold">QUIV</span>
            </h1>
            <div className="text-lg md:text-xl leading-6 font-light mt-4">
              Quiv was born to solve real men problems—the future for hair
              styling. Forget messy hair powders, greasy waxes, and outdated
              gels. We've created products: innovative, easy, and futuristic.
              Styling your hair should be as effortless as your confidence.
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center flex-col">
        <CarouselBannerComponent
          title="The act of styling one’s hair should be a ceremonious one"
          description="Shop the best natural men’s hairstyling products, shampoo,
              conditioner, shaving, and skincare."
          dotButton
          data={dataImageCarousel}
          autoPlay
        />
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
      <div
        id="about-quiv"
        className="grid grid-cols-1 sm:grid-cols-3 min-h-screen"
      >
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
      {/* <div className="flex flex-col items-center justify-center w-screen gap-5 sm:gap-10 border-navy-blue py-5 sm:py-10 border-y-2">
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
      </div> */}
    </div>
  );
};

export default AboutUsPageModules;
