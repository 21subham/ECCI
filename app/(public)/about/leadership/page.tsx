"use client";

import Image from "next/image";
import Link from "next/link";
import { PublicLayout } from "../../../components/PublicLayout";
import { Reveal } from "../../../components/Reveal";

const executives = [
  {
    role: "President",
    name: "Yubraj Baral",
    image: "https://everestchamber.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-11-08-at-15.39.14_633f81df-219x300.jpg",
  },
  {
    role: "Vice President",
    name: "Rajesh Kumar Agrawal",
    image: "https://everestchamber.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-17-at-11.21.59_58bc53db-300x300.jpg",
  },
  {
    role: "General Secretary",
    name: "Bikash Pradhan",
    image: "https://everestchamber.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-17-at-09.09.13_b31642cf-222x300.jpg",
  },
  {
    role: "Treasurer",
    name: "Sunil Kumar Shrestha",
    image: "https://everestchamber.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-12-17-at-09.49.29_5b32c7d6-247x300.jpg",
  },
];

const chairs = [
  {
    name: "Anil Kumar Gupta",
    committee: "Trade & Commerce",
    image: "https://everestchamber.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-17-at-11.17.53_bcfe70d5-300x300.jpg",
  },
  {
    name: "Deepak Thapa",
    committee: "Tourism & Hospitality",
    image: "https://everestchamber.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-12-17-at-09.50.57_96660703-258x300.jpg",
  },
  {
    name: "Pramod Kumar Sharma",
    committee: "Technology & Innovation",
    image: "https://everestchamber.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-12-17-at-09.50.34_6adc9cf6-300x300.jpg",
  },
  {
    name: "Sunita Devi Shrestha",
    committee: "Cultural Affairs",
    image: "https://everestchamber.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-12-17-at-09.50.17_b79fb394-186x300.jpg",
  },
  {
    name: "Ritu Sharma",
    committee: "Women Empowerment",
    image: "https://everestchamber.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-12-17-at-09.56.08_936ed064-162x300.jpg",
  },
  {
    name: "Nischal Pradhan",
    committee: "Youth & Education",
    image: "https://everestchamber.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-12-17-at-10.01.20_02978cc9-256x300.jpg",
  },
];

const advisory = [
  {
    name: "Dr. Vikram Mehta",
    role: "Chairman, Mehta Group — 40+ years in infrastructure",
    image: "https://everestchamber.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-17-at-11.21.59_58bc53db-300x300.jpg",
  },
  {
    name: "Smt. Padma Shri",
    role: "Social entrepreneur — Women's empowerment",
    image: "https://everestchamber.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-12-17-at-09.50.34_6adc9cf6-300x300.jpg",
  },
  {
    name: "Mr. Arun Thapa",
    role: "Former diplomat — India-Nepal relations",
    image: "https://everestchamber.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-12-17-at-09.50.57_96660703-258x300.jpg",
  },
];

const ethics = [
  {
    name: "Justice (Retd.) Hari Prasad",
    role: "Chairman — Former Delhi High Court judge",
    image: "https://everestchamber.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-12-17-at-09.50.17_b79fb394-186x300.jpg",
  },
  {
    name: "CA. Rajesh Bansal",
    role: "Financial oversight — 25+ years in audit",
    image: "https://everestchamber.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-12-17-at-09.56.08_936ed064-162x300.jpg",
  },
  {
    name: "Adv. Priya Malhotra",
    role: "Legal ethics — Corporate law specialist",
    image: "https://everestchamber.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-12-17-at-10.01.20_02978cc9-256x300.jpg",
  },
];

const states = ["Delhi", "Maharashtra", "Karnataka", "Nepal"];

export default function LeadershipPage() {
  return (
    <PublicLayout activeNav="about">
      {/* Breadcrumb */}
      <div className="border-b border-border-gray bg-white py-4 pt-[88px]">
        <div className="mx-auto max-w-[1200px] px-6 text-sm text-gray-500">
          <Link href="/" className="text-gray-500 transition-colors hover:text-crimson">
            Home
          </Link>
          <span className="mx-2 text-gray-400">&rsaquo;</span>
          <Link href="/about" className="text-gray-500 transition-colors hover:text-crimson">
            About
          </Link>
          <span className="mx-2 text-gray-400">&rsaquo;</span>
          <span className="font-medium text-navy">Leadership</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-navy-deep-dark py-20 text-center text-white lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(80,125,154,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(158,11,25,0.08)_0%,transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <Reveal animation="fade-in">
            <h1 className="mb-4 font-heading text-3xl text-white md:text-4xl lg:text-5xl">
              Leadership &amp; <span className="text-crimson-light">Committees</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-lg text-white/70">
              Meet the dedicated leaders guiding ECCI&apos;s mission to foster cross-border commerce and strengthen the India-Nepal business corridor.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
              Our Leadership
            </span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Executive Committee</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              The elected officers leading ECCI&apos;s strategic direction and governance.
            </p>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {executives.map((exec, idx) => (
              <Reveal key={exec.name} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div className="overflow-hidden rounded-xl border border-border-gray bg-white text-center transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-[220px] overflow-hidden bg-gradient-to-br from-navy to-navy-light">
                    <Image
                      src={exec.image}
                      alt={exec.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-xs font-bold uppercase tracking-widest text-crimson">
                      {exec.role}
                    </div>
                    <div className="mb-2 font-heading text-lg text-navy">{exec.name}</div>
                    <span className="inline-block rounded-full bg-ice-tint px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-navy">
                      Executive
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Committee Chairs */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-ice-blue-light">
              Committees
            </span>
            <h2 className="mb-3 font-heading text-3xl text-white md:text-4xl">Business Committee Chairs</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-400">
              Subject-matter leaders driving initiatives across key industry verticals.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {chairs.map((chair, idx) => (
              <Reveal key={chair.name} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10">
                  <Image
                    src={chair.image}
                    alt={chair.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 flex-shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-heading text-base text-white">{chair.name}</div>
                    <div className="text-sm text-gray-400">{chair.committee}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
              Advisory
            </span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Advisory Board</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              Strategic guidance from industry veterans
            </p>
          </Reveal>
          <div className="mx-auto grid max-w-[900px] gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advisory.map((person, idx) => (
              <Reveal key={person.name} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div className="flex items-center gap-4 rounded-xl border border-border-gray bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={60}
                    height={60}
                    className="h-[60px] w-[60px] flex-shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-heading text-base text-navy">{person.name}</div>
                    <div className="text-sm text-gray-500">{person.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center" animation="fade-in">
            <Link
              href="/about/advisory-board"
              className="inline-flex items-center justify-center rounded-md border-2 border-ice-blue bg-transparent px-6 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-px hover:bg-navy hover:text-white"
            >
              View Full Advisory Board
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Ethics & Discipline Committee */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-ice-blue-light">
              Governance
            </span>
            <h2 className="mb-3 font-heading text-3xl text-white md:text-4xl">Ethics &amp; Discipline Committee</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-400">
              Upholding integrity and accountability
            </p>
          </Reveal>
          <div className="mx-auto grid max-w-[900px] gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ethics.map((person, idx) => (
              <Reveal key={person.name} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={60}
                    height={60}
                    className="h-[60px] w-[60px] flex-shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-heading text-base text-white">{person.name}</div>
                    <div className="text-sm text-gray-400">{person.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center" animation="fade-in">
            <Link
              href="/about/ethics-committee"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-white hover:text-navy"
            >
              View Full Committee
            </Link>
          </Reveal>
        </div>
      </section>

      {/* State Committees */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
              Presence
            </span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">State Committees</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              Our presence across India
            </p>
          </Reveal>
          <Reveal className="mb-8 flex flex-wrap justify-center gap-4" animation="fade-in">
            {states.map((state) => (
              <span
                key={state}
                className="rounded-full bg-crimson px-6 py-2.5 text-sm font-semibold text-white"
              >
                {state}
              </span>
            ))}
          </Reveal>
          <Reveal className="text-center" animation="fade-in">
            <Link
              href="/about/state-committee"
              className="inline-flex items-center justify-center rounded-md border-2 border-ice-blue bg-transparent px-6 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-px hover:bg-navy hover:text-white"
            >
              View All State Committees
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Join CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-crimson to-crimson-dark py-20 text-center text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <Reveal animation="fade-in">
            <h2 className="mb-4 font-heading text-3xl text-white md:text-4xl">Join a Committee</h2>
            <p className="mx-auto mb-8 max-w-[500px] text-lg text-white/85">
              Contribute your expertise and help shape the future of cross-border commerce. ECCI committees are open to all active members.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-white px-8 py-4 text-base font-semibold text-crimson transition-all hover:-translate-y-px hover:shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/membership/apply"
                className="rounded-md border-2 border-white/40 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-white hover:text-navy"
              >
                Become a Member
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PublicLayout>
  );
}
