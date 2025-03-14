import type { Metadata } from "next";
import "./globals.css";
import { gothicA1, marckScript, prata } from "./fonts";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  title: "DAYSTAY apartments",
  description: "Посуточные квартиры в центре Баку",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "ru")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${gothicA1.variable} ${prata.variable} ${marckScript.variable} antialiased 
        text-text font-gothic-a1 bg-main-bg`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
