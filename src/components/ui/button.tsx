"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-none text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-clinical-blue disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // Default: Clinical Gray Dark (Navy-ish)
        default:
          "bg-clinical-gray-dark text-white hover:bg-clinical-blue shadow-sm",
        // Destructive: Red tone disesuaikan
        destructive: "bg-red-600 text-white hover:bg-red-700",
        // Outline: Border klinis
        outline:
          "border border-clinical-border bg-transparent hover:bg-clinical-gray-light hover:text-clinical-blue text-clinical-gray-medium",
        // Secondary: Clinical Blue
        secondary: "bg-clinical-blue text-white hover:bg-clinical-gray-dark",
        // Ghost: Navigasi subtle
        ghost:
          "text-clinical-gray-medium hover:bg-clinical-blue/5 hover:text-clinical-blue",
        // Link: Underline terminal style
        link: "text-clinical-blue underline-offset-8 hover:underline decoration-clinical-blue/30",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-9 px-4 text-[9px]",
        lg: "h-14 px-12 text-[11px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
