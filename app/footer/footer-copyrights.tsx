"use client";

import { useRouter } from "next/navigation";

export default function FooterCopyrights() {
  const router = useRouter();
  const goToPrivacyPolicy = () => {
    router.push("/privacy-policy-page");
  };
  return (
    <div className="flex justify-between mt-section">
      <span className="text-xl">
        © Day-Stay Apartments 2024 All rights reserved
      </span>
      <a
        href="https://victoria-kazakova-portfolio.vercel.app/"
        target="_blank"
        className="text-xl hover:text-acsent"
      >
        Разработка сайта
      </a>
      <button onClick={goToPrivacyPolicy} className="text-xl hover:text-acsent">
        Политика конфиденциальности
      </button>
    </div>
  );
}
