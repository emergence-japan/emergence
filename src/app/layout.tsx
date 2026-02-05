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
  title: "Emergence-Japan LLC | 逕滓・AI繧ｽ繝ｪ繝･繝ｼ繧ｷ繝ｧ繝ｳ繝ｻDX繧ｳ繝ｳ繧ｵ繝ｫ繝・ぅ繝ｳ繧ｰ繝ｻ莠ｺ譚占ご謌・,
  description: "2017蟷ｴ險ｭ遶九・mergence-Japan LLC縺ｯ縲∵擲莠ｬ螟ｧ蟄ｦ諠・ｱ蟄ｦ迺ｰ阯､譛ｬ遐皮ｩｶ螳､縺ｸ縺ｮ謚陦薙し繝昴・繝亥ｮ溽ｸｾ繧呈戟縺､AI繝ｻDX縺ｮ蟆る摩髮・屮縺ｧ縺吶ら函謌植I豢ｻ逕ｨ縺九ｉWeb繧｢繝励Μ髢狗匱縲∝ｮ溷漁縺ｫ蜊ｳ縺励◆莠ｺ譚占ご謌舌∪縺ｧ縲∵蕗鬢翫→謚陦薙ｒ陞榊粋縺輔○縺滄擠譁ｰ逧・↑繧ｽ繝ｪ繝･繝ｼ繧ｷ繝ｧ繝ｳ縺ｧ雋ｴ遉ｾ縺ｮ譛ｪ譚･繧貞卸蜃ｺ縺励∪縺吶・,
  keywords: ["逕滓・AI", "AI髢狗匱", "DX繧ｳ繝ｳ繧ｵ繝ｫ繝・ぅ繝ｳ繧ｰ", "莠ｺ譚占ご謌・, "Web繧｢繝励Μ髢狗匱", "諤晁・鴨", "謨咎､・, "螟ｧ髦ｪ AI莨∵･ｭ", "繧ｨ繝槭・繧ｸ繧ｧ繝ｳ繧ｹ繝ｻ繧ｸ繝｣繝代Φ"],
  authors: [{ name: "Emergence-Japan LLC" }],
  openGraph: {
    title: "Emergence-Japan LLC | 繝・け繝弱Ο繧ｸ繝ｼ縺ｮ蜉帙〒譁ｰ縺溘↑蜿ｯ閭ｽ諤ｧ繧偵・,
    description: "AI縺ｨ謨咎､翫ｒ陞榊粋縺輔○縺溽峡閾ｪ縺ｮ隕也せ縺ｧ縲∽ｼ∵･ｭ縺ｮ螟蛾擠繧呈髪謠ｴ縺吶ｋ Emergence-Japan LLC 縺ｮ蜈ｬ蠑上し繧､繝医〒縺吶・,
    url: "https://emergence-japan.com", // 驕ｩ蛻・↑URL縺ｫ蠕後〒螟画峩蜿ｯ閭ｽ
    siteName: "Emergence-Japan LLC",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergence-Japan LLC | 逕滓・AI繝ｻDX縺ｮ蟆る摩髮・屮",
    description: "謨咎､翫→謚陦薙ｒ陞榊粋縺輔○縺滄擠譁ｰ逧・↑繧ｽ繝ｪ繝･繝ｼ繧ｷ繝ｧ繝ｳ縺ｧ雋ｴ遉ｾ縺ｮ譛ｪ譚･繧貞卸蜃ｺ縺励∪縺吶・,
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
