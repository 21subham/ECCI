"use client";

import Link from "next/link";
import { PublicLayout } from "../../../components/PublicLayout";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Reveal } from "../../../components/Reveal";

const advisoryMembers = [
  {
    name: "Dr. Vikram Mehta",
    title: "Chairman, Mehta Group",
    expertise: "Infrastructure Development",
    bio: "40+ years in infrastructure development. Pioneering large-scale projects across India and Nepal, driving regional connectivity and economic growth.",
  },
  {
    name: "Smt. Padma Shri",
    title: "Social Entrepreneur",
    expertise: "Women's Empowerment",
    bio: "Social entrepreneur and women's empowerment advocate. Championing inclusive economic participation across the India-Nepal corridor.",
  },
  {
    name: "Mr. Arun Thapa",
    title: "Former Diplomat",
    expertise: "India-Nepal Relations",
    bio: "Former diplomat with deep expertise in India-Nepal bilateral relations. Navigating trade policy and diplomatic channels for business facilitation.",
  },
  {
    name: "Dr. Meera Sharma",
    title: "Economist",
    expertise: "Trade Policy",
    bio: "Economist and trade policy specialist. Advising on macro-economic trends, bilateral trade agreements, and investment climate analysis.",
  },
  {
    name: "Mr. Ramesh Shrestha",
    title: "Banking Veteran",
    expertise: "Cross-Border Finance",
    bio: "Banking veteran specializing in cross-border finance and remittance corridors. Guiding ECCI's financial services partnerships and payment systems.",
  },
  {
    name: "Mrs. Sunita Verma",
    title: "Legal Luminary",
    expertise: "Corporate Governance",
    bio: "Legal luminary specializing in corporate governance. Ensuring ECCI maintains the highest standards of regulatory compliance and ethical conduct.",
  },
];

export default function AdvisoryBoardPage() {
  return (
    <PublicLayout activeNav="about">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Advisory Board" }
      ]} />

      <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-navy-deep-dark py-20 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(80,125,154,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(158,11,25,0.08)_0%,transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-[800px] px-6">
          <h1 className="mb-4 font-heading text-4xl text-white md:text-5xl">
            Advisory <span className="text-crimson-light">Board</span>
          </h1>
          <p className="mx-auto max-w-[600px] text-lg text-white/70">
            Strategic guidance from industry leaders shaping ECCI's vision for cross-border commerce.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="mx-auto max-w-[720px] text-center text-lg leading-relaxed text-gray-600">
            The ECCI Advisory Board comprises distinguished leaders from business, diplomacy, academia, and civil society. They provide strategic counsel to the Executive Committee, drawing on decades of experience to guide ECCI's initiatives and ensure long-term organizational health. Members serve a renewable three-year tenure.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {advisoryMembers.map((member, idx) => (
              <Reveal key={member.name} animation="fade-in-up" delay={(idx % 4 + 1) as 1 | 2 | 3 | 4}>
                <div className="flex flex-col items-center rounded-xl border border-border-gray bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="h-25 w-25 rounded-full bg-gradient-to-br from-ice-blue to-navy-light flex items-center justify-center text-xl font-bold text-white mb-2 mt-6">
                    {member.name.split(" ").map(w => w[0] || w.split(".")[0][0]).join("").replace(/\./g, "").slice(0, 2)}
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="mb-1 font-heading text-lg text-navy">{member.name}</h3>
                    <div className="mb-3 text-sm font-semibold text-crimson">{member.title}</div>
                    <span className="inline-block rounded-full bg-ice-tint px-3 py-1 text-[11px] font-semibold text-navy mb-3">
                      {member.expertise}
                    </span>
                    <p className="text-sm leading-relaxed text-gray-500">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-crimson to-crimson-dark py-20 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <h2 className="mb-4 font-heading text-3xl text-white">Join Our Advisory Board</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/85">
            We are always looking for distinguished leaders who share our vision for cross-border economic cooperation. Express your interest to contribute strategic guidance.
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
        </div>
      </section>
    </PublicLayout>
  );
}