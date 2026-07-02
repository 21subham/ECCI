"use client";

import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";
import { Reveal } from "../../components/Reveal";
import { useParallax } from "../../hooks/useScrollEffects";
import { useRef } from "react";

const financials = [
  { fy: "2025-26", status: "Draft", docs: [{ name: "ITR Filing", ready: false }, { name: "Audit Report", ready: false }] },
  { fy: "2024-25", status: "Published", docs: [{ name: "ITR Filing", ready: true }, { name: "Audit Report", ready: true }] },
  { fy: "2023-24", status: "Published", docs: [{ name: "ITR Filing", ready: true }, { name: "Audit Report", ready: true }] },
];

export default function FinancialsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  useParallax(heroRef, true);

  return (
    <PublicLayout activeNav="about">
      <section ref={heroRef} className="relative flex min-h-[500px] items-center justify-center overflow-hidden pt-[72px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(17,35,59,0.85) 0%, rgba(17,35,59,0.85) 100%), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=500&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-16 pb-12">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="text-crimson transition-colors hover:text-crimson-light">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/about" className="text-crimson transition-colors hover:text-crimson-light">About</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Financial Statements</span>
          </div>
          <Reveal animation="fade-in">
            <h1 className="font-heading text-3xl text-white md:text-4xl lg:text-5xl">Financial Statements</h1>
            <p className="mx-auto mt-4 max-w-[600px] text-lg text-white/70">
              Transparent financial reporting in compliance with Indian regulations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">Transparency</span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Year-wise Filings</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              All ITR filings and audit reports published for member and public reference.
            </p>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {financials.map((fy, idx) => (
              <Reveal key={fy.fy} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3}>
                <div className="rounded-xl border border-border-gray bg-white p-8 transition-all hover:shadow-lg">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-xl text-navy">FY {fy.fy}</h3>
                      <span className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${fy.status === "Published" ? "bg-[#C6F6D5] text-[#22543D]" : "bg-yellow-100 text-yellow-800"}`}>{fy.status}</span>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-crimson"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                  </div>
                  <div className="space-y-4">
                    {fy.docs.map((doc) => (
                      <div key={doc.name} className="flex items-center justify-between rounded-lg border border-border-gray bg-ice-tint p-4">
                        <div>
                          <div className="text-sm font-semibold text-navy">{doc.name}</div>
                          <div className="text-xs text-gray-500">PDF · 1.2 MB</div>
                        </div>
                        <button disabled={!doc.ready} className="rounded-md border border-ice-blue bg-transparent px-4 py-2 text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-40">
                          Download PDF
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ice-tint py-12">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="rounded-xl border border-border-gray bg-white p-6 italic text-sm text-gray-600">
            <strong className="text-navy">Note:</strong> Financial statements are published in compliance with Indian regulations and are available for public reference. For detailed audit reports, please contact the ECCI office.
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
