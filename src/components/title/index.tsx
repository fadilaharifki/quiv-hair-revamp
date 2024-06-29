import { twMerge } from "tailwind-merge";

interface TitleInterface {
  firstTitle: string;
  lastTitle: string;
  classNameContainer?: string;
}

export const TitleComponent = ({
  firstTitle = "",
  lastTitle = "",
  classNameContainer,
}: TitleInterface) => {
  return (
    <h1
      className={twMerge(
        "flex text-lg sm:text-4xl gap-x-2 sm:gap-x-3 text-navy-blue",
        classNameContainer
      )}
    >
      <span>{firstTitle}</span> <span className="font-bold">{lastTitle}</span>
    </h1>
  );
};
