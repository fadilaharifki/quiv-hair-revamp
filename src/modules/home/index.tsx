"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CarouselProductComponent } from "@/components/carousel-product";
import { CarouselBannerComponent } from "@/components/carousel-banner";
import CardProduct from "@/components/card-product";
import useScreenSize from "@/hooks/useScreenSize";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { benefitIcon } from "@/constants/data";
import { formatUrl } from "@/lib/utils";
import { TitleComponent } from "@/components/title";
import FullScreenDrawer from "@/components/drawer";
import AppPageModuls from "../link";
import AboutUsPageModules from "../about-us";

const HomePageModules = () => {
  const { width, breakpoint } = useScreenSize();

  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const dataImage = [
    {
      name: "FLEX - Liquified Hair Powder",
      path: "/products/flex",
      url: "/image/general/image1_flex.png",
    },
    {
      name: "FINE - Liquified Hair Powder",
      path: "/products/fine",
      url: "/image/general/image1_fine.png",
    },
    {
      name: "FLEX - Liquified Hair Powder",
      path: "/products/flex",
      url: "/image/general/image1_flex.png",
    },
    {
      name: "FINE - Liquified Hair Powder",
      path: "/products/fine",
      url: "/image/general/image1_fine.png",
    },
  ];

  const dataImage2 = [
    {
      id: "1",
      span: 2,
      child: [
        {
          name: "People 1",
          span: 1,
          url: "/image/home/people1.png",
        },
        {
          name: "People 2",
          span: 1,
          url: "/image/home/people2.png",
        },
      ],
    },
    {
      id: "2",
      span: 3,
      child: [
        {
          name: "People 2",
          span: 1,
          url: "/image/home/people2.png",
        },
        {
          name: "People 2",
          span: 2,
          url: "/image/home/people3.png",
        },
      ],
    },
    {
      id: "3",
      span: 3,
      child: [
        {
          name: "People 3",
          span: 1,
          url: "/image/home/people3.png",
        },
        {
          name: "People 1",
          span: 2,
          url: "/image/home/people1.png",
        },
      ],
    },
  ];

  const dataImage3 = [
    {
      url: "/image/home/cuttinghair1.png",
      title: "I’m putting what in my hair?",
      description:
        "Shop the best natural men’s hairstyling products, shampoo, conditioner, shaving, and skincare. Hanz de Fuko’s clean ",
    },
    {
      url: "/image/home/cuttinghair2.png",
      title: "Three tips for getting perfect vacation hair",
      description:
        "Shop the best natural men’s hairstyling products, shampoo, conditioner, shaving, and skincare. Hanz de Fuko’s clean ",
    },
    {
      url: "/image/home/cuttinghair3.png",
      title: "I’m putting what in my hair?",
      description:
        "Shop the best natural men’s hairstyling products, shampoo, conditioner, shaving, and skincare. Hanz de Fuko’s clean ",
    },
  ];

  const dynamicWidth = dataImage3.length * width;

  return (
    <div>
      <FullScreenDrawer isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <AppPageModuls
          onClose={() => {
            setIsOpen(!isOpen);
            localStorage.setItem("isOpen", "false");
          }}
        />
      </FullScreenDrawer>
      <AboutUsPageModules />
    </div>
  );
};

export default HomePageModules;
