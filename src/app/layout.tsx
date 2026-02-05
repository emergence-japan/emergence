import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emergence-Japan LLC | 生成AIソリューション・DXコンサルティング・人材育成",
  description: "2017年設立。Emergence-Japan LLCは、東京大学情報学環藤本研究室への技術サポート実績を持つAI・DXの専門集団です。生成AI活用からWebアプリ開発、実務に即した人材育成まで、教養と技術を融合させた革新的なソリューションで貴社の未来を創出します。",
  keywords: ["生成AI", "AI開発", "DXコンサルティング", "人材育成", "Webアプリ開発", "思考力", "教養", "大阪 AI企業", "エマージェンス・ジャパン"],
  authors: [{ name: "Emergence-Japan LLC" }],
  openGraph: {
    title: "Emergence-Japan LLC | テクノロジーの力で新たな可能性を。",
    description: "AIと教養を融合させた独自の視点で、企業の変革を支援する Emergence-Japan LLC の公式サイトです。",
    url: "https://emergence-japan.com", // 適切なURLに後で変更可能
    siteName: "Emergence-Japan LLC",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergence-Japan LLC | 生成AI・DXの専門集団",
    description: "教養と技術を融合させた革新的なソリューションで貴社の未来を創出します。",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
