// src/assets/icons/TwitterIcon.js
const TwitterIcon = ({ size = 20, color = "#1E1E1E", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0)">
      <path
        d="M19.1667 2.49999C18.3687 3.06289 17.4851 3.49341 16.55 3.77499C16.0482 3.19791 15.3812 2.7889 14.6392 2.60326C13.8973 2.41762 13.1163 2.46432 12.4018 2.73703C11.6873 3.00975 11.0737 3.49532 10.6442 4.12808C10.2146 4.76085 9.98979 5.51027 10 6.27499V7.10832C8.53557 7.14629 7.08444 6.8215 5.77588 6.16286C4.46733 5.50422 3.34197 4.53218 2.50004 3.33332C2.50004 3.33332 -0.833292 10.8333 6.66671 14.1667C4.95048 15.3316 2.906 15.9158 0.833374 15.8333C8.33337 20 17.5 15.8333 17.5 6.24999C17.4993 6.01787 17.477 5.78632 17.4334 5.55832C18.2839 4.71957 18.8841 3.66058 19.1667 2.49999Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default TwitterIcon;
