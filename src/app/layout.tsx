/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import ClientProvider from "@/components/ClientProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.quivhair.com"),
  title: {
    default: "Quiv Hair | The Future of Hair Styling",
    template: "%s - Quiv",
  },
  description:
    "Quiv was born to solve real men problems—the future for hair styling. Forget messy hair powders, greasy waxes, and outdated gels. Styling your hair should be as effortless as your confidence.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.quivhair.com",
    siteName: "Quiv Hair",
    images: [
      { url: "/Logo.png", width: 1200, height: 630, alt: "Quiv Hair Labs" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiv Hair",
    description:
      "The future for hair styling. Innovative, easy, and futuristic.",
    images: ["/Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={twMerge(
          "antialiased bg-white text-navy-blue",
          inter.variable,
          montserrat.variable,
          montserrat.className,
        )}
      >
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
