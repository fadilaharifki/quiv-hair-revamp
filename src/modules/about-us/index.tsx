/* eslint-disable react/no-unescaped-entities */
"use client";

import CardProduct from "@/components/card-product";
import { TitleComponent } from "@/components/title";
import { benefitIcon, dataImageFlex, dataImageFine } from "@/constants/data";
import Logo from "../../assets/svg/logo.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useScreenSize from "@/hooks/useScreenSize";
import { useRouter } from "next/navigation";
import FullScreenDrawer from "@/components/drawer";
import AppPageModuls from "../link";
import { useState } from "react";
import { useToggleStore } from "@/stores/useToggleStore";
import LoadingLine from "@/components/LoadingLine";

const AboutUsPageModules = () => {
  const dataImageAllProduct = [...dataImageFlex, ...dataImageFine];
  const { width, breakpoint } = useScreenSize();
  const { isOpen, setIsOpen, hasHydrated } = useToggleStore();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  if (!hasHydrated) {
    return (
      <div className="h-screen">
        <LoadingLine />
      </div>
    );
  }

  return (
    <div className="-mt-12">
      {loading && <LoadingLine />}
      <FullScreenDrawer isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <AppPageModuls
          onClose={() => {
            setLoading(true);

            setTimeout(() => {
              setIsOpen(!isOpen);
              setLoading(false);
            }, 1000);
          }}
        />
      </FullScreenDrawer>
      <section className="relative w-full h-screen overflow-hidden">
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
      </section>
      <section
        id="about-quiv"
        className="grid grid-cols-1 md:grid-cols-3 min-h-screen "
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
      </section>
      <section className="pt-20 min-h-screen">
        <div className="pb-20">
          <TitleComponent
            firstTitle="Our"
            lastTitle="Product"
            classNameContainer="uppercase flex justify-center"
          />
        </div>
        <div className="flex flex-col px-5 sm:px-10">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:basis-4/6 flex sm:justify-end">
              <Image
                className="flex w-screen h-auto sm:w-[400px] sm:h-[400px] object-cover grayscale"
                width={1000}
                height={1000}
                alt="flex"
                src="/image/the-brand/flexproduct.webp"
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
                  Strong hold, no messy powder. Flex is your go-to for textured,
                  effortless styles with a dry matte finish. Whether you’re at
                  the gym, office, or on the go, Flex keeps your hair looking
                  clean, styled, and natural — without flakes or stickiness.
                  Easy-to-wash and sweat friendly
                </div>
                <Button
                  variant="outline"
                  className="hover:bg-navy-blue mt-10 hover:text-white text-navy-blue border-navy-blue text-sm sm:text-lg w-40 sm:w-52"
                  onClick={() => {
                    router.push("/why-quiv/flex");
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
                  src="/image/the-brand/finesp.webp"
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
                  The perfect combo of shine and control. Fine is designed for
                  those who want a clean, polished look without the greasiness
                  of gel or pomade. The creamy texture spreads easily and locks
                  your hair in place with a natural gloss finish with
                  lightweight feel. Great for neat styles, formal-looks, or that
                  all-day “fresh from the mirror” guys.
                </div>
                <Button
                  disabled
                  variant="outline"
                  className="hover:bg-navy-blue mt-10 hover:text-white text-navy-blue border-navy-blue text-sm sm:text-lg w-40 sm:w-52"
                  // onClick={() => {
                  //   router.push("/why-quiv/fine");
                  // }}
                >
                  Cooming Soon
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
                  src="/image/the-brand/finesp.webp"
                />
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="md:min-h-screen flex justify-center items-center flex-col">
        <Image
          className="md:h-screen w-screen object-contain md:object-cover"
          height={1000}
          width={1000}
          src={"/image/the-brand/banner-thebrand-3.webp"}
          alt="got-question banner image"
        ></Image>
      </section>

      <section
        id="about-quiv"
        className="grid grid-cols-1 sm:grid-cols-3 md:min-h-screen"
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
      </section>
      <section className="md:min-h-screen flex justify-center items-center flex-col">
        <Image
          className="md:h-screen w-screen object-contain md:object-cover"
          height={1000}
          width={1000}
          src={"/image/the-brand/banner-thebrand-2.webp"}
          alt="got-question banner image"
        ></Image>
      </section>
    </div>
  );
};

export default AboutUsPageModules;
