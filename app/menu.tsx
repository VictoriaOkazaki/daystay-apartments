"use client";

import clsx from "clsx";
import { useMenuItems } from "./hooks/use-menu-items";

export default function Menu({
  className,
  close,
}: {
  className?: string;
  close?: () => void;
}) {
  const menuItems = useMenuItems();

  return (
    <nav className={clsx("lg:flex", className)}>
      {menuItems.map((item) => (
        <button
          onClick={() => {
            item.goTo();
            close?.();
          }}
          className={clsx(
            "text-xl pr-8 last:pr-0 hover:text-acsent transition-colors",
            item.active && "text-acsent"
          )}
          key={item.id}
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
}
