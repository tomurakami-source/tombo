import type { Metadata } from "next";
import ReserveForm from "./ReserveForm";
import Link from "next/link";
import { getCurrentLive } from "@/lib/lives";

export const metadata: Metadata = {
  title: "ライブ予約 | The Tonbo Bunch",
  description: "The Tonbo Bunch ライブ予約ページ",
};

export default async function ReservePage() {
  const live = getCurrentLive();

  if (!live) {
    return (
      <main className="min-h-screen bg-[#020617] px-4 py-16">
        <div className="mx-auto mb-10 max-w-xl">
          <Link
            href="/"
            className="font-[var(--font-sans-mod)] text-xs tracking-[0.3em] text-[#a89880] transition-colors hover:text-[#f97316]"
          >
            ← TOP
          </Link>
        </div>
        <div className="mx-auto max-w-xl text-center py-16">
          <p className="font-[var(--font-serif-ja)] text-[#a89880]">
            ライブ情報が見つかりません
          </p>
        </div>
      </main>
    );
  }

  const price = live.price || 3000;
  const discount = live.discount || 500;

  return (
    <main className="min-h-screen bg-[#020617] px-4 py-16">
      {/* Back link */}
      <div className="mx-auto mb-10 max-w-xl">
        <Link
          href="/"
          className="font-[var(--font-sans-mod)] text-xs tracking-[0.3em] text-[#a89880] transition-colors hover:text-[#f97316]"
        >
          ← TOP
        </Link>
      </div>

      {/* Header */}
      <div className="mx-auto mb-12 max-w-xl">
        <p className="mb-2 font-[var(--font-sans-mod)] text-xs tracking-[0.4em] text-[#f97316] uppercase">
          Reservation
        </p>
        <h1 className="font-[var(--font-serif-ja)] text-3xl font-bold text-[#f5f0e8] md:text-4xl">
          ライブ予約
        </h1>

        {/* Live info card */}
        <div className="mt-8 border border-[#f97316]/30 bg-[#0a0f1e] p-6">
          <p className="font-[var(--font-serif-ja)] text-xl font-bold text-[#f5f0e8]">
            {live.label}
          </p>
          <p className="mt-1 text-sm text-[#a89880]">{live.venue}</p>
          <p className="mt-1 text-xs text-[#a89880]/60">
            {live.address || "東京都新宿区百人町1-5-1 メトロビルB1"}
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <span className="border border-[#f97316]/30 px-3 py-1 text-[#f97316]">
              {live.openTime || "TIME未定"}
            </span>
            <span className="border border-[#f97316]/30 px-3 py-1 text-[#f97316]">
              ¥{price.toLocaleString()} + 1drink ¥600
            </span>
          </div>
        </div>

        {/* Coupon notice */}
        <div className="mt-4 flex items-center gap-3 border border-[#06c755]/30 bg-[#06c755]/5 px-5 py-4">
          <span className="text-[#06c755] text-lg">✓</span>
          <p className="font-[var(--font-serif-ja)] text-sm text-[#f5f0e8]">
            予約完了後、LINEで
            <span className="font-bold text-[#f97316]"> {discount}円OFF </span>
            クーポンをお届けします
          </p>
        </div>
      </div>

      {/* Form */}
      <ReserveForm price={price} discount={discount} />
    </main>
  );
}
