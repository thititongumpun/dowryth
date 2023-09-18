import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Script from "next/script";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "จ่ายเท่าไหร่",
  description: "คำนวนสินสอด",
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
          <main className="flex justify-center items-center">{children}</main>
        </Providers>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4998059744687395"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
