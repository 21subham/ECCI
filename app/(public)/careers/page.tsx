"use client";

import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";
import { Reveal } from "../../components/Reveal";
import { Counter } from "../../components/Counter";
import { useParallax } from "../../hooks/useScrollEffects";
import { useRef } from "react";

const positions = [
  { title: "Membership Relations Executive", location: "New Delhi", type: "Full-time", posted: "Jul 1, 2026" },
  { title: "Event Coordinator", location: "Kathmandu", type: "Full-time", posted: "Jun 25, 2026" },
  { title: "Digital Content Specialist", location: "Remote", type: "Contract", posted: "Jun 20, 2026" },
  { title: "Financial Analyst", location: "New Delhi", type: "Full-time", posted: "Jun 15, 2026" },
];

const steps = [
  { num: "1", title: "Submit Application", desc: "Send your CV and cover letter to careers@everestchamber.com with the position title in the subject line." },
  { num: "2", title: "Initial Screening", desc: "Our HR team reviews applications and shortlists candidates within 5–7 business days." },
  { num: "3", title: "Interview & Selection", desc: "Shortlisted candidates are invited for a virtual or in-person interview with the hiring manager." },
];

export default function CareersPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  useParallax(heroRef, true);

  return (
    <PublicLayout activeNav="about">
      <section ref={heroRef} className="relative flex min-h-[500px] items-center justify-center overflow-hidden pt-[72px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(17,35,59,0.85) 0%, rgba(17,35,59,0.85) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=500&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-16 pb-12">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="text-crimson transition-colors hover:text-crimson-light">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Careers</span>
          </div>
          <Reveal animation="fade-in">
            <h1 className="font-heading text-3xl text-white md:text-4xl lg:text-5xl">Careers at ECCI</h1>
            <p className="mx-auto mt-4 max-w-[600px] text-lg text-white/70">
              Join our team and help shape the future of cross-border commerce.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-16 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">Our Culture</span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Work That Matters</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              At ECCI, we believe in empowering our team to drive real impact for businesses across India and Nepal.
            </p>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: "🤝", title: "Collaborative", desc: "Work alongside passionate professionals in a supportive, team-first environment." },
              { icon: "🌍", title: "Global Impact", desc: "Contribute to initiatives that shape cross-border trade and economic growth." },
              { icon: "🚀", title: "Growth-Oriented", desc: "Continuous learning, training programs, and clear career progression paths." },
            ].map((item, idx) => (
              <Reveal key={item.title} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3}>
                <div className="rounded-xl border border-border-gray bg-white p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-ice-tint text-2xl">{item.icon}</div>
                  <h3 className="mb-3 text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ice-tint py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">Open Positions</span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Join Our Team</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              Explore current openings and find your place at ECCI.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {positions.map((pos, idx) => (
              <Reveal key={pos.title} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3}>
                <div className="rounded-xl border border-border-gray bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-navy">{pos.title}</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                          {pos.location}
                        </span>
                        <span className="rounded-full bg-ice-tint px-2.5 py-0.5 text-xs font-semibold text-ice-blue">{pos.type}</span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">Posted {pos.posted}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-border-gray pt-4">
                    <span className="text-sm text-gray-500">ECCCI</span>
                    <Link href="mailto:careers@everestchamber.com" className="rounded-md bg-crimson px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-crimson-dark">Apply Now</Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">Process</span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Application Process</h2>
          </Reveal>
          <div className="flex flex-col items-center justify-center gap-0 md:flex-row">
            {steps.map((s, idx) => (
              <div key={s.num} className="flex items-center">
                <Reveal animation="fade-in" delay={(idx + 1) as 1 | 2 | 3}>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-crimson font-heading text-2xl font-bold text-white">{s.num}</div>
                    <h3 className="mb-2 text-lg font-semibold text-navy">{s.title}</h3>
                    <p className="mx-auto max-w-[240px] text-sm text-gray-600">{s.desc}</p>
                  </div>
                </Reveal>
                {idx < steps.length - 1 && (
                  <div className="mx-6 hidden h-0.5 w-12 bg-border-gray md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ice-tint py-12">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="rounded-xl border border-border-gray bg-white p-8 text-center">
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-gray-500">Equal Opportunity</span>
            <h3 className="mb-3 font-heading text-xl text-navy">ECCI is an Equal Opportunity Employer</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              We celebrate diversity and are committed to creating an inclusive environment for all employees. All qualified applicants will receive consideration for employment without regard to race, color, religion, gender, national origin, disability, or age.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-[600px] rounded-xl border border-white/10 bg-white/5 p-8 text-center">
            <h3 className="mb-3 font-heading text-xl text-white">Have Questions?</h3>
            <p className="mb-4 text-sm text-gray-400">Reach out to our HR team for any queries about open positions or the application process.</p>
            <Link href="mailto:careers@everestchamber.com" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-px hover:shadow-lg">
              Contact HR
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
