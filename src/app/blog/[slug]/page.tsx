import BlogDetailPageModules from "@/modules/blog/detail";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Article",
    description: params?.slug as string,
  };
}

const BlogDetailProductsPage = () => {
  return <BlogDetailPageModules />;
};

export default BlogDetailProductsPage;
