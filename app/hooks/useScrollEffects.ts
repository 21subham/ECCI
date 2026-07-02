"use client";

import { useEffect, useState, useCallback, RefObject } from "react";

export function useHeaderScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct =
        h.scrollHeight - h.clientHeight > 0
          ? (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
          : 0;
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  enabled = true
) {
  useEffect(() => {
    if (!enabled || !ref.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let rafId: number;
    const el = ref.current;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom > -window.innerHeight && rect.top < window.innerHeight * 2) {
          const offset = window.scrollY * 0.35;
          el.style.backgroundPositionY = `calc(50% - ${offset}px)`;
        }
        rafId = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [enabled, ref]);
}
