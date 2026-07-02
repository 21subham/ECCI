"use client";

import { DashboardLayout } from "../../../components/DashboardLayout";
import { useState } from "react";

export default function NotificationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  const emailLogs = [
    { date: "Jun 22, 2026", subject: "AGM 2026 Scheduled — Please Confirm Attendance", type: "Governance", status: "Delivered" },
    { date: "Jun 20, 2026", subject: "New Event: Nepal Festival 2026 — Register Now", type: "Event", status: "Delivered" },
    { date: "Jun 18, 2026", subject: "Membership Renewal Reminder — Due in 30 Days", type: "Membership", status: "Delivered" },
    { date: "Jun 15, 2026", subject: "Your Directory Listing Has Been Approved", type: "System", status: "Delivered" },
    { date: "Jun 12, 2026", subject: "Monthly Newsletter — June 2026 Edition", type: "System", status: "Delivered" },
    { date: "Jun 10, 2026", subject: "Upcoming Webinar: Trade Opportunities in South Asia", type: "Event", status: "Pending" },
    { date: "Jun 08, 2026", subject: "Your Subscription Invoice — June 2026", type: "Membership", status: "Delivered" },
    { date: "Jun 05, 2026", subject: "Election Nomination Reminder — Last Date Jun 15", type: "Governance", status: "Failed" },
    { date: "Jun 02, 2026", subject: "Welcome to ECCI — Your Member Dashboard Is Ready", type: "System", status: "Delivered" },
    { date: "May 28, 2026", subject: "Business Directory — New Members This Month", type: "System", status: "Pending" },
  ];

  const getTypeBadgeStyle = (type: string) => {
    switch (type) {
      case "Event":
        return "bg-[#BEE3F8] text-[#2A4365]";
      case "Governance":
        return "bg-[#FEFCBF] text-[#744210]";
      case "System":
        return "bg-[#E9D8FD] text-[#44337A]";
      case "Membership":
        return "bg-[#C6F6D5] text-[#22543D]";
      default:
        return "bg-ice-tint text-ice-blue";
    }
  };

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-[#C6F6D5] text-[#22543D]";
      case "Pending":
        return "bg-[#FEFCBF] text-[#744210]";
      case "Failed":
        return "bg-[#FED7D7] text-[#742A2A]";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  return (
    <DashboardLayout activeItem="Notifications">
      {/* Welcome Banner */}
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg border border-border-gray bg-white p-8 md:flex-row md:items-center">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl text-navy">Email Logs</h2>
          <span className="rounded-full bg-crimson px-3 py-0.5 text-[10px] font-semibold text-white">Email Logs</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mb-6 flex flex-wrap items-end gap-4">
        <div className="flex-1 min-w-[240px]">
          <label className="mb-2 block text-sm font-semibold text-navy">Search emails</label>
          <input
            type="text"
            placeholder="Search by subject, type, or status..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-border-gray bg-white px-3 py-2 text-sm text-navy outline-none focus:border-ice-blue"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-navy">Type</label>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="rounded-md border border-border-gray bg-white px-3 py-2 text-sm text-navy outline-none focus:border-ice-blue"
          >
            <option>All Types</option>
            <option>Event</option>
            <option>Governance</option>
            <option>Membership</option>
            <option>System</option>
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-navy">Status</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-md border border-border-gray bg-white px-3 py-2 text-sm text-navy outline-none focus:border-ice-blue"
          >
            <option>All Statuses</option>
            <option>Delivered</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
        </div>
      </div>

      {/* Email Log Table */}
      <div className="overflow-hidden rounded-lg border border-border-gray bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                  Date
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                  Subject
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                  Type
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {emailLogs.map((log, index) => (
                <tr key={index} className="border-t border-border-gray transition-colors hover:bg-gray-100">
                  <td className="px-4 py-3 text-sm text-navy">{log.date}</td>
                  <td className="px-4 py-3 text-sm text-navy">{log.subject}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getTypeBadgeStyle(log.type)}`}>
                      {log.type}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${getStatusBadgeStyle(log.status)}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${
                        log.status === "Delivered" ? "bg-[#38A169]" :
                        log.status === "Pending" ? "bg-[#D69E2E]" : "bg-[#E53E3E]"
                      }`}></span>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="text-sm text-gray-500">Showing 1–10 of 24 email logs</span>
          <nav className="flex items-center gap-1" aria-label="Pagination">
            <button className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-border-gray bg-white px-2 text-sm font-medium text-gray-600 opacity-40" disabled aria-label="Previous page">
              &larr;
            </button>
            <button className="inline-flex h-9 min-w-9 items-center justify-center rounded-md bg-crimson px-2 text-sm font-medium text-white" aria-label="Page 1" aria-current="page">
              1
            </button>
            <button className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-border-gray bg-white px-2 text-sm font-medium text-gray-600 hover:border-gray-400" aria-label="Page 2">
              2
            </button>
            <button className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-border-gray bg-white px-2 text-sm font-medium text-gray-600 hover:border-gray-400" aria-label="Page 3">
              3
            </button>
            <button className="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-border-gray bg-white px-2 text-sm font-medium text-gray-600 hover:border-gray-400" aria-label="Next page">
              &rarr;
            </button>
          </nav>
        </div>
      </div>
    </DashboardLayout>
  );
}