import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-[#111111] font-[family-name:var(--font-sans)] antialiased">
        <Nav />
        <div className="flex-1 pt-14">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
