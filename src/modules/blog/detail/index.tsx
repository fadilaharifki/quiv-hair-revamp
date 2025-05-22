"use client";

import { BlogData, BlogSection, dataBlog } from "@/constants/dataBlog";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { parseBoldText } from "@/lib/parse-bold-text";
import { useEffect } from "react";
import LoadingLine from "@/components/LoadingLine";

type BlogProps = {
  data: BlogData;
  params: { slug: string };
};

function renderSectionContent(
  content: BlogSection[] | string[] | string,
  type?: string
) {
  if (Array.isArray(content)) {
    if (typeof content[0] === "string") {
      if (type === "list") {
        return (
          <ul className="list-disc pl-5 space-y-1">
            {(content as string[]).map((item, i) => (
              <li key={i}>{parseBoldText(item)}</li>
            ))}
          </ul>
        );
      }
      if (type === "number") {
        return (
          <ol className="list-decimal pl-5 space-y-1">
            {(content as string[]).map((item, i) => (
              <li key={i}>{parseBoldText(item)}</li>
            ))}
          </ol>
        );
      }

      return <div>{(content as string[]).join(", ")}</div>;
    }

    // Jika array isi object (BlogSection[]) — rekursif render tiap subSection
    return (
      <div className="space-y-6">
        {(content as BlogSection[]).map((subSection, idx) => (
          <div key={idx} className="space-y-1">
            {subSection.titleContent && (
              <h5 className="font-medium">{subSection.titleContent}</h5>
            )}
            {subSection.descTitleContent && (
              <p>{subSection.descTitleContent}</p>
            )}

            {/* Rekursif panggil renderSectionContent */}
            {subSection.content &&
              renderSectionContent(subSection.content, subSection.type)}
          </div>
        ))}
      </div>
    );
  }

  // Jika content string
  return <p>{content}</p>;
}

const BlogDetailPageModules = ({ data, params }: BlogProps) => {
  const router = useRouter();

  const dataRelatedPost: BlogData[] = dataBlog
    .map((e) => {
      if (e.slug !== params.slug) {
        return e;
      }
      return null;
    })
    .filter((e): e is BlogData => e !== null);

  useEffect(() => {
    if (!data) {
      setTimeout(() => {
        router.push("/feeds");
      }, 2000);
    }
  }, [data, router]);

  if (!data) {
    return (
      <div className="h-screen">
        <LoadingLine />;
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">{data.title}</h1>
      <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
        <Image
          src={data.thumbnail}
          alt={data.title}
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
            {section.title && (
              <h2 className="text-xl font-semibold">{section.title}</h2>
            )}
            {section.introduction && (
              <p>{parseBoldText(section.introduction)}</p>
            )}
            {section.titleContent && (
              <h5 className="font-medium">{section.titleContent}</h5>
            )}
            {section.descTitleContent && (
              <p>{parseBoldText(section.descTitleContent)}</p>
            )}

            {section.content &&
              renderSectionContent(section.content, section.type)}

            {(section.helper?.title || section.helper?.value) && (
              <div className="flex gap-2">
                {section.helper?.title && (
                  <h5 className="font-medium">{section.helper.title}</h5>
                )}
                {section.helper?.value && <p>{section.helper.value}</p>}
              </div>
            )}

            {section.titleContent2 && (
              <h5 className="font-medium">{section.titleContent2}</h5>
            )}
            {section.descTitleContent2 && (
              <p>{parseBoldText(section.descTitleContent2)}</p>
            )}

            {section.content2 &&
              renderSectionContent(section.content2, section.type2)}

            {(section.helper2?.title || section.helper2?.value) && (
              <div className="flex gap-2">
                {section.helper2?.title && (
                  <h5 className="font-medium">{section.helper2.title}</h5>
                )}
                {section.helper2?.value && <p>{section.helper2.value}</p>}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogDetailPageModules;
