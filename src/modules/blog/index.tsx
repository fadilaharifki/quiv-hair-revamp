"use client";

import CardProduct from "@/components/card-product";
import { Button } from "@/components/ui/button";
import { dataBlog } from "@/constants/dataBlog";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { TitleComponent } from "@/components/title";

const BlogPageModules = () => {
  const { breakpoint } = useScreenSize();
  const router = useRouter();

  // Membagi section blog dengan lebih variatif
  const featuredBlog = dataBlog[0];
  const darkSection = dataBlog.slice(1, 4);
  const whiteSection = dataBlog.slice(4, 7);
  const accentSection = dataBlog.slice(7, 10);

  return (
    <div className="bg-black overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] md:h-screen w-full">
        <Image
          className="h-full w-full object-cover brightness-[0.4]"
          height={1200}
          width={1920}
          src={"/image/blog/the-feeds-banner.webp"}
          alt="Feeds Banner"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-gold-deep font-mono tracking-[0.5em] text-[10px] uppercase mb-4 animate-fade-in">
            Quiv Journal
          </span>
          <h1 className="text-6xl md:text-9xl font-semibold italic tracking-tighter uppercase font-montserrat text-white">
            The Feeds
          </h1>
        </div>
      </section>

      {/* --- FEATURED STORY (SECTION 1) --- */}
      <section id="section-2" className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full md:basis-1/2 relative group overflow-hidden rounded-2xl">
            <Image
              className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105"
              width={800}
              height={600}
              src={featuredBlog.thumbnail}
              alt={featuredBlog.title}
            />
            <div className="absolute top-4 left-4 bg-navy-blue text-white text-[10px] font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
              Featured Story
            </div>
          </div>

          <div className="w-full md:basis-1/2 space-y-8 text-navy-blue">
            <h2 className="text-4xl md:text-6xl font-semibold italic tracking-tighter leading-[0.9] uppercase">
              {featuredBlog.title}
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-600 border-l-2 border-gold-deep pl-6">
              {featuredBlog.introduction}
            </p>
            <Button
              onClick={() => router.push(`/feeds/${featuredBlog.slug}`)}
              className="bg-navy-blue hover:bg-gold-deep text-white hover:text-navy-blue transition-all duration-300 rounded-full px-12 py-7 uppercase font-semibold tracking-widest text-xs"
            >
              Read full story
            </Button>
          </div>
        </div>
      </section>

      {/* --- DARK MINIMALIST SECTION (SECTION 2) --- */}
      <section className="bg-black py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-16">
            <TitleComponent
              firstTitle="DEEP"
              lastTitle="INSIGHTS"
              variant="dark"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {darkSection.map((blog, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
                onClick={() => router.push(`/feeds/${blog.slug}`)}
              >
                <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                  <Image
                    fill
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                  />
                </div>
                <h3 className="text-xl font-semibold italic tracking-tighter uppercase text-white group-hover:text-gold-deep transition-colors">
                  {blog.title}
                </h3>
                <p className="mt-3 text-gray-500 text-sm line-clamp-2 font-light">
                  {blog.introduction}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHITE JOURNAL SECTION (SECTION 3) --- */}
      <section className="bg-[#f8f8f8] py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="mb-16">
            <TitleComponent
              firstTitle="THE"
              lastTitle="CULTURE"
              variant="light"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whiteSection.map((blog, idx) => (
              <div
                key={idx}
                className="flex flex-col border-b border-black/5 pb-8 group cursor-pointer"
                onClick={() => router.push(`/feeds/${blog.slug}`)}
              >
                <span className="text-[10px] font-bold text-gold-deep mb-4">
                  / 0{idx + 1}
                </span>
                <h3 className="text-2xl font-semibold italic tracking-tighter uppercase text-navy-blue leading-tight mb-4">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm font-light mb-6 line-clamp-3 italic">
                  {blog.introduction}
                </p>
                <span className="text-[10px] uppercase font-semibold tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-300">
                  Read more →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL GRID SECTION (SECTION 4) --- */}
      <section className="bg-navy-blue py-32 text-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-semibold italic tracking-tighter uppercase mb-4">
            Archives
          </h2>
          <div className="h-[2px] w-24 bg-gold-deep mx-auto" />
        </div>
        <div className="max-w-7xl mx-auto px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {accentSection.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-gold-deep/50 transition-all"
            >
              <h4 className="text-xl font-semibold italic tracking-tighter uppercase mb-4">
                {blog.title}
              </h4>
              <p className="text-gray-400 text-xs font-light mb-8 leading-relaxed line-clamp-3">
                {blog.introduction}
              </p>
              <Button
                onClick={() => router.push(`/feeds/${blog.slug}`)}
                variant="outline"
                className="w-full text-gold-deep border-white/20 hover:bg-white hover:text-navy-blue rounded-full py-6 text-[10px] font-semibold uppercase tracking-[0.2em]"
              >
                Open Archive
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPageModules;
