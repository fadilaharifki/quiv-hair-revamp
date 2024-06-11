import * as React from "react";
import { SVGProps } from "react";
const PrevIcon = ({ color = "#383838", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M15 15.252a1 1 0 0 1-1.196 1.603L15 15.252Zm-6.146-3.337-.598.802a1 1 0 0 1-.001-1.603l.599.801Zm4.943-4.945a1 1 0 1 1 1.198 1.601L13.797 6.97ZM2 12c0 5.523 4.477 10 10 10v2C5.373 24 0 18.627 0 12h2Zm10 10c5.523 0 10-4.477 10-10h2c0 6.627-5.373 12-12 12v-2Zm10-10c0-5.523-4.477-10-10-10V0c6.627 0 12 5.373 12 12h-2ZM12 2C6.477 2 2 6.477 2 12H0C0 5.373 5.373 0 12 0v2Zm1.804 14.855-5.548-4.138 1.196-1.603L15 15.252l-1.196 1.603Zm-5.55-5.74 5.543-4.145 1.198 1.601-5.542 4.145-1.198-1.602Z"
    />
  </svg>
);
export default PrevIcon;
