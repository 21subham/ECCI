"use client";

import Link from "next/link";
import { DashboardLayout } from "../../../components/DashboardLayout";

export default function SubscriptionStatusPage() {
  return (
    <DashboardLayout activeItem="Subscription Status">
      {/* Welcome Banner */}
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg border border-border-gray bg-white p-8 md:flex-row md:items-center">
        <div>
          <h2 className="mb-2 text-2xl font-heading text-navy">Subscription Status</h2>
          <p className="text-sm text-gray-500">Manage your membership and payments</p>
        </div>
      </div>

      {/* Status Card */}
      <div className="mb-8 overflow-hidden rounded-lg border border-border-gray bg-white">
        <div
          style={{
            background: "var(--navy)",
            padding: "var(--space-8)",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ fontFamily: "var(--font-heading)", color: "white", fontSize: "var(--text-xl)", margin: 0 }}>
            Membership Details
          </h3>
          <span
            style={{
              display: "inline-block",
              padding: "3px 12px",
              borderRadius: "100px",
              fontSize: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              background: "#C6F6D5",
              color: "#22543D",
            }}
          >
            Active
          </span>
        </div>
        <div className="p-8">
          {/* Status Grid */}
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Membership Type</div>
              <div className="text-base font-semibold text-navy">Corporate Member</div>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Status</div>
              <div className="text-base font-semibold text-navy">
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 12px",
                    borderRadius: "100px",
                    fontSize: "10px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    background: "#C6F6D5",
                    color: "#22543D",
                  }}
                >
                  Active
                </span>
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Member Since</div>
              <div className="text-base font-semibold text-navy">January 2020</div>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Current Period</div>
              <div className="text-base font-semibold text-navy">Jan 2025 — Jan 2026</div>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Next Due Date</div>
              <div className="text-base font-semibold text-navy">January 15, 2026</div>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Amount Due</div>
              <div className="text-2xl font-bold text-crimson">₹2,50,000</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="mb-2 text-xs text-gray-500">Time Remaining in Current Period</div>
            <div className="h-2 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full rounded-full bg-crimson" style={{ width: "75%" }} />
            </div>
            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>Jan 2025</span>
              <span>75% complete</span>
              <span>Jan 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="mb-6 rounded-lg border border-border-gray bg-white">
        <div className="border-b border-border-gray px-6 py-5">
          <h3 className="text-base font-semibold text-navy">Payment History</h3>
        </div>
        <div className="overflow-x-auto p-0">
          <table className="w-full border-collapse overflow-hidden">
            <thead>
              <tr>
                <th
                  className="bg-gray-100 px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-600"
                  style={{ borderBottom: "1px solid var(--border-gray)" }}
                >
                  Date
                </th>
                <th
                  className="bg-gray-100 px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-600"
                  style={{ borderBottom: "1px solid var(--border-gray)" }}
                >
                  Amount
                </th>
                <th
                  className="bg-gray-100 px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-600"
                  style={{ borderBottom: "1px solid var(--border-gray)" }}
                >
                  Method
                </th>
                <th
                  className="bg-gray-100 px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-600"
                  style={{ borderBottom: "1px solid var(--border-gray)" }}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: "Jan 15, 2025", amount: "₹2,50,000", method: "Bank Transfer", status: "Completed" },
                { date: "Jan 10, 2024", amount: "₹2,50,000", method: "UPI", status: "Completed" },
                { date: "Jan 12, 2023", amount: "₹2,00,000", method: "Bank Transfer", status: "Completed" },
              ].map((row) => (
                <tr key={row.date} className="hover:bg-gray-100">
                  <td className="border-b border-gray-200 px-5 py-4 text-sm text-gray-700">{row.date}</td>
                  <td
                    className="border-b border-gray-200 px-5 py-4 text-sm text-gray-700"
                    style={{ fontWeight: 600 }}
                  >
                    {row.amount}
                  </td>
                  <td className="border-b border-gray-200 px-5 py-4 text-sm text-gray-700">{row.method}</td>
                  <td className="border-b border-gray-200 px-5 py-4 text-sm text-gray-700">
                    <span
                      style={{
                        display: "inline-block",
                        padding: "3px 12px",
                        borderRadius: "100px",
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        background: "#C6F6D5",
                        color: "#22543D",
                      }}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Actions */}
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center">
        <Link
          href="/portal/renew"
          className="btn btn--primary inline-flex items-center justify-center"
        >
          Renew Subscription
        </Link>
        <a href="#" className="download-link inline-flex items-center gap-2 text-sm font-semibold text-ice-blue transition-colors hover:text-navy">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: 16, height: 16 }}
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Receipt
        </a>
      </div>
    </DashboardLayout>
  );
}
