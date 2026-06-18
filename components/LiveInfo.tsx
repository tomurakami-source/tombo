import { getCurrentLive } from "@/lib/lives";
import CountdownTimer from "./CountdownTimer";

export default async function LiveInfo() {
  const live = getCurrentLive();

  if (!live) {
    return (
      <section id="live" className="relative bg-[#020617] py-24 px-4">
        <div className="mx-auto mb-16 max-w-4xl">
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-[#f97316]/30" />
            <span className="font-[var(--font-sans-mod)] text-xs tracking-[0.4em] text-[#f97316] uppercase">
              Next Live
            </span>
            <div className="h-[1px] flex-1 bg-[#f97316]/30" />
          </div>
        </div>

        <div className="mx-auto max-w-4xl flex flex-col items-center justify-center py-16 text-center">
          <p className="font-[var(--font-sans-mod)] text-xs tracking-[0.5em] text-[#f97316] uppercase mb-6">
            Coming Soon
          </p>
          <p className="font-[var(--font-serif-ja)] text-[#a89880] text-sm leading-loose">
            次のライブ情報は近日公開予定です。<br />お楽しみに。
          </p>
        </div>
      </section>
    );
  }

  const targetDate = new Date(`${live.date}T00:00:00+09:00`).toISOString();

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
        <CountdownTimer targetDate={targetDate} />

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
                {live.label}
              </h2>
              <dl className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-[#f97316]">VENUE</dt>
                  <dd className="text-[#f5f0e8]">{live.venue}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-[#f97316]">ADDRESS</dt>
                  <dd className="text-[#a89880] text-xs leading-relaxed">
                    {live.address || "東京都新宿区百人町1-5-1 メトロビルB1"}
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-[#f97316]">TIME</dt>
                  <dd className="text-[#f5f0e8]">{live.openTime || "TIME未定"}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-[#f97316]">CHARGE</dt>
                  <dd className="text-[#f5f0e8] text-xs leading-relaxed">
                    ¥{(live.price || 3000).toLocaleString()} + 1drink ¥600
                  </dd>
                </div>
              </dl>
            </div>

            {/* Lineup + CTA */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-3 text-xs tracking-[0.3em] text-[#f97316]">LINEUP</p>
                <ul className="space-y-2">
                  <li className="font-[var(--font-serif-ja)] text-xl font-bold text-[#f5f0e8]">
                    <span className="mr-2 text-xs text-[#f97316]">★</span>
                    The Tonbo Bunch
                  </li>
                </ul>
              </div>

              <a
                href="/reserve"
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
              The Tonbo Bunch は、初めての人も、一人の人も、女性も、
              <br className="hidden md:block" />
              等しく熱狂できる場所を約束します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
