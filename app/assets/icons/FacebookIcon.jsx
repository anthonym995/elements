// src/assets/icons/FacebookIcon.js
const FacebookIcon = ({ size = 20, color = "#1E1E1E", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15 1.66666H12.5C11.395 1.66666 10.3352 2.10564 9.55376 2.88704C8.77236 3.66845 8.33337 4.72825 8.33337 5.83332V8.33332H5.83337V11.6667H8.33337V18.3333H11.6667V11.6667H14.1667L15 8.33332H11.6667V5.83332C11.6667 5.61231 11.7545 5.40035 11.9108 5.24407C12.0671 5.08779 12.279 4.99999 12.5 4.99999H15V1.66666Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FacebookIcon;
