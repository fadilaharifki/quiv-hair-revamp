import AboutUsPageModules from "@/modules/about-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};
const AboutUsPage = () => {
  return <AboutUsPageModules />;
};

export default AboutUsPage;
