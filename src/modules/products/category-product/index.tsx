"use client";

import { CategoryProductsPageInterface } from "@/app/products/[category]/page";
import { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

type ActiveTabsType = "description" | "howToUse";

const CategoryProductsPageModules = ({
  props,
}: {
  props: CategoryProductsPageInterface;
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTabsType>("description");

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
                  <div className="flex font-inter font-bold">
                    <div>{idx + 1}.</div>
                    <div>{e.title}</div>
                  </div>
                  <div>
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
      <div className="min-h-screen">{props?.params.category}</div>
      <div className="min-h-screen">
        <div className="flex justify-evenly">
          {tabs.map((tab, idx) => {
            return (
              <div
                className={twMerge(
                  "font-bell-mt cursor-pointer text-2xl",
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
        <div className="p-5 sm:p-10 text-center bg-navy-blue text-white my-2 font-inter text-lg">
          {renderActiveTab(activeTab)}
        </div>
      </div>
      <div className="min-h-screen">{props?.params.category}</div>
    </div>
  );
};

export default CategoryProductsPageModules;
