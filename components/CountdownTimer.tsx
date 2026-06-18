"use client";

import { useState, useEffect } from "react";

type Props = {
  targetDate: string;
};

export default function CountdownTimer({ targetDate }: Props) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate);
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
  }, [targetDate]);

  return (
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
  );
}
