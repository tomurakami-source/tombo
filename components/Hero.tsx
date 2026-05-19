"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden scanlines">
      {/* Background: gradient fallback (replace src with actual video) */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-transparent to-[#020617]/70"
        aria-hidden="true"
      />

      {/* Sepia vignette */}
      <div className="vignette absolute inset-0 z-[1]" aria-hidden="true" />

      {/* Orange horizontal line accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] bg-[#f97316] z-10"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Band label */}
        <p
          className="mb-4 font-[var(--font-sans-mod)] text-xs tracking-[0.4em] text-[#f97316] uppercase fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Neo-Heisei Soul Rock
        </p>

        {/* Band name */}
        <h1
          className="glitch-text mb-6 font-[var(--font-sans-mod)] text-5xl font-black tracking-tight text-[#f5f0e8] md:text-7xl lg:text-8xl fade-in-up"
          data-text="THE TONBO BUNCH"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          THE TONBO BUNCH
        </h1>

        {/* Tagline */}
        <p
          className="mb-2 font-[var(--font-serif-ja)] text-lg text-[#f5f0e8]/80 md:text-2xl fade-in-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          平成の熱狂を、令和のビートで。
        </p>
        <p
          className="mb-10 font-[var(--font-serif-ja)] text-base text-[#a89880] md:text-xl fade-in-up"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          新しいロックンロールの夜明け。
        </p>

        {/* CTA */}
        <a
          href="/reserve"
          className="btn-reserve fade-in-up inline-block rounded-none border-2 border-[#f97316] bg-[#f97316] px-10 py-4 font-[var(--font-sans-mod)] text-sm font-bold tracking-[0.2em] text-[#020617] uppercase transition-all duration-300 hover:bg-transparent hover:text-[#f97316]"
          style={{ animationDelay: "0.9s", opacity: 0 }}
        >
          ライブを予約する
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs tracking-[0.3em] text-[#a89880]">SCROLL</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-[#f97316] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
