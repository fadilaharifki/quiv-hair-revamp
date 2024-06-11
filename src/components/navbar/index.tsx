import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Logo from "../../assets/svg/logo.svg";
import Search from "../../assets/svg/search.svg";
import Link from "next/link";

const menus = [
  {
    value: "about-us",
    name: "About Us",
  },
  {
    value: "products",
    name: "Products",
  },
  {
    value: "look-book",
    name: "Lookbook",
  },
  {
    value: "blog",
    name: "Blog",
  },
  {
    value: "faq",
    name: "FAQs",
  },
  {
    value: "contact",
    name: "Contact",
  },
];

const NavBar = () => {
  return (
    <div
      className={twMerge(
        "grid grid-cols-5 w-screen h-20 bg-transparent justify-center items-center absolute bg-opacity-30 z-50"
      )}
    >
      <div className="flex justify-center items-center">
        <Link href={"/"}>
          <Image width={100} height={100} src={Logo} alt="Logo"></Image>
        </Link>
      </div>
      <div className="flex justify-around items-center col-span-3">
        {menus.map((menu, idx) => {
          return (
            <Link
              key={idx}
              href={menu.value}
              className="font-inter font-semibold text-white"
            >
              {menu.name}
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <Image width={25} height={25} src={Search} alt="Search"></Image>
      </div>
    </div>
  );
};

export default NavBar;
