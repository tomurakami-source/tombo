import type { Metadata } from "next";
import { Noto_Serif_JP, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

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
  metadataBase: new URL("https://tombo-bunch.vercel.app"),
  verification: {
    google: "PHtYTI81QewHHjX8zhH5CXXGqW4cDNqapAGuK76oK3U",
  },
  title: "The Tonbo Bunch | Neo-Heisei Soul Rock",
  description:
    "平成の熱狂を、令和のビートで。新しいロックンロールの夜明け。ザ・トンボバンチ公式ライブ予約ページ。",
  keywords: ["ザ・トンボバンチ", "The Tonbo Bunch", "ロックバンド", "ライブ", "Neo-Heisei Soul Rock"],
  openGraph: {
    title: "The Tonbo Bunch | Neo-Heisei Soul Rock",
    description: "平成の熱狂を、令和のビートで。新しいロックンロールの夜明け。",
    type: "website",
    url: "https://tombo-bunch.vercel.app",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Tonbo Bunch | Neo-Heisei Soul Rock",
    description: "平成の熱狂を、令和のビートで。新しいロックンロールの夜明け。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://tombo-bunch.vercel.app",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "The Tonbo Bunch",
              alternateName: "ザ・トンボバンチ",
              url: "https://tombo-bunch.vercel.app",
              genre: "Rock",
              description: "平成の熱狂を、令和のビートで。新しいロックンロールの夜明け。",
              sameAs: [
                "https://twitter.com/search?q=The+Tonbo+Bunch",
              ],
            }),
          }}
        />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
