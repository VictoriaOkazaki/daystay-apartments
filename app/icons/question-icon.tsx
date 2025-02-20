export default function QuestionIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg
      className="w-[5.1vw] h-[5.1vw] lg:w-[1.7vw] lg:h-[1.7vw]"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9997 4.57141C14.1811 4.57141 12.437 5.29386 11.151 6.57982C9.86503 7.86579 9.14258 9.60993 9.14258 11.4286C9.14258 11.6559 9.23288 11.8739 9.39363 12.0346C9.55438 12.1954 9.77239 12.2857 9.99972 12.2857C10.227 12.2857 10.4451 12.1954 10.6058 12.0346C10.7666 11.8739 10.8569 11.6559 10.8569 11.4286C10.8569 10.7532 10.9899 10.0844 11.2483 9.46047C11.5068 8.83651 11.8856 8.26956 12.3632 7.792C12.8407 7.31445 13.4077 6.93563 14.0316 6.67717C14.6556 6.41872 15.3244 6.2857 15.9997 6.2857C16.6751 6.2857 17.3438 6.41872 17.9678 6.67717C18.5918 6.93563 19.1587 7.31445 19.6363 7.792C20.1138 8.26956 20.4926 8.83651 20.7511 9.46047C21.0096 10.0844 21.1426 10.7532 21.1426 11.4286C21.1426 13.0091 20.7997 13.9806 20.346 14.6731C19.8751 15.3897 19.2443 15.8788 18.4797 16.4606L18.442 16.4903C17.714 17.0446 16.8649 17.6926 16.2203 18.6731C15.5494 19.6948 15.1426 21.0091 15.1426 22.8571V23.1428C15.1426 23.3702 15.2329 23.5882 15.3936 23.7489C15.5544 23.9097 15.7724 24 15.9997 24C16.227 24 16.4451 23.9097 16.6058 23.7489C16.7666 23.5882 16.8569 23.3702 16.8569 23.1428V22.8571C16.8569 21.2766 17.1997 20.3051 17.6534 19.6137C18.1243 18.896 18.7551 18.4068 19.5197 17.8251L19.5574 17.7954C20.2854 17.2411 21.1346 16.5931 21.7791 15.6126C22.45 14.5908 22.8569 13.2766 22.8569 11.4286C22.8569 9.60993 22.1344 7.86579 20.8485 6.57982C19.5625 5.29386 17.8183 4.57141 15.9997 4.57141ZM15.9997 28.5714C16.3028 28.5714 16.5935 28.451 16.8078 28.2367C17.0222 28.0224 17.1426 27.7317 17.1426 27.4286C17.1426 27.1255 17.0222 26.8348 16.8078 26.6204C16.5935 26.4061 16.3028 26.2857 15.9997 26.2857C15.6966 26.2857 15.4059 26.4061 15.1916 26.6204C14.9773 26.8348 14.8569 27.1255 14.8569 27.4286C14.8569 27.7317 14.9773 28.0224 15.1916 28.2367C15.4059 28.451 15.6966 28.5714 15.9997 28.5714Z"
        fill={isHovered ? "#E30104" : "#3A1F17"}
      />
    </svg>
  );
}
