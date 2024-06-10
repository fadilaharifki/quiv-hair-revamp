import Image from "next/image";
import HomeImage from "../../assets/image/home-image.svg";
import { Button } from "@/components/ui/button";

const HomePageModules = () => {
  return (
    <div>
      <div className="h-screen">
        <Image
          className=" h-screen w-screen object-cover grayscale"
          width={25}
          height={25}
          src={HomeImage}
          alt="home image"
        ></Image>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center h-72 justify-between">
            <div className="text-white text-[60px] leading-none font-bold text-center font-bell text-shadow shadow-black">
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
        <div className="grid-span-1 bg-navy-blue flex-col flex justify-center px-10 gap-11">
          <div className="text-white text-[50px] font-bell font-semibold">
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
        <div className="flex "></div>
      </div>
    </div>
  );
};

export default HomePageModules;
