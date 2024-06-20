import { title } from "process";
import LogoBlack from "../../assets/svg/logo-black.svg";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Footer = () => {
  const menusFooter = [
    {
      title: LogoBlack,
      typeTitle: "icon",
      address: "Natural ingredients, proven to perform the best",
    },
    {
      title: "All Products",
      menu: [
        {
          title: "FLEX - Liquified Hair Powder",
          url: "/products/flex",
        },
        {
          title: "FINE - Liquified Hair Powder",
          url: "/products/fine",
        },
      ],
    },
    {
      title: "Main Menu",
      menu: [
        {
          title: "About Us",
          url: "/about-us",
        },
        {
          title: "Product",
          url: "/products",
        },
        {
          title: "Lookbook",
          url: "/look-book",
        },
        {
          title: "Blog",
          url: "/blog",
        },
        {
          title: "Contact",
          url: "/contact",
        },
      ],
    },
    {
      title: "Support",
      menu: [
        {
          title: "FAQs",
          url: "/faq",
        },
      ],
    },
    {
      title: "Contact",
      menu: [
        {
          title: "+628 000 0000",
          url: "",
        },
        {
          title: "info@quiv.com",
          url: "",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-screen py-5 sm:py-20">
      <div className=" bg-light-brown-two w-screen grid grid-cols-2 sm:grid-cols-5 p-10 gap-5 sm:gap-10 sm:px-32">
        {menusFooter.map((item, idx) => {
          if (item.typeTitle === "icon") {
            return (
              <div key={idx}>
                <Image
                  className="mb-5 sm:mb-10"
                  width={100}
                  height={100}
                  src={LogoBlack}
                  alt="Logo"
                ></Image>
                <div className="flex flex-col font-inter font-medium hover:font-semibold text-sm sm:text-lg gap-4">
                  {item.address}
                </div>
              </div>
            );
          }
          return (
            <div key={idx}>
              <div className="flex flex-col font-bell-mt font-thin text-sm sm:text-lg mb-5 sm:mb-10">
                {item.title}
              </div>
              <div className="flex flex-col font-inter font-thin  text-sm sm:text-lg gap-2 sm:gap-4">
                {item.menu?.map((menu, index) => {
                  if (!menu.url) {
                    return (
                      <span
                        className={
                          "cursor-not-allowed font-medium hover:font-semibold"
                        }
                        key={index}
                      >
                        {menu.title}
                      </span>
                    );
                  }
                  return (
                    <Link
                      href={menu.url}
                      className="font-medium hover:font-semibold"
                      key={index}
                    >
                      {menu.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="border-b border-navy-blue w-screen border-2 sm:my-10"></div>
        <div className="flex flex-col font-inter font-base text-sm sm:text-lg text-center mt-5 sm:mt-20">
          © All Rights Reserved 2024 - QUIV
        </div>
      </div>
    </div>
  );
};

export default Footer;
