"use client";

import { useState, useTransition } from "react";
import { submitReservation } from "./actions";

type Props = { price: number; discount: number };

export default function ReserveForm({ price, discount }: Props) {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);
  const [nameError, setNameError] = useState("");
  const [step, setStep] = useState<"form" | "confirm">("form");
  const [isPending, startTransition] = useTransition();

  const total = price * count;
  const discounted = (price - discount) * count;

  function goConfirm(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setNameError("お名前を入力してください");
      return;
    }
    setNameError("");
    setStep("confirm");
  }

  function handleSubmit() {
    startTransition(async () => {
      const result = await submitReservation({ name: name.trim(), count });
      if (!result.success) {
        setNameError(result.error);
        setStep("form");
      }
    });
  }

  return (
    <div className="mx-auto max-w-xl">
      {step === "form" && (
        <form onSubmit={goConfirm} noValidate>
          <div className="relative border border-[#f97316]/30 bg-[#0a0f1e] p-8 md:p-10">
            <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[#f97316]" />
            <span className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-[#f97316]" />
            <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#f97316]" />
            <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#f97316]" />

            {/* Name */}
            <div className="mb-8">
              <label
                htmlFor="name"
                className="mb-2 block font-[var(--font-sans-mod)] text-xs tracking-[0.2em] text-[#f97316]"
              >
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
                <p className="mt-2 text-xs text-red-400" role="alert">
                  {nameError}
                </p>
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
                <span
                  className="w-10 text-center font-[var(--font-sans-mod)] text-4xl font-black tabular-nums text-[#f5f0e8]"
                  aria-live="polite"
                  aria-atomic="true"
                >
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
                <span>¥{price.toLocaleString()} × {count} = ¥{total.toLocaleString()}</span>
              </div>
              <div className="mt-2 flex justify-between text-sm text-[#06c755]">
                <span>LINEクーポン割引</span>
                <span>− ¥{(discount * count).toLocaleString()}</span>
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
      )}

      {step === "confirm" && (
        <div className="relative border border-[#f97316]/30 bg-[#0a0f1e] p-8 md:p-10">
          <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[#f97316]" />
          <span className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-[#f97316]" />
          <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#f97316]" />
          <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#f97316]" />

          <p className="mb-6 font-[var(--font-sans-mod)] text-xs tracking-[0.3em] text-[#f97316]">
            CONFIRM
          </p>
          <h2 className="mb-8 font-[var(--font-serif-ja)] text-xl font-bold text-[#f5f0e8]">
            以下の内容で予約しますか？
          </h2>

          <dl className="mb-10 space-y-4">
            {[
              { label: "お名前", value: `${name} 様` },
              { label: "枚数", value: `${count} 枚` },
              { label: "当日お支払い", value: `¥${discounted.toLocaleString()} + 1drink` },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-4 text-sm">
                <dt className="w-32 shrink-0 text-[#f97316]">{label}</dt>
                <dd className="text-[#f5f0e8]">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setStep("form")}
              disabled={isPending}
              className="flex-1 border border-[#f97316]/40 py-4 font-[var(--font-sans-mod)] text-sm tracking-[0.1em] text-[#a89880] transition-colors hover:border-[#f97316] hover:text-[#f5f0e8] disabled:opacity-40"
            >
              ← 修正する
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isPending}
              className="btn-reserve flex-1 bg-[#f97316] py-4 font-[var(--font-sans-mod)] text-sm font-black tracking-[0.2em] text-[#020617] uppercase transition-all duration-300 hover:bg-[#ea6c0a] active:scale-95 disabled:opacity-60"
            >
              {isPending ? "送信中..." : "この内容で予約する"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
