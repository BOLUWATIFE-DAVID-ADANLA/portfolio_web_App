"use client";

import { useEffect, useRef, useState } from "react";

export default function ReadingProgress({
  targetId,
  readingMinutes,
}: {
  targetId: string;
  readingMinutes: number;
}) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height - viewport;
      const scrolled = -rect.top;
      const pct = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 1;
      setProgress(pct);
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [targetId]);

  const minutesLeft = Math.ceil(readingMinutes * (1 - progress));
  const label =
    progress >= 0.995
      ? "Finished"
      : minutesLeft <= 0
        ? "Almost done"
        : `${minutesLeft} min left`;

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-50"
        aria-hidden="true"
      >
        <div
          className="h-full bg-foreground/70 transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <div
        className="fixed bottom-5 right-5 z-50 rounded-full border border-border bg-background/80 backdrop-blur px-3 py-1.5 text-[11px] text-muted shadow-sm transition-opacity duration-300"
        style={{ opacity: progress > 0.01 ? 1 : 0 }}
      >
        {label}
      </div>
    </>
  );
}
