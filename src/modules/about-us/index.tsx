import Image from "next/image";

const AboutUsPageModules = () => {
  return (
    <div>
      <div>
        <Image
          className="h-screen w-screen object-cover grayscale"
          fill
          src={"/image/about-us/banner.png"}
          alt="about us image"
        ></Image>
        <div className="absolute inset-0 bg-light-brown bg-opacity-25 shadow-lg shadow-black rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center justify-between">
            <div className="text-white text-[60px] font-bold text-center bell-mt text-shadow shadow-gray-500">
              About Us
            </div>
            <div className="text-white text-lg font-inter text-center text-shadow shadow-gray-500">
              Natural ingredients, proven to perform the best
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPageModules;
