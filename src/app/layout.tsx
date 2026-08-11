import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PointerEffects } from "@/components/PointerEffects";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gladwin — Gauch Labs",
  description: "Portfolio of Gladwin, a full-stack developer building modern digital products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PointerEffects />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
