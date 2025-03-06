import MyInput from "@/app/my-input";
import BookFormTimeslots from "./book-form-timeslots";
import React from "react";

export type UserData = {
  name: string;
  phone: string;
  email: string;
  time: string;
  note: string;
};

export default function BookForm({
  userData,
  setUserData,
}: {
  userData: UserData;
  setUserData: (updatedFields: UserData) => void;
}) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  return (
    <form className="mt-section w-full lg:w-4/5 flex flex-col gap-[2.5vh] lg:gap-[7vh]">
      <h2 className="text-xl lg:text-2xl">Укажите ваши данные для связи</h2>
      <div className="flex flex-col gap-[2.5vh] lg:flex-row lg:gap-[2.1vw]">
        <MyInput
          name="name"
          type="text"
          placeholder="Имя"
          value={userData.name}
          onChange={handleChange}
        />
        <MyInput
          name="phone"
          type="tel"
          placeholder="Номер телефона"
          value={userData.phone}
          onChange={handleChange}
        />
        <MyInput
          name="email"
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <BookFormTimeslots
        selectedTime={userData.time}
        setSelectedTime={(newVal) => setUserData({ ...userData, time: newVal })}
      />
      <textarea
        value={userData.note}
        onChange={handleChange}
        name="note"
        className="border-[0.5px] border-text rounded-md w-3/5 lg:w-[calc(1/3 - 1.05vw)] p-[1.5vh] lg:p-[2vh]
         border-text text-acsent text-base lg:text-2xl focus:outline-hidden 
placeholder:text-base lg:placeholder:text-2xl placeholder:text-text placeholder:bg-none placeholder:opacity-80 focus:bg-none"
        rows={5}
        placeholder="Дополнительные сведения или замечания"
        id="info"
      ></textarea>
    </form>
  );
}
