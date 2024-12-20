import HomePageModules from "@/modules/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const HomePage = () => {
  return <HomePageModules />;
};

export default HomePage;
