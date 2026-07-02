"use client";

import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "fade-in-left" | "fade-in-right" | "scale-in" | "reveal";
  delay?: 1 | 2 | 3 | 4;
}

export function Reveal({
  children,
  className = "",
  animation = "fade-in-up",
  delay,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const delayClass = delay ? `stagger-delay-${delay}` : "";
  return (
    <div
      ref={ref}
      className={`${animation} ${delayClass} ${className} ${visible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
}
