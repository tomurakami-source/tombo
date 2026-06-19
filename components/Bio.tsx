"use client";

const MEMBERS = [
  {
    role: "Vo / Gt",
    name: "カミジョウ",
    desc: "CRACK BANQUET、C.メアリー&15を経て2021年始動。古き良き日本のロックと新解釈のロックンロールを志向。",
    photo: null,
  },
  {
    role: "Dr.",
    name: "ヨースケ",
    desc: "",
    photo: null,
  },
  {
    role: "B.",
    name: "ヨネ助",
    desc: "",
    photo: null,
  },
];

export default function Bio() {
  return (
    <section id="about" className="relative bg-[#020617] py-24 px-4">
      {/* Section header */}
      <div className="mx-auto mb-16 max-w-4xl">
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-[#f97316]/30" />
          <span className="font-[var(--font-sans-mod)] text-xs tracking-[0.4em] text-[#f97316] uppercase">
            About
          </span>
          <div className="h-[1px] flex-1 bg-[#f97316]/30" />
        </div>
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Concept statement */}
        <div className="relative mb-16 border-l-4 border-[#f97316] pl-8">
          <blockquote className="font-[var(--font-serif-ja)] text-xl font-bold leading-loose text-[#f5f0e8] md:text-2xl">
            「平成×ロック×ソウル」
            <br />
            唯一無二の世界観。
          </blockquote>
        </div>

        {/* Bio text */}
        <p className="mb-16 font-[var(--font-serif-ja)] text-sm leading-[2.2] text-[#a89880] md:text-base">
          ボーカル・カミジョウとドラマー・トッティがバーで偶然隣同士になり、音楽談義で意気投合し2021年結成。
          サポートメンバーを含む3ピース・ロックバンドとして2022年から東京を拠点に活動開始。
          ルーツにあるのは、古き良き日本のロックと、深いソウルミュージック。
          過去の模倣ではない。今を生きる僕たちのための「新しいロックンロール」を探求し続ける。
          2023年夏、1st EP「The Great Escape」を配信リリース。
        </p>

        {/* Members */}
        <div className="grid gap-6 sm:grid-cols-3">
          {MEMBERS.map((m) => (
            <div
              key={m.name}
              className="border border-[#f97316]/20 transition-all duration-300 hover:border-[#f97316]/60 hover:bg-[#0a0f1e] overflow-hidden"
            >
              {/* Photo placeholder */}
              {m.photo ? (
                <div className="aspect-square overflow-hidden bg-[#0a0f1e]">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-square bg-[#0a0f1e]/50 flex items-center justify-center">
                  <span className="text-xs text-[#a89880]/40">Photo coming soon</span>
                </div>
              )}

              {/* Info */}
              <div className="p-6">
                <p className="mb-1 font-[var(--font-sans-mod)] text-xs tracking-[0.3em] text-[#f97316]">
                  {m.role}
                </p>
                <p className="mb-3 font-[var(--font-serif-ja)] text-lg font-bold text-[#f5f0e8]">
                  {m.name}
                </p>
                <p className="font-[var(--font-serif-ja)] text-xs leading-relaxed text-[#a89880]">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Past credits */}
        <div className="mt-12 text-center">
          <p className="font-[var(--font-sans-mod)] text-xs tracking-[0.3em] text-[#f97316]/60 uppercase">
            Past Bands
          </p>
          <p className="mt-2 font-[var(--font-serif-ja)] text-sm text-[#a89880]">
            CRACK BANQUET &nbsp;/&nbsp; C.メアリー&15 &nbsp;/&nbsp; その他多数
          </p>
        </div>
      </div>
    </section>
  );
}
