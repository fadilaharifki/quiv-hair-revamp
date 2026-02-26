"use client";

import InputComponent from "@/components/input";
import TextareaComponent from "@/components/textarea";
import { TitleComponent } from "@/components/title";
import { Button } from "@/components/ui/button";
import {
  email,
  instagram,
  phoneNumber,
  phoneNumberDash,
} from "@/constants/data";
import { InstagramIcon, MailIcon, PhoneIcon, ArrowRight } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface FormValues {
  name?: string;
  phone_number?: string;
  message?: string;
}

const ContactPageModules = () => {
  const { handleSubmit, control } = useForm<FormValues>();

  const dataIcon = [
    {
      title: "Digital Media",
      description: "@quiv.hair",
      onClick: () => window.open(instagram, "_blank"),
      icon: <InstagramIcon size={20} strokeWidth={1.5} />,
    },
    {
      title: "Electronic Mail",
      description: email,
      onClick: () => window.open(`mailto:${email}`, "_blank"),
      icon: <MailIcon size={20} strokeWidth={1.5} />,
    },
    {
      title: "Communication Hub",
      description: phoneNumberDash,
      onClick: () => window.open(`https://wa.me/${phoneNumber}`, "_blank"),
      icon: <PhoneIcon size={20} strokeWidth={1.5} />,
    },
  ];

  const onSubmit: SubmitHandler<FormValues> = (e) => {
    const subject = encodeURIComponent(`Inquiry from ${e.name}`);
    const body = encodeURIComponent(e.message as string);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="bg-clinical-white min-h-screen font-inter">
      {/* --- HEADER --- */}
      <section className="pt-32 pb-12 px-6">
        <TitleComponent
          firstTitle="Direct"
          lastTitle="Communication"
          variant="secondary"
        />
        <div className="flex justify-center mt-4">
          <div className="h-[2px] w-12 bg-clinical-blue" />
        </div>
      </section>

      {/* --- COMMUNICATION CHANNELS --- */}
      <section className="pb-12 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-px bg-clinical-border border border-clinical-border">
          {dataIcon.map((item, idx) => (
            <button
              key={idx}
              onClick={item.onClick}
              className={twMerge(
                "group relative w-full bg-clinical-white transition-all duration-500",
                "p-6 md:p-10",
                "flex md:flex-col items-center md:justify-center gap-5 md:gap-0",
                "hover:bg-clinical-blue-light/30 transition-all",
              )}
            >
              {/* Icon Container - Engineered Style */}
              <div
                className={twMerge(
                  "relative z-10 flex shrink-0 items-center justify-center transition-all duration-500",
                  "h-12 w-12 md:h-14 md:w-14 rounded-none",
                  "bg-clinical-blue text-clinical-white",
                  "group-hover:bg-clinical-gray-dark md:mb-6",
                )}
              >
                <div className="scale-90">{item.icon}</div>
              </div>

              {/* Text content */}
              <div className="relative z-10 text-left md:text-center">
                <h3 className="text-[8px] md:text-[9px] font-semibold uppercase tracking-[0.3em] text-clinical-blue mb-1">
                  {item.title}
                </h3>
                <p className="text-sm md:text-lg font-semibold tracking-tight text-clinical-gray-dark leading-tight">
                  {item.description}
                </p>
              </div>

              <div className="ml-auto md:hidden text-clinical-blue">
                <ArrowRight size={18} />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* --- INQUIRY FORM SECTION --- */}
      <section className="py-12 md:py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="space-y-8 bg-clinical-white p-8 md:p-16 border border-clinical-border shadow-sm rounded-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="space-y-3">
              <label className="text-[10px] font-semibold uppercase tracking-widest text-clinical-gray-medium ml-1">
                Full Identification
              </label>
              <InputComponent
                name="name"
                control={control}
                placeholder="Full Name"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-semibold uppercase tracking-widest text-clinical-gray-medium ml-1">
                Contact Number
              </label>
              <InputComponent
                name="phone_number"
                control={control}
                placeholder="+62..."
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-semibold uppercase tracking-widest text-clinical-gray-medium ml-1">
              Inquiry Details
            </label>
            <TextareaComponent
              name="message"
              control={control}
              placeholder="Message..."
              rows={5}
            />
          </div>

          <div className="flex justify-center pt-6">
            <Button
              onClick={handleSubmit(onSubmit)}
              className="w-full md:w-auto bg-clinical-blue hover:bg-clinical-gray-dark text-clinical-white font-semibold uppercase tracking-[0.3em] text-[10px] px-20 py-8 rounded-none transition-all duration-500"
            >
              Submit Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPageModules;
