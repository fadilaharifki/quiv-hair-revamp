"use client";

import { BlogDetailProductsPageProps } from "@/app/feeds/[slug]/page";
import NextIcon from "@/assets/icon/next-icon";
import { BlogPost, dataBlog } from "@/constants/dataBlog";
import { formatUrl } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const BlogDetailPageModules = ({ params }: BlogDetailProductsPageProps) => {
  const router = useRouter();

  const data: BlogPost | any = dataBlog.find((e) => e.slug === params.slug);
  const dataRelatedPost: BlogPost[] = dataBlog
    .map((e) => {
      if (e.slug !== params.slug) {
        return e;
      }
      return null;
    })
    .filter((e): e is BlogPost => e !== null);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:min-h-screen mx-5 sm:mx-20 text-center mt-24 sm:mt-28 gap-2 sm:gap-5">
        <div className="italic text-sm sm:text-xl font-light text-gray-400">
          {data.date}
        </div>
        <h1 className="text-xl sm:text-[40px] font-bold">{data.title}</h1>
        <div className="text-base sm:text-2xl font-light">{data.createdBy}</div>
        <div>
          <Image
            className="flex rounded-lg object-contain w-full"
            width={1000}
            height={1000}
            objectFit="cover"
            src={data.url}
            alt={"story about us"}
          />
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data.content }}
        className="m-5 sm:m-20"
      />
      <div className="border-b border-navy-blue w-screen border-[1px] sm:my-10"></div>
      <div className="flex p-5 flex-wrap sm:justify-end">
        {dataRelatedPost.map((product: any, idx: number) => {
          return (
            <div
              key={idx}
              className="bg-navy-blue px-5 sm:px-10 text-white h-36 sm:h-[200px] w-screen sm:w-[600px] flex justify-center items-center gap-2 sm:gap-5 rounded-lg"
            >
              {product.url && (
                <Image
                  className={twMerge(
                    "flex rounderd-lg  h-28 w-28 sm:h-36 sm:w-36"
                  )}
                  width={200}
                  height={200}
                  alt={product.title as string}
                  src={product.url as string}
                />
              )}
              <div>
                <div className="italic font-light">Related Post</div>
                <h1 className="text-base sm:text-2xl font-semibold sm:font-bold overflow-hidden overflow-ellipsis whitespace-normal line-clamp-3">
                  {product.title}
                </h1>
              </div>
              <div>
                <div className="hover:bg-navy-blue cursor-pointer hover:scale-125 duration-300 p-1 rounded-full">
                  <NextIcon
                    color={"#ffffff"}
                    onClick={() => {
                      router.push(`/blog/${formatUrl(product.title)}`);
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogDetailPageModules;
