"use client";

import Link from "next/link";
import { DashboardLayout } from "../../../../components/DashboardLayout";

const spotlight = {
  name: "Anjali Sharma",
  title: "Transforming Cross-Border Trade Through Innovation",
  role: "Founder & CEO, Global Trade Solutions",
  industry: "Import & Export",
  memberSince: "2019",
  location: "New Delhi, India",
  bio: "Anjali Sharma is a seasoned entrepreneur with over 15 years of experience in international trade and logistics. As the Founder & CEO of Global Trade Solutions, she has been instrumental in simplifying cross-border commerce for SMEs across India and Nepal.",
  achievements: ["Led 200+ trade delegations between India and Nepal", "Recognized by FICCI for Women Entrepreneurship 2023", "Speaker at 10+ international trade forums", "Mentored 50+ women entrepreneurs"],
  services: ["Cross-border trade consulting", "Supply chain optimization", "Market entry strategy", "Regulatory compliance support"],
};

export default function SpotlightDetailPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout activeItem="Spotlights">
      <div className="rounded-lg border border-border-gray bg-white p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/portal/spotlights" className="text-crimson transition-colors hover:text-crimson-dark">Spotlights</Link>
          <span className="text-gray-400">/</span>
          <span className="font-medium text-navy">{spotlight.name}</span>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-navy via-[#0D1B2E] to-[#162D4A] px-6 py-10 text-white md:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(80,125,154,0.15)_0%,transparent_60%)]" />
          <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ice-blue to-navy text-2xl font-heading font-bold text-white">
              {spotlight.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">{spotlight.industry}</span>
                <span className="rounded-full bg-crimson/80 px-3 py-1 text-xs font-semibold text-white">Member</span>
              </div>
              <h1 className="mt-3 font-heading text-2xl text-white md:text-3xl">{spotlight.name}</h1>
              <p className="mt-1 text-sm text-gray-300">{spotlight.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { label: "Industry", value: spotlight.industry },
            { label: "Member Since", value: spotlight.memberSince },
            { label: "Location", value: spotlight.location },
            { label: "Membership", value: "Corporate" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-border-gray bg-ice-tint p-4 text-center">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">{stat.label}</div>
              <div className="mt-1 font-heading text-lg text-navy">{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <h3 className="mb-4 font-heading text-xl text-navy">About</h3>
            <p className="mb-6 text-base leading-[1.8] text-gray-700">{spotlight.bio}</p>

            <h3 className="mb-4 font-heading text-xl text-navy">Key Achievements</h3>
            <ul className="mb-8 space-y-2">
              {spotlight.achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-shrink-0 text-crimson"><polyline points="20 6 9 17 4 12"/></svg>
                  {a}
                </li>
              ))}
            </ul>

            <h3 className="mb-4 font-heading text-xl text-navy">Services</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {spotlight.services.map((s) => (
                <div key={s} className="rounded-lg border border-border-gray bg-ice-tint px-4 py-3 text-sm font-medium text-navy">{s}</div>
              ))}
            </div>
          </div>

          <aside>
            <div className="sticky top-[96px] rounded-xl border border-border-gray bg-white p-6">
              <h3 className="mb-4 border-b border-border-gray pb-4 font-heading text-lg text-navy">Contact {spotlight.name.split(" ")[0]}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>{spotlight.location}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span>anjali@globaltrade.example.com</span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <button className="w-full rounded-md bg-crimson px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-crimson-dark">Express Interest</button>
                <button className="w-full rounded-md border border-border-gray bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gray-50">Save Profile</button>
              </div>
              <div className="mt-6 border-t border-border-gray pt-4">
                <Link href="/portal/spotlights" className="text-sm font-semibold text-crimson transition-colors hover:text-crimson-dark">&larr; More Spotlights</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
}
