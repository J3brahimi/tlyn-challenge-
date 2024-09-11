import { SVGProps, memo } from "react";

const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0_192_4307)">
      <path
        d="M0 2.66808C0 2.02456 0.225232 1.49367 0.675676 1.07541C1.12612 0.657129 1.71172 0.447998 2.43243 0.447998C3.14029 0.447998 3.71299 0.653905 4.15058 1.06576C4.60102 1.49047 4.82626 2.04387 4.82626 2.72599C4.82626 3.34375 4.60747 3.85854 4.16988 4.27039C3.71944 4.6951 3.12741 4.90746 2.39382 4.90746H2.37452C1.66666 4.90746 1.09396 4.6951 0.656371 4.27039C0.218784 3.84568 0 3.31157 0 2.66808ZM0.250965 19.56V6.66421H4.53668V19.56H0.250965ZM6.9112 19.56H11.1969V12.3592C11.1969 11.9087 11.2484 11.5612 11.3514 11.3167C11.5315 10.8791 11.805 10.5091 12.1718 10.2067C12.5386 9.90423 12.9987 9.75302 13.5521 9.75302C14.9936 9.75302 15.7143 10.7247 15.7143 12.6681V19.56H20V12.1661C20 10.2614 19.5496 8.81672 18.6486 7.83217C17.7477 6.84761 16.5573 6.35533 15.0772 6.35533C13.417 6.35533 12.1236 7.06962 11.1969 8.49819V8.5368H11.1776L11.1969 8.49819V6.66421H6.9112C6.93693 7.07605 6.94981 8.35661 6.94981 10.5059C6.94981 12.6552 6.93693 15.6732 6.9112 19.56Z"
        fill="#90A4AE"
      />
    </g>
    <defs>
      <clipPath id="clip0_192_4307">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(SvgLinkedin);
export default Memo;