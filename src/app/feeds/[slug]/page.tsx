import { BlogData, dataBlog } from "@/constants/dataBlog";
import BlogDetailPageModules from "@/modules/blog/detail";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = dataBlog.find((e) => e.slug === params.slug);

  if (!data) {
    return {
      title: "Article Not Found",
      description: "The article you're looking for could not be found.",
    };
  }

  return {
    title: data.title,
    description: data.introduction,
    keywords: data.seoKeywords?.join(", "),
    openGraph: {
      title: data.title,
      description: data.introduction,
      images: [
        {
          url: data.thumbnail,
          width: 800,
          height: 600,
          alt: data.title,
        },
      ],
    },
    twitter: {
      title: data.title,
      description: data.introduction,
      images: [data.thumbnail],
      card: "summary_large_image",
    },
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
