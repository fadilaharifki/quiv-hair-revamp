"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import InstagramReelEmbed from "../../components/InstagramEmberd";
import { instagram } from "@/constants/data";
import { ReelsCarousel } from "@/components/ReelsCarousel";
import { TitleComponent } from "@/components/title";

const LookBookPageModules = () => {
  const handleScroll = () => {
    const element = document.getElementById("day-to-day-style-0");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const galery = [
    "/image/look-book/galery-1.webp",
    "/image/look-book/galery-2.webp",
    "/image/look-book/galery-3.webp",
    "/image/look-book/galery-4.webp",
    "/image/look-book/galery-5.webp",
  ];

  const reelsUrls = [
    "https://www.instagram.com/reel/DM61a8cv-Zc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DLCpZNlvRdk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DMLCiH8PWCO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DKN7PIjSLDn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
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
        <div className="py-10">
          <TitleComponent
            lastTitle="Gallery"
            classNameContainer="uppercase flex justify-center"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-1 mx-2">
          {galery.map((url, idx) => (
            <div
              key={url}
              className="bg-gray-300 rounded-lg flex items-center justify-center text-xl text-gray-600 select-none h-96"
            >
              <Image
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-[center_5%] rounded-lg"
                src={url}
                alt={`image gallery ${idx}`}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1">
          <div className="py-10">
            <TitleComponent
              firstTitle="What"
              lastTitle="They Said"
              classNameContainer="uppercase flex justify-center"
            />
          </div>

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
