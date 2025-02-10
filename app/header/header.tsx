"use client";
import Logo from "../logo";
import Menu from "../menu";
import PhoneList from "../phone-list";

export default function Header() {
  return (
    <header
      id="header"
      className="flex justify-between items-center p-5 bg-bg rounded-radius"
    >
      <Logo />
      <Menu />
      <PhoneList />
    </header>
  );
}
