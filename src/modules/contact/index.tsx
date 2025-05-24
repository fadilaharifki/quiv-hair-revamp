"use client";

import CardProduct from "@/components/card-product";
import InputComponent from "@/components/input";
import TextareaComponent from "@/components/textarea";
import { TitleComponent } from "@/components/title";
import { Button } from "@/components/ui/button";
import {
  instagram,
  phoneNumber,
  phoneNumberDash,
  shopee,
  tokped,
} from "@/constants/data";
import { InstagramIcon, MailIcon, PhoneIcon, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface FormValues {
  name?: string;
  phone_number?: string;
  message?: string;
}

const ContactPageModules = () => {
  const { handleSubmit, control } = useForm();

  const iconStyle =
    "w-14 h-14 object-cover cursor-pointer transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg";

  const dataIcon = [
    {
      title: "Media Social",
      description: "@quiv.hair",
      icon: (
        <div onClick={() => window.open(instagram, "_blank")}>
          <InstagramIcon size={25} />
        </div>
      ),
    },
    {
      title: "Email",
      description: "admin@quivhair.com",
      icon: (
        <div onClick={() => window.open("mailto:admin@quivhair.com", "_blank")}>
          <MailIcon size={25} />
        </div>
      ),
    },
    {
      title: "Whatsapp",
      description: phoneNumberDash,
      icon: (
        <div
          onClick={() => window.open(`https://wa.me/${phoneNumber}`, "_blank")}
        >
          <PhoneIcon size={25} />
        </div>
      ),
    },
    {
      icon: (
        <div className="flex flex-col">
          <ShoppingBag size={25} />
        </div>
      ),
      footer: (
        <div className="flex flex-col justify-center text-center text-white">
          <div onClick={() => window.open(shopee, "_blank")}>Shopee</div>
          <div onClick={() => window.open(tokped, "_blank")}>TokoPedia</div>
        </div>
      ),
    },
  ];

  const fieldInput = [
    {
      type: "text",
      name: "name",
      placholder: "Full Name",
    },
    {
      type: "text",
      name: "phone_number",
      placholder: "Phone",
    },
  ];

  const handleScroll = () => {
    const element = document.getElementById("about-quiv");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const onSubmit: SubmitHandler<FormValues> = (e) => {
    const subject = encodeURIComponent(`${e.name} - ${e.phone_number}`);
    const body = encodeURIComponent(e.message as string);

    window.open(
      `mailto:admin@quivhair.com?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <div>
      <div className="flex min-h-screen justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-10 items-center w-screen flex-wrap">
          {dataIcon.map((product, idx) => {
            return (
              <div key={idx}>
                <CardProduct
                  classNameCard="p-5 flex justify-center cursor-pointer h-72"
                  classNameTitle="text-lg sm:text-xl font-light text-4xl"
                  classNameDesc="text-xl"
                  classNameIcon=""
                  classNameCardContent="gap-5"
                  product={product}
                  footer={product.footer}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex min-h-screen justify-center md:px-32 mt-10 md:mt-0">
        <div className="flex flex-col w-screen gap-10 sm:gap-20">
          <TitleComponent
            firstTitle="Get in touch"
            lastTitle="with us"
            classNameContainer="uppercase flex justify-center"
          />
          <div className="flex flex-col gap-10 px-10 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
              {fieldInput.map((field, idx) => {
                return (
                  <InputComponent
                    name={field.name}
                    control={control}
                    type={field.type}
                    key={idx}
                    placeholder={field.placholder}
                  />
                );
              })}
            </div>
            <div>
              <TextareaComponent
                name="message"
                control={control}
                placeholder="Message"
                rows={10}
              />
            </div>
            <div className="flex justify-center">
              <Button
                onClick={handleSubmit(onSubmit)}
                variant="outline"
                className="bg-transparent text-navy-blue text-sm sm:text-lg w-52 border-navy-blue hover:bg-navy-blue hover:text-white hover:border-none"
              >
                Send message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageModules;
