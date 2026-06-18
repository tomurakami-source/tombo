"use client";

import { useState } from "react";
import Link from "next/link";

type Step = "form" | "confirm" | "complete";

type Props = {
  liveLabel: string;
  liveVenue: string;
};

async function notifyReservation(name: string, email: string, count: number, liveLabel: string) {
  try {
    await fetch("/api/reserve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        count,
        liveLabel,
        submittedAt: new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }),
      }),
    });
  } catch {
    // 通知失敗は予約フローを止めない
  }
}

const PRICE = 3000;
const DISCOUNT = 500;

export default function ReserveForm({ liveLabel, liveVenue }: Props) {
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(1);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const discounted = (PRICE - DISCOUNT) * count;

  function handleConfirm(e: React.FormEvent) {
    e.preventDefault();
    let hasError = false;

    if (!name.trim()) {
      setNameError("お名前を入力してください");
      hasError = true;
    }
    if (!email.trim()) {
      setEmailError("メールアドレスを入力してください");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("正しいメールアドレスを入力してください");
      hasError = true;
    }
    if (hasError) return;

    setNameError("");
    setEmailError("");
    setStep("confirm");
  }

  if (step === "complete") {
    return (
      <div className="mx-auto max-w-xl">
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center border-2 border-[#f97316]">
            <svg className="h-10 w-10 text-[#f97316]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-[var(--font-serif-ja)] text-3xl font-bold text-[#f5f0e8]">
            予約が完了しました
          </h2>
          <p className="mt-3 font-[var(--font-serif-ja)] text-sm text-[#a89880]">
            {name} 様 / {count} 枚
          </p>
          <p className="mt-1 font-[var(--font-serif-ja)] text-sm text-[#a89880]">
            {liveLabel}｜{liveVenue}
          </p>
        </div>

        <div className="mb-6 border border-[#f97316]/20 bg-[#0a0f1e] p-6">
          <p className="mb-4 font-[var(--font-sans-mod)] text-xs tracking-[0.3em] text-[#f97316]">予約内容</p>
          <dl className="space-y-3 text-sm">
            {[
              { label: "お名前", value: `${name} 様` },
              { label: "メール", value: email },
              { label: "枚数", value: `${count} 枚` },
              { label: "当日お支払い", value: `¥${discounted.toLocaleString()} + 1drink ¥600` },
              { label: "支払方法", value: "当日受付にて現金" },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-4">
                <dt className="w-28 shrink-0 text-[#f97316]">{label}</dt>
                <dd className="text-[#f5f0e8] break-all">{value}</dd>
              </div>
            ))}
          </dl>
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
    );
  }

  if (step === "confirm") {
    return (
      <div className="mx-auto max-w-xl">
        <div className="relative border border-[#f97316]/30 bg-[#0a0f1e] p-8 md:p-10">
          <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[#f97316]" />
          <span className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-[#f97316]" />
          <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#f97316]" />
          <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#f97316]" />

          <p className="mb-6 font-[var(--font-sans-mod)] text-xs tracking-[0.3em] text-[#f97316]">CONFIRM</p>
          <h2 className="mb-8 font-[var(--font-serif-ja)] text-xl font-bold text-[#f5f0e8]">
            以下の内容で予約しますか？
          </h2>

          <dl className="mb-10 space-y-4">
            {[
              { label: "お名前", value: `${name} 様` },
              { label: "メール", value: email },
              { label: "枚数", value: `${count} 枚` },
              { label: "当日お支払い", value: `¥${discounted.toLocaleString()} + 1drink` },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-4 text-sm">
                <dt className="w-32 shrink-0 text-[#f97316]">{label}</dt>
                <dd className="text-[#f5f0e8] break-all">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setStep("form")}
              className="flex-1 border border-[#f97316]/40 py-4 font-[var(--font-sans-mod)] text-sm tracking-[0.1em] text-[#a89880] transition-colors hover:border-[#f97316] hover:text-[#f5f0e8]"
            >
              ← 修正する
            </button>
            <button
              type="button"
              onClick={async () => {
                await notifyReservation(name, email, count, liveLabel);
                setStep("complete");
              }}
              className="btn-reserve flex-1 bg-[#f97316] py-4 font-[var(--font-sans-mod)] text-sm font-black tracking-[0.2em] text-[#020617] uppercase transition-all duration-300 hover:bg-[#ea6c0a] active:scale-95"
            >
              この内容で予約する
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <form onSubmit={handleConfirm} noValidate>
        <div className="relative border border-[#f97316]/30 bg-[#0a0f1e] p-8 md:p-10">
          <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[#f97316]" />
          <span className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-[#f97316]" />
          <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#f97316]" />
          <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#f97316]" />

          {/* Name */}
          <div className="mb-8">
            <label htmlFor="name" className="mb-2 block font-[var(--font-sans-mod)] text-xs tracking-[0.2em] text-[#f97316]">
              お名前 <span aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (e.target.value.trim()) setNameError("");
              }}
              placeholder="山田 太郎"
              autoComplete="name"
              className="w-full border border-[#f97316]/30 bg-[#020617] px-4 py-4 font-[var(--font-serif-ja)] text-base text-[#f5f0e8] placeholder-[#a89880]/40 outline-none transition-colors focus:border-[#f97316]"
            />
            {nameError && (
              <p className="mt-2 text-xs text-red-400" role="alert">{nameError}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-8">
            <label htmlFor="email" className="mb-2 block font-[var(--font-sans-mod)] text-xs tracking-[0.2em] text-[#f97316]">
              メールアドレス <span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value.trim()) setEmailError("");
              }}
              placeholder="example@email.com"
              autoComplete="email"
              className="w-full border border-[#f97316]/30 bg-[#020617] px-4 py-4 font-[var(--font-sans-mod)] text-base text-[#f5f0e8] placeholder-[#a89880]/40 outline-none transition-colors focus:border-[#f97316]"
            />
            {emailError && (
              <p className="mt-2 text-xs text-red-400" role="alert">{emailError}</p>
            )}
          </div>

          {/* Count */}
          <div className="mb-8">
            <label className="mb-3 block font-[var(--font-sans-mod)] text-xs tracking-[0.2em] text-[#f97316]">
              予約枚数
            </label>
            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={() => setCount((c) => Math.max(1, c - 1))}
                disabled={count <= 1}
                aria-label="枚数を減らす"
                className="flex h-14 w-14 items-center justify-center border border-[#f97316]/40 text-2xl text-[#f97316] transition-colors hover:bg-[#f97316]/10 disabled:opacity-20 active:scale-95"
              >
                −
              </button>
              <span className="w-10 text-center font-[var(--font-sans-mod)] text-4xl font-black tabular-nums text-[#f5f0e8]" aria-live="polite">
                {count}
              </span>
              <button
                type="button"
                onClick={() => setCount((c) => Math.min(6, c + 1))}
                disabled={count >= 6}
                aria-label="枚数を増やす"
                className="flex h-14 w-14 items-center justify-center border border-[#f97316]/40 text-2xl text-[#f97316] transition-colors hover:bg-[#f97316]/10 disabled:opacity-20 active:scale-95"
              >
                ＋
              </button>
              <span className="font-[var(--font-serif-ja)] text-sm text-[#a89880]">枚</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-8 border border-[#f97316]/20 bg-[#020617] p-5">
            <div className="flex justify-between text-sm text-[#a89880]">
              <span>チケット代</span>
              <span>¥{PRICE.toLocaleString()} × {count} = ¥{(PRICE * count).toLocaleString()}</span>
            </div>
            <div className="mt-2 flex justify-between text-sm text-[#06c755]">
              <span>LINEクーポン割引</span>
              <span>− ¥{(DISCOUNT * count).toLocaleString()}</span>
            </div>
            <div className="mt-3 flex items-baseline justify-between border-t border-[#f97316]/20 pt-3">
              <span className="text-sm text-[#f5f0e8]">当日お支払い（割引後）</span>
              <span className="font-[var(--font-sans-mod)] text-2xl font-black text-[#f97316]">
                ¥{discounted.toLocaleString()}
              </span>
            </div>
            <p className="mt-2 text-xs text-[#a89880]/50">※ 別途 1drink ¥600</p>
          </div>

          <button
            type="submit"
            className="btn-reserve w-full bg-[#f97316] py-5 font-[var(--font-sans-mod)] text-sm font-black tracking-[0.2em] text-[#020617] uppercase transition-all duration-300 hover:bg-[#ea6c0a] active:scale-95"
          >
            内容を確認する →
          </button>
        </div>
      </form>
    </div>
  );
}
