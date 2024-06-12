"use client";

import CardProduct from "@/components/card-product";
import InputComponent from "@/components/input";
import TextareaComponent from "@/components/textarea";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  PinIcon,
} from "lucide-react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  email?: string;
  message?: string;
}

const ContactPageModules = () => {
  const { handleSubmit, control } = useForm();

  const dataImage = [
    {
      title: "Headquarters",
      description: "Bandung, Indonesia",
      icon: (
        <div>
          <MapPinIcon size={50} />
        </div>
      ),
    },
    {
      title: "Email",
      description: "info@quiv.com",
      icon: (
        <div>
          <MailIcon size={50} />
        </div>
      ),
    },
    {
      title: "Phone",
      description: "+628 000 0000",
      icon: (
        <div>
          <PhoneIcon size={50} />
        </div>
      ),
    },
  ];

  const fieldInput = [
    {
      type: "text",
      name: "first_name",
      placholder: "First Name",
    },
    {
      type: "text",
      name: "last_name",
      placholder: "Last Name",
    },
    {
      type: "text",
      name: "phone_number",
      placholder: "Phone",
    },
    {
      type: "text",
      name: "email",
      placholder: "Email Address",
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
    console.log(e, "as");
  };

  return (
    <div>
      <div className="h-screen">
        <Image
          className="h-screen w-screen object-cover grayscale"
          fill
          src={"/image/contact/banner.png"}
          alt="contact image"
        ></Image>
        <div className="absolute inset-0 bg-light-brown bg-opacity-25 shadow-lg  rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center justify-between">
            <div className="text-white text-[60px] font-bold text-center font-bell-mt text-shadow shadow-gray-500">
              Contact
            </div>
            <div className="text-white text-lg font-inter text-center text-shadow shadow-gray-500">
              Natural ingredients, proven to perform the best
            </div>
          </div>
        </div>
        <ArrowDown onClick={handleScroll} />
      </div>
      <div className="flex min-h-screen justify-center">
        <div className="flex flex-row items-center justify-evenly gap-10">
          {dataImage.map((product, idx) => {
            return (
              <div key={idx}>
                <CardProduct
                  classNameCard="w-[364px] h-[371px] p-5 flex justify-center items-center"
                  classNameTitle="text-xl font-light text-4xl"
                  classNameDesc="text-xl"
                  classNameIcon="p-10"
                  classNameCardContent="gap-5"
                  product={product}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex min-h-screen justify-center md:px-32">
        <div className="flex flex-col w-screen gap-20">
          <div className="text-black text-[50px] font-bell-mt font-semibold text-center">
            Get in touch with us
          </div>
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-2 gap-10">
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
                className="bg-transparent text-navy-blue text-lg w-52 border-navy-blue hover:bg-navy-blue hover:text-white hover:border-none"
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
