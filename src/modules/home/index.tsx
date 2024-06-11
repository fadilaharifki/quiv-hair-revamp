import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CarouselProductComponent } from "@/components/carousel-product";

const HomePageModules = () => {
  const dataImage = [
    {
      name: "QUIV Hair Wax",
      price: "140000",
      url: "/image/home/hairwax1.png",
    },
    {
      name: "QUIV Hair Wax",
      price: "140000",
      url: "/image/home/hairwax2.png",
    },
    {
      name: "QUIV Hair Wax",
      price: "140000",
      url: "/image/home/hairwax3.png",
    },
    {
      name: "QUIV Hair Wax",
      price: "140000",
      url: "/image/home/hairwax3.png",
    },
    {
      name: "QUIV Hair Wax",
      price: "140000",
      url: "/image/home/hairwax3.png",
    },
  ];

  return (
    <div>
      <div className="h-screen">
        <Image
          className=" h-screen w-screen object-cover"
          fill
          src={"/image/home/banner.png"}
          alt="home image"
        ></Image>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center h-72 justify-between">
            <div className="text-white text-[60px] leading-none font-bold text-center bell-mt text-shadow shadow-black">
              Botanically rich formulations protect, repair, and promote healthy
              hair
            </div>
            <div>
              <Button
                variant="outline"
                className=" bg-transparent text-white hover:text-black text-lg w-52"
              >
                See more
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 h-screen py-10">
        <div className="col-span-1 bg-navy-blue flex-col flex justify-center px-10 gap-11">
          <div className="text-white text-[50px] bell-mt font-semibold">
            Bestsellers
          </div>
          <div className="text-white text-2xl font-inter font-light">
            Shop the best natural men’s hairstyling products, shampoo,
            conditioner, shaving, and skincare.{" "}
          </div>
          <div>
            <Button
              variant="outline"
              className=" bg-transparent text-white hover:text-black text-lg w-52 "
            >
              See more
            </Button>
          </div>
        </div>
        <div className="col-span-3 flex justify-center items-center flex-col">
          <CarouselProductComponent data={dataImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePageModules;
