import CategoryProductsPageModules from "@/modules/products/category-product";
import { Metadata, ResolvingMetadata } from "next";

interface Params {
  category: string;
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const category = params.category as string;
  const imageUrl = "/image/general/image1.png";

  return {
    title: `product Quiv category ${category} is the best`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,
    openGraph: {
      type: "website",
      url: `https://quiv-web.vercel.app/products/${category}`,
      title: `product Quiv category ${category} is the best`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `${category} image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@yourTwitterHandle",
      title: `product Quiv category ${category} is the best`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard `,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `${category} image`,
        },
      ],
    },
  };
}

export interface CategoryProductsPageInterface {
  params: Params;
}

const CategoryProductsPage = (params: CategoryProductsPageInterface) => {
  return (
    <CategoryProductsPageModules
      props={{
        ...params,
      }}
    />
  );
};

export default CategoryProductsPage;
