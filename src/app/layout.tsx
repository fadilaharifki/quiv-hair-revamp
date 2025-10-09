/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { twMerge } from "tailwind-merge";
import BottomBar from "@/components/bottomBar";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
import PixelTracker from "@/components/PixelTracker";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Quiv Hair",
    template: "%s - Quiv",
  },
  description:
    "Quiv was born to solve real men problems—the future for hair styling. Forget messy hair powders, greasy waxes, and outdated gels. We've created products: innovative, easy, and futuristic. Styling your hair should be as effortless as your confidence.",
  openGraph: {
    images: [
      {
        url: "https://www.quivhair.com/Logo.png",
        width: 800,
        height: 600,
        alt: `image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiv Hair",
    description:
      "Quiv was born to solve real men problems—the future for hair styling. Forget messy hair powders, greasy waxes, and outdated gels. We've created products: innovative, easy, and futuristic. Styling your hair should be as effortless as your confidence.",
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?                         
              n.callMethod.apply(n,arguments):n.queue.push   
              (arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!
              0;n.version='2.0';n.queue=[];t=b.createElement(e);
              t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1849008955806836');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1849008955806836&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={twMerge(inter.className, montserrat.className)}>
        <PixelTracker />
        <NavBar />
        {children}
        <Footer />
        <BottomBar />
        <WhatsAppIcon />
        <Toaster />
      </body>
    </html>
  );
}
