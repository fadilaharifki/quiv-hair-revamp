"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import BottomBar from "@/components/bottomBar";
import FloatingActionTerminal from "@/components/FloatingActionTerminal";
import LoadingLine from "@/components/LoadingLine";
import dynamic from "next/dynamic";
import { useToggleStore } from "@/stores/useToggleStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSyncUser } from "@/hooks/api/useSyncUser";
import { Toaster as ToastSonner } from "sonner";

const PixelTracker = dynamic(() => import("@/components/PixelTracker"), {
  ssr: false,
});

const AuthWatcher = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useSyncUser();
  const { hasHydrated } = useToggleStore();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* {(isNavigating || !hasHydrated || isLoading) && <LoadingLine />} */}
      {children}
    </>
  );
};

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  const { hasHydrated } = useToggleStore();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthWatcher>
        <PixelTracker />
        <NavBar />

        <main className="min-h-screen">{children}</main>

        {hasHydrated && <Footer />}
        <BottomBar />
        <FloatingActionTerminal />
        <ToastSonner richColors position="top-right" closeButton />
      </AuthWatcher>
    </QueryClientProvider>
  );
}
