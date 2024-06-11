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
  url: string;
  title: string;
  description?: string;
}

interface CardProductInterface {
  classNameCard?: string;
  classNameImage?: string;
  classNameTitle?: string;
  product: ProductInterface;
  footer?: React.ReactNode;
}

const CardProduct = ({
  classNameCard,
  classNameImage,
  classNameTitle,
  product,
  footer,
}: CardProductInterface) => {
  return (
    <Card className={twMerge("bg-navy-blue py-10 rounded-2xl", classNameCard)}>
      <CardContent className="flex px-10 justify-center items-center flex-col gap-10">
        <Image
          className={twMerge("flex rounded-lg h-50 w-50", classNameImage)}
          width={286}
          height={286}
          alt={product.title as string}
          src={product.url as string}
        />
        <div
          className={twMerge(
            "font-bell-mt font-bold text-3xl text-white text-center",
            classNameTitle
          )}
        >
          {product.title}
        </div>
        <div className="font-inter font-thin text-lg text-white text-center">
          {product.description}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        {footer}
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
