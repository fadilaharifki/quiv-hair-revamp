import { BlogData, dataBlog } from "@/constants/dataBlog";
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
  const data = dataBlog.find((e) => e.slug === params.slug);

  return <BlogDetailPageModules data={data as BlogData} params={params} />;
};

export default BlogDetailProductsPage;
