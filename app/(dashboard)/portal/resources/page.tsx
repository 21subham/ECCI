"use client";

import { DashboardLayout } from "../../../components/DashboardLayout";
import { useState } from "react";

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [category, setCategory] = useState("All Categories");

  const resources = [
    {
      title: "ECCI Membership Guide 2026",
      category: "Guide",
      description: "Complete guide to ECCI membership tiers, benefits, application process, and renewal procedures for 2026.",
      size: "2.4 MB",
    },
    {
      title: "Trade Policy Brief",
      category: "Policy",
      description: "Analysis of current India-Nepal trade policies, tariff structures, and recommended advocacy positions for chamber members.",
      size: "1.8 MB",
    },
    {
      title: "Nepal-India Trade Corridor Report",
      category: "Report",
      description: "Comprehensive assessment of the India-Nepal trade corridor including logistics infrastructure, customs procedures, and growth opportunities.",
      size: "5.1 MB",
    },
    {
      title: "Annual Report 2025",
      category: "Financial",
      description: "ECCI's 2025 annual financial report including revenue overview, membership statistics, event highlights, and strategic outlook.",
      size: "3.7 MB",
    },
    {
      title: "Event Planning Toolkit",
      category: "Guide",
      description: "Step-by-step toolkit for planning and executing chamber events, including checklists, vendor contacts, and budget templates.",
      size: "1.2 MB",
    },
    {
      title: "Business Registration Checklist",
      category: "Legal",
      description: "Essential checklist for registering a new business in India or Nepal, covering documentation, compliance, and regulatory requirements.",
      size: "890 KB",
    },
    {
      title: "Minutes of Board Meeting - Q4 2025",
      category: "Minutes",
      description: "Summary of board decisions and action items from the Q4 2025 board meeting.",
      size: "420 KB",
    },
    {
      title: "AGM Announcement 2026",
      category: "AGM",
      description: "Notice and agenda for the 26th Annual General Meeting.",
      size: "380 KB",
    },
    {
      title: "ECCI Memorandum of Association",
      category: "Memorandum",
      description: "Official memorandum of ECCI India.",
      size: "1.5 MB",
    },
    {
      title: "Rules & Regulations",
      category: "Legal",
      description: "Bylaws and operational rules governing ECCI.",
      size: "2.1 MB",
    },
    {
      title: "Event Schedule 2026",
      category: "Schedule",
      description: "Complete calendar of ECCI events for 2026.",
      size: "890 KB",
    },
  ];

  const getCategoryBadgeStyle = (cat: string) => {
    switch (cat) {
      case "Guide":
        return "bg-ice-tint text-ice-blue";
      case "Policy":
        return "bg-[#FEFCBF] text-[#744210]";
      case "Report":
        return "bg-[#C6F6D5] text-[#22543D]";
      case "Financial":
        return "bg-[#E9D8FD] text-[#553C9A]";
      case "Legal":
        return "bg-[#FED7D7] text-[#9B2C2C]";
      case "Minutes":
        return "bg-[#E9D8FD] text-[#553C9A]";
      case "AGM":
        return "bg-[#FEFCBF] text-[#744210]";
      case "Schedule":
        return "bg-[#C6F6D5] text-[#22543D]";
      default:
        return "bg-ice-tint text-ice-blue";
    }
  };

  return (
    <DashboardLayout activeItem="Resource Center">
      {/* Welcome Banner */}
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg border border-border-gray bg-white p-8 md:flex-row md:items-center">
        <div>
          <h2 className="mb-2 text-2xl text-navy">Resource Center</h2>
          <p className="text-sm text-gray-500">Access reports, guides, policy briefs, and toolkits for your business.</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-auto min-w-[180px] rounded-md border border-border-gray bg-white px-3 py-2 text-sm text-navy"
        >
          <option>All Categories</option>
          <option>Guide</option>
          <option>Policy</option>
          <option>Report</option>
          <option>Financial</option>
          <option>Legal</option>
          <option>Minutes of Meetings</option>
          <option>AGM Announcements</option>
          <option>ECCI Memorandum</option>
          <option>Rules &amp; Regulations</option>
          <option>Yearly Event Schedule</option>
        </select>
        <div className="flex-1 min-w-[240px] flex gap-2">
          <input
            type="text"
            placeholder="Search resources by title or keyword..."
            className="flex-1 rounded-md border border-border-gray bg-white px-3 py-2 text-sm text-navy outline-none focus:border-ice-blue"
          />
          <button className="rounded-md bg-crimson px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-crimson-dark">
            Search
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-2">
        {["All", "Reports", "Guides", "Templates"].map((tab) => (
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

      {/* Resource Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {resources.map((resource) => (
          <div key={resource.title} className="overflow-hidden rounded-lg border border-border-gray bg-white">
            <div className="p-6">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-ice-tint">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="crimson"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex justify-between items-start gap-2">
                    <div className="font-heading text-base font-bold text-navy">{resource.title}</div>
                  </div>
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryBadgeStyle(resource.category)}`}
                  >
                    {resource.category}
                  </span>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-600" style={{ lineHeight: 1.6 }}>
                {resource.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">PDF &middot; {resource.size}</span>
                <button className="inline-flex items-center justify-center gap-2 rounded-md bg-crimson px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-crimson-dark">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-crimson text-sm font-semibold text-white">
          1
        </span>
        <a
          href="#"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border-gray text-sm font-medium text-navy transition-all hover:border-gray-400"
        >
          2
        </a>
        <a
          href="#"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border-gray text-sm font-medium text-navy transition-all hover:border-gray-400"
        >
          3
        </a>
      </div>
    </DashboardLayout>
  );
}