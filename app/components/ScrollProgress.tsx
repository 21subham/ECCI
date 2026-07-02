"use client";

import { useScrollProgress } from "../hooks/useScrollEffects";

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[1001] h-[3px] bg-crimson transition-[width] duration-100 ease-linear"
      style={{ width: `${progress}%` }}
    />
  );
}
