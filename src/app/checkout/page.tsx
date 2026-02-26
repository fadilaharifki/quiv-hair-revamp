import CheckoutPageModules from "@/modules/checkout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Quiv Hair",
};

const CheckoutPage = () => {
  return <CheckoutPageModules />;
};

export default CheckoutPage;
