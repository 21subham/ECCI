"use client";

import Image from "next/image";
import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";
import { Reveal } from "../../components/Reveal";
import { Counter } from "../../components/Counter";

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Integrity",
    desc: "Uncompromising ethical standards in all our dealings, ensuring trust and transparency with members and partners.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Collaboration",
    desc: "Fostering partnerships across borders, industries, and communities to create shared prosperity and growth.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Innovation",
    desc: "Embracing new ideas and technologies to provide members with cutting-edge tools, insights, and market access.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Inclusivity",
    desc: "Welcoming businesses of all sizes — from startups to enterprises — ensuring every voice is heard and valued.",
  },
];

const objectives = [
  {
    num: "01",
    title: "Comprehensive Support",
    desc: "Provide suitable business information and support, including legal, financial, technical, technological, and moral assistance to members.",
  },
  {
    num: "02",
    title: "Networking Opportunities",
    desc: "Organize business seminars, cultural programs, and religious festivals to foster cordial relations among members.",
  },
  {
    num: "03",
    title: "Dispute Resolution",
    desc: "Assist members in resolving commercial disputes through arbitration and enforce decisions via established panels.",
  },
  {
    num: "04",
    title: "Policy Advocacy",
    desc: "Act as a communication bridge between members and government authorities, trade associations, and international chambers of commerce.",
  },
];

const stats = [
  { target: 500, suffix: "+", label: "Active Members" },
  { target: 15, suffix: "+", label: "Countries Reached" },
  { target: 11, suffix: "", label: "Indian States" },
  { target: 50, suffix: "+", label: "Events Hosted" },
];

export default function AboutPage() {
  return (
    <PublicLayout activeNav="about">
      {/* Hero */}
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden pt-[72px]">
        <div className="absolute inset-0 bg-[url('https://everestchamber.com/wp-content/uploads/2025/01/Seminar5.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 mx-auto max-w-[800px] px-6 py-24 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.15em] text-gray-300">
            About Us
          </span>
          <h1 className="mb-6 font-heading text-4xl text-white md:text-5xl lg:text-[3.75rem]">
            About ECCI
          </h1>
          <p className="mx-auto max-w-[600px] text-lg leading-relaxed text-gray-300">
            A global federation of businesses and industries headquartered in India, fostering opportunities across diverse fields since 2008.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal animation="fade-in">
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
                Who We Are
              </span>
              <h2 className="mb-6 font-heading text-3xl text-navy md:text-4xl">
                Everest Chamber of Commerce and Industries
              </h2>
              <p className="mb-4 leading-[1.8] text-gray-600">
                At Everest Chamber of Commerce and Industries (ECCI), we are a global federation of businesses and industries headquartered in India. Our mission is to foster opportunities across diverse fields and industries, empowering our members to thrive in the competitive global market.
              </p>
              <p className="mb-4 leading-[1.8] text-gray-600">
                Through training, seminars, workshops, trade fairs, and more, we equip businesses with the tools they need to explore new possibilities and achieve growth.
              </p>
              <p className="leading-[1.8] text-gray-600">
                ECCI is a dedicated institution offering its members comprehensive technical, legal, and other essential support, helping them build a strong foundation at the local level while expanding their presence globally.
              </p>
            </Reveal>
            <Reveal animation="fade-in" delay={2}>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="https://everestchamber.com/wp-content/uploads/2025/01/Seminar7-e1742635404870.jpg"
                  alt="ECCI Seminar Event"
                  width={600}
                  height={400}
                  className="h-[400px] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-ice-blue-light">
              Our Purpose
            </span>
            <h2 className="font-heading text-3xl text-white md:text-4xl">Mission &amp; Vision</h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal animation="fade-in-up" delay={1}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-8">
                <h3 className="mb-4 font-heading text-2xl text-white">Our Mission</h3>
                <p className="leading-[1.7] text-gray-400">
                  To cultivate a successful and respected business community rooted in ethical values. We believe in the power of hard work, networking, value-addition, invention, and innovation to grow together in the global market while maintaining a strong foundation locally.
                </p>
              </div>
            </Reveal>
            <Reveal animation="fade-in-up" delay={2}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-8">
                <h3 className="mb-4 font-heading text-2xl text-white">Our Vision</h3>
                <p className="leading-[1.7] text-gray-400">
                  To be the most trusted, influential, and digitally advanced Chamber of Commerce, recognized globally as the definitive gateway to domestic and regional market opportunities. We empower businesses to achieve sustainable success through collaboration, innovation, and integrity.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Aims & Objectives */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
              What We Do
            </span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Aims &amp; Objectives</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              Our core objectives drive everything we do at ECCI.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {objectives.map((obj, idx) => (
              <Reveal key={obj.num} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div className="flex gap-4 rounded-xl border border-border-gray bg-white p-6 transition-all hover:border-ice-blue hover:shadow-lg">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-crimson font-heading text-sm font-bold text-white">
                    {obj.num}
                  </div>
                  <div>
                    <h4 className="mb-2 font-body text-base font-semibold text-navy">{obj.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-600">{obj.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognitions */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-8 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-ice-blue-light">
              Recognition
            </span>
            <h2 className="mb-3 font-heading text-3xl text-white md:text-4xl">Awards &amp; Recognitions</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-400">
              ECCI has been recognized for excellence in trade facilitation and bilateral commerce.
            </p>
          </Reveal>
          <Reveal className="text-center" animation="fade-in">
            <Link
              href="/awards"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-white hover:text-navy"
            >
              View Our Awards
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-8 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
              Transparency
            </span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Financial Transparency</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              We maintain complete financial transparency with yearly ITR filings and audit reports.
            </p>
          </Reveal>
          <Reveal className="text-center" animation="fade-in">
            <Link
              href="/financials"
              className="inline-flex items-center justify-center rounded-md bg-crimson px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg"
            >
              View Financial Statements
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Our Partners */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-8 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-ice-blue-light">
              Partnerships
            </span>
            <h2 className="mb-3 font-heading text-3xl text-white md:text-4xl">Our Partners</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-400">
              ECCI works with leading organizations across India and Nepal.
            </p>
          </Reveal>
          <Reveal className="text-center" animation="fade-in">
            <Link
              href="/about/partners"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-white hover:text-navy"
            >
              View Partners
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat, idx) => (
              <Reveal key={stat.label} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div className="p-8">
                  <div className="mb-2 font-heading text-4xl font-bold text-white">
                    <Counter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-medium uppercase tracking-wider text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 text-center">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal animation="fade-in">
            <h2 className="mb-4 font-heading text-3xl text-navy md:text-4xl">Join the ECCI Community</h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-gray-600">
              Become part of a global network driving economic progress and policy change across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/membership/apply"
                className="rounded-md bg-crimson px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg"
              >
                Become a Member
              </Link>
              <Link
                href="/about/leadership"
                className="rounded-md border-2 border-ice-blue bg-transparent px-8 py-4 text-base font-semibold text-navy transition-all hover:-translate-y-px hover:bg-navy hover:text-white"
              >
                View Leadership
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ice-tint py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
              Our Values
            </span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">What Drives Us</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              The principles that guide every initiative we undertake.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((item, idx) => (
              <Reveal key={item.title} animation="fade-in" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div className="rounded-xl border border-border-gray bg-white p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-ice-tint text-crimson">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 font-body text-base font-semibold text-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </PublicLayout>
  );
}
