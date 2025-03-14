"use client";

import { useState } from "react";
import MainButton from "../main-button";
import clsx from "clsx";
import MyInput from "../my-input";
import { useTranslations } from "next-intl";

export default function ContactForm({ className }: { className?: string }) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
    e.preventDefault();

    const message = `📌 New Form Submission:\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}`;

    try {
      await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message }),
        }
      );

      setIsSent(true);
      setFormData({ name: "", phone: "" });
    } catch (error) {
      console.error(
        "Error sending message to telegram bot @DayStayByVictoriaBot",
        error
      );
    }
  };

  const t = useTranslations("HomePage.form");

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={clsx(
        `lg:col-span-5 bg-acsent2 rounded-radius-mob lg:rounded-radius p-[8.54vw] lg:p-[3vw] 
        flex flex-col justify-between`,
        className
      )}
    >
      <span className="text-xl lg:text-3xl">{t("title")}</span>
      <div
        className="h-[0.5px] w-[calc(100% + 17.1vw)] lg:w-[calc(100% + 6vw)]
       bg-text mx-[-8.54vw] lg:mx-[-3vw] mt-3"
      ></div>

      {isSent && (
        <p className="font-prata text-base lg:text-2xl text-green mt-3">
          {t("suc-message")}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="mt-[10%] lg:mt-[5%] flex flex-col justify-around grow"
      >
        <div className="gap-[2.5vh] flex flex-col justify-between">
          <MyInput
            name="name"
            type="text"
            placeholder={t("pl-name")}
            value={formData.name}
            onChange={handleChange}
          />
          <MyInput
            name="phone"
            type="tel"
            placeholder={t("pl-phone")}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <MainButton className="mt-[5vh]" type="submit">
          {t("send-btn")}
        </MainButton>
      </form>
    </div>
  );
}
