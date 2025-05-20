import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { twMerge } from "tailwind-merge";

type Position = "horizontal" | "vertical";

interface ProductInterface {
  url?: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  date?: string;
}

interface CardProductInterface {
  classNameCard?: string;
  classNameImage?: string;
  classNameTitle?: string;
  classNameDate?: string;
  classNameCardContent?: string;
  classNameFooter?: string;
  classNameDesc?: string;
  classNameIcon?: string;
  product: ProductInterface;
  footer?: React.ReactNode;
  position?: Position;
}

const CardProduct = ({
  classNameCard,
  classNameCardContent,
  classNameImage,
  classNameTitle,
  classNameDate,
  classNameDesc,
  classNameFooter,
  classNameIcon,
  product,
  footer,
  position = "vertical",
}: CardProductInterface) => {
  return (
    <Card
      className={twMerge(
        "bg-navy-blue p-10 rounded-2xl items-center ",
        position === "horizontal" && "p-1",
        classNameCard
      )}
    >
      <CardContent
        className={twMerge(
          "flex justify-center items-center  flex-col gap-10",
          position === "horizontal" && "flex-row gap-4 p-2",
          classNameCardContent
        )}
      >
        {product.url && (
          <Image
            className={twMerge(
              "flex rounded-lg h-50 w-50",
              position === "horizontal" && "w-50",
              classNameImage
            )}
            width={286}
            height={286}
            alt={product.title as string}
            src={product.url as string}
          />
        )}
        {product?.icon && (
          <div>
            <div
              className={twMerge("bg-white p-5 rounded-full", classNameIcon)}
              onClick={() => window.open(product.url, "_blank")}
            >
              {product?.icon}
            </div>
          </div>
        )}
        <div className="flex flex-col gap-2">
          {product?.date && (
            <div
              className={twMerge(
                " font-thin text-[12px] text-white text-start",
                classNameDate
              )}
            >
              {product.date}
            </div>
          )}
          {product.title && (
            <div
              className={twMerge(
                " font-bold text-3xl text-white text-center",
                position === "horizontal" && "text-[14px] text-left",
                "line-clamp-3",
                classNameTitle
              )}
            >
              {product.title}
            </div>
          )}
          {product.description && (
            <div
              className={twMerge(
                "  font-thin text-[12px] sm:text-[14px] text-white text-center",
                position === "horizontal" && "text-[12px] text-left",
                classNameDesc
              )}
            >
              {product.description}
            </div>
          )}
          {footer && (
            <div
              className={twMerge(
                "flex justify-center items-center",
                classNameFooter
              )}
            >
              {footer}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
