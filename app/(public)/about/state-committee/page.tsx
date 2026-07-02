"use client";

import Link from "next/link";
import { useState } from "react";
import { PublicLayout } from "../../../components/PublicLayout";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Reveal } from "../../../components/Reveal";

interface StateData {
  name: string;
  mic: {
    name: string;
    city: string;
    phone: string;
    email: string;
  };
  members: string[];
}

const states: StateData[] = [
  {
    name: "Delhi",
    mic: {
      name: "Rajesh Kumar Agrawal",
      city: "New Delhi",
      phone: "+91 98101 23456",
      email: "rajesh.agrawal@everestchamber.com",
    },
    members: ["Vikram Mehta — Mehta Infrastructure", "Anita Sharma — Sharma Exports Pvt. Ltd.", "Rakesh Agarwal — Agarwal Trading Co."],
  },
  {
    name: "Maharashtra",
    mic: {
      name: "Anil Kumar Gupta",
      city: "Mumbai",
      phone: "+91 98202 34567",
      email: "anil.gupta@everestchamber.com",
    },
    members: ["Priya Kapoor — Kapoor Enterprises", "Suresh Reddy — Reddy & Sons", "Meena Patel — Patel Trading House"],
  },
  {
    name: "Karnataka",
    mic: {
      name: "Pramod Kumar Sharma",
      city: "Bengaluru",
      phone: "+91 98453 45678",
      email: "pramod.sharma@everestchamber.com",
    },
    members: ["Deepa Nair — Nair Tech Solutions", "Arvind Rao — Rao Industrial Corp.", "Lakshmi Iyer — Iyer Exports"],
  },
  {
    name: "Tamil Nadu",
    mic: {
      name: "Deepak Thapa",
      city: "Chennai",
      phone: "+91 98404 56789",
      email: "deepak.thapa@everestchamber.com",
    },
    members: ["Kavitha Sundaram — Sundaram Industries", "Rajan Menon — Menon Trading Co.", "Subramanian V. — V. Textiles"],
  },
  {
    name: "West Bengal",
    mic: {
      name: "Bikash Pradhan",
      city: "Kolkata",
      phone: "+91 98305 67890",
      email: "bikash.pradhan@everestchamber.com",
    },
    members: ["Amitava Das — Das Trading Corp.", "Suman Bose — Bose & Associates", "Rituparna Ghosh — Ghosh Enterprises"],
  },
  {
    name: "Gujarat",
    mic: {
      name: "Sunil Kumar Shrestha",
      city: "Ahmedabad",
      phone: "+91 98246 78901",
      email: "sunil.shrestha@everestchamber.com",
    },
    members: ["Mahesh Joshi — Joshi Chemicals", "Priti Shah — Shah Pharmaceuticals", "Nikhil Dave — Dave Engineering"],
  },
  {
    name: "Uttar Pradesh",
    mic: {
      name: "Nischal Pradhan",
      city: "Lucknow",
      phone: "+91 98397 89012",
      email: "nischal.pradhan@everestchamber.com",
    },
    members: ["Ashok Verma — Verma Industries", "Neelam Singh — Singh Enterprises", "Deepak Gupta — Gupta & Sons"],
  },
  {
    name: "Nepal",
    mic: {
      name: "Yubraj Baral",
      city: "Kathmandu",
      phone: "+977 98412 34567",
      email: "yubraj.baral@everestchamber.com",
    },
    members: ["Bishnu Rai — Rai Group of Companies", "Suman Gurung — Gurung Trading Pvt. Ltd.", "Anju Thapa — Thapa Exports"],
  },
];

export default function StateCommitteePage() {
  return (
    <PublicLayout activeNav="about">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "State Committee" }
      ]} />

      <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-[#0D1B2E] to-[#162D4A] py-20 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(80,125,154,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(158,11,25,0.08)_0%,transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-[800px] px-6">
          <h1 className="mb-4 font-heading text-4xl text-white md:text-5xl">
            State <span className="text-crimson-light">Committees</span>
          </h1>
          <p className="mx-auto max-w-[600px] text-lg text-white/70">
            ECCI's presence across Indian states and Nepal, ensuring local representation and grassroots engagement.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="mx-auto max-w-[720px] text-center text-lg leading-relaxed text-gray-600">
            ECCI maintains dedicated state-level committees to represent members in key regions across India and Nepal. Each committee is led by a Member-in-Charge who coordinates local initiatives, member engagement, and regional business development activities.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {states.map((state, idx) => (
              <Reveal key={state.name} animation="fade-in-up" delay={(idx % 4 + 1) as 1 | 2 | 3 | 4}>
                <StateCard state={state} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

function StateCard({ state }: { state: StateData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`rounded-xl border border-border-gray bg-white transition-all hover:shadow-lg`}>
      <div className="flex items-center justify-between rounded-t-xl bg-gradient-to-br from-navy to-[#1A3355] px-6 py-4">
        <div className="font-heading text-lg text-white">{state.name}</div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="rounded-full p-1 text-white/60 transition-colors hover:text-white"
          aria-label="Expand"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`h-5 w-5 transition-transform ${expanded ? "rotate-180" : ""}`}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ice-blue to-navy-light text-lg font-bold text-white">
            {state.mic.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
          </div>
          <div className="flex-1">
            <div className="mb-1 text-xs font-bold uppercase tracking-wider text-crimson">Member-in-Charge</div>
            <div className="mb-1 font-heading text-base text-navy">{state.mic.name}</div>
            <div className="mb-3 text-sm text-gray-500">{state.mic.city}</div>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-gray-400">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {state.mic.phone}
              </div>
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-gray-400">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {state.mic.email}
              </div>
            </div>
            <Link
              href="/about/state-committee/sample-member"
              className="mt-3 inline-block text-sm font-semibold text-ice-blue"
            >
              View Full Profile →
            </Link>
          </div>
        </div>
        <div className="mt-4 border-t border-border-gray pt-4">
          <div className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">Committee Members</div>
          <div className="flex flex-col gap-2">
            {state.members.map((member, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                {member}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}