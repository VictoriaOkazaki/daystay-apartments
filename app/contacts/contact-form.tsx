"use client";

import { useState } from "react";
import MainButton from "../main-button";
import clsx from "clsx";

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

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={clsx(
        `lg:col-span-5 bg-acsent2 rounded-radiusMob lg:rounded-radius p-[8.54vw] lg:p-[3vw] 
        flex flex-col justify-between`,
        className
      )}
    >
      <span className="text-xl lg:text-3xl">
        Оставьте заявку, и мы свяжемся с вами в течение 30 минут
      </span>
      <div
        className="h-[0.5px] w-[calc(100% + 17.1vw)] lg:w-[calc(100% + 6vw)]
       bg-text mx-[-8.54vw] lg:mx-[-3vw] mt-3"
      ></div>

      {isSent && (
        <p className="font-prata text-base lg:text-2xl text-green mt-3">
          Message sent successfully! Our manager will contact you within an hour
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="mt-[10%] lg:mt-[5%] flex flex-col justify-around flex-grow"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              background: "transparent",
              WebkitBoxShadow: "0 0 0px 1000px transparent inset",
            }}
            className="py-[1.5vh] lg:py-[2vh] w-3/5 lg:w-[74%] border-b-[1px] 
            border-text text-acsent text-base lg:text-2xl focus:outline-none 
          placeholder:text-base lg:placeholder:text-2xl placeholder:text-text placeholder:bg-none focus:bg-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              background: "transparent",
              WebkitBoxShadow: "0 0 0px 1000px transparent inset",
            }}
            className="py-[1.5vh] lg:py-[2vh] w-3/5 lg:w-[74%] border-b-[1px] 
            border-text text-acsent text-base lg:text-2xl focus:outline-none 
          placeholder:text-base lg:placeholder:text-2xl placeholder:text-text placeholder:bg-none focus:bg-none
           mb-[10%] lg:mb-0"
          />
        </div>

        <MainButton type="submit">Отправить</MainButton>
      </form>
    </div>
  );
}
