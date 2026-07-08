"use client";

import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";
import { Reveal } from "../../components/Reveal";

const directoryListings = [
  { initials: "EH", name: "Everest Hospitality Group", location: "New Delhi, India", industry: "Hospitality", tier: "Corporate" },
  { initials: "HT", name: "Himalayan Trading Co.", location: "Kathmandu, Nepal", industry: "Trading", tier: "Distinguished" },
  { initials: "DH", name: "DHL Express Nepal", location: "Kathmandu, Nepal", industry: "Logistics", tier: "Patron" },
  { initials: "NI", name: "Nepal Investment Bank", location: "Kathmandu, Nepal", industry: "Finance", tier: "Corporate" },
  { initials: "DT", name: "Delhi Tourism Board", location: "New Delhi, India", industry: "Tourism", tier: "Associate" },
  { initials: "TS", name: "TechServe Solutions", location: "Mumbai, India", industry: "Technology", tier: "Specialist" },
  { initials: "NP", name: "Nepal Pashmina Exports", location: "Pokhara, Nepal", industry: "Textiles", tier: "General" },
  { initials: "AI", name: "Axis Insurance Brokers", location: "New Delhi, India", industry: "Finance", tier: "Corporate" },
];

export default function DirectoryPage() {
  return (
    <PublicLayout activeNav="directory">
      <section className="bg-gradient-to-br from-navy to-navy-dark text-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal animation="fade-in">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.15em] text-gray-400">Find Businesses</span>
            <h1 className="mb-3 font-heading text-3xl text-white md:text-4xl lg:text-[3rem]">
              E-Business Directory
            </h1>
            <p className="max-w-[600px] text-base text-gray-300">
              Browse ECCI member companies across diverse industries. Connect with verified businesses from India, Nepal, and beyond.
            </p>
          </Reveal>

          <div className="mt-6 flex max-w-[600px] gap-3">
            <input type="text" className="flex-1 rounded-md border border-border-gray bg-white/95 px-4 py-2 text-sm" placeholder="Search by company name, industry, or keyword..." />
            <button className="rounded-md bg-crimson px-6 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark">Search</button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">Product / Service</label>
              <select className="rounded-md border border-border-gray bg-white px-3 py-2 text-sm text-navy">
                <option>All Categories</option>
                <option>Hospitality</option>
                <option>Finance &amp; Banking</option>
                <option>Technology</option>
                <option>Trading &amp; Commerce</option>
                <option>Consulting</option>
                <option>Logistics &amp; Transport</option>
                <option>Tourism &amp; Travel</option>
                <option>Manufacturing</option>
                <option>Education</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">Company Name</label>
              <input type="text" className="rounded-md border border-border-gray bg-white px-3 py-2 text-sm" placeholder="Type company name..." />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">Member Name</label>
              <input type="text" className="rounded-md border border-border-gray bg-white px-3 py-2 text-sm" placeholder="Search by member..." />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">Location</label>
              <select className="rounded-md border border-border-gray bg-white px-3 py-2 text-sm text-navy">
                <option>All Locations</option>
                <option>New Delhi, India</option>
                <option>Kathmandu, Nepal</option>
                <option>Mumbai, India</option>
                <option>Pokhara, Nepal</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm text-gray-500">Showing 1–8 of 128 members</span>
            <div className="flex gap-2">
              <button className="flex h-9 w-9 items-center justify-center rounded-md border border-border-gray bg-white p-2 transition-colors hover:border-navy">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-md border border-border-gray bg-white p-2 transition-colors hover:border-navy">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {directoryListings.map((listing, idx) => (
              <Reveal key={idx} animation="fade-in-up" delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="flex gap-5 rounded-lg border border-border-gray bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-18 w-18 flex-shrink-0 items-center justify-center rounded-lg bg-ice-tint font-heading text-xl font-bold text-navy">
                    {listing.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-body text-base font-semibold text-navy mb-1">{listing.name}</h3>
                    <p className="mb-3 flex items-center text-sm text-gray-500">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1 h-3.5 w-3.5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {listing.location}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="inline-block rounded-full bg-ice-tint px-2.5 py-0.5 text-[11px] font-semibold text-ice-blue">{listing.industry}</span>
                      <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${listing.tier === "Patron" ? "bg-navy text-white" : "bg-warning-bg text-warning-text"}`}>{listing.tier}</span>
                    </div>
                    <Link href="/directory/sample-business" className="btn btn--outline btn--sm">View Profile</Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-2">
            <Link href="#" className="flex items-center gap-1 rounded-md border border-border-gray bg-white px-4 py-2 text-sm font-medium text-gray-400 opacity-40">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Prev
            </Link>
            <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-md bg-crimson text-sm font-semibold text-white">1</Link>
            <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-md border border-border-gray bg-white text-sm font-medium text-navy">2</Link>
            <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-md border border-border-gray bg-white text-sm font-medium text-navy">3</Link>
            <Link href="#" className="flex items-center gap-1 rounded-md border border-border-gray bg-white px-4 py-2 text-sm font-medium text-navy">
              Next
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}