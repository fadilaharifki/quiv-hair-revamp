import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "prefix" | "suffix"
  > {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefix, suffix, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full rounded-md ring-1 ring-input focus-within:ring-2 focus-within:ring-ring bg-white">
        {prefix && (
          <span className="flex items-center justify-center px-3 py-2 text-sm text-muted-foreground">
            {prefix}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "flex-1 h-10 bg-transparent px-3 py-2 text-sm ring-0 rounded-md placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            prefix ? "pl-0" : "",
            suffix ? "pr-0" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {suffix && (
          <span className="flex items-center justify-center px-3 py-2 text-sm text-muted-foreground">
            {suffix}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
