import React from "react";

const LocationIcon = ({ size = 30, fill = "#39B54A", className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3_781)">
        <path
          d="M20 3.33325C13.55 3.33325 8.33331 8.54992 8.33331 14.9999C8.33331 23.7499 20 36.6666 20 36.6666C20 36.6666 31.6666 23.7499 31.6666 14.9999C31.6666 8.54992 26.45 3.33325 20 3.33325ZM11.6666 14.9999C11.6666 10.3999 15.4 6.66659 20 6.66659C24.6 6.66659 28.3333 10.3999 28.3333 14.9999C28.3333 19.7999 23.5333 26.9832 20 31.4666C16.5333 27.0166 11.6666 19.7499 11.6666 14.9999Z"
          fill={fill}
        />
        <path
          d="M20 19.1666C22.3012 19.1666 24.1666 17.3011 24.1666 14.9999C24.1666 12.6987 22.3012 10.8333 20 10.8333C17.6988 10.8333 15.8333 12.6987 15.8333 14.9999C15.8333 17.3011 17.6988 19.1666 20 19.1666Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_781">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LocationIcon;
