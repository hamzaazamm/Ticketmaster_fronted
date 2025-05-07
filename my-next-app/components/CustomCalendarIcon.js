import React from "react";

const CustomCalendarIcon = ({ className = "w-5 h-5 text-black" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M8.75 3V1h-1.5v2H1v20h17.03L23 18.1V3h-6.25V1h-1.5v2zm6.5 3.5h1.5v-2h4.75v3.25h-19V4.5h4.75v2h1.5v-2h6.5zm6.25 2.75v7.59h-4.66v4.66h.57H2.5V9.25zm-.7 8.91-2.64 2.6v-2.6zm-16.55-6.9h5.5v5.5h-5.5zm1.5 1.5v2.5h2.5v-2.5z" />
  </svg>
);

export default CustomCalendarIcon;
