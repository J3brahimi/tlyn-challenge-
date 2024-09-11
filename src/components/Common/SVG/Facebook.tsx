import { SVGProps, memo } from "react";

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <rect width="20" height="20" rx="10" fill="#90A4AE" />
    <path
      d="M13.8926 12.8906L14.3359 10H11.5625V8.125C11.5625 7.33398 11.9492 6.5625 13.1914 6.5625H14.4531V4.10156C14.4531 4.10156 13.3086 3.90625 12.2148 3.90625C9.92969 3.90625 8.4375 5.29102 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8789C8.94727 19.959 9.46875 20 10 20C10.5312 20 11.0527 19.959 11.5625 19.8789V12.8906H13.8926Z"
      fill="#F8F9FF"
    />
  </svg>
);

const Memo = memo(SvgFacebook);
export default Memo;