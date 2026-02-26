"use client";

import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { TitleComponent } from "@/components/title";
import { Button } from "@/components/ui/button";
import { dataBlog } from "@/constants/dataBlog";
import { ArrowUpRight, BookOpen, Layers } from "lucide-react";

const BlogPageModules = () => {
  const router = useRouter();

  const featuredBlog = dataBlog[0];
  const technicalSection = dataBlog.slice(1, 4);
  const movementSection = dataBlog.slice(4, 7);
  const archiveSection = dataBlog.slice(7, 10);

  return (
    <div className="bg-clinical-white min-h-screen font-inter">
      {/* --- HERO SECTION: SYSTEM ARCHIVE --- */}
      <section className="relative h-[60vh] md:h-[75vh] w-full bg-clinical-gray-dark overflow-hidden">
        <Image
          className="h-full w-full object-cover opacity-60 mix-blend-luminosity"
          height={1200}
          width={1920}
          src={"/image/blog/the-feeds-banner.webp"}
          alt="Technical Feeds"
          priority
        />
        {/* Clinical Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-clinical-gray-dark/20 via-transparent to-clinical-gray-dark" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-clinical-blue font-semibold tracking-[0.5em] text-[10px] uppercase mb-6 bg-clinical-white/5 backdrop-blur-md px-4 py-2 border border-clinical-white/10">
            System Documentation
          </span>
          <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter uppercase font-montserrat text-clinical-white">
            The <span className="text-clinical-blue text-glow">Feeds.</span>
          </h1>
        </div>
      </section>

      {/* --- FEATURED LOG: PRIMARY DOCUMENTATION --- */}
      <section className="border-b border-clinical-border bg-clinical-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-8 md:p-20 flex flex-col justify-center border-r border-clinical-border">
            <div className="flex items-center gap-3 text-clinical-blue mb-10">
              <Layers size={16} />
              <span className="text-[10px] font-semibold uppercase tracking-widest">
                Release Analysis
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[0.95] uppercase text-clinical-gray-dark mb-8">
              {featuredBlog.title}
            </h2>
            <p className="text-clinical-gray-medium text-base md:text-xl font-medium leading-relaxed mb-12 border-l-4 border-clinical-blue pl-8">
              {featuredBlog.introduction}
            </p>
            <Button
              onClick={() => router.push(`/feeds/${featuredBlog.slug}`)}
              className="w-full md:w-fit h-16 px-12 bg-clinical-blue text-clinical-white hover:bg-clinical-gray-dark rounded-none uppercase font-semibold tracking-widest text-[10px] transition-all"
            >
              Analyze Full Report
            </Button>
          </div>
          <div className="w-full lg:w-1/2 relative min-h-[400px] bg-clinical-gray-light">
            <Image
              className="w-full h-full object-cover"
              width={800}
              height={1000}
              src={featuredBlog.thumbnail}
              alt={featuredBlog.title}
            />
            {/* Visual Border Detail */}
            <div className="absolute inset-4 border border-clinical-white/20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* --- GRID LOGS: TECHNICAL INSIGHTS --- */}
      <section className="py-24 px-6 md:px-16 border-b border-clinical-border bg-clinical-blue-light/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <TitleComponent
              firstTitle="TECHNICAL"
              lastTitle="INSIGHTS"
              variant="secondary"
            />
            <div className="flex items-center gap-4 text-clinical-blue font-semibold text-[10px] tracking-widest uppercase">
              <span className="h-[1px] w-8 bg-clinical-blue" />
              Dataset 01-03
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-clinical-border border border-clinical-border">
            {technicalSection.map((blog, idx) => (
              <div
                key={idx}
                className="group cursor-pointer bg-clinical-white p-8 hover:bg-clinical-white transition-all duration-500"
                onClick={() => router.push(`/feeds/${blog.slug}`)}
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-8">
                  <Image
                    fill
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-clinical-blue/10 group-hover:opacity-0 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight uppercase text-clinical-gray-dark group-hover:text-clinical-blue transition-colors mb-4">
                  {blog.title}
                </h3>
                <p className="text-clinical-gray-medium text-xs font-medium line-clamp-2 leading-relaxed mb-6">
                  {blog.introduction}
                </p>
                <div className="h-[1px] w-0 group-hover:w-full bg-clinical-blue transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LIST LOGS: SYSTEM CULTURE --- */}
      <section className="py-24 px-6 md:px-16 bg-clinical-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col items-center text-center">
            <TitleComponent
              firstTitle="CULTURE"
              lastTitle="DYNAMICS"
              variant="primary"
            />
            <p className="mt-4 text-[10px] font-semibold text-clinical-gray-medium tracking-[0.3em] uppercase">
              Formulating the Lifestyle Standard
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-clinical-border border border-clinical-border">
            {movementSection.map((blog, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-stretch bg-clinical-white group cursor-pointer  transition-all"
                onClick={() => router.push(`/feeds/${blog.slug}`)}
              >
                <div className="md:w-32 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-clinical-border bg-clinical-blue text-clinical-white transition-colors">
                  <span className="text-[11px] font-bold tracking-tighter">
                    SEC_0{idx + 4}
                  </span>
                </div>
                <div className="flex-1 p-8 md:px-12">
                  <h3 className="text-2xl font-semibold tracking-tighter uppercase text-clinical-blue transition-colors mb-3">
                    {blog.title}
                  </h3>
                  <p className=" text-sm font-medium line-clamp-1 text-clinical-gray-dark transition-colors">
                    {blog.introduction}
                  </p>
                </div>
                <div className="p-8 flex items-center justify-end">
                  <div className="h-10 w-10 border border-clinical-border flex items-center justify-center group-hover:border-clinical-blue group-hover:bg-clinical-blue transition-all">
                    <ArrowUpRight
                      size={18}
                      className="text-clinical-gray-medium group-hover:text-clinical-white transition-all"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ARCHIVE GRID: LEGACY DATA --- */}
      <section className="py-32 bg-clinical-gray-dark text-clinical-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-5xl md:text-8xl font-semibold tracking-tighter uppercase leading-none">
                System <br />
                <span className="text-clinical-blue">Archives</span>
              </h2>
            </div>
            <div className="h-[1px] w-24 bg-clinical-blue hidden md:block" />
            <p className="max-w-xs text-xs text-clinical-blue-light/50 uppercase tracking-widest font-medium leading-relaxed">
              Long-term stability reports and structural movement documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-clinical-white/10 border border-clinical-white/10">
            {archiveSection.map((blog, idx) => (
              <div
                key={idx}
                className="p-10 bg-clinical-gray-dark hover:bg-clinical-white/5 transition-all duration-500 group"
              >
                <h4 className="text-lg font-semibold tracking-tight uppercase mb-4 text-clinical-blue group-hover:text-clinical-white transition-colors">
                  {blog.title}
                </h4>
                <p className="text-clinical-white/40 text-xs font-medium mb-12 leading-relaxed line-clamp-3">
                  {blog.introduction}
                </p>
                <Button
                  onClick={() => router.push(`/feeds/${blog.slug}`)}
                  className="w-full bg-transparent border border-clinical-white/10 hover:bg-clinical-white hover:text-clinical-gray-dark rounded-none py-7 text-[10px] font-semibold uppercase tracking-widest transition-all"
                >
                  Retrieve Data
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Background Decorative Tech Text */}
        <div className="absolute -bottom-10 -right-10 text-[25vw] font-black text-clinical-white/[0.03] select-none pointer-events-none tracking-tighter">
          DB.026
        </div>
      </section>
    </div>
  );
};

export default BlogPageModules;
