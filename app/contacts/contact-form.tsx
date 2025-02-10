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
      className={clsx(
        "col-span-5 bg-acsent2 rounded-radius p-[3vw] flex flex-col justify-between",
        className
      )}
    >
      <span className="text-3xl">
        Оставьте заявку, и мы свяжемся с вами в течение 30 минут
      </span>
      <div className="h-[0.5px] w-[calc(100% + 6vw)] bg-text mx-[-3vw] mt-3"></div>

      {isSent && (
        <p className="font-prata text-2xl text-green mt-3">
          Message sent successfully! Our manager will contact you within an hour
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="mt-[5%] flex flex-col justify-around flex-grow"
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
            className="py-[2vh] w-[74%] border-b-[1px] border-text text-acsent text-2xl focus:outline-none 
          placeholder:text-2xl placeholder:text-text placeholder:bg-none focus:bg-none"
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
            className="py-[2vh] w-[74%] mt-[3vh] border-b-[1px] border-text text-acsent text-2xl focus:outline-none
           placeholder:text-2xl placeholder:text-text placeholder:bg-none"
          />
        </div>

        <MainButton type="submit">Отправить</MainButton>
      </form>
    </div>
  );
}
// TODO security bot token
