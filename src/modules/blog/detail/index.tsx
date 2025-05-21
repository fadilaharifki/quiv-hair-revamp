"use client";

import { BlogDetailProductsPageProps } from "@/app/feeds/[slug]/page";
import NextIcon from "@/assets/icon/next-icon";
import { BlogPost, dataBlog } from "@/constants/dataBlog";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";

export type BlogSection = {
  title: string;
  content: string | string[];
  type?: "text" | "list";
};

export type BlogData = {
  title: string;
  introduction: string;
  sections: BlogSection[];
};

type BlogProps = {
  data: BlogData;
};

const BlogDetailPageModules = ({ params }: BlogDetailProductsPageProps) => {
  const router = useRouter();

  // const data: BlogPost | any = dataBlog.find((e) => e.slug === params.slug);
  // const dataRelatedPost: BlogPost[] = dataBlog
  //   .map((e) => {
  //     if (e.slug !== params.slug) {
  //       return e;
  //     }
  //     return null;
  //   })
  //   .filter((e): e is BlogPost => e !== null);

  const data = {
    title: "Matte vs. Shine: Which Hair Finish Fits Your Style Best?",
    introduction:
      "Choosing the right hair product finish can dramatically change your overall look and style. While some guys swear by a matte, natural look, others prefer a shiny, polished style. But how do you know which finish is right for you?",
    sections: [
      {
        title: "Matte Finish: The Natural and Effortless Choice",
        introduction:
          "A matte finish gives your hair a natural, effortless appearance without any glossy shine. It's perfect for daily wear, casual settings, and for men who prefer subtle styling.",
        titleContent: "Advantages of Matte Finish:",
        content: [
          "Looks natural and effortlessly styled.",
          "Ideal for thin or fine hair as it adds volume.",
          "Perfect for casual, everyday styling.",
        ],
        type: "list",
      },
      {
        title: "Shine Finish: The Classic, Polished Look",
        introduction:
          "A shine finish creates a sleek, polished look ideal for formal occasions or when you want to make a bold style statement.",
        titleContent: "Advantages of Shine Finish:",
        content: [
          "Gives hair a polished, professional appearance.",
          "Ideal for classic hairstyles like slick-backs and side-parts.",
          "Suitable for thicker or curly hair to create defined styles.",
        ],
        type: "list",
      },
      {
        title: "How to Decide: Matte or Shine?",
        titleContent: "Consider the following factors:",
        content: [
          "Hair Type: Fine or thin hair benefits from matte finishes, while thick, curly hair can pull off shine better.",
          "Occasion: Casual events call for matte styling, formal events lean towards shine.",
          "Personal Style: If your look is low-key and effortless, choose matte. If you prefer standout, defined hairstyles, shine is your friend.",
        ],
        type: "list",
      },
      {
        title: "Why Quiv Flex Chooses Matte?",
        content:
          "At Quiv, we prioritize clean, effortless, and reliable styling. That's why our liquified hair powder provides a strong hold with a natural matte finish. It's formulated specifically to meet the demands of daily active lifestyles without looking overdone or greasy.",
      },
      {
        title: "Final Thoughts",
        content:
          "Whether you choose matte or shine, the key is selecting a product aligned with your lifestyle, hair type, and styling goals. Matte is ideal for daily simplicity and a natural vibe, while shine fits occasions requiring extra polish. And if you're seeking a matte product that ticks all boxes—simple, clean, and effective—give Quiv a try.",
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">{data.title}</h1>
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src="/image/blog/blog1.webp"
          alt="blog"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1000px"
          priority
        />
      </div>
      <Card>
        <CardContent className="pt-6 space-y-4">
          <p>
            <strong>Introduction</strong> {data.introduction}
          </p>
        </CardContent>
      </Card>

      {data.sections.map((section, idx) => (
        <Card key={idx}>
          <CardContent className="pt-6 space-y-4">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p>{section.introduction}</p>
            <h5 className="font-medium">{section.titleContent}</h5>
            {Array.isArray(section.content) && section.type === "list" ? (
              <ul className="list-disc pl-5 space-y-1">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{section.content}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogDetailPageModules;
