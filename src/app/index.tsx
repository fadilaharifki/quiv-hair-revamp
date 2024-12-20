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
import { ExternalLink, ShoppingBag, Globe, Instagram } from "lucide-react";

export default function AppPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E8E3DC]">
      {/* Banner */}
      <div className="w-full h-[50vh] relative">
        <Image
          src={"/image/home/image.png"}
          alt="QUIV Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            QUIV
          </h1>
        </div>
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
            <DropdownMenuContent className="w-[calc(100vw-2rem)] max-w-md">
              <DropdownMenuItem asChild>
                <Link
                  href="https://marketplace1.com"
                  className="flex items-center cursor-pointer"
                >
                  Marketplace 1
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="https://marketplace2.com"
                  className="flex items-center cursor-pointer"
                >
                  Marketplace 2
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="https://marketplace3.com"
                  className="flex items-center cursor-pointer"
                >
                  Marketplace 3
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Website Button */}
          <Button
            asChild
            variant="outline"
            className="w-full h-14 text-lg bg-white/80 hover:bg-white/90 border-2 border-[#4A4A4A] text-[#4A4A4A]"
          >
            <Link href="https://quiv-web.vercel.app">
              <Globe className="mr-2 h-5 w-5" />
              Visit Our Website
            </Link>
          </Button>

          {/* Social Media Button */}
          <Button
            asChild
            variant="outline"
            className="w-full h-14 text-lg bg-white/80 hover:bg-white/90 border-2 border-[#4A4A4A] text-[#4A4A4A]"
          >
            <Link href="https://instagram.com/your-handle">
              <Instagram className="mr-2 h-5 w-5" />
              Follow Us on Instagram
            </Link>
          </Button>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#E8E3DC] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Image
              src="/logo.png"
              alt="QUIV Logo"
              width={100}
              height={50}
              objectFit="contain"
            />
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <p className="text-sm text-[#4A4A4A]">
              &copy; 2023 QUIV. All rights reserved.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <Link
              href="/privacy-policy"
              className="text-sm text-[#4A4A4A] hover:underline mr-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-[#4A4A4A] hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
