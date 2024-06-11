import * as React from "react";
import { SVGProps } from "react";

const NextIcon = ({ color = "#383838", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M9 15.252a1 1 0 0 0 1.196 1.603L9 15.252Zm6.146-3.337.598.802a1 1 0 0 0 .001-1.603l-.599.801ZM10.203 6.97A1 1 0 1 0 9.005 8.57l1.198-1.601ZM22 12c0 5.523-4.477 10-10 10v2c6.627 0 12-5.373 12-12h-2ZM12 22C6.477 22 2 17.523 2 12H0c0 6.627 5.373 12 12 12v-2ZM2 12C2 6.477 6.477 2 12 2V0C5.373 0 0 5.373 0 12h2ZM12 2c5.523 0 10 4.477 10 10h2c0-6.627-5.373-12-12-12v2Zm-1.804 14.855 5.548-4.138-1.196-1.603L9 15.252l1.196 1.603Zm5.55-5.74L10.202 6.97 9.005 8.57l5.542 4.145 1.198-1.602Z"
    />
  </svg>
);
export default NextIcon;
