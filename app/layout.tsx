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
        className={`${interFont.variable} antialiased w-screen h-screen p-6 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
