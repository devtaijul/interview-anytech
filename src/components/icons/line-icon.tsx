import { SVGProps } from "react";

export const LineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={158}
    height={158}
    viewBox="0 0 158 158"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M158 0L0.5 157.5H23.0446L158 22.5448V0Z"
      fill="url(#paint0_linear_5178_22429)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_5178_22429"
        x1={-140.36}
        y1={266.729}
        x2={224.893}
        y2={-44.9581}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00E9EA" />
        <stop offset={1} stopColor="#1F80F0" stopOpacity={0.05} />
      </linearGradient>
    </defs>
  </svg>
);
