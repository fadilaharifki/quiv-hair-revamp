"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Input } from "../ui/input";
import { Control, RegisterOptions, useController } from "react-hook-form";

interface InputComponentInterface {
  label?: string;
  icon?: ReactNode;
  type?: string;
  placeholder?: string;
  classNameInput?: string;
  name: string;
  control: Control<any>;
  rules?: Omit<
    RegisterOptions<any, any>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const InputComponent = ({
  label,
  icon,
  type = "text",
  placeholder,
  classNameInput,
  name,
  control,
  rules,
}: InputComponentInterface) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div className="w-full space-y-1.5 text-left">
      {label && (
        <label
          htmlFor={name}
          className="text-[10px] font-semibold tracking-[0.2em] text-clinical-gray-dark ml-1"
        >
          {label}
        </label>
      )}

      <div className="relative group">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-gold-deep pointer-events-none">
            {icon}
          </div>
        )}

        <Input
          {...field}
          id={name}
          type={type}
          placeholder={placeholder}
          className={twMerge(
            "flex bg-white/5 border-white/10 transition-all duration-300 h-12",
            "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06)]",
            "focus-visible:ring-1 focus-visible:ring-gold-deep/50",
            icon && "pl-12",
            error && "shadow-[0px_0px_0px_1.5px_rgba(239,68,68,0.5)]",
            classNameInput,
          )}
        />
      </div>

      {error && (
        <p className="text-xs text-red-500 ml-1 tracking-tighter">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default InputComponent;
