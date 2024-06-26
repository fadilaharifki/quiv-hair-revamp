import BlogPageModules from "@/modules/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = () => {
  return <BlogPageModules />;
};

export default BlogPage;
