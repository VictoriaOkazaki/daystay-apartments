export default function AirbnbIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg
      width="1.67vw"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9424 26.0784C12.5801 22.996 10.2365 19.8039 10.2365 17.4509C10.2365 14.3137 11.8052 12.745 14.9424 12.745C18.0797 12.745 19.6483 14.3137 19.6483 17.4509C19.6483 19.8039 17.3048 22.996 14.9424 26.0784ZM14.9424 26.0784C16.5111 27.647 17.2954 28.4313 18.864 29.2156C20.4326 29.9999 22.7856 30.7843 25.9228 28.4313C29.0601 26.0784 28.2758 22.9411 26.7071 19.0196C25.1385 15.098 23.0475 10.3921 18.864 4.11759C17.5558 2.54896 16.5111 1.76465 14.9377 1.76465C13.3691 1.76465 12.3918 2.47053 11.0209 4.11759C6.83733 10.3921 4.74635 15.098 3.17772 19.0196C1.6091 22.9411 0.824784 26.0784 3.96204 28.4313C7.09929 30.7843 9.45223 29.9999 11.0209 29.2156C12.5895 28.4313 13.3738 27.647 14.9424 26.0784Z"
        stroke={isHovered ? "#E30104" : "#3A1F17"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
