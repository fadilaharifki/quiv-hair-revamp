"use client";

import CardProduct from "@/components/card-product";
import { Button } from "@/components/ui/button";
import { dataBlog } from "@/constants/dataBlog";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const BlogPageModules = () => {
  const { width, breakpoint } = useScreenSize();
  const router = useRouter();

  const handleScroll = () => {
    const element = document.getElementById("section-2");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const section1 = dataBlog[0];
  const section2 = dataBlog.slice(1, 4);
  const section3 = dataBlog.slice(4, 7);
  const section4 = [...dataBlog.slice(7, 10), dataBlog[0]];

  return (
    <div>
      <div className="md:h-screen -mt-16">
        <Image
          className="md:h-screen w-screen object-contain md:object-cover"
          height={1000}
          width={1000}
          src={"/image/blog/the-feeds-banner.webp"}
          alt="got-question banner image"
        ></Image>
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
              src={section1.thumbnail}
              alt={"story about us"}
            />
          </div>
        </div>
        <div className="flex flex-col basis-2/5 gap-5">
          <div className="text-navy-blue text-3xl sm:text-4xl sm:text-[50px]  font-semibold leading-tight">
            {section1.title}
          </div>
          <div className="text-navy-blue text-base sm:text-2xl   font-light leading-tight">
            {section1.introduction}
          </div>
          <div>
            <Button
              onClick={() => {
                router.push(`/feeds/${section1.slug}`);
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
            "grid grid-cols-1 md:grid-cols-3 min-h-screen bg-navy-blue p-5 sm:p-20 gap-5"
          )}
        >
          {section2.map((blog, idx) => {
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
                  product={blog}
                  footer={
                    <div className="flex">
                      <Button
                        onClick={() => {
                          router.push(`/feeds/${blog.slug}`);
                        }}
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
            "grid grid-cols-1 md:grid-cols-3 min-h-screen bg-white p-5 sm:p-20 gap-5"
          )}
        >
          {section3.map((product, idx) => {
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
                        onClick={() => {
                          router.push(`/feeds/${product.slug}`);
                        }}
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
            `grid grid-cols-1 md:grid-cols-3 min-h-screen bg-light-primary p-5 sm:p-20 gap-5`
          )}
        >
          {section4.map((product, idx) => {
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
                        onClick={() => {
                          router.push(`/feeds/${product.slug}`);
                        }}
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
