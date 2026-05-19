export default function TwitterTimeline() {
  return (
    <section id="sns" className="relative bg-[#020617] py-24 px-4">
      <div className="mx-auto mb-16 max-w-4xl">
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-[#f97316]/30" />
          <span className="font-[var(--font-sans-mod)] text-xs tracking-[0.4em] text-[#f97316] uppercase">
            SNS
          </span>
          <div className="h-[1px] flex-1 bg-[#f97316]/30" />
        </div>
        <h2 className="mt-8 font-[var(--font-serif-ja)] text-2xl font-bold text-[#f5f0e8] md:text-3xl">
          最新情報
        </h2>
        <p className="mt-4 font-[var(--font-serif-ja)] text-sm text-[#a89880]">
          ライブ情報・日常をXで発信中。
        </p>
      </div>

      <div className="mx-auto max-w-xl">
        <a
          href="https://twitter.com/the_tonbo_bunch"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between border border-[#f97316]/30 bg-[#0a0f1e] px-8 py-6 transition-all duration-300 hover:border-[#f97316] hover:bg-[#f97316]/5"
        >
          <div className="flex items-center gap-4">
            <svg className="h-8 w-8 text-[#f5f0e8]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.858-8.162-10.642h6.34l4.26 5.638L18.245 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <div>
              <p className="font-[var(--font-sans-mod)] font-bold text-[#f5f0e8]">
                @the_tonbo_bunch
              </p>
              <p className="mt-1 font-[var(--font-serif-ja)] text-xs text-[#a89880]">
                フォローしてライブ情報をチェック
              </p>
            </div>
          </div>
          <span className="font-[var(--font-sans-mod)] text-xs tracking-[0.2em] text-[#f97316] transition-transform duration-300 group-hover:translate-x-1">
            FOLLOW →
          </span>
        </a>
      </div>
    </section>
  );
}
