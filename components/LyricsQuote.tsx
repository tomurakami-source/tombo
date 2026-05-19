"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// ★ 実際の歌詞に差し替えてください（5行 × 曲名）
const LYRICS = [
  { line: "夜を駆けろ、朝が来るまで。",           song: "夜行性の情熱" },
  { line: "高く飛べ、この空の果てまで。",           song: "高く飛べ" },
  { line: "錆びついた街で、俺たちは鳴り続ける。",   song: "夜行性の情熱" },
  { line: "shake it, 揺らせ、魂ごと。",            song: "Shake" },
  { line: "平成の熱狂を、今夜ここで取り戻せ。",     song: "高く飛べ" },
];

export default function LyricsQuote() {
  // SSRはindex 0で固定、マウント後にランダム選択してhydrationミスマッチを回避
  const [lyric, setLyric] = useState(LYRICS[0]);
  useEffect(() => {
    setLyric(LYRICS[Math.floor(Math.random() * LYRICS.length)]);
  }, []);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // パラレックス：テキストをスクロールに連動してゆっくり浮かせる
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#020617] px-6 py-24"
    >
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b18] via-[#020617] to-[#060b18]" />

      {/* オレンジの縦ライン装飾 */}
      <div className="absolute left-1/2 top-0 h-24 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent to-[#f97316]/40" />
      <div className="absolute left-1/2 bottom-0 h-24 w-[1px] -translate-x-1/2 bg-gradient-to-t from-transparent to-[#f97316]/40" />

      {/* 歌詞テキスト */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center">
        <p className="mb-6 font-[var(--font-sans-mod)] text-xs tracking-[0.4em] text-[#f97316]">
          LYRICS
        </p>
        <blockquote className="font-[var(--font-serif-ja)] text-3xl font-bold leading-loose text-[#f5f0e8] md:text-5xl md:leading-loose">
          {lyric.line}
        </blockquote>
        <p className="mt-6 font-[var(--font-serif-ja)] text-sm text-[#a89880]">
          — {lyric.song}
        </p>
      </motion.div>
    </section>
  );
}
