import type { Metadata } from "next";
import "./globals.css";
import { gothicA1, marckScript, prata } from "./fonts";

export const metadata: Metadata = {
  title: "DAYSTAY apartments",
  description: "Посуточные квартиры в центре Баку",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${gothicA1.variable} ${prata.variable} ${marckScript.variable} antialiased 
        text-text font-gothicA1 bg-mainBg`}
      >
        {children}
      </body>
    </html>
  );
}
