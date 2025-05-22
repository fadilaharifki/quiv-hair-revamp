import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { twMerge } from "tailwind-merge";
import BottomBar from "@/components/bottomBar";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Quiv Refining Hair Perfection to Impress, Elevate, and Dominate",
    template: "%s - Quiv",
  },
  description:
    "Quiv was born to solve real men problems—the future for hair styling. Forget messy hair powders, greasy waxes, and outdated gels. We've created products: innovative, easy, and futuristic. Styling your hair should be as effortless as your confidence.",
  openGraph: {
    images: [
      {
        url: "https://quiv-web.vercel.app/Logo.png",
        width: 800,
        height: 600,
        alt: `image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    title: `Quiv Refining Hair Perfection to Impress, Elevate, and Dominate`,
    description: `Quiv was born to solve real men problems—the future for hair styling. Forget messy hair powders, greasy waxes, and outdated gels. We've created products: innovative, easy, and futuristic. Styling your hair should be as effortless as your confidence.`,
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: `image`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, montserrat.className)}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
        <BottomBar></BottomBar>
        <WhatsAppIcon />
      </body>
    </html>
  );
}
