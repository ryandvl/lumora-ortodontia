import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "Serviços ✦ L.O",
  description: "Site oficial da Lumora Ortodontia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
