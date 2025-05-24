"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingBag, Globe, Instagram } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { instagram } from "@/constants/data";
import { CarouselProductComponent } from "@/components/carousel-product";
import { CarouselBannerComponent } from "@/components/carousel-banner";
import useScreenSize from "@/hooks/useScreenSize";

export default function AppPageModuls({ onClose }: { onClose: () => void }) {
  const { breakpoint } = useScreenSize();
  const dataImage2 = useMemo(() => {
    const isMobile = breakpoint === "sm";

    return [
      {
        id: "1",
        span: 1,
        child: [
          {
            name: "link 1",
            span: 1,
            url: isMobile
              ? "/image/home/banner-linktree-1-mobile.webp"
              : "/image/home/banner-linktree-1.webp",
          },
        ],
      },
      {
        id: "2",
        span: 1,
        child: [
          {
            name: "link 2",
            span: 1,
            url: isMobile
              ? "/image/home/banner-linktree-2-mobile.webp"
              : "/image/home/banner-linktree-2.webp",
          },
        ],
      },
    ];
  }, [breakpoint]);

  return (
    <div className="h-screen grid grid-rows-2 bg-[#E8E3DC]">
      {/* Banner */}
      <div>
        <CarouselBannerComponent
          data={dataImage2}
          autoPlay
          isMinHeighScreen={false}
        />
      </div>
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          {/* Marketplace Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full h-14 text-lg bg-white/80 hover:bg-white/90 border-2 border-[#4A4A4A] text-[#4A4A4A]"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Our Products
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[calc(100vw-2rem)] max-w-md z-[70]">
              <DropdownMenuItem asChild>
                <Link
                  href="https://shopee.co.id/quiv.hair"
                  className="flex items-center cursor-pointer"
                  target="_blank"
                >
                  <Image
                    src={"/icon/shopee.png"}
                    alt="QUIV Banner"
                    priority
                    width={20}
                    height={20}
                    className="mr-1"
                  />
                  Shopee
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="https://www.tokopedia.com/quivhair"
                  className="flex items-center cursor-pointer"
                  target="_blank"
                >
                  <Image
                    src={"/icon/tokped1.png"}
                    alt="QUIV Banner"
                    priority
                    width={20}
                    height={20}
                    className="mr-1"
                  />
                  Tokopedia
                </Link>
              </DropdownMenuItem>
              {/* <DropdownMenuItem asChild>
                <Link
                  href="https://www.tiktok.com/@quivhair"
                  className="flex items-center cursor-pointer"
                  target="_blank"
                >
                  <Image
                    src={"/icon/tiktok.png"}
                    alt="QUIV Banner"
                    priority
                    width={20}
                    height={20}
                    className="mr-1"
                  />
                  TikTok
                </Link>
              </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Website Button */}
          <Button
            asChild
            variant="outline"
            className="w-full h-14 text-lg bg-white/80 hover:bg-white/90 border-2 border-[#4A4A4A] text-[#4A4A4A]"
          >
            <Link
              href={"#"}
              onClick={() => {
                onClose();
              }}
            >
              <Globe className="mr-2 h-5 w-5" />
              Visit Our Website
            </Link>
          </Button>

          {/* Social Media Button */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full h-14 text-lg bg-white/80 hover:bg-white/90 border-2 border-[#4A4A4A] text-[#4A4A4A]"
              >
                Follow Us on Social Media
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[calc(100vw-2rem)] max-w-md z-[70]">
              <DropdownMenuItem asChild>
                <Link
                  href={instagram}
                  target="_blank"
                  className="flex items-center cursor-pointer"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="https://www.tiktok.com/@quiv_hair?_t=ZS-8walSCn8fVB&_r=1"
                  className="flex items-center cursor-pointer"
                  target="_blank"
                >
                  <Image
                    src={"/icon/tiktok.png"}
                    alt="QUIV Banner"
                    priority
                    width={20}
                    height={20}
                    className="mr-1"
                  />
                  TikTok
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
