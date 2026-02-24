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
import { InstagramIcon, MailIcon, PhoneIcon } from "lucide-react";
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
      title: "Social Media",
      description: "@quiv.hair",
      onClick: () => window.open(instagram, "_blank"),
      icon: <InstagramIcon size={24} strokeWidth={1.5} />,
    },
    {
      title: "Email Support",
      description: email,
      onClick: () => window.open(`mailto:${email}`, "_blank"),
      icon: <MailIcon size={24} strokeWidth={1.5} />,
    },
    {
      title: "Whatsapp Hub",
      description: phoneNumberDash,
      onClick: () => window.open(`https://wa.me/${phoneNumber}`, "_blank"),
      icon: <PhoneIcon size={24} strokeWidth={1.5} />,
    },
  ];

  const onSubmit: SubmitHandler<FormValues> = (e) => {
    const subject = encodeURIComponent(`Inquiry from ${e.name}`);
    const body = encodeURIComponent(e.message as string);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- HEADER --- */}
      <section className="pt-20 pb-10 px-6">
        <TitleComponent
          firstTitle="Get in touch"
          lastTitle="with us"
          variant="light"
        />
      </section>

      {/* --- CONTACT CARDS --- */}
      <section className="pb-10 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {dataIcon.map((item, idx) => (
            <button
              key={idx}
              onClick={item.onClick}
              className={twMerge(
                "group relative w-full overflow-hidden transition-all duration-500",
                "rounded-[20px] md:rounded-[32px] p-4 md:p-8", // Padding diperkecil
                "bg-gray-50/50 border border-gray-100 md:bg-white",
                "active:scale-[0.98] md:active:scale-100",
                "md:hover:-translate-y-2 md:hover:bg-navy-blue md:hover:border-navy-blue md:hover:shadow-xl",
                "flex md:flex-col items-center md:justify-center gap-4 md:gap-0",
              )}
            >
              {/* Decorative Side Accent - Dibuat lebih tipis */}
              <div className="absolute top-3 bottom-3 left-0 w-[2px] bg-gold-deep md:hidden opacity-70" />

              {/* Icon Container - Ukuran diperkecil dari 12/20 ke 10/16 */}
              <div
                className={twMerge(
                  "relative z-10 flex shrink-0 items-center justify-center transition-all duration-700",
                  "h-10 w-10 md:h-16 md:w-16 rounded-xl md:rounded-[22px]",
                  "bg-navy-blue text-white md:bg-gray-50 md:text-navy-blue",
                  "group-hover:bg-gold-deep group-hover:text-navy-blue md:group-hover:rotate-[360deg] md:mb-5",
                )}
              >
                {/* Ikon diskalakan sedikit agar pas di container kecil */}
                <div className="scale-90 md:scale-100">{item.icon}</div>
              </div>

              {/* Text content - Ukuran font disesuaikan agar compact */}
              <div className="relative z-10 text-left md:text-center">
                <h3 className="text-[7px] md:text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-400 group-hover:text-gold-deep transition-colors mb-0.5">
                  {item.title}
                </h3>
                <p className="text-sm md:text-xl font-semibold italic tracking-tighter text-navy-blue group-hover:text-white transition-colors leading-tight">
                  {item.description}
                </p>
              </div>

              <div className="ml-auto md:hidden opacity-20">
                <span className="text-lg text-navy-blue">→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="space-y-6 md:space-y-8 bg-[#fcfcfc] p-6 md:p-16 rounded-[32px] md:rounded-[48px] border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <div className="space-y-2">
              <label className="text-[9px] md:text-[10px] font-semibold uppercase tracking-widest text-navy-blue/40 ml-4">
                Full Name
              </label>
              <InputComponent
                name="name"
                control={control}
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] md:text-[10px] font-semibold uppercase tracking-widest text-navy-blue/40 ml-4">
                Phone Number
              </label>
              <InputComponent
                name="phone_number"
                control={control}
                placeholder="+62..."
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[9px] md:text-[10px] font-semibold uppercase tracking-widest text-navy-blue/40 ml-4">
              Your Message
            </label>
            <TextareaComponent
              name="message"
              control={control}
              placeholder="How can we help?"
              rows={5}
            />
          </div>

          <div className="flex justify-center pt-4">
            <Button
              onClick={handleSubmit(onSubmit)}
              className="w-full md:w-auto bg-navy-blue hover:bg-gold-deep text-white hover:text-navy-blue font-semibold uppercase tracking-[0.2em] text-[10px] px-16 py-8 rounded-full transition-all duration-500 active:scale-95"
            >
              Send Inquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPageModules;
