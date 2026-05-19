import type { Metadata } from "next";
import { Noto_Serif_JP, Inter } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-serif-ja",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-mod",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THE TONBO BUNCH | Neo-Heisei Soul Rock",
  description:
    "平成の熱狂を、令和のビートで。新しいロックンロールの夜明け。ザ・トンボバンチ公式ライブ予約ページ。",
  openGraph: {
    title: "THE TONBO BUNCH | Neo-Heisei Soul Rock",
    description: "平成の熱狂を、令和のビートで。新しいロックンロールの夜明け。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
