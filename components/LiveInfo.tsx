"use client";

import { useState, useEffect } from "react";

const LIVE_DATA = {
  date: "2026年5月24日（日）",
  venue: "新大久保 CLUB Voice",
  address: "東京都新宿区百人町1-5-1 メトロビルB1",
  openTime: "OPEN 17:00",
  startTime: "START 17:30",
  charge: "¥3,000 + 1drink ¥600",
  lineup: [
    "The tonbo Bunch",
    "ならみちwith同級生",
    "シリケッツ",
    "mouse-unit",
    "アベカワズ（静岡）",
    "ダンガンブラザーズ",
  ],
  reserveUrl: "/reserve",
};

export default function LiveInfo() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-05-24T17:00:00+09:00");
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="live" className="relative bg-[#020617] py-24 px-4">
      {/* Section divider */}
      <div className="mx-auto mb-16 max-w-4xl">
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-[#f97316]/30" />
          <span className="font-[var(--font-sans-mod)] text-xs tracking-[0.4em] text-[#f97316] uppercase">
            Next Live
          </span>
          <div className="h-[1px] flex-1 bg-[#f97316]/30" />
        </div>
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Countdown */}
        <div className="mb-12 flex justify-center gap-6 text-center">
          {[
            { value: timeLeft.days, label: "DAYS" },
            { value: timeLeft.hours, label: "HRS" },
            { value: timeLeft.minutes, label: "MIN" },
            { value: timeLeft.seconds, label: "SEC" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-[var(--font-sans-mod)] text-4xl font-black tabular-nums text-[#f97316] md:text-5xl">
                {String(value).padStart(2, "0")}
              </span>
              <span className="mt-1 text-[10px] tracking-[0.3em] text-[#a89880]">{label}</span>
            </div>
          ))}
        </div>

        {/* Live card */}
        <div className="relative border border-[#f97316]/30 bg-[#0a0f1e] p-8 md:p-12">
          {/* Corner accents */}
          <span className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[#f97316]" />
          <span className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-[#f97316]" />
          <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#f97316]" />
          <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#f97316]" />

          <div className="grid gap-8 md:grid-cols-2">
            {/* Info */}
            <div>
              <h2 className="mb-6 font-[var(--font-serif-ja)] text-3xl font-bold text-[#f5f0e8] md:text-4xl">
                {LIVE_DATA.date}
              </h2>
              <dl className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-[#f97316]">VENUE</dt>
                  <dd className="text-[#f5f0e8]">{LIVE_DATA.venue}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-[#f97316]">ADDRESS</dt>
                  <dd className="text-[#a89880] text-xs leading-relaxed">{LIVE_DATA.address}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-[#f97316]">TIME</dt>
                  <dd className="text-[#f5f0e8]">
                    {LIVE_DATA.openTime} / {LIVE_DATA.startTime}
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-[#f97316]">CHARGE</dt>
                  <dd className="text-[#f5f0e8] text-xs leading-relaxed">{LIVE_DATA.charge}</dd>
                </div>
              </dl>
            </div>

            {/* Lineup + CTA */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-3 text-xs tracking-[0.3em] text-[#f97316]">LINEUP</p>
                <ul className="space-y-2">
                  {LIVE_DATA.lineup.map((act, i) => (
                    <li
                      key={act}
                      className={`font-[var(--font-serif-ja)] ${
                        i === 0
                          ? "text-xl font-bold text-[#f5f0e8]"
                          : "text-base text-[#a89880]"
                      }`}
                    >
                      {i === 0 && (
                        <span className="mr-2 text-xs text-[#f97316]">★</span>
                      )}
                      {act}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={LIVE_DATA.reserveUrl}
                className="btn-reserve mt-8 block w-full bg-[#f97316] py-5 text-center font-[var(--font-sans-mod)] text-base font-black tracking-[0.2em] text-[#020617] uppercase transition-all duration-300 hover:bg-[#ea6c0a] active:scale-95"
              >
                今すぐ予約する →
              </a>
            </div>
          </div>

          {/* Intro copy */}
          <div className="mt-10 border-t border-[#f97316]/20 pt-8">
            <p className="font-[var(--font-serif-ja)] text-sm leading-loose text-[#a89880] md:text-base">
              ライブハウスは、扉を開けるまでが一番勇気がいる。
              <br />
              でも、その先にはあなたを肯定する爆音が待っている。
              <br />
              ザ・トンボバンチは、初めての人も、一人の人も、女性も、
              <br className="hidden md:block" />
              等しく熱狂できる場所を約束します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
