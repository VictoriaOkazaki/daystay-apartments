"use client";
import { useEffect, useState, useLayoutEffect } from "react";
import Logo from "../logo";
import PhoneList from "../phone-list";
import BurgerBtn from "./burger-btn";
import BurgerWindow from "../burger-window";
import Menu from "../menu";

export default function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth <= 540);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isBurgerOpen]);

  return (
    <header
      id="header"
      className="flex justify-between items-center bg-bg relative
      rounded-radiusMob lg:rounded-radius p-2 lg:p-5"
    >
      <Logo />
      {!isMobile && <Menu />}
      <PhoneList />
      {isMobile && (
        <BurgerBtn
          isBurgerOpen={isBurgerOpen}
          setIsBurgerOpen={(newVal) => setIsBurgerOpen(newVal)}
        />
      )}
      {isMobile && isBurgerOpen && (
        <BurgerWindow close={() => setIsBurgerOpen(false)} />
      )}
    </header>
  );
}
