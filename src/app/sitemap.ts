import { PRODUCTS_REGISTRY } from "@/constants/data";
import { dataBlog } from "@/constants/dataBlog";
import { MetadataRoute } from "next";

const WEBSITE_HOST_URL = "https://www.quivhair.com";

type changeFrequency =
  | "always"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const changeFrequency = "daily" as changeFrequency;

  const blogDetail = dataBlog.map(({ slug }) => ({
    url: `${WEBSITE_HOST_URL}/feeds/${slug}`,
    lastModified: new Date(),
    changeFrequency,
  }));

  const productDetail = PRODUCTS_REGISTRY.map(({ slug }) => ({
    url: `${WEBSITE_HOST_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency,
  }));

  const routes = [
    "",
    "/feed",
    "/got-questions",
    "/look-book",
    "/why-quiv",
    "/sitemap.ts",
    "/robots.ts",
  ].map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  return [...routes, ...blogDetail, ...productDetail];
}
