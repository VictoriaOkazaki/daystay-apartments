"use client";
import Phone from "./phone";

const phones = ["+994519548247", "+994559548245"];

export default function PhoneList() {
  return (
    <div className="flex flex-col gap-y-2">
      {phones.map((phone) => (
        <Phone key={phone} phone={phone} />
      ))}
    </div>
  );
}
