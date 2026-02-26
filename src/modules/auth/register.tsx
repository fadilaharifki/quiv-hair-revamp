"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import {
  Loader2,
  Mail,
  Lock,
  User,
  ChevronRight,
  FileDigit,
} from "lucide-react";

import InputComponent from "@/components/input";
import { Button } from "@/components/ui/button";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import { useRegisterUser } from "@/hooks/api/useRegisterUser";
import { useRouter } from "next/navigation";

const registerSchema = z
  .object({
    fullName: z.string().min(3, { message: "Please enter your full name" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPageModules() {
  const router = useRouter();

  const { mutate, isPending: loading } = useRegisterUser({
    onSuccess: () => {
      router.push("/login");
    },
  });

  const { control, handleSubmit } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onRegister = async (data: RegisterFormValues) => {
    mutate({
      full_name: data.fullName,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-clinical-white py-24">
      {/* --- CLINICAL BACKGROUND SECTION --- */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-15 grayscale"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/banner_1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-clinical-white/90 via-transparent to-clinical-white/90" />
      </div>

      {/* --- REGISTER CARD --- */}
      <div className="relative z-10 w-full max-w-[500px] px-6">
        <div className="relative border border-clinical-border bg-white/80 p-8 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.05)] md:p-12">
          {/* Decorative Lab Corners */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-clinical-blue" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-clinical-blue" />

          {/* Header Section */}
          <div className="mb-10 text-left border-l-2 border-clinical-blue pl-6">
            <h1 className="text-4xl font-semibold tracking-tighter text-clinical-gray-dark uppercase leading-none">
              Quiv<span className="text-clinical-blue">.</span>
            </h1>
            <div className="mt-4 flex items-center gap-2">
              <FileDigit size={14} className="text-clinical-blue" />
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-clinical-gray-medium">
                Account_Initialization
              </h2>
            </div>
          </div>

          <div className="space-y-8">
            {/* Social Authentication */}
            <GoogleLoginButton disabled={loading} />

            {/* Technical Divider */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-full border-t border-clinical-border"></div>
              <span className="relative bg-white px-4 text-[8px] font-bold uppercase tracking-[0.5em] text-clinical-gray-medium">
                Identity_Verification
              </span>
            </div>

            {/* Manual Registration Form */}
            <form onSubmit={handleSubmit(onRegister)} className="space-y-5">
              <InputComponent
                name="fullName"
                label="Full Name"
                control={control}
                placeholder="Subject Name"
                icon={<User className="h-4 w-4" />}
                classNameInput="bg-clinical-gray-light/50 border-clinical-border rounded-none"
              />

              <InputComponent
                name="email"
                label="Email"
                control={control}
                placeholder="name@example.com"
                icon={<Mail className="h-4 w-4" />}
                classNameInput="bg-clinical-gray-light/50 border-clinical-border rounded-none"
              />

              <InputComponent
                name="password"
                label="Password"
                type="password"
                control={control}
                placeholder="••••••••"
                icon={<Lock className="h-4 w-4" />}
                classNameInput="bg-clinical-gray-light/50 border-clinical-border rounded-none"
              />
              <InputComponent
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                control={control}
                placeholder="••••••••"
                icon={<Lock className="h-4 w-4" />}
                classNameInput="bg-clinical-gray-light/50 border-clinical-border rounded-none"
              />
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-8 bg-clinical-gray-dark text-white font-bold rounded-none uppercase text-[10px] tracking-[0.3em] hover:bg-clinical-blue transition-all duration-300 flex justify-center items-center group"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      REGISTRATION
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Navigation Link */}
            <div className="mt-8 border-t border-clinical-border pt-8 text-center">
              <p className="text-[9px] font-bold uppercase tracking-widest text-clinical-gray-medium">
                Existing unit record?{" "}
                <Link
                  href="/login"
                  className="ml-2 text-clinical-blue underline underline-offset-8 transition-colors hover:text-clinical-gray-dark"
                >
                  SIGN_IN_PORTAL
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Technical Policy Metadata */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="max-w-[300px] text-[8px] uppercase leading-relaxed tracking-[0.2em] text-clinical-gray-medium/60">
            By initializing this process, you consent to our <br />
            <span className="cursor-pointer text-clinical-blue border-b border-clinical-blue/20">
              Terms of Operation
            </span>{" "}
            &{" "}
            <span className="cursor-pointer text-clinical-blue border-b border-clinical-blue/20">
              Data Protocol
            </span>
          </p>
          <div className="flex gap-2">
            <div className="w-1.5 h-1.5 bg-clinical-blue/30" />
            <div className="w-1.5 h-1.5 bg-clinical-blue" />
            <div className="w-1.5 h-1.5 bg-clinical-blue/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
