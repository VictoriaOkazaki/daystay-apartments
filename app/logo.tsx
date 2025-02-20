"use client";

import { useRouter } from "next/navigation";
import MyImage from "./my-image";

export default function Logo() {
  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/");
  };
  return (
    <button onClick={handleLogoClick}>
      <MyImage
        src="/images/logo.svg"
        alt="logo"
        className="w-[18.6vw] lg:w-[10.65vw]"
        aspectRatio="205 / 160"
        priority={true}
      />
    </button>
  );
}
