import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";

import "./globals.css";

export const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const bebasNeueFont = Bebas_Neue({
  weight: "400",
  variable: "--font-bebasneue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumora Ortodontia",
  description: "Site oficial da Lumora Ortodontia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${interFont.variable} antialiased w-screen h-screen p-6`}
      >
        <div className="relative rounded-4xl bg-slate-50 overflow-hidden w-full h-full p-4 px-8 flex flex-col gap-40">
          {children}
        </div>
      </body>
    </html>
  );
}
