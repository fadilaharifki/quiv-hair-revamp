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
          title: "Men’s Hair Spray",
          url: "",
        },
        {
          title: "Men’s Hair Oil",
          url: "",
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
    <div className="flex flex-col w-screen">
      <div className=" bg-light-brown-two w-screen grid grid-cols-5 p-10 gap-10 px-32">
        {menusFooter.map((item, idx) => {
          if (item.typeTitle === "icon") {
            return (
              <div key={idx}>
                <Image
                  className="mb-10"
                  width={100}
                  height={100}
                  src={LogoBlack}
                  alt="Logo"
                ></Image>
                <div className="flex flex-col font-inter font-thin text-lg gap-4">
                  {item.address}
                </div>
              </div>
            );
          }
          return (
            <div key={idx}>
              <div className="flex flex-col font-bell-mt font-thin text-lg mb-10">
                {item.title}
              </div>
              <div className="flex flex-col font-inter font-thin text-lg gap-4">
                {item.menu?.map((menu, index) => {
                  if (!menu.url) {
                    return (
                      <span className={"cursor-not-allowed"} key={index}>
                        {menu.title}
                      </span>
                    );
                  }
                  return (
                    <Link
                      href={menu.url}
                      className="hover:font-medium"
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
        <div className="border-b border-navy-blue w-screen border-2 my-10"></div>
        <div className="flex flex-col font-inter font-thin text-sm gap-4 text-center my-10">
          © All Rights Reserved 2024 - QUIV
        </div>
      </div>
    </div>
  );
};

export default Footer;
