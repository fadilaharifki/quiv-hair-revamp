"use client";

import { motion } from "framer-motion";

export default function LoadingLine() {
  return (
    <div className="fixed inset-0 bg-clinical-white/80 backdrop-blur-md flex flex-col items-center justify-center z-[200]">
      <div className="w-full max-w-[280px] space-y-4">
        {/* Technical Header */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-clinical-blue uppercase tracking-[0.3em] animate-pulse">
              Initializing_System
            </span>
            <span className="text-[7px] font-mono text-clinical-gray-medium uppercase tracking-widest">
              Core_Module_Loading...
            </span>
          </div>
          <span className="text-[10px] font-mono text-clinical-blue font-bold">
            [RUN_01]
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="relative w-full h-[3px] bg-clinical-border overflow-hidden">
          {/* Scanning/Sliding Bar */}
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-clinical-blue to-transparent"
          />

          {/* Base Solid Bar */}
          <div className="absolute top-0 left-0 h-full w-full bg-clinical-blue/10" />
        </div>

        {/* Footer Metadata */}
        <div className="flex justify-between text-[7px] font-mono text-clinical-gray-medium/40 uppercase tracking-[0.2em]">
          <span>Verifying_Assets</span>
          <span>Status: 200_OK</span>
        </div>
      </div>

      {/* Background Decorative Grid (Optional) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #0047AB 1px, transparent 1px), linear-gradient(to bottom, #0047AB 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </div>
  );
}
