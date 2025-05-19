"use client";

import { CategoryProductsPageInterface } from "@/app/why-quiv/[category]/page";
import CardProduct from "@/components/card-product";
import PaginationComponent from "@/components/pagination";
import { TitleComponent } from "@/components/title";
import { dataImageFine, dataImageFlex } from "@/constants/data";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { Key, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

type ActiveTabsType = "description" | "howToUse";

const imageProduct: any = {
  flex: [
    {
      id: 1,
      url: "/image/general/image1_flex.png",
      title: "image 1",
      type: "Liquified Hair Powder",
      category: "flex",
      ability: "Dry Matte Finish",
      name: "Flex - Liquified Hair Powder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus.",
    },
    {
      id: 2,
      url: "/image/general/image2_flex.png",
      title: "image 2",
      type: "Liquified Hair Powder",
      category: "flex",
      name: "Flex - Liquified Hair Powder",
      ability: "Dry Matte Finish",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus.",
    },
    {
      id: 3,
      url: "/image/general/image3_flex.png",
      title: "image 3",
      type: "Liquified Hair Powder",
      category: "flex",
      name: "Flex - Liquified Hair Powder",
      ability: "Dry Matte Finish",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus.",
    },
    {
      id: 4,
      url: "/image/general/image4_flex.png",
      title: "image 4",
      type: "Liquified Hair Powder",
      category: "flex",
      name: "Flex - Liquified Hair Powder",
      ability: "Dry Matte Finish",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus.",
    },
  ],
  fine: [
    {
      id: 1,
      url: "/image/general/image1_fine.png",
      title: "image 1",
      type: "Liquified Hair Powder",
      category: "FINE",
      name: "FINE - Liquified Hair Powder",
      ability: "Smooth Glossy Finish",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus.",
    },
    {
      id: 2,
      url: "/image/general/image2_fine.png",
      title: "image 2",
      type: "Liquified Hair Powder",
      category: "FINE",
      name: "FINE - Liquified Hair Powder",
      ability: "Smooth Glossy Finish",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus.",
    },
    {
      id: 3,
      url: "/image/general/image3_fine.png",
      title: "image 3",
      type: "Liquified Hair Powder",
      category: "FINE",
      name: "FINE - Liquified Hair Powder",
      ability: "Smooth Glossy Finish",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus.",
    },
    {
      id: 4,
      url: "/image/general/image4_fine.png",
      title: "image 4",
      type: "Liquified Hair Powder",
      category: "FINE",
      name: "FINE - Liquified Hair Powder",
      ability: "Smooth Glossy Finish",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus.",
    },
  ],
};

const CategoryProductsPageModules = ({
  props,
}: {
  props: CategoryProductsPageInterface;
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTabsType>("description");

  const [imageProductActive, setImageProductActive] = useState(
    imageProduct?.[props?.params.category][0]
  );

  const categoryProduct: any = useMemo(() => {
    return {
      flex: {
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus congue. Integer ac lorem in nulla consectetur porta rutrum placerat felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus congue. Integer ac lorem in nulla consectetur porta rutrum placerat felis.<br /><br />  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus congue. Integer ac lorem in nulla consectetur porta rutrum placerat felis.",
        howToUse: [
          {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            description:
              "Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus congue.",
          },
          {
            id: 2,
            title:
              "Integer ac lorem in nulla consectetur porta rutrum placerat felis.",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie",
          },
          {
            id: 3,
            title:
              "In semper euismod odio, suscipit cursus lacus rhoncus congue. ",
            description:
              "Integer ac lorem in nulla consectetur porta rutrum placerat felis.",
          },
        ],
      },
      fine: {
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus congue. Integer ac lorem in nulla consectetur porta rutrum placerat felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus congue. Integer ac lorem in nulla consectetur porta rutrum placerat felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus congue. Integer ac lorem in nulla consectetur porta rutrum placerat felis.",
        howToUse: [
          {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            description:
              "Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie. In semper euismod odio, suscipit cursus lacus rhoncus congue.",
          },
          {
            id: 2,
            title:
              "Integer ac lorem in nulla consectetur porta rutrum placerat felis.",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet ante sed egestas laoreet. Nam pretium nulla non neque finibus, eget aliquet mi eleifend. Proin suscipit malesuada molestie",
          },
          {
            id: 3,
            title:
              "In semper euismod odio, suscipit cursus lacus rhoncus congue. ",
            description:
              "Integer ac lorem in nulla consectetur porta rutrum placerat felis.",
          },
        ],
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.params.category]);

  const tabs = [
    {
      title: "Description",
      activeTab: "description",
    },
    {
      title: "How To Use",
      activeTab: "howToUse",
    },
  ];

  const renderActiveTab = (active: ActiveTabsType) => {
    if (active === "description") {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: categoryProduct?.[props?.params.category]?.[activeTab],
          }}
        />
      );
    } else if (active === "howToUse") {
      return (
        <div className="flex gap-5 flex-col ">
          {categoryProduct?.[props?.params.category]?.[activeTab].map(
            (e: any, idx: number) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="flex   font-bold text-sm sm:text-base">
                    {idx + 1}. {e.title}
                  </div>
                  <div className="text-sm sm:text-base">
                    <div>{e.description}</div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      );
    }
  };

  return (
    <div>
      <div className="grid sm:grid-cols-6 gap-y-10 min-h-screen pt-28 sm:px-10 bg-light-gray">
        <div className="hidden sm:flex flex-col col-span-1 justify-center items-center gap-4">
          {imageProduct?.[props?.params.category].map(
            (item: any, idx: number) => {
              if (item.id !== imageProductActive.id) {
                return (
                  <Image
                    onClick={() => {
                      setImageProductActive(item);
                    }}
                    key={idx}
                    className="h-[190px] w-[190px] sm:h-[190px] sm:w-[190px] object-obtain rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110 bg-white"
                    width={190}
                    height={190}
                    src={item.url}
                    alt={item.title}
                  ></Image>
                );
              }
            }
          )}
        </div>
        <div className="sm:col-span-3 flex justify-center items-center">
          <Image
            className="h-[350px] w-[300px] sm:h-[595px] sm:w-[595px] object-obtain rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110"
            width={286}
            height={286}
            src={imageProductActive.url}
            alt={imageProductActive.title}
          ></Image>
        </div>
        <div className="sm:hidden flex flex-row sm:col-span-1 justify-center items-center gap-4">
          {imageProduct?.[props?.params.category].map(
            (item: any, idx: number) => {
              if (item.id !== imageProductActive.id) {
                return (
                  <Image
                    onClick={() => {
                      setImageProductActive(item);
                    }}
                    key={idx}
                    className="h-[90px] w-[90px] sm:h-[190px] sm:w-[190px] object-obtain rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110 bg-white"
                    width={190}
                    height={190}
                    src={item.url}
                    alt={item.title}
                  ></Image>
                );
              }
            }
          )}
        </div>
        <div className="flex flex-col gap-5 px-5 pb-5 sm:p-0 sm:col-span-2 text-navy-blue justify-center">
          <div>
            <div className=" text-sm sm:text-xl font-light">
              {imageProductActive.type}
            </div>
            <h1 className=" font-bold text-[40px]">
              {props?.params.category.toUpperCase()}
            </h1>
            <div className="text-sm font-light">
              {imageProductActive.ability}
            </div>
          </div>
          <div className="tex-lg sm:text-2xl font-normal">
            {imageProductActive.description}
          </div>
          {imageProductActive.price && (
            <div className="font-bold text-2xl">
              {formatCurrency(Number(imageProductActive.price ?? 0))}
            </div>
          )}
        </div>
      </div>
      <div className="py-20">
        <div className="flex justify-evenly">
          {tabs.map((tab, idx) => {
            return (
              <div
                className={twMerge(
                  " cursor-pointer text-2xl",
                  activeTab === tab.activeTab
                    ? "border-b-[1px] border-b-navy-blue text-navy-blue "
                    : "text-gray-400 "
                )}
                key={idx}
                onClick={() => {
                  setActiveTab(tab.activeTab as ActiveTabsType);
                }}
              >
                {tab.title}
              </div>
            );
          })}
        </div>
        <div className="p-5 sm:p-10 text-center bg-navy-blue text-white my-2   text-lg">
          {renderActiveTab(activeTab)}
        </div>
      </div>
      <div className="min-h-screen flex flex-col justify-evenly items-center  ">
        <TitleComponent
          firstTitle="Recommended"
          lastTitle="products"
          classNameContainer="uppercase flex justify-center"
        />
        <div className="py-10">
          <PaginationComponent
            isPagination={false}
            data={
              props?.params.category === "flex" ? dataImageFine : dataImageFlex
            }
            isOnClick
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryProductsPageModules;
