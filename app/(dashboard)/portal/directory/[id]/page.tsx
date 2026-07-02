"use client";

import Link from "next/link";
import { DashboardLayout } from "../../../../components/DashboardLayout";

const business = {
  name: "Everest Hospitality Group",
  slug: "everest-hospitality-group",
  industry: "Hospitality & Tourism",
  tier: "Corporate Member",
  memberSince: "Jan 2020",
  location: "New Delhi, India",
  website: "www.everesthospitality.example.com",
  phone: "+91 98765 43210",
  email: "info@everesthospitality.example.com",
  address: "D-71C, 3rd Floor, Vishwakarma Colony, New Delhi – 110044",
  description: "Everest Hospitality Group specializes in luxury accommodations, event management, and tourism services across India and Nepal. With over 15 years of experience, we have established ourselves as a leading hospitality brand in the region.",
  products: ["Luxury Hotels & Resorts", "Conference & Event Venues", "Tour Packages", "Travel Consulting"],
  services: ["Corporate Event Management", "Wedding Planning", "Airport Transfers", "Visa Assistance"],
};

export default function DirectoryDetailPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout activeItem="Directory">
      <div className="rounded-lg border border-border-gray bg-white p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/directory" className="text-crimson transition-colors hover:text-crimson-dark">Directory</Link>
          <span className="text-gray-400">/</span>
          <span className="font-medium text-navy">{business.name}</span>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-navy via-[#0D1B2E] to-[#162D4A] px-6 py-10 text-white md:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(80,125,154,0.15)_0%,transparent_60%)]" />
          <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ice-blue to-navy">
              <span className="font-heading text-2xl font-bold text-white">EH</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">{business.industry}</span>
                <span className="rounded-full bg-crimson/80 px-3 py-1 text-xs font-semibold text-white">{business.tier}</span>
              </div>
              <h1 className="mt-3 font-heading text-2xl text-white md:text-3xl">{business.name}</h1>
              <p className="mt-1 text-sm text-gray-300">Member since {business.memberSince}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <h3 className="mb-4 font-heading text-xl text-navy">About</h3>
            <p className="mb-8 text-base leading-[1.8] text-gray-700">{business.description}</p>

            <h3 className="mb-4 font-heading text-xl text-navy">Products &amp; Services</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-border-gray bg-ice-tint p-5">
                <h4 className="mb-2 text-sm font-semibold text-navy">Products</h4>
                <ul className="space-y-2">
                  {business.products.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-shrink-0 text-crimson"><polyline points="20 6 9 17 4 12"/></svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border-gray bg-ice-tint p-5">
                <h4 className="mb-2 text-sm font-semibold text-navy">Services</h4>
                <ul className="space-y-2">
                  {business.services.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-shrink-0 text-crimson"><polyline points="20 6 9 17 4 12"/></svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside>
            <div className="sticky top-[96px] rounded-xl border border-border-gray bg-white p-6">
              <h3 className="mb-4 border-b border-border-gray pb-4 font-heading text-lg text-navy">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>{business.address}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>{business.phone}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span>{business.email}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  <a href={`https://${business.website}`} target="_blank" rel="noreferrer" className="text-ice-blue hover:underline">{business.website}</a>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <button className="w-full rounded-md bg-crimson px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-crimson-dark">Express Interest</button>
                <button className="w-full rounded-md border border-border-gray bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gray-50">Save Profile</button>
              </div>
              <div className="mt-6 border-t border-border-gray pt-4">
                <Link href="/directory" className="text-sm font-semibold text-crimson transition-colors hover:text-crimson-dark">&larr; Back to Directory</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
}
