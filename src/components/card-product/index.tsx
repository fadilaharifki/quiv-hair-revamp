import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { twMerge } from "tailwind-merge";

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
}: CardProductInterface) => {
  return (
    <Card
      className={twMerge(
        "bg-navy-blue p-10 rounded-2xl items-center",
        classNameCard
      )}
    >
      <CardContent
        className={twMerge(
          "flex justify-center items-center flex-col gap-10",
          classNameCardContent
        )}
      >
        {product.url && (
          <Image
            className={twMerge("flex rounded-lg h-50 w-50", classNameImage)}
            width={286}
            height={286}
            alt={product.title as string}
            src={product.url as string}
          />
        )}
        {product?.icon && (
          <div className={twMerge("bg-white p-5 rounded-full", classNameIcon)}>
            {product?.icon}
          </div>
        )}
        {product?.date && (
          <div
            className={twMerge(
              "font-bell-inter font-thin text-sm text-white text-start",
              classNameDate
            )}
          >
            {product.date}
          </div>
        )}

        <div
          className={twMerge(
            "font-bell-mt font-bold text-3xl text-white text-center",
            classNameTitle
          )}
        >
          {product.title}
        </div>
        {product.description && (
          <div
            className={twMerge(
              "font-inter font-thin text-sm sm:text-lg text-white text-center",
              classNameDesc
            )}
          >
            {product.description}
          </div>
        )}
      </CardContent>
      {footer && (
        <CardFooter
          className={twMerge(
            "flex justify-center items-center",
            classNameFooter
          )}
        >
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default CardProduct;
