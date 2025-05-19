import ContactPageModules from "@/modules/contact";
import FaqPageModules from "@/modules/faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faq",
};

const FaqPage = () => {
  return (
    <>
      <FaqPageModules />
      <ContactPageModules />
    </>
  );
};

export default FaqPage;
