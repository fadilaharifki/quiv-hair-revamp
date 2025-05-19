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

export interface BlogDetailProductsPageProps {
  params: { slug: string };
}

const BlogDetailProductsPage = ({ params }: BlogDetailProductsPageProps) => {
  return <BlogDetailPageModules params={params} />;
};

export default BlogDetailProductsPage;
