"use client";

import Link from "next/link";
import { DashboardLayout } from "../../../components/DashboardLayout";

export default function SpotlightsPage() {
  const members = [
    {
      name: "Rajesh Mehta",
      role: "Founder & CEO, Mehta Infraprojects",
      industry: "Construction",
      description:
        "Rajesh built a multi-crore infrastructure firm from a single project in 2005, now delivering highways, bridges, and urban development across three states.",
      avatarGradient: "linear-gradient(135deg, #9E0B19, #7B0A14)",
      avatarText: "RM",
      industryBadge: "bg-[#FED7D7] text-[#9B2C2C]",
    },
    {
      name: "Dr. Priya Patel",
      role: "Managing Director, Surya Pharmaceuticals",
      industry: "Pharma",
      description:
        "A pharmaceutical leader driving affordable medicine manufacturing in India, Dr. Patel leads a 700-employee organization with WHO-GMP certified facilities.",
      avatarGradient: "linear-gradient(135deg, #507D9A, #2D5A7A)",
      avatarText: "PP",
      industryBadge: "bg-[#C6F6D5] text-[#22543D]",
    },
    {
      name: "Amit Verma",
      role: "Director of Technology, CloudBase Solutions",
      industry: "Technology",
      description:
        "Amit leads cloud innovation at a fast-growing SaaS company serving 200+ enterprise clients across Southeast Asia and the Middle East with AI-driven platforms.",
      avatarGradient: "linear-gradient(135deg, #11233B, #1A365D)",
      avatarText: "AV",
      industryBadge: "bg-[#E9D8FD] text-[#553C9A]",
    },
    {
      name: "Sneha Kapoor",
      role: "Founder, Kapoor Consulting Group",
      industry: "Consulting",
      description:
        "Sneha founded one of Delhi's most respected strategy consulting firms, advising Fortune 500 companies on market entry, digital transformation, and supply chain optimization.",
      avatarGradient: "linear-gradient(135deg, #7C3AED, #5B21B6)",
      avatarText: "SK",
      industryBadge: "bg-ice-tint text-ice-blue",
    },
    {
      name: "Vikram Singh Rathore",
      role: "Chairman, Singh Logistics & Supply Chain",
      industry: "Logistics",
      description:
        "From a single truck in 1998 to a 500-vehicle fleet operating across India and Nepal, Vikram's logistics empire is a story of grit, determination, and strategic vision.",
      avatarGradient: "linear-gradient(135deg, #B91C1C, #7F1D1D)",
      avatarText: "VS",
      industryBadge: "bg-[#FED7D7] text-[#9B2C2C]",
    },
    {
      name: "Arun Joshi",
      role: "CEO, Joshi Auto Components",
      industry: "Manufacturing",
      description:
        "Arun transformed his family's small workshop into a modern automotive components manufacturer supplying OEMs, employing 300+ skilled workers in Haridwar.",
      avatarGradient: "linear-gradient(135deg, #9E0B19, #11233B)",
      avatarText: "AJ",
      industryBadge: "bg-[#FEF3C7] text-[#92400E]",
    },
  ];

  return (
    <DashboardLayout activeItem="Spotlights">
      {/* Welcome Banner */}
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg border border-border-gray bg-white p-8 md:flex-row md:items-center">
        <div>
          <h2 className="mb-2 text-2xl text-navy">Member Spotlight</h2>
          <p className="text-sm text-gray-500">Celebrating the achievements and stories of our distinguished members.</p>
        </div>
      </div>

      {/* Featured Spotlight - Anjali Sharma */}
      <div className="mb-8">
        <div className="mb-4 block text-[10px] font-bold uppercase tracking-[0.15em] text-crimson">Featured Spotlight</div>
        <div className="overflow-hidden rounded-lg border border-border-gray bg-white">
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="relative flex gap-10 p-6"
          >
            <div className="absolute inset-0 bg-navy opacity-92"></div>
            {/* Person Photo */}
            <div className="relative z-10 flex h-35 w-35 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-3 border-white/20 bg-gradient-to-br from-crimson to-[#7B0A14]">
              <span className="font-heading text-3xl font-bold text-white">AS</span>
            </div>
            <div className="relative z-10 flex-1 text-white">
              <span className="mb-4 inline-block rounded-full bg-crimson px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                Featured Member
              </span>
              <h3 className="font-heading text-3xl text-white mb-1">Anjali Sharma</h3>
              <p className="mb-3 text-base font-medium text-gray-300">Managing Director, Himalaya Exports Pvt. Ltd.</p>
              <p className="mb-4 max-w-600 text-sm text-gray-300" style={{ lineHeight: 1.7 }}>
                A trailblazer in cross-border trade, Anjali has transformed Himalaya Exports from a small trading house into a premier export enterprise spanning textiles, organics, and handicrafts across 14 countries over two decades.
              </p>
              <div className="mb-5 flex gap-6">
                <div>
                  <div className="mb-1 text-[10px] uppercase tracking-[0.1em] text-gray-400">Industry</div>
                  <div className="text-sm font-semibold text-white">Export &amp; Trade</div>
                </div>
                <div>
                  <div className="mb-1 text-[10px] uppercase tracking-[0.1em] text-gray-400">Member Since</div>
                  <div className="text-sm font-semibold text-white">2021</div>
                </div>
                <div>
                  <div className="mb-1 text-[10px] uppercase tracking-[0.1em] text-gray-400">Location</div>
                  <div className="text-sm font-semibold text-white">Delhi, India</div>
                </div>
              </div>
              <Link
                href="/portal/spotlight/sample-member"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-crimson px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-crimson-dark"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Read Full Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Current Spotlights Grid */}
      <div>
        <div className="mb-4 block text-[10px] font-bold uppercase tracking-[0.15em] text-crimson">Current Spotlights</div>
        <h3 className="font-heading text-2xl text-navy mb-6">Spotlight Members</h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {members.map((member) => (
            <div key={member.name} className="overflow-hidden rounded-lg border border-border-gray bg-white">
              <div className="p-6">
                <div className="mb-3 flex items-start gap-4">
                  <div
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ background: member.avatarGradient }}
                  >
                    <span className="font-heading text-lg font-bold text-white">{member.avatarText}</span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex justify-between items-start gap-2">
                      <div className="font-heading text-base font-bold text-navy">{member.name}</div>
                    </div>
                    <div className="mb-1 text-xs text-gray-500">{member.role}</div>
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${member.industryBadge}`}
                    >
                      {member.industry}
                    </span>
                  </div>
                </div>
                <p className="mb-3 text-sm text-gray-600" style={{ lineHeight: 1.6 }}>
                  {member.description}
                </p>
                <Link
                  href="/portal/spotlight/sample-member"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ice-blue bg-transparent px-3 py-2 text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Read Full Story
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}