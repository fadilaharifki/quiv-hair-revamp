import { dataImageFine, dataImageFlex } from "@/constants/data";
import { dataBlog } from "@/constants/dataBlog";
import { MetadataRoute } from "next";

const WEBSITE_HOST_URL = "https://quiv-web.vercel.app";

type changeFrequency =
  | "always"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const changeFrequency = "daily" as changeFrequency;

  const blogDetail = dataBlog.map(({ slug, date }) => ({
    url: `${WEBSITE_HOST_URL}/feeds/${slug}`,
    lastModified: date,
    changeFrequency,
  }));

  const productDetail = [...dataImageFlex, ...dataImageFine].map(
    ({ path, date }) => ({
      url: `${WEBSITE_HOST_URL}/${path}`,
      lastModified: date,
      changeFrequency,
    })
  );

  const routes = [
    "",
    "/feed",
    "/the-brand",
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
