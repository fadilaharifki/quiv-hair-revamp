import AboutUsPageModules from "@/modules/about-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Brand",
};
const TheBrandPage = () => {
  return <AboutUsPageModules />;
};

export default TheBrandPage;
