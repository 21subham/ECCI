"use client";

import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";
import { Reveal } from "../../components/Reveal";
import { useParallax } from "../../hooks/useScrollEffects";
import { useRef } from "react";

const press = [
  { pub: "The Economic Times", date: "Jul 10, 2024", title: "ECCI Signs MOU with FICCI to Strengthen Bilateral Trade", excerpt: "A landmark memorandum of understanding signed between ECCI and FICCI to strengthen bilateral trade relations between India and Nepal.", image: "https://images.unsplash.com/photo-1504711434969-e33886168d7c?w=400&h=250&fit=crop" },
  { pub: "Business Standard", date: "Feb 25, 2025", title: "Nepal Festival 2025 Breaks Attendance Records", excerpt: "The annual Nepal Festival drew record footfall with over 15,000 visitors, showcasing Nepal's rich cultural heritage and fostering trade opportunities.", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop" },
  { pub: "Hindustan Times", date: "Nov 15, 2024", title: "New Trade Corridor Initiative Launched by ECCI", excerpt: "ECCI unveils a strategic India-Nepal trade corridor initiative aimed at streamlining cross-border commerce and reducing transit times.", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop" },
];

const mediaKit = [
  { title: "Brand Guidelines (PDF)", size: "2.4 MB", icon: "📄" },
  { title: "ECCI Logo Pack (ZIP)", size: "1.8 MB", icon: "🗜" },
  { title: "Press Kit 2025 (PDF)", size: "5.1 MB", icon: "📰" },
];

export default function MediaPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  useParallax(heroRef, true);

  return (
    <PublicLayout activeNav="about">
      <section ref={heroRef} className="relative flex min-h-[500px] items-center justify-center overflow-hidden pt-[72px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(17,35,59,0.85) 0%, rgba(17,35,59,0.85) 100%), url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=500&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-16 pb-12">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="text-crimson transition-colors hover:text-crimson-light">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/about" className="text-crimson transition-colors hover:text-crimson-light">About</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Media &amp; Press</span>
          </div>
          <Reveal animation="fade-in">
            <h1 className="font-heading text-3xl text-white md:text-4xl lg:text-5xl">Media &amp; Press</h1>
            <p className="mx-auto mt-4 max-w-[600px] text-lg text-white/70">
              Latest coverage, press releases, and media resources for ECCI.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">Press Coverage</span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">In The News</h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {press.map((item, idx) => (
              <Reveal key={item.title} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3}>
                <div className="overflow-hidden rounded-xl border border-border-gray bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="h-[200px] bg-gray-100" style={{ backgroundImage: `url('${item.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  <div className="p-6">
                    <div className="mb-2 text-xs font-semibold text-gray-500">{item.pub} · {item.date}</div>
                    <h3 className="mb-3 text-lg font-semibold text-navy">{item.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">{item.excerpt}</p>
                    <Link href="#" className="text-sm font-semibold text-crimson transition-colors hover:text-crimson-dark">
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ice-tint py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">Media Kit</span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Download Resources</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mediaKit.map((item, idx) => (
              <Reveal key={item.title} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3}>
                <div className="flex items-center justify-between rounded-xl border border-border-gray bg-white p-6 transition-all hover:border-ice-blue hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ice-tint text-lg">{item.icon}</div>
                    <div>
                      <h3 className="text-sm font-semibold text-navy">{item.title}</h3>
                      <span className="text-xs text-gray-500">{item.size}</span>
                    </div>
                  </div>
                  <button className="rounded-md border border-border-gray bg-white px-4 py-2 text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white">
                    Download
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-[800px] px-6">
          <Reveal animation="fade-in">
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center">
              <h3 className="mb-3 font-heading text-xl text-white">Media Contact</h3>
              <p className="mb-4 text-sm text-gray-300">For press inquiries, interview requests, or media partnerships.</p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
                <span className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +91 98765 43210
                </span>
                <span className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  media@everestchamber.com
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PublicLayout>
  );
}
