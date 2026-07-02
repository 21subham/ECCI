"use client";

import Link from "next/link";
import { PublicLayout } from "../../../components/PublicLayout";
import { Reveal } from "../../../components/Reveal";

const principles = [
  { title: "Integrity", desc: "We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty." },
  { title: "Accountability", desc: "Every member and committee is accountable for their actions and decisions." },
  { title: "Fairness", desc: "We treat all members equitably, without bias or discrimination." },
  { title: "Respect", desc: "We foster a culture of mutual respect and dignity among all stakeholders." },
  { title: "Compliance", desc: "We adhere to all applicable laws, regulations, and internal policies." },
  { title: "Confidentiality", desc: "We protect sensitive information shared by members in good faith." },
];

export default function EthicsCommitteePage() {
  return (
    <PublicLayout activeNav="about">
      <div className="relative overflow-hidden bg-gradient-to-br from-navy via-[#0D1B2E] to-[#162D4A] pt-[88px] pb-20 text-center text-white lg:pt-[100px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(80,125,154,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(158,11,25,0.08)_0%,transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="mb-4 flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link href="/" className="text-crimson transition-colors hover:text-crimson-light">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/about" className="text-crimson transition-colors hover:text-crimson-light">About</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Ethics &amp; Discipline Committee</span>
          </div>
          <Reveal animation="fade-in">
            <h1 className="font-heading text-3xl text-white md:text-4xl lg:text-5xl">Ethics &amp; Discipline Committee</h1>
            <p className="mx-auto mt-4 max-w-[600px] text-lg text-white/70">Upholding integrity and accountability across ECCI.</p>
          </Reveal>
        </div>
      </div>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">Governance</span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Our Committee</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">Dedicated to maintaining the highest standards of conduct and ethics.</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Justice (Retd.) Hari Prasad", role: "Chairman — Former Delhi High Court judge", gradient: "from-navy to-ice-blue" },
              { name: "CA. Rajesh Bansal", role: "Financial oversight — 25+ years in audit", gradient: "from-crimson to-navy" },
              { name: "Adv. Priya Malhotra", role: "Legal ethics — Corporate law specialist", gradient: "from-ice-blue to-navy" },
            ].map((person, idx) => (
              <Reveal key={person.name} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3}>
                <div className="rounded-xl border border-border-gray bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${person.gradient} font-heading text-sm font-bold text-white`}>
                      {person.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <div className="font-heading text-base text-navy">{person.name}</div>
                      <div className="text-sm text-gray-500">{person.role}</div>
                    </div>
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
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">Code of Conduct</span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Our Principles</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, idx) => (
              <Reveal key={p.title} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3}>
                <div className="flex items-start gap-4 rounded-xl border border-border-gray bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ice-tint text-crimson">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-body text-base font-semibold text-navy">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-crimson to-crimson-dark py-20 text-center text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <Reveal animation="fade-in">
            <h2 className="mb-4 font-heading text-3xl text-white md:text-4xl">Report a Concern</h2>
            <p className="mx-auto mb-8 max-w-[500px] text-lg text-white/85">
              If you witness unethical conduct, please reach out to the Ethics Committee.
            </p>
            <div className="mx-auto mb-8 max-w-[400px] rounded-xl border border-white/20 bg-white/10 p-6 text-center">
              <div className="text-sm text-white/70">Email the Committee</div>
              <div className="mt-1 font-heading text-lg text-white">ethics@everestchamber.com</div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="rounded-md bg-white px-8 py-4 text-base font-semibold text-crimson transition-all hover:-translate-y-px hover:shadow-lg">Contact Us</Link>
              <Link href="/membership/apply" className="rounded-md border-2 border-white/40 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-white hover:text-navy">Become a Member</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PublicLayout>
  );
}
