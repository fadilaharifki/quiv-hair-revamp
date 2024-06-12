import * as React from "react";
import { SVGProps } from "react";

const MailIcon = ({ color = "#383838", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={39}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M43.186.395H4.813C2.175.395.041 2.553.041 5.19l-.024 28.78a4.81 4.81 0 0 0 4.796 4.797h38.373a4.81 4.81 0 0 0 4.797-4.797V5.191A4.81 4.81 0 0 0 43.186.395Zm-.96 10.193-16.955 10.6c-.768.48-1.775.48-2.543 0l-16.955-10.6a2.036 2.036 0 0 1-.731-2.858 2.039 2.039 0 0 1 2.889-.596L24 17.183 40.068 7.134a2.039 2.039 0 1 1 2.159 3.454Z"
    />
  </svg>
);
export default MailIcon;
