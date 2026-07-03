"use client";

import Link from "next/link";
import { DashboardLayout } from "../../../components/DashboardLayout";
import { useState } from "react";

export default function AGMPage() {
  const [activeTab, setActiveTab] = useState("Notices");

  return (
    <DashboardLayout activeItem="AGM Notices">
      {/* Welcome Banner */}
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg border border-border-gray bg-white p-8 md:flex-row md:items-center">
        <div>
          <h2 className="mb-2 text-2xl text-navy">AGM &amp; Governance Notices</h2>
          <p className="text-sm text-gray-500">Stay informed about annual general meetings, board resolutions, and governance updates.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-2">
        {["Notices", "Minutes", "Financial Reports", "Elections"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-xs font-semibold transition-all ${
              activeTab === tab
                ? "bg-crimson text-white"
                : "border-2 border-ice-blue bg-transparent text-navy hover:bg-navy hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* AGM Notice 1 — Upcoming */}
      <div className="mb-6 overflow-hidden rounded-lg border border-border-gray bg-white">
        <div className="flex items-start justify-between gap-4 border-b border-border-gray px-6 py-5">
          <div>
            <div className="mb-1 font-heading text-lg font-bold text-navy">Annual General Meeting 2026</div>
            <div className="text-sm text-gray-500">February 28, 2026 &middot; 10:00 AM &middot; ECCI Headquarters, New Delhi</div>
          </div>
          <span className="inline-block rounded-full bg-success-bg px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-success-text">
            Upcoming
          </span>
        </div>
        <div className="p-6">
          <p className="mb-4 text-sm text-gray-600" style={{ lineHeight: 1.7 }}>
            Notice is hereby given that the Annual General Meeting of the Everest Chamber of Commerce and Industries will be held on February 28, 2026. The agenda includes review of annual financial statements, election of board members, and approval of the 2026 strategic plan.
          </p>
          <div className="flex gap-3">
            <Link
              href="/portal/agm/sample-notice"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-crimson px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-crimson-dark"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View Full Notice
            </Link>
            <button className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* AGM Notice 2 — Completed */}
      <div className="mb-6 overflow-hidden rounded-lg border border-border-gray bg-white">
        <div className="flex items-start justify-between gap-4 border-b border-border-gray px-6 py-5">
          <div>
            <div className="mb-1 font-heading text-lg font-bold text-navy">Extraordinary General Meeting</div>
            <div className="text-sm text-gray-500">January 15, 2026 &middot; 2:00 PM &middot; Virtual (Zoom)</div>
          </div>
          <span className="inline-block rounded-full bg-gray-200 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-gray-600">
            Completed
          </span>
        </div>
        <div className="p-6">
          <p className="mb-4 text-sm text-gray-600" style={{ lineHeight: 1.7 }}>
            The Extraordinary General Meeting was convened to address urgent amendments to the chamber bylaws regarding digital membership provisions and virtual voting procedures. All resolutions were passed with a two-thirds majority.
          </p>
          <div className="flex gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              View Minutes
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* AGM Notice 3 — Published */}
      <div className="mb-6 overflow-hidden rounded-lg border border-border-gray bg-white">
        <div className="flex items-start justify-between gap-4 border-b border-border-gray px-6 py-5">
          <div>
            <div className="mb-1 font-heading text-lg font-bold text-navy">Board Meeting Minutes — Q4 2025</div>
            <div className="text-sm text-gray-500">December 20, 2025 &middot; ECCI Board Room, New Delhi</div>
          </div>
<span className="inline-block rounded-full bg-info-bg px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-info-text">
             Published
           </span>
        </div>
        <div className="p-6">
          <p className="mb-4 text-sm text-gray-600" style={{ lineHeight: 1.7 }}>
            The Q4 2025 board meeting covered quarterly financial review, membership growth targets, upcoming trade delegation schedules, and the proposed expansion of the ECCI resource center. Key decisions include approval of two new bilateral trade agreements.
          </p>
          <div className="flex gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              View Document
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-xs font-semibold text-navy transition-all hover:bg-navy hover:text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-8 flex gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-crimson text-sm font-semibold text-white">
          1
        </span>
        <a
          href="#"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border-gray text-sm font-medium text-gray-600 transition-all hover:border-gray-400"
        >
          2
        </a>
        <a
          href="#"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border-gray text-sm font-medium text-gray-600 transition-all hover:border-gray-400"
        >
          3
        </a>
      </div>
    </DashboardLayout>
  );
}