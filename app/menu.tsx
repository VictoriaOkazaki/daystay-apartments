"use client";

import clsx from "clsx";
import { useMenuItems } from "./hooks/use-menu-items";

export default function Menu({ className }: { className?: string }) {
  const menuItems = useMenuItems();

  return (
    <nav className={clsx("flex", className)}>
      {menuItems.map((item) => (
        <button
          onClick={item.scrollTo}
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
