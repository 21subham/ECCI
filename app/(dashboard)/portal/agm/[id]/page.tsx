"use client";

import Link from "next/link";
import { DashboardLayout } from "../../../../components/DashboardLayout";

const notice = {
  title: "Notice of 26th Annual General Meeting",
  status: "Upcoming",
  date: "March 15, 2026",
  meetingDate: "March 28, 2026, 10:00 AM IST",
  ref: "AGM/2026/001",
  to: "All ECCI Members",
  from: "ECCI Secretariat",
  subject: "26th Annual General Meeting — Notice and Agenda",
  agenda: [
    "Call to order and introduction of members",
    "Confirmation of minutes of the 25th AGM",
    "President's report on annual activities",
    "Financial statements for FY 2025-26",
    "Auditor's report and appointment of auditors",
    "Election of Executive Committee members",
    "Amendments to the Constitution (if any)",
    "Any other business with the permission of the Chair",
    "Vote of thanks and adjournment",
  ],
  notes: [
    "Members are requested to carry their membership ID for verification.",
    "Proxy forms must be submitted 48 hours before the meeting.",
    "Virtual attendance link will be shared 24 hours prior to the event.",
  ],
};

export default function AgmDetailPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout activeItem="AGM Notices">
      <div className="rounded-lg border border-border-gray bg-white p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/portal/agm" className="text-crimson transition-colors hover:text-crimson-dark">AGM Notices</Link>
          <span className="text-gray-400">/</span>
          <span className="font-medium text-navy">{notice.title}</span>
        </div>

        <div className="mb-8 overflow-hidden rounded-xl border border-border-gray bg-gray-50">
          <div className="bg-navy px-6 py-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="inline-block rounded-full bg-[#C6F6D5] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#22543D]">{notice.status}</span>
                <h1 className="mt-3 font-heading text-xl text-white md:text-2xl">{notice.title}</h1>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Notice Date</div>
                <div className="mt-1 text-sm font-medium text-navy">{notice.date}</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Meeting Date</div>
                <div className="mt-1 text-sm font-medium text-navy">{notice.meetingDate}</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Reference</div>
                <div className="mt-1 text-sm font-medium text-navy">{notice.ref}</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">Subject</div>
                <div className="mt-1 text-sm font-medium text-navy">{notice.subject}</div>
              </div>
            </div>

            <div className="mb-6 rounded-lg border border-border-gray bg-white p-6">
              <h3 className="mb-4 font-heading text-lg text-navy">Agenda</h3>
              <ol className="space-y-3">
                {notice.agenda.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-crimson text-xs font-bold text-white">{idx + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
              <h4 className="mb-2 text-sm font-semibold text-yellow-800">Important Notes</h4>
              <ul className="space-y-1">
                {notice.notes.map((note, idx) => (
                  <li key={idx} className="text-sm text-yellow-700">• {note}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="rounded-md bg-crimson px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-crimson-dark">RSVP Now</button>
              <button className="rounded-md border border-border-gray bg-white px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gray-50">
                <span className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download PDF
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
