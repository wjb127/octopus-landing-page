import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorkerCleanup from "../components/ServiceWorkerCleanup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "황금쭈꾸미집 - 대한민국 쭈꾸미 맛의 기준",
  description: "대한민국 쭈꾸미 맛의 기준을 세우다. 전국 가맹문의 1577-6615",
  keywords: "황금쭈꾸미집,황금쭈꾸미집창업,황금쭈꾸미창업,쭈꾸미맛집,쭈꾸미전문점,쭈꾸미프랜차이즈",
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/favicon.ico' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ServiceWorkerCleanup />
        {children}
      </body>
    </html>
  );
}
