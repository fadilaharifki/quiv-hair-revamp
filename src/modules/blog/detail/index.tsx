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
import { ArrowLeft, BookOpen, Hash, Share2 } from "lucide-react";

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
      const listClass =
        "space-y-4 my-8 text-clinical-gray-medium leading-relaxed font-medium";
      if (type === "list") {
        return (
          <ul className={twMerge("list-none", listClass)}>
            {(content as string[]).map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="h-1.5 w-1.5 rounded-none bg-clinical-blue mt-2 shrink-0" />
                <span className="text-clinical-gray-dark">
                  {parseBoldText(item)}
                </span>
              </li>
            ))}
          </ul>
        );
      }
      if (type === "number") {
        return (
          <ol className={twMerge("list-none space-y-4 my-8", listClass)}>
            {(content as string[]).map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="font-mono text-[10px] text-clinical-blue font-bold mt-1">
                  [0{i + 1}]
                </span>
                <span className="text-clinical-gray-dark">
                  {parseBoldText(item)}
                </span>
              </li>
            ))}
          </ol>
        );
      }
      return (
        <div className="text-clinical-gray-medium leading-relaxed font-medium">
          {(content as string[]).join(", ")}
        </div>
      );
    }

    return (
      <div className="space-y-12 mt-10">
        {(content as BlogSection[]).map((subSection, idx) => (
          <div
            key={idx}
            className="group border-l border-clinical-border pl-6 md:pl-10"
          >
            {subSection.titleContent && (
              <h5 className="text-lg font-semibold uppercase tracking-tight text-clinical-blue mb-3">
                {subSection.titleContent}
              </h5>
            )}
            {subSection.descTitleContent && (
              <p className="text-clinical-gray-medium font-medium leading-relaxed mb-6">
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
    <p className="text-clinical-gray-medium leading-relaxed font-medium">
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
      <div className="h-screen flex items-center justify-center bg-clinical-white">
        <LoadingLine />
      </div>
    );

  return (
    <div className="bg-clinical-white min-h-screen pb-32 font-inter">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-clinical-white/90 backdrop-blur-md border-b border-clinical-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-clinical-blue hover:text-clinical-gray-dark transition-colors"
          >
            <ArrowLeft size={14} /> Back to Library
          </button>
          <Share2 size={16} className="text-clinical-blue cursor-pointer" />
        </div>
      </nav>

      {/* --- HERO HEADER --- */}
      <header className="relative w-full h-[50vh] md:h-[65vh] pt-16 overflow-hidden">
        <Image
          src={data.thumbnail}
          alt={data.title}
          fill
          className="object-cover" // Removed grayscale and opacity
          priority
        />
        {/* Sharp Gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-clinical-white via-transparent to-black/20" />

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase text-clinical-gray-dark max-w-5xl leading-[0.95] drop-shadow-sm">
            {data.title}
          </h1>
        </div>
      </header>

      {/* --- ARTICLE CONTENT --- */}
      <article className="max-w-4xl mx-auto px-6 mt-20">
        {/* Abstract Block */}
        <div className="relative p-8 md:p-12 bg-clinical-blue text-clinical-white rounded-none mb-24 shadow-lg shadow-clinical-blue/10">
          <div className="absolute top-0 right-0 p-6 opacity-20">
            <BookOpen size={40} />
          </div>
          <p className="relative z-10 text-lg md:text-xl font-medium leading-relaxed">
            <span className="font-bold text-[10px] block mb-6 tracking-[0.4em] uppercase border-b border-clinical-white/30 pb-2 w-fit">
              Abstract / Data Summary
            </span>
            {data.introduction}
          </p>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-32">
          {data.sections.map((section, idx) => (
            <section key={idx} className="relative">
              {section.title && (
                <div className="flex flex-col mb-10 border-b border-clinical-border pb-6">
                  <span className="text-clinical-blue font-mono text-[10px] font-bold mb-2">
                    PART_0{idx + 1}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-tighter text-clinical-gray-dark">
                    {section.title}
                  </h2>
                </div>
              )}

              <div className="space-y-8 text-clinical-gray-medium">
                {section.introduction && (
                  <p className="text-lg font-medium text-clinical-gray-dark leading-relaxed">
                    {parseBoldText(section.introduction)}
                  </p>
                )}

                {section.titleContent && (
                  <h5 className="text-lg font-semibold uppercase tracking-tight text-clinical-blue">
                    {section.titleContent}
                  </h5>
                )}

                {section.descTitleContent && (
                  <p className="font-medium text-clinical-gray-dark">
                    {parseBoldText(section.descTitleContent)}
                  </p>
                )}

                {section.content &&
                  renderSectionContent(section.content, section.type)}

                {/* Helper / Side-Data Block */}
                {(section.helper?.title || section.helper?.value) && (
                  <div className="bg-clinical-gray-light border-l-4 border-clinical-blue p-8 my-12">
                    {section.helper?.title && (
                      <h5 className="font-bold uppercase text-[10px] tracking-[0.3em] text-clinical-blue mb-4 flex items-center gap-2">
                        <Hash size={14} /> {section.helper.title}
                      </h5>
                    )}
                    {section.helper?.value && (
                      <p className="text-clinical-gray-dark font-medium leading-relaxed italic">
                        {section.helper.value}
                      </p>
                    )}
                  </div>
                )}

                {section.titleContent2 && (
                  <h5 className="text-lg font-semibold uppercase tracking-tight text-clinical-blue">
                    {section.titleContent2}
                  </h5>
                )}
                {section.descTitleContent2 && (
                  <p className="font-medium text-clinical-gray-dark">
                    {parseBoldText(section.descTitleContent2)}
                  </p>
                )}
                {section.content2 &&
                  renderSectionContent(section.content2, section.type2)}
              </div>
            </section>
          ))}
        </div>
      </article>

      {/* --- RELATED FOOTER --- */}
      <footer className="max-w-7xl mx-auto px-6 mt-40 pt-24 border-t-2 border-clinical-blue">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <TitleComponent
            firstTitle="System"
            lastTitle="Continuation"
            variant="primary"
            classNameContainer="justify-start text-left"
          />
          <Button
            onClick={() => router.push("/feeds")}
            className="bg-clinical-gray-dark hover:bg-clinical-blue text-clinical-white font-bold uppercase tracking-widest text-[10px] px-10 py-7 rounded-none transition-all"
          >
            Browse Full Archive
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dataRelatedPost.map((post, idx) => (
            <div
              key={idx}
              className="group cursor-pointer bg-clinical-white border border-clinical-border p-6 hover:border-clinical-blue transition-all duration-300 shadow-sm"
              onClick={() => router.push(`/feeds/${post.slug}`)}
            >
              <div className="relative aspect-video overflow-hidden mb-6">
                <Image
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  src={post.thumbnail}
                  alt={post.title}
                />
              </div>
              <h4 className="text-xl font-semibold tracking-tight uppercase text-clinical-gray-dark group-hover:text-clinical-blue transition-colors line-clamp-2">
                {post.title}
              </h4>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-clinical-blue">
                  Read Report
                </span>
                <ArrowLeft
                  size={14}
                  className="rotate-180 text-clinical-blue"
                />
              </div>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default BlogDetailPageModules;
