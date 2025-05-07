// components/CustomHotelIcon.js
const CustomHotelIcon = ({ className = "w-4 h-4 text-white" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M18.5 10H17V7.22L16.1 6H7.9L7 7.22V10H5.5V4.58l.74-1.08h11.52l.74 1.08zM17 11.5h3.38l1.12 1.12v4.88h-19v-4.88l1.12-1.12zM15.5 10h-7V7.72l.16-.22h6.68l.16.22zM4 4.11V10H3l-2 2v10h1.5v-3h19v3H23V12l-2-2h-1V4.11L18.55 2H5.45z" />
  </svg>
);

export default CustomHotelIcon;
