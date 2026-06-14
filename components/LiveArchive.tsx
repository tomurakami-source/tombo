import { getAllLives } from "@/lib/lives";

export default function LiveArchive() {
  const lives = getAllLives();
  if (lives.length === 0) return null;

  return (
    <section id="archive" className="relative bg-[#020617] py-24 px-4">
      {/* Section divider */}
      <div className="mx-auto mb-16 max-w-4xl">
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-[#f97316]/30" />
          <span className="font-[var(--font-sans-mod)] text-xs tracking-[0.4em] text-[#f97316] uppercase">
            Live Archive
          </span>
          <div className="h-[1px] flex-1 bg-[#f97316]/30" />
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-16">
        {lives.map((live) => (
          <article key={live.slug}>
            {/* Header */}
            <div className="mb-6 border-l-2 border-[#f97316] pl-5">
              <p className="font-[var(--font-serif-ja)] text-2xl font-bold text-[#f5f0e8]">
                {live.label}
              </p>
              <p className="mt-1 text-sm text-[#a89880]">{live.venue}</p>
            </div>

            {/* Photos */}
            {live.photos.length > 0 && (
              <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3">
                {live.photos.map((src, i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden bg-[#0a0f1e]"
                  >
                    <img
                      src={src}
                      alt={`${live.label} photo ${i + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Interview / text */}
            {live.content && (
              <div className="border-t border-[#f97316]/20 pt-6">
                <p className="mb-3 text-xs tracking-[0.3em] text-[#f97316]">
                  INTERVIEW
                </p>
                <div className="font-[var(--font-serif-ja)] text-sm leading-loose text-[#a89880] whitespace-pre-wrap">
                  {live.content}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
