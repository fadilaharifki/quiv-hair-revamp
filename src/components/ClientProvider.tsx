"use client";

import { useEffect, useState } from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import BottomBar from "@/components/bottomBar";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";
import { useToggleStore } from "@/stores/useToggleStore";

const PixelTracker = dynamic(() => import("@/components/PixelTracker"), {
  ssr: false,
});

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { hasHydrated } = useToggleStore();

  return (
    <>
      <PixelTracker />
      <NavBar />
      <main className="min-h-screen">{children}</main>
      {hasHydrated && <Footer />}
      <BottomBar />
      <WhatsAppIcon />
      <Toaster />
    </>
  );
}
