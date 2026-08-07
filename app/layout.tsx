import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | IA para vendedores de Mercado Libre`,
  description: siteConfig.description,
  icons: {
    icon: "/brand/mercadochat-icon.png",
    shortcut: "/brand/mercadochat-icon.png",
    apple: "/brand/mercadochat-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
