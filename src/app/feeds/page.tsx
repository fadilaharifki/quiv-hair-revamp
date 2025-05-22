import BlogPageModules from "@/modules/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feeds",
};

const BlogPage = () => {
  return <BlogPageModules />;
};

export default BlogPage;
