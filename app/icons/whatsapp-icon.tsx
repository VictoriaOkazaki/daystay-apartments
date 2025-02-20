export default function WhatsappIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <svg
      className="w-[6.8vw] lg:w-[2.5vw]"
      viewBox="0 0 48 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.7533 28.3664L30.2533 24.6164C30.0317 24.5062 29.7851 24.4565 29.5382 24.4721C29.2913 24.4877 29.0529 24.5682 28.847 24.7055L25.172 27.1547C23.3115 26.2023 21.7979 24.6886 20.8454 22.8281L23.297 19.1555C23.4342 18.9496 23.5147 18.7112 23.5304 18.4643C23.546 18.2174 23.4962 17.9707 23.3861 17.7492L19.6361 10.2492C19.5195 10.0146 19.3396 9.81717 19.1168 9.67927C18.894 9.54137 18.6372 9.46845 18.3751 9.46875C16.0131 9.46875 13.7477 10.4071 12.0775 12.0773C10.4072 13.7476 9.46889 16.0129 9.46889 18.375C9.47509 23.7189 11.6007 28.8421 15.3794 32.6208C19.1581 36.3995 24.2813 38.525 29.6251 38.5312C31.9872 38.5312 34.2526 37.5929 35.9228 35.9227C37.5931 34.2524 38.5314 31.9871 38.5314 29.625C38.5315 29.3636 38.4587 29.1074 38.3213 28.8851C38.1838 28.6628 37.9871 28.4832 37.7533 28.3664ZM29.6251 35.7188C25.027 35.7132 20.6188 33.8841 17.3674 30.6327C14.116 27.3813 12.287 22.9731 12.2814 18.375C12.2815 16.9043 12.8135 15.4832 13.7793 14.374C14.7451 13.2649 16.0794 12.5424 17.5361 12.3398L20.5033 18.2742L18.0681 21.9258C17.9402 22.1184 17.8617 22.3395 17.8396 22.5697C17.8175 22.7999 17.8525 23.0319 17.9415 23.2453C19.2347 26.3197 21.6804 28.7655 24.7548 30.0586C24.9682 30.1476 25.2003 30.1826 25.4304 30.1605C25.6606 30.1385 25.8818 30.06 26.0744 29.932L29.7259 27.4969L35.6603 30.4641C35.4578 31.9208 34.7353 33.2551 33.6261 34.2208C32.5169 35.1866 31.0958 35.7186 29.6251 35.7188ZM24.0001 0.0937505C19.8559 0.0928805 15.7826 1.16936 12.1799 3.21758C8.57716 5.26581 5.56877 8.21541 3.44987 11.777C1.33096 15.3386 0.174321 19.3899 0.0934233 23.5333C0.0125257 27.6768 1.01015 31.7701 2.98842 35.4117L0.264981 43.5844C0.0721756 44.1625 0.0441952 44.7829 0.184175 45.3761C0.324156 45.9692 0.626564 46.5117 1.05751 46.9426C1.48845 47.3736 2.0309 47.676 2.62405 47.816C3.2172 47.9559 3.83762 47.928 4.41576 47.7352L12.5884 45.0117C15.7876 46.7478 19.341 47.7305 22.9776 47.8848C26.6142 48.039 30.238 47.3609 33.5728 45.902C36.9075 44.4431 39.8651 42.2419 42.2199 39.4664C44.5748 36.6909 46.2648 33.4144 47.1611 29.8865C48.0573 26.3587 48.1362 22.6728 47.3917 19.1099C46.6471 15.547 45.0988 12.2011 42.8648 9.32742C40.6308 6.45373 37.7701 4.12812 34.5008 2.52792C31.2315 0.927708 27.64 0.0951583 24.0001 0.0937505ZM24.0001 45.0938C20.2922 45.0946 16.6495 44.1181 13.4392 42.2625C13.2252 42.1395 12.9829 42.0741 12.7361 42.0727C12.5848 42.0735 12.4345 42.0981 12.2908 42.1453L3.52748 45.0656C3.44489 45.0932 3.35626 45.0972 3.27152 45.0772C3.18679 45.0572 3.10929 45.014 3.04773 44.9524C2.98617 44.8908 2.94297 44.8134 2.92297 44.7286C2.90297 44.6439 2.90697 44.5552 2.93451 44.4727L5.85483 35.7188C5.91801 35.5296 5.94024 35.3292 5.92003 35.1308C5.89983 34.9323 5.83765 34.7405 5.73764 34.568C3.41089 30.5487 2.47565 25.8738 3.07699 21.2687C3.67834 16.6636 5.78266 12.3857 9.06349 9.09863C12.3443 5.81157 16.6182 3.69913 21.2222 3.08905C25.8261 2.47896 30.5028 3.40534 34.5265 5.72445C38.5502 8.04356 41.6961 11.6258 43.4761 15.9153C45.2561 20.2049 45.5707 24.9619 44.3711 29.4485C43.1715 33.9351 40.5247 37.9004 36.8415 40.7292C33.1582 43.558 28.6443 45.0922 24.0001 45.0938Z"
        fill={isHovered ? "#E30104" : "#E30104"}
      />
    </svg>
  );
}
