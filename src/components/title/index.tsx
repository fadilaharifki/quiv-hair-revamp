import { twMerge } from "tailwind-merge";

interface TitleInterface {
  firstTitle?: string;
  lastTitle: string;
  classNameContainer?: string;
  variant?: "primary" | "secondary" | "neutral";
}

export const TitleComponent = ({
  firstTitle = "",
  lastTitle = "",
  classNameContainer,
  variant = "primary",
}: TitleInterface) => {
  // Map variants to the new Clinical Color Palette
  const variants = {
    // clinical-blue for brand emphasis
    primary: "text-clinical-blue",
    // clinical-gray-dark for standard professional headings
    secondary: "text-clinical-gray-dark",
    // clinical-white for use on dark/blue backgrounds
    neutral: "text-clinical-white",
  };

  return (
    <h2
      className={twMerge(
        "flex flex-wrap items-center justify-center text-3xl sm:text-6xl uppercase font-montserrat tracking-tighter text-center",
        variants[variant],
        classNameContainer,
      )}
    >
      {/* Light weight for the prefix to create visual hierarchy */}
      <span className="font-light opacity-60">{firstTitle}</span>

      {/* Semi-Bold instead of Black for a more refined architectural feel */}
      <span className="font-semibold ml-2 sm:ml-4">{lastTitle}</span>
    </h2>
  );
};
