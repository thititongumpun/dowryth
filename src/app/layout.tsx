import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Script from "next/script";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ผมต้องจ่ายสินสอดเท่าไหร่ครับบบบบ",
  description: "ระบบคำนวนสินสอดสำหรับผู้ชาย",
  keywords: ['สินสอด', 'ระบบคำนวนสินสอด', 'คำนวนสินสอด', 'ผมต้องจ่ายสินสอดเท่าไหร่ครับ'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="light">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="flex justify-center items-center bg-gray-100">{children}</main>
        </Providers>
        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4998059744687395"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        /> */}
      </body>
    </html>
  );
}
