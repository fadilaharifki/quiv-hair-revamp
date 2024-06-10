import Image from "next/image";
import FaqImage from "../../assets/image/faq-image.svg";

const FaqPageModules = () => {
  return (
    <div>
      <div>
        <Image
          className="h-screen w-screen object-cover grayscale"
          width={25}
          height={25}
          src={FaqImage}
          alt="faq image"
        ></Image>
        <div className="absolute inset-0 bg-light-brown bg-opacity-25 shadow-lg shadow-black rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="w-[80%] flex flex-col items-center justify-between">
            <div className="text-white text-[60px] font-bold text-center font-bell text-shadow shadow-gray-500">
              Frequently asked questions
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

export default FaqPageModules;
