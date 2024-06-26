"use client";

import ArrowDown from "@/components/arrow-down";
import CardProduct from "@/components/card-product";
import { Button } from "@/components/ui/button";
import useScreenSize from "@/hooks/useScreenSize";
import { formatUrl } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const BlogPageModules = () => {
  const { width, breakpoint } = useScreenSize();
  const router = useRouter();
  const dataImage1 = [
    {
      url: "/image/blog/image2.png",
      title: "Three tips for getting perfect vacation hair",
      description:
        "No matter where you’re travelling this summer, you need to keep your hair looking better than ever. Imagine all the vacation selfies forever imprinted into your phone ",
      date: "30 JUNE 2025",
    },
    {
      url: "/image/blog/image3.png",
      title: "Three tips for getting perfect vacation hair",
      description:
        "No matter where you’re travelling this summer, you need to keep your hair looking better than ever. Imagine all the vacation selfies forever imprinted into your phone ",
      date: "30 JUNE 2025",
    },
    {
      url: "/image/blog/image4.png",
      title: "Three tips for getting perfect vacation hair",
      description:
        "No matter where you’re travelling this summer, you need to keep your hair looking better than ever. Imagine all the vacation selfies forever imprinted into your phone ",
      date: "30 JUNE 2025",
    },
  ];

  const dataImage2 = [
    {
      url: "/image/blog/image5.png",
      title: "Three tips for getting perfect vacation hair",
      description:
        "No matter where you’re travelling this summer, you need to keep your hair looking better than ever. Imagine all the vacation selfies forever imprinted into your phone ",
      date: "30 JUNE 2025",
    },
    {
      url: "/image/blog/image6.png",
      title: "Three tips for getting perfect vacation hair",
      description:
        "No matter where you’re travelling this summer, you need to keep your hair looking better than ever. Imagine all the vacation selfies forever imprinted into your phone ",
      date: "30 JUNE 2025",
    },
    {
      url: "/image/blog/image7.png",
      title: "Three tips for getting perfect vacation hair",
      description:
        "No matter where you’re travelling this summer, you need to keep your hair looking better than ever. Imagine all the vacation selfies forever imprinted into your phone ",
      date: "30 JUNE 2025",
    },
  ];

  const dataImage3 = [
    {
      url: "/image/blog/image8.png",
      title: "Three tips for getting perfect vacation hair",
      description:
        "No matter where you’re travelling this summer, you need to keep your hair looking better than ever. Imagine all the vacation selfies forever imprinted into your phone ",
      date: "30 JUNE 2025",
    },
    {
      url: "/image/blog/image9.png",
      title: "Three tips for getting perfect vacation hair",
      description:
        "No matter where you’re travelling this summer, you need to keep your hair looking better than ever. Imagine all the vacation selfies forever imprinted into your phone ",
      date: "30 JUNE 2025",
    },
    {
      url: "/image/blog/image10.png",
      title: "Three tips for getting perfect vacation hair",
      description:
        "No matter where you’re travelling this summer, you need to keep your hair looking better than ever. Imagine all the vacation selfies forever imprinted into your phone ",
      date: "30 JUNE 2025",
    },
  ];

  const handleScroll = () => {
    const element = document.getElementById("section-2");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const dynamicWidth = dataImage3.length * width;

  return (
    <div>
      <div className="h-screen">
        <Image
          className="h-screen w-screen object-cover grayscale"
          fill
          src={"/image/blog/banner.png"}
          alt="blog image"
        ></Image>
        <div className="absolute inset-0 bg-light-brown bg-opacity-25 shadow-lg rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center justify-between">
            <h1 className="text-white text-5xl text-[60px] font-bold text-center font-bell-mt text-shadow shadow-gray-500">
              Blog
            </h1>
            <div className="text-white text-sm sm:text-lg font-inter text-center text-shadow shadow-gray-500">
              Natural ingredients, proven to perform the best
            </div>
          </div>
        </div>
        <ArrowDown onClick={handleScroll} />
      </div>
      <div
        id="section-2"
        className="flex sm:flex-row flex-col p-10 sm:p-20 gap-x-20 gap-y-5"
      >
        <div className="sm:basis-3/5">
          <div>
            <Image
              className="flex rounded-lg object-contain w-full"
              width={286}
              height={286}
              objectFit="cover"
              src={"/image/blog/image1.png"}
              alt={"story about us"}
            />
          </div>
        </div>
        <div className="flex flex-col basis-2/5 gap-5">
          <div className="text-light-blue text-sm sm:text-xl font-inter font-thin">
            30 JUNE 2025
          </div>
          <div className="text-navy-blue text-3xl sm:text-4xl sm:text-[50px] font-bell-mt font-semibold leading-tight">
            Three tips for getting perfect vacation hair
          </div>
          <div className="text-navy-blue text-base sm:text-2xl font-inter font-light leading-tight">
            No matter where you’re travelling this summer, you need to keep your
            hair looking better than ever. Imagine all the vacation selfies
            forever imprinted into your phone
          </div>
          <div>
            <Button
              onClick={() => {
                router.push(
                  `/blog/${formatUrl(
                    "Three tips for getting perfect vacation hair"
                  )}`
                );
              }}
              variant="outline"
              className="bg-transparent text-navy-blue hover:text-white hover:bg-navy-blue text-sm sm:text-lg w-52 "
            >
              Read now
            </Button>
          </div>
        </div>
      </div>
      <div className="w-screen overflow-x-auto sm:overflow-hidden">
        <div
          className={twMerge(
            "flex flex-row min-h-screen bg-navy-blue p-5 sm:p-20 gap-5"
          )}
          style={
            breakpoint === "sm" ? { width: `${dynamicWidth}px` } : undefined
          }
        >
          {dataImage1.map((product, idx) => {
            return (
              <div key={idx}>
                <CardProduct
                  classNameCard="border-none p-0"
                  classNameImage="w-full rounded-none"
                  classNameCardContent="gap-3 justify-start items-start"
                  classNameTitle="text-start "
                  classNameDesc="text-start "
                  classNameFooter="justify-start "
                  classNameDate=""
                  product={product}
                  footer={
                    <div className="flex">
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
      <div className="w-screen overflow-x-auto sm:overflow-hidden">
        <div
          className={twMerge(
            "flex flex-row min-h-screen bg-white p-5 sm:p-20 gap-5"
          )}
          style={
            breakpoint === "sm" ? { width: `${dynamicWidth}px` } : undefined
          }
        >
          {dataImage2.map((product, idx) => {
            return (
              <div key={idx}>
                <CardProduct
                  classNameCard="border-none p-0 bg-transparant"
                  classNameImage="w-full rounded-none"
                  classNameCardContent="gap-3 justify-start items-start"
                  classNameTitle="text-start text-navy-blue"
                  classNameDesc="text-start text-navy-blue"
                  classNameFooter="justify-start text-navy-blue"
                  classNameDate=" text-navy-blue"
                  product={product}
                  footer={
                    <div className="flex">
                      <Button
                        variant="outline"
                        className="bg-transparent text-navy-blue hover:bg-navy-blue hover:text-white text-sm sm:text-lg w-52 border-navy-blue hover:border-none"
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
      <div className="w-screen overflow-x-auto sm:overflow-hidden">
        <div
          className={twMerge(
            "flex flex-row min-h-screen bg-light-brown p-5 sm:p-20 gap-5"
          )}
          style={
            breakpoint === "sm" ? { width: `${dynamicWidth}px` } : undefined
          }
        >
          {dataImage3.map((product, idx) => {
            return (
              <div key={idx}>
                <CardProduct
                  classNameCard="border-none p-0 bg-transparant"
                  classNameImage="w-full rounded-none"
                  classNameCardContent="gap-3 justify-start items-start"
                  classNameTitle="text-start text-white"
                  classNameDesc="text-start text-white"
                  classNameFooter="justify-start text-white"
                  classNameDate=" text-white"
                  product={product}
                  footer={
                    <div className="flex">
                      <Button
                        variant="outline"
                        className="bg-transparent text-white hover:bg-navy-blue hover:text-white text-sm sm:text-lg w-52 border-white hover:border-none"
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

export default BlogPageModules;
