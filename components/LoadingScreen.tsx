"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BAND_NAME = "THE TONBO BUNCH";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  // 文字を1文字ずつ表示
  useEffect(() => {
    if (charIndex >= BAND_NAME.length) return;
    const timer = setTimeout(() => setCharIndex((i) => i + 1), 80);
    return () => clearTimeout(timer);
  }, [charIndex]);

  // 全文字表示後、フェードアウト
  useEffect(() => {
    if (charIndex < BAND_NAME.length) return;
    const timer = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(timer);
  }, [charIndex]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-[#020617]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Film grain */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px",
            }}
          />

          {/* Top orange bar */}
          <motion.div
            className="absolute top-0 left-0 h-[3px] bg-[#f97316]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Label */}
          <motion.p
            className="mb-4 font-[var(--font-sans-mod)] text-xs tracking-[0.5em] text-[#f97316]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            NEO-HEISEI SOUL ROCK
          </motion.p>

          {/* Band name typewriter */}
          <h1 className="font-[var(--font-sans-mod)] text-3xl font-black tracking-tight text-[#f5f0e8] md:text-5xl">
            {BAND_NAME.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: i < charIndex ? 1 : 0 }}
                transition={{ duration: 0.05 }}
              >
                {char}
              </motion.span>
            ))}
            {/* カーソル */}
            {charIndex < BAND_NAME.length && (
              <motion.span
                className="inline-block w-[3px] h-8 bg-[#f97316] ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
