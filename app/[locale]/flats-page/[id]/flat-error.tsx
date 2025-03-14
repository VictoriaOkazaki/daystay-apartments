"use client";

import SecondaryButton from "@/app/[locale]/secondary-button";
import { useRouter } from "@/i18n/navigation";

export default function FlatError() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/flats-page");
  };
  return (
    <div className="mt-section flex flex-col items-center">
      <span className="text-4xl">
        Квартира не найдена. Пожалуйста, попытайтесь выбрать снова
      </span>
      <SecondaryButton onClick={handleClick} className="mt-inside">
        Все квартиры
      </SecondaryButton>
    </div>
  );
}
