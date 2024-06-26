import LookBookPageModules from "@/modules/look-book";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Look Book",
};

const LookBookPage = () => {
  return <LookBookPageModules />;
};

export default LookBookPage;
