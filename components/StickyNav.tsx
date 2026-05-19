"use client";

import { useEffect, useState } from "react";

export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500"
      style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
    >
      <a
        href="/reserve"
        className="btn-reserve block w-full bg-[#f97316] py-5 text-center font-[var(--font-sans-mod)] text-sm font-black tracking-[0.2em] text-[#020617] uppercase md:hidden"
      >
        今すぐ予約する →
      </a>
    </div>
  );
}
