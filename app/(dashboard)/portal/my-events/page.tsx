"use client";

import { useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "../../../components/DashboardLayout";

type Event = {
  id: number;
  title: string;
  date: string;
  venue: string;
  status: string;
  statusColor: string;
  statusTextColor: string;
  description: string;
  actionLabel: string;
  actionHref: string;
};

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Indo Nepal Trade Festival 2027",
    date: "March 15–17, 2027 · 10:00 AM",
    venue: "Kathmandu, Nepal",
    status: "Confirmed",
    statusColor: "#C6F6D5",
    statusTextColor: "#22543D",
    description:
      "You're registered as an exhibitor at the flagship Indo Nepal Trade Festival. Your booth assignment and logistics details will be shared 2 weeks before the event.",
    actionLabel: "View Event Details",
    actionHref: "/events/indo-nepal-trade-festival-2027",
  },
  {
    id: 2,
    title: "Business Networking Meet — Delhi Chapter",
    date: "February 20, 2026 · 6:00 PM",
    venue: "ECCI HQ, New Delhi",
    status: "Registered",
    statusColor: "#BEE3F8",
    statusTextColor: "#2A4365",
    description:
      "Monthly networking evening for Delhi-NCR members. Includes keynote by industry leader and open networking session.",
    actionLabel: "View Event Details",
    actionHref: "/events/indo-nepal-trade-festival-2027",
  },
  {
    id: 3,
    title: "Annual General Meeting 2026",
    date: "February 28, 2026 · 10:00 AM",
    venue: "PHD Chamber, New Delhi",
    status: "Confirmed",
    statusColor: "#C6F6D5",
    statusTextColor: "#22543D",
    description:
      "Annual General Meeting — review of financial statements, board elections, and 2026 strategic plan approval.",
    actionLabel: "View AGM Notice",
    actionHref: "/portal/agm/sample-notice",
  },
];

const pastEvents: Event[] = [
  {
    id: 4,
    title: "Indo Nepal Trade Festival 2026",
    date: "March 15–17, 2026",
    venue: "Kathmandu, Nepal",
    status: "Completed",
    statusColor: "#C6F6D5",
    statusTextColor: "#22543D",
    description:
      "Attended as exhibitor. Booth assignment and logistics successfully completed.",
    actionLabel: "View Photos",
    actionHref: "#",
  },
  {
    id: 5,
    title: "Annual General Meeting 2025",
    date: "February 28, 2025",
    venue: "PHD Chamber, New Delhi",
    status: "Completed",
    statusColor: "#C6F6D5",
    statusTextColor: "#22543D",
    description:
      "Attended AGM 2025. Reviewed financial statements and participated in board elections.",
    actionLabel: "View AGM Notice",
    actionHref: "#",
  },
  {
    id: 6,
    title: "Business Networking Meet — Delhi Chapter",
    date: "January 15, 2025",
    venue: "ECCI HQ, New Delhi",
    status: "Completed",
    statusColor: "#C6F6D5",
    statusTextColor: "#22543D",
    description:
      "Attended monthly networking session. Connected with 20+ industry leaders.",
    actionLabel: "View Details",
    actionHref: "#",
  },
  {
    id: 7,
    title: "Regional Trade Summit 2024",
    date: "November 20, 2024",
    venue: "Trade Center, Delhi",
    status: "Completed",
    statusColor: "#C6F6D5",
    statusTextColor: "#22543D",
    description:
      "Regional trade summit focused on Nepal-India bilateral trade opportunities.",
    actionLabel: "View Details",
    actionHref: "#",
  },
  {
    id: 8,
    title: "Indo Nepal Trade Festival 2023",
    date: "March 10–12, 2023",
    venue: "Kathmandu, Nepal",
    status: "Completed",
    statusColor: "#C6F6D5",
    statusTextColor: "#22543D",
    description:
      "First-time exhibitor at the trade festival. Gained valuable market insights.",
    actionLabel: "View Photos",
    actionHref: "#",
  },
];

export default function MyEventsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const events = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <DashboardLayout activeItem="My Events">
      {/* Welcome Banner */}
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg border border-border-gray bg-white p-8 md:flex-row md:items-center">
        <div>
          <h2 className="mb-2 text-2xl font-heading text-navy">My Events</h2>
          <p className="text-sm text-gray-500">Events you&apos;ve registered for and your event history.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`btn btn--primary btn--sm ${
            activeTab === "upcoming" ? "" : "opacity-70"
          }`}
        >
          Upcoming ({upcomingEvents.length})
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={`btn btn--outline btn--sm ${
            activeTab === "past" ? "" : "opacity-70"
          }`}
        >
          Past ({pastEvents.length})
        </button>
      </div>

      {/* Event Cards */}
      {events.map((event) => (
        <div key={event.id} className="mb-6 rounded-lg border border-border-gray bg-white">
          <div className="flex flex-col justify-between gap-3 border-b border-border-gray px-6 py-5 md:flex-row md:items-start">
            <div>
              <div className="mb-1 font-heading text-lg font-bold text-navy">{event.title}</div>
              <div className="text-sm text-gray-500">
                {event.date}
                {event.venue && <span> · {event.venue}</span>}
              </div>
            </div>
            <span
              style={{
                display: "inline-block",
                padding: "3px 12px",
                borderRadius: "100px",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                background: event.statusColor,
                color: event.statusTextColor,
              }}
            >
              {event.status}
            </span>
          </div>
          <div className="p-6">
            <p
              className="mb-4 text-sm text-gray-600"
              style={{ lineHeight: 1.7 }}
            >
              {event.description}
            </p>
            <div className="flex gap-3">
              <Link
                href={event.actionHref}
                className="btn btn--primary btn--sm inline-flex items-center"
              >
                {event.actionLabel}
              </Link>
              <button className="btn btn--outline btn--sm">Cancel Registration</button>
            </div>
          </div>
        </div>
      ))}
    </DashboardLayout>
  );
}
