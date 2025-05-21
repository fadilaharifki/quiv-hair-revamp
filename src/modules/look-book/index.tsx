"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import InstagramReelEmbed from "../../components/InstagramEmberd";
import { instagram } from "@/constants/data";
import { ReelsCarousel } from "@/components/ReelsCarousel";

const LookBookPageModules = () => {
  const handleScroll = () => {
    const element = document.getElementById("day-to-day-style-0");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const dataImage = [
    {
      url: "/image/look-book/image1.png",
      name: "Image 1",
      position: "right",
      className: "bg-light-gray text-navy-blue text-lg sm:text-5xl flex-col",
      description:
        "When it came to men’s grooming products, there weren’t many high-quality, harmful chemical-free options available at prices that were in proportion with what they offered. ",
      title: "Style",
      firstTitle: "Day-to-Day",
      lastTitle: "Style",
      button: (
        <Button
          variant="outline"
          className="bg-transparent text-navy-blue hover:text-white hover:bg-navy-blue border-navy-blue text-sm sm:text-lg w-52 "
        >
          Shop Now
        </Button>
      ),
    },
    {
      url: "/image/look-book/image2.png",
      name: "Image 2",
      position: "left",
      className: "bg-navy-blue text-white text-lg sm:text-5xl flex-col",
      description:
        "When it came to men’s grooming products, there weren’t many high-quality, harmful chemical-free options available at prices that were in proportion with what they offered. ",
      title: "Classy Style",
      firstTitle: "Classy",
      lastTitle: "Style",
      button: (
        <Button
          variant="outline"
          className="bg-transparent text-white hover:text-navy-blue text-sm sm:text-lg w-40 sm:w-52 "
        >
          Shop Now
        </Button>
      ),
    },
    {
      url: "/image/look-book/image3.png",
      name: "Image 3",
      position: "right",
      className:
        "bg-light-primary bg-opacity-50 text-navy-blue text-lg sm:text-5xl flex-col",
      description:
        "When it came to men’s grooming products, there weren’t many high-quality, harmful chemical-free options available at prices that were in proportion with what they offered. ",
      title: "Clean Style",
      firstTitle: "Clean",
      lastTitle: "Style",
      button: (
        <Button
          variant="outline"
          className="bg-transparent text-navy-blue hover:text-white hover:bg-navy-blue border-navy-blue text-sm sm:text-lg w-52 "
        >
          Shop Now
        </Button>
      ),
    },
  ];

  const reelsUrls = [
    "https://www.instagram.com/reel/DJGnxuuPsiB/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/reel/DJoGF4aPH2Y/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/reel/DIlqqHXPi5b/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/reel/DJGnxuuPsiB/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/reel/DJoGF4aPH2Y/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/reel/DIlqqHXPi5b/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/reel/DJGnxuuPsiB/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/reel/DJoGF4aPH2Y/?utm_source=ig_embed&amp;utm_campaign=loading",
    "https://www.instagram.com/reel/DIlqqHXPi5b/?utm_source=ig_embed&amp;utm_campaign=loading",
  ];

  return (
    <div>
      <section className="md:h-screen">
        <Image
          className="md:h-screen w-screen object-contain md:object-cover"
          height={1000}
          width={1000}
          src={"/image/look-book/lookbook-banner.webp"}
          alt="got-question banner image"
        ></Image>
      </section>
      <section className="mx-auto mt-8 pb-10">
        <h2 className="text-4xl font-semibold mb-6 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-1 mx-2">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="bg-gray-300 rounded-lg flex items-center justify-center text-xl text-gray-600 select-none h-96"
            >
              {num}
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1">
          <h2 className="text-2xl font-bold m-4 text-center">Reels</h2>
          <ReelsCarousel reelsUrls={reelsUrls} />
        </div>
      </section>
      <section className="max-w-xl mx-2 md:mx-auto p-6 bg-gray-50 rounded-lg shadow-md text-center space-y-6 my-10">
        <div className="text-gray-700">
          Styled with Quiv? Tag{" "}
          <span className="font-semibold">@quiv.hair</span> or submit your photo
          to be featured.
        </div>
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => window.open(instagram, "_blank")}
            className="px-5 py-2 bg-light-primary-navbar text-white rounded-md hover:bg-light-primary transition"
          >
            Upload Photo on Instagram
          </Button>
        </div>
      </section>

      {/* {dataImage.map((e, idx) => {
        return (
          <div
            id={`day-to-day-style-${idx}`}
            key={idx}
            className="min-h-screen flex flex-col sm:flex-row"
          >
            <div
              className={twMerge(
                "flex-col flex justify-center gap-11",
                e.position === "left"
                  ? "basis-2/6 bg-navy-blue px-10"
                  : "basis-4/6",
                e.className
              )}
            >
              {e.position === "left" ? (
                <div className="flex gap-5 flex-col py-10 sm:p-0">
                  <TitleComponent
                    firstTitle={e.firstTitle}
                    lastTitle={e.lastTitle}
                    classNameContainer={e.className}
                  />
                  <div className="text-2xl font-light">{e.description}</div>
                  <div>{e.button}</div>
                </div>
              ) : (
                <Image
                  className={twMerge("flex h-full w-full")}
                  width={286}
                  height={286}
                  alt={e.name}
                  src={e.url}
                />
              )}
            </div>
            <div
              className={twMerge(
                "flex justify-center items-center flex-col ",
                e.position === "left"
                  ? "basis-4/6"
                  : "basis-2/6 bg-navy-blue px-10",
                e.className
              )}
            >
              {e.position === "left" ? (
                <Image
                  className={twMerge("flex h-full w-full")}
                  width={286}
                  height={286}
                  alt={e.name}
                  src={e.url}
                />
              ) : (
                <div className="flex flex-col gap-5 sm:gap-10 py-10 sm:p-0">
                  <TitleComponent
                    firstTitle={e.firstTitle}
                    lastTitle={e.lastTitle}
                    classNameContainer={e.className}
                  />
                  <div className="text-2xl font-light">{e.description}</div>
                  <div>{e.button}</div>
                </div>
              )}
            </div>
          </div>
        );
      })}
      <div className="relative h-[500px] sm:h-screen">
        <Image
          className={twMerge("flex h-full w-full object-obtain")}
          width={286}
          height={286}
          src={"/image/look-book/image6.png"}
          alt="look book image"
        ></Image>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] h-[50%] flex flex-col items-center justify-evenly">
            <h1 className="text-white text-4xl sm:text-[60px] font-bold text-center  text-shadow shadow-gray-500">
              Simple Style
            </h1>
            <div className="w-8/12 text-white text-lg sm:text-2xl   text-center text-shadow shadow-gray-500">
              When it came to men’s grooming products, there weren’t many
              high-quality, harmful chemical-free options available at prices
              that were in proportion with what they offered.
            </div>
            <div>
              <Button
                variant="outline"
                className="bg-transparent text-white hover:text-navy-blue text-sm sm:text-lg w-40 sm:w-52 "
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LookBookPageModules;
