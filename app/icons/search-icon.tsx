export default function SearchButton({ isHovered }: { isHovered: boolean }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.6666 18.6666H19.6133L19.24 18.3066C20.0732 17.3386 20.6822 16.1983 21.0234 14.9675C21.3645 13.7366 21.4294 12.4455 21.2133 11.1866C20.5866 7.47997 17.4933 4.51997 13.76 4.06663C12.4475 3.90059 11.1144 4.037 9.86267 4.46542C8.61098 4.89384 7.47389 5.60292 6.53841 6.53841C5.60292 7.47389 4.89384 8.61098 4.46542 9.86267C4.037 11.1144 3.90059 12.4475 4.06663 13.76C4.51997 17.4933 7.47997 20.5866 11.1866 21.2133C12.4455 21.4294 13.7366 21.3645 14.9675 21.0234C16.1983 20.6822 17.3386 20.0732 18.3066 19.24L18.6666 19.6133V20.6666L24.3333 26.3333C24.88 26.88 25.7733 26.88 26.32 26.3333C26.8666 25.7866 26.8666 24.8933 26.32 24.3466L20.6666 18.6666ZM12.6666 18.6666C9.34663 18.6666 6.66663 15.9866 6.66663 12.6666C6.66663 9.34663 9.34663 6.66663 12.6666 6.66663C15.9866 6.66663 18.6666 9.34663 18.6666 12.6666C18.6666 15.9866 15.9866 18.6666 12.6666 18.6666Z"
        fill={isHovered ? "#E30104" : "#3A1F17"}
      />
    </svg>
  );
}
