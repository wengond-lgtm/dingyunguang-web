import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "丁韵光 · 视觉设计师", template: "%s · 丁韵光" },
  description: "丁韵光的专业作品集——3D 动画、视觉设计、品牌创意",
  metadataBase: new URL("https://dingyunguang.com"),
  openGraph: { type: "website", siteName: "丁韵光 Portfolio" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-[#e8e8e8]">
        <Nav />
        <div className="flex-1 pt-14">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
