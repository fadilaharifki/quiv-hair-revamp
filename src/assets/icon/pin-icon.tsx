import * as React from "react";
import { SVGProps } from "react";

const PinIcon = ({ color = "#383838", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={46}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M16.253 21.452a5.647 5.647 0 1 1 0-11.294 5.647 5.647 0 0 1 0 11.294Zm0-21.457a15.81 15.81 0 0 0-15.81 15.81c0 11.858 15.81 29.362 15.81 29.362s15.81-17.504 15.81-29.362a15.81 15.81 0 0 0-15.81-15.81Z"
    />
  </svg>
);
export default PinIcon;
