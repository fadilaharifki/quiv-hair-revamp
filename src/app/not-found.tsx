"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-blue flex flex-col items-center justify-center px-6 text-center">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-deep/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Large 404 text */}
        <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gold-deep to-gold-deep/20 opacity-50">
          404
        </h1>

        <div className="mt-4 space-y-2">
          <h2 className="text-xl md:text-2xl text-white font-bold uppercase tracking-[0.3em]">
            Page Not Found
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-md mx-auto font-medium leading-relaxed">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="mt-12">
          <Link href="/">
            <Button
              variant="outline"
              className="border-gold-deep/50 text-gold-deep hover:bg-gold-deep hover:text-navy-blue transition-all duration-500 px-10 py-6 rounded-full group bg-transparent"
            >
              <MoveLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Back to Homepage
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer minimalis */}
      <div className="absolute bottom-12 text-[9px] text-white/20 uppercase tracking-[0.5em]">
        Quiv Global &copy; 2025
      </div>
    </div>
  );
}
