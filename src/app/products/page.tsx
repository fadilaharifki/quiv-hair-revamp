import ProductsPageModules from "@/modules/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
};

const ProductsPage = () => {
  return <ProductsPageModules />;
};

export default ProductsPage;
