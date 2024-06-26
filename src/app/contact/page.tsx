import ContactPageModules from "@/modules/contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
};
const ContactPage = () => {
  return <ContactPageModules />;
};

export default ContactPage;
