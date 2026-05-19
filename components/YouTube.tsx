const VIDEO_ID = "kQqYu2FCxfo";

export default function YouTubeSection() {
  return (
    <section id="music" className="relative bg-[#060b18] py-24 px-4">
      {/* Section header */}
      <div className="mx-auto mb-16 max-w-4xl">
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-[#f97316]/30" />
          <span className="font-[var(--font-sans-mod)] text-xs tracking-[0.4em] text-[#f97316] uppercase">
            Music
          </span>
          <div className="h-[1px] flex-1 bg-[#f97316]/30" />
        </div>
        <h2 className="mt-8 font-[var(--font-serif-ja)] text-2xl font-bold text-[#f5f0e8] md:text-3xl">
          まずは、その耳で確かめてほしい。
        </h2>
        <p className="mt-4 font-[var(--font-serif-ja)] text-sm leading-loose text-[#a89880] md:text-base">
          泥臭いソウルミュージックのグルーヴと、鋭利な日本のロックンロールが衝突する。
          <br />
          懐かしいのに、誰も聴いたことがない。そんな「新しいスタイルのロックンロール」を。
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="relative aspect-video w-full overflow-hidden border border-[#f97316]/20 bg-[#020617]">
          <div className="scanlines absolute inset-0 z-10 pointer-events-none" />
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
            title="THE TONBO BUNCH Official MV"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
