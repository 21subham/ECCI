"use client";

import { useState } from "react";
import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";
import { Reveal } from "../../components/Reveal";
import { useParallax } from "../../hooks/useScrollEffects";

const filters = ["All", "2024", "2023", "2022"];

const awards = [
  { year: "2024", org: "FICCI", title: "Best Chamber for Bilateral Trade", desc: "Recognized for excellence in fostering India-Nepal trade corridors and cross-border business facilitation.", gradient: "from-navy to-ice-blue" },
  { year: "2024", org: "USISPF", title: "Outstanding Chamber Award", desc: "Honored for promoting Indo-Pacific economic cooperation and US-India SME partnerships.", gradient: "from-crimson to-navy" },
  { year: "2023", org: "LCCI", title: "Excellence in Membership Growth", desc: "Awarded for highest percentage membership growth in the South Asia region.", gradient: "from-ice-blue to-navy" },
  { year: "2023", org: "SBF Singapore", title: "Regional Business Champion", desc: "Recognized for outstanding contribution to ASEAN-India trade networking.", gradient: "from-navy to-ice-blue" },
  { year: "2022", org: "Dubai Chamber", title: "Best Practices in Chamber Management", desc: "Awarded for operational excellence and innovative member services.", gradient: "from-crimson to-navy" },
  { year: "2022", org: "NCCI", title: "Leadership in Trade Facilitation", desc: "Honored for pioneering trade documentation services and digital transformation.", gradient: "from-ice-blue to-navy" },
];

export default function AwardsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? awards : awards.filter((a) => a.year === activeFilter);

  return (
    <PublicLayout activeNav="about">
      <div className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-navy-deep-dark pt-[88px] pb-20 text-center text-white lg:pt-[100px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(80,125,154,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(158,11,25,0.08)_0%,transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="mb-4 flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link href="/" className="text-crimson transition-colors hover:text-crimson-light">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/about" className="text-crimson transition-colors hover:text-crimson-light">About</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Awards &amp; Recognitions</span>
          </div>
          <Reveal animation="fade-in">
            <h1 className="font-heading text-3xl text-white md:text-4xl lg:text-5xl">Awards &amp; Recognitions</h1>
            <p className="mx-auto mt-4 max-w-[600px] text-lg text-white/70">
              Celebrating milestones and industry recognition that reflect ECCI&apos;s commitment to excellence.
            </p>
          </Reveal>
        </div>
      </div>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 flex flex-wrap justify-center gap-3" animation="fade-in">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeFilter === f
                    ? "bg-crimson text-white"
                    : "border border-border-gray bg-white text-navy hover:border-ice-blue hover:text-navy"
                }`}
              >
                {f}
              </button>
            ))}
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((award, idx) => (
              <Reveal key={`${award.title}-${award.year}`} animation="fade-in-up" delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <div className="overflow-hidden rounded-xl border border-border-gray bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className={`relative h-[160px] bg-gradient-to-br ${award.gradient}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12 text-white/40">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <span className="absolute top-4 right-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
                      {award.year}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-xs font-bold uppercase tracking-widest text-crimson">{award.org}</div>
                    <h3 className="mb-3 text-lg font-semibold text-navy">{award.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{award.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
