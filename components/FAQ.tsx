"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "ライブハウスって怖くないですか？",
    a: "暗くて地下にあるので、そう感じるかもしれません。でもザ・トンボバンチのライブは、デジタルアートとロックが融合した洗練された空間です。",
  },
  {
    q: "一人で行っても大丈夫ですか？",
    a: '実は、来場者の約半分が「一人参戦」。音楽に没頭したいあなたを、僕たちは歓迎します。',
  },
  {
    q: "何を持っていけばいい？",
    a: "スマホの予約確認画面と、少しの好奇心、それだけで十分です。",
  },
  {
    q: "チケット代はいつ払うの？",
    a: "予約は無料で完了。チケット代は当日、会場の受付でお支払いください。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-[#060b18] py-24 px-4">
      <div className="mx-auto mb-16 max-w-2xl">
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-[#f97316]/30" />
          <span className="font-[var(--font-sans-mod)] text-xs tracking-[0.4em] text-[#f97316] uppercase">
            FAQ
          </span>
          <div className="h-[1px] flex-1 bg-[#f97316]/30" />
        </div>
        <h2 className="mt-8 font-[var(--font-serif-ja)] text-xl font-bold text-[#f5f0e8]">
          はじめての方へ
        </h2>
      </div>

      <div className="mx-auto max-w-2xl space-y-3">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className="border border-[#f97316]/20 transition-all duration-300 hover:border-[#f97316]/40"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
              aria-expanded={openIndex === i}
            >
              <span className="font-[var(--font-serif-ja)] text-sm text-[#f5f0e8] md:text-base">
                {faq.q}
              </span>
              <span
                className="ml-4 shrink-0 text-[#f97316] transition-transform duration-300"
                style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            {openIndex === i && (
              <div className="border-t border-[#f97316]/20 px-6 pb-5 pt-4">
                <p className="font-[var(--font-serif-ja)] text-sm leading-loose text-[#a89880]">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
