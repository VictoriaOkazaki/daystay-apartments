export default function FacebookIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg
      width="1.67vw"
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_52_10970)">
        <path
          d="M17.1315 12.1364H24.4043L23.5962 15.3687H17.1315V29.9142H13.8992V15.3687H7.43457V12.1364H13.8992V9.11092C13.8992 6.2293 14.1998 5.18365 14.7622 4.12991C15.3134 3.08879 16.1648 2.2374 17.2059 1.68627C18.2596 1.12385 19.3053 0.823242 22.1869 0.823242C23.0305 0.823242 23.7707 0.90405 24.4043 1.06567V4.05557H22.1869C20.0471 4.05557 19.3958 4.18163 18.7299 4.53718C18.252 4.78689 17.8622 5.17726 17.6132 5.65556C17.2576 6.31981 17.1315 6.97112 17.1315 9.11092V12.1364Z"
          fill={isHovered ? "#E30104" : "#3A1F17"}
        />
      </g>
      <defs>
        <clipPath id="clip0_52_10970">
          <rect
            width="32"
            height="30.0606"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
