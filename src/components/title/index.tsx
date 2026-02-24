import { twMerge } from "tailwind-merge";

interface TitleInterface {
  firstTitle?: string;
  lastTitle: string;
  classNameContainer?: string;
  variant?: "dark" | "light" | "gold";
}

export const TitleComponent = ({
  firstTitle = "",
  lastTitle = "",
  classNameContainer,
  variant = "dark",
}: TitleInterface) => {
  const variants = {
    dark: "text-white",
    light: "text-navy-blue",
    gold: "text-gold-deep",
  };

  return (
    <h2
      className={twMerge(
        "flex flex-wrap items-center justify-center text-3xl sm:text-6xl uppercase italic font-montserrat tracking-tighter text-center",
        variants[variant],
        classNameContainer,
      )}
    >
      <span className="font-light opacity-70">{firstTitle}</span>
      <span className="font-black ml-2 sm:ml-4 drop-shadow-[0_0_15px_rgba(184,134,11,0.2)]">
        {lastTitle}
      </span>
    </h2>
  );
};
