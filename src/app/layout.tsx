import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const mainFont = localFont({
  src: './SoDoSans-Regular.woff',
  display: 'swap',
})

const lang = typeof navigator !== 'undefined' ? navigator.language.startsWith('es')?'es': navigator.language.startsWith('fr')?'fr':'en':'en';

export const metadata: Metadata = {
  title: "Mi Tiempo Con Dios | Download Apk",
  description: "Sitio para descargar Apk de la aplicación Android <Mi Tiempo Con Dios>",
  creator: "Mario Acendra",
  icons: "./favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={lang}>
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
