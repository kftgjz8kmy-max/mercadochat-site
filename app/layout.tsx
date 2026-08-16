import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | IA para vendedores de Mercado Libre`,
  description: siteConfig.description,
  icons: {
    icon: siteConfig.brand.icon,
    shortcut: siteConfig.brand.icon,
    apple: siteConfig.brand.icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={archivo.variable}>{children}</body>
    </html>
  );
}
