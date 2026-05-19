import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "予約完了 | THE TONBO BUNCH",
};

const LINE_ADD_URL = "https://line.me/R/ti/p/@XXXXXXXXX"; // 公式アカウント開設後に差し替え

export default async function CompletePage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; count?: string }>;
}) {
  const { name, count } = await searchParams;
  const displayName = name ?? "お客様";
  const displayCount = Number(count ?? 1);
  const discounted = (3000 - 500) * displayCount;

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-16">
      <div className="mx-auto max-w-xl">
        {/* Check mark */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center border-2 border-[#f97316]">
            <svg
              className="h-10 w-10 text-[#f97316]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-[var(--font-serif-ja)] text-3xl font-bold text-[#f5f0e8]">
            予約が完了しました
          </h1>
          <p className="mt-3 font-[var(--font-serif-ja)] text-sm text-[#a89880]">
            {displayName} 様 / {displayCount} 枚
          </p>
          <p className="mt-1 font-[var(--font-serif-ja)] text-sm text-[#a89880]">
            2026年5月24日（日）｜新大久保 CLUB Voice
          </p>
        </div>

        {/* Reservation summary */}
        <div className="mb-6 border border-[#f97316]/20 bg-[#0a0f1e] p-6">
          <p className="mb-4 font-[var(--font-sans-mod)] text-xs tracking-[0.3em] text-[#f97316]">
            予約内容
          </p>
          <dl className="space-y-3 text-sm">
            {[
              { label: "お名前", value: `${displayName} 様` },
              { label: "枚数", value: `${displayCount} 枚` },
              { label: "当日お支払い", value: `¥${discounted.toLocaleString()} + 1drink ¥600` },
              { label: "支払方法", value: "当日受付にて現金" },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-4">
                <dt className="w-28 shrink-0 text-[#f97316]">{label}</dt>
                <dd className="text-[#f5f0e8]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* LINE coupon */}
        <div className="relative border border-[#06c755]/40 bg-[#0a0f1e] p-8 text-center">
          <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[#06c755]" />
          <span className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-[#06c755]" />
          <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#06c755]" />
          <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#06c755]" />

          <p className="mb-1 font-[var(--font-sans-mod)] text-xs tracking-[0.3em] text-[#06c755]">
            COUPON
          </p>
          <p className="mb-2 font-[var(--font-serif-ja)] text-lg font-bold text-[#f5f0e8]">
            LINEで{" "}
            <span className="text-[#f97316]">500円OFF</span>{" "}
            クーポンを受け取る
          </p>
          <p className="mb-6 font-[var(--font-serif-ja)] text-xs text-[#a89880]">
            下記のQRコードを読み取り、友だち追加すると
            <br />
            クーポンコードが自動で届きます
          </p>

          {/* QR */}
          <div className="mx-auto mb-6 flex h-44 w-44 items-center justify-center border border-[#06c755]/30 bg-[#020617]">
            <div className="relative h-40 w-40">
              <Image
                src="/line-qr.png"
                alt="LINE公式アカウント QRコード"
                fill
                className="object-contain"
                onError={() => {}}
              />
              {/* フォールバック: QR未設置時 */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[#a89880]">
                <div className="grid grid-cols-3 gap-1 opacity-30">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-4 w-4 bg-[#a89880] ${
                        [0, 2, 4, 6, 8].includes(i) ? "opacity-100" : "opacity-40"
                      }`}
                    />
                  ))}
                </div>
                <span className="mt-2 text-xs">LINE QR</span>
                <span className="text-[10px] leading-relaxed opacity-60">
                  公式アカウント開設後に表示
                </span>
              </div>
            </div>
          </div>

          <a
            href={LINE_ADD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 bg-[#06c755] py-5 font-[var(--font-sans-mod)] text-sm font-black tracking-[0.1em] text-white transition-all hover:bg-[#05b34c] active:scale-95"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
            LINE 友だち追加してクーポンを受け取る
          </a>

          <p className="mt-4 text-xs text-[#a89880]/60">
            当日受付でクーポンコードをご提示ください
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="font-[var(--font-sans-mod)] text-xs tracking-[0.3em] text-[#a89880] transition-colors hover:text-[#f97316]"
          >
            ← TOPに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
