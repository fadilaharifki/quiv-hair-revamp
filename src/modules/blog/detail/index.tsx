"use client";

import { BlogData, BlogSection, dataBlog } from "@/constants/dataBlog";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { parseBoldText } from "@/lib/parse-bold-text";
import { useEffect } from "react";
import LoadingLine from "@/components/LoadingLine";
import { TitleComponent } from "@/components/title";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

type BlogProps = {
  data: BlogData;
  params: { slug: string };
};

function renderSectionContent(
  content: BlogSection[] | string[] | string,
  type?: string,
) {
  if (Array.isArray(content)) {
    if (typeof content[0] === "string") {
      const listClass = "space-y-3 pl-5 my-6 text-gray-700 leading-relaxed";
      if (type === "list") {
        return (
          <ul className={twMerge("list-disc", listClass)}>
            {(content as string[]).map((item, i) => (
              <li key={i} className="pl-2">
                {parseBoldText(item)}
              </li>
            ))}
          </ul>
        );
      }
      if (type === "number") {
        return (
          <ol className={twMerge("list-decimal", listClass)}>
            {(content as string[]).map((item, i) => (
              <li key={i} className="pl-2 font-medium">
                <span className="font-normal text-gray-700">
                  {parseBoldText(item)}
                </span>
              </li>
            ))}
          </ol>
        );
      }
      return (
        <div className="text-gray-700 leading-relaxed">
          {(content as string[]).join(", ")}
        </div>
      );
    }

    return (
      <div className="space-y-8 mt-6">
        {(content as BlogSection[]).map((subSection, idx) => (
          <div key={idx} className="group">
            {subSection.titleContent && (
              <h5 className="text-lg font-black italic uppercase tracking-tighter text-navy-blue mb-2 group-hover:text-gold-deep transition-colors">
                {subSection.titleContent}
              </h5>
            )}
            {subSection.descTitleContent && (
              <p className="text-gray-600 leading-relaxed mb-4">
                {parseBoldText(subSection.descTitleContent)}
              </p>
            )}
            {subSection.content &&
              renderSectionContent(subSection.content, subSection.type)}
          </div>
        ))}
      </div>
    );
  }
  return (
    <p className="text-gray-700 leading-relaxed">
      {parseBoldText(content as string)}
    </p>
  );
}

function getRandomItems<T>(array: T[], count: number): T[] {
  return [...array].sort(() => 0.5 - Math.random()).slice(0, count);
}

const BlogDetailPageModules = ({ data, params }: BlogProps) => {
  const router = useRouter();

  const otherdata: BlogData[] = dataBlog.filter((e) => e.slug !== params.slug);
  const dataRelatedPost = getRandomItems(otherdata, 3);

  useEffect(() => {
    if (!data) {
      const timer = setTimeout(() => router.push("/feeds"), 2000);
      return () => clearTimeout(timer);
    }
  }, [data, router]);

  if (!data)
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingLine />
      </div>
    );

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* --- HERO HEADER --- */}
      <header className="relative w-full h-[60vh] md:h-[80vh] bg-black">
        <Image
          src={data.thumbnail}
          alt={data.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase text-navy-blue max-w-5xl leading-[0.9]">
            {data.title}
          </h1>
        </div>
      </header>

      {/* --- ARTICLE CONTENT --- */}
      <article className="max-w-4xl mx-auto px-6 mt-12">
        {/* Introduction Block */}
        <div className="relative p-8 md:p-12 bg-navy-blue text-white rounded-[30px] mb-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-deep/10 blur-3xl" />
          <p className="relative z-10 text-lg md:text-2xl font-light leading-relaxed italic opacity-90">
            <span className="text-gold-deep font-black text-4xl mr-2">“</span>
            {data.introduction}
          </p>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-20">
          {data.sections.map((section, idx) => (
            <section key={idx} className="prose prose-lg max-w-none">
              {section.title && (
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-gold-deep" />
                  <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-navy-blue">
                    {section.title}
                  </h2>
                </div>
              )}

              <div className="space-y-6 text-gray-700">
                {section.introduction && (
                  <p className="text-xl font-medium text-navy-blue/80 leading-relaxed">
                    {parseBoldText(section.introduction)}
                  </p>
                )}

                {section.titleContent && (
                  <h5 className="text-lg font-bold text-navy-blue">
                    {section.titleContent}
                  </h5>
                )}
                {section.descTitleContent && (
                  <p>{parseBoldText(section.descTitleContent)}</p>
                )}

                {section.content &&
                  renderSectionContent(section.content, section.type)}

                {/* Additional Content Blocks (Helper 1 & 2) */}
                {(section.helper?.title || section.helper?.value) && (
                  <div className="bg-gray-50 border-l-4 border-gold-deep p-6 my-8">
                    {section.helper?.title && (
                      <h5 className="font-black uppercase text-xs tracking-widest text-gold-deep mb-2">
                        {section.helper.title}
                      </h5>
                    )}
                    {section.helper?.value && (
                      <p className="text-gray-600 italic">
                        {section.helper.value}
                      </p>
                    )}
                  </div>
                )}

                {section.titleContent2 && (
                  <h5 className="text-lg font-bold text-navy-blue">
                    {section.titleContent2}
                  </h5>
                )}
                {section.descTitleContent2 && (
                  <p>{parseBoldText(section.descTitleContent2)}</p>
                )}
                {section.content2 &&
                  renderSectionContent(section.content2, section.type2)}
              </div>
            </section>
          ))}
        </div>
      </article>

      {/* --- RELATED POSTS --- */}
      <footer className="max-w-7xl mx-auto px-6 mt-32 border-t border-gray-100 pt-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <TitleComponent
            firstTitle="Expand your"
            lastTitle="Knowledge"
            variant="light"
            classNameContainer="justify-start text-left"
          />
          <Button
            onClick={() => router.push("/feeds")}
            variant="link"
            className="text-navy-blue font-black uppercase tracking-widest text-xs p-0 h-auto"
          >
            View all articles →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {dataRelatedPost.map((post, idx) => (
            <div
              key={idx}
              className="group cursor-pointer"
              onClick={() => router.push(`/feeds/${post.slug}`)}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 shadow-lg">
                <Image
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  src={post.thumbnail}
                  alt={post.title}
                />
              </div>
              <h4 className="text-xl font-black italic uppercase tracking-tighter text-navy-blue leading-tight group-hover:text-gold-deep transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-navy-blue transition-colors">
                Read Article
              </p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default BlogDetailPageModules;
