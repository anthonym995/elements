// src/assets/icons/MailIcon.js
const MailIcon = ({ size = 16, color = "#39B54A", ...props }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.6666 3.99999C14.6666 3.26666 14.0666 2.66666 13.3333 2.66666H2.66665C1.93331 2.66666 1.33331 3.26666 1.33331 3.99999M14.6666 3.99999V12C14.6666 12.7333 14.0666 13.3333 13.3333 13.3333H2.66665C1.93331 13.3333 1.33331 12.7333 1.33331 12V3.99999M14.6666 3.99999L7.99998 8.66666L1.33331 3.99999"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MailIcon;
