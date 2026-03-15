import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";

import "./globals.css";

export const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const robotoFont = Roboto({
  variable: "--font-roboto",
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
        {children}
      </body>
    </html>
  );
}
