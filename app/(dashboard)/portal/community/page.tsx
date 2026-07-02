"use client";

import Link from "next/link";
import { DashboardLayout } from "../../../components/DashboardLayout";

const activities = [
  {
    title: "New member joined from Delhi",
    time: "2 hours ago",
    color: "#38A169",
  },
  {
    title: "Event photos uploaded — Nepal Festival 2026",
    time: "5 hours ago",
    color: "#3182CE",
  },
  {
    title: "Directory listing updated — Sharma Trading Co.",
    time: "1 day ago",
    color: "#DD6B20",
  },
];

export default function CommunityHubPage() {
  return (
    <DashboardLayout activeItem="Community Hub">
      {/* Welcome Banner */}
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg border border-border-gray bg-white p-8 md:flex-row md:items-center">
        <div>
          <h2 className="mb-2 text-2xl font-heading text-navy">Community Hub</h2>
          <p className="text-sm text-gray-500">Stay connected with ECCI across platforms</p>
        </div>
      </div>

      {/* Social Cards */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Facebook */}
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-8)",
            background: "linear-gradient(135deg, #1877F2 0%, #0D5BBF 100%)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--space-4)",
            minHeight: 220,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "rgba(255,255,255,0.2)",
              borderRadius: "var(--radius-lg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{ width: 28, height: 28, fill: "white" }}
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-xl)",
              color: "white",
              marginBottom: 0,
            }}
          >
            Facebook
          </h3>
          <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.85)", margin: 0 }}>
            Join our Facebook community
          </p>
          <a
            href="https://www.facebook.com/everestchamber"
            className="btn btn--sm"
            style={{
              background: "rgba(255,255,255,0.2)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.3)",
              marginTop: "auto",
              backdropFilter: "blur(4px)",
            }}
            target="_blank"
            rel="noopener"
          >
            Visit Page
          </a>
        </div>

        {/* YouTube */}
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-8)",
            background: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--space-4)",
            minHeight: 220,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "rgba(255,255,255,0.2)",
              borderRadius: "var(--radius-lg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{ width: 28, height: 28, fill: "white" }}
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48" fill="#11233B" />
            </svg>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-xl)",
              color: "white",
              marginBottom: 0,
            }}
          >
            YouTube
          </h3>
          <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.85)", margin: 0 }}>
            Watch our latest videos
          </p>
          <a
            href="https://www.youtube.com/channel/UCf_p3sKBoJ21aAelkszVviA"
            className="btn btn--sm"
            style={{
              background: "rgba(255,255,255,0.2)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.3)",
              marginTop: "auto",
              backdropFilter: "blur(4px)",
            }}
            target="_blank"
            rel="noopener"
          >
            Visit Channel
          </a>
        </div>

        {/* Matrimonial */}
        <div
          style={{
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-8)",
            background: "linear-gradient(135deg, #E91E8C 0%, #C2185B 100%)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--space-4)",
            minHeight: 220,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "rgba(255,255,255,0.2)",
              borderRadius: "var(--radius-lg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{ width: 28, height: 28, fill: "white" }}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-xl)",
              color: "white",
              marginBottom: 0,
            }}
          >
            Matrimonial
          </h3>
          <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.85)", margin: 0 }}>
            Find your match within ECCI
          </p>
          <Link
            href="/portal/matrimonial"
            className="btn btn--sm"
            style={{
              background: "rgba(255,255,255,0.2)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.3)",
              marginTop: "auto",
              backdropFilter: "blur(4px)",
            }}
          >
            View Profiles
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg border border-border-gray bg-white">
        <div className="border-b border-border-gray px-6 py-5">
          <h3 className="text-base font-semibold text-navy">Recent Activity</h3>
        </div>
        <div className="px-6">
          <ul className="divide-y divide-gray-200">
            {activities.map((item) => (
              <li key={item.title} className="flex items-start gap-4 py-4">
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: item.color,
                    marginTop: 5,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div className="text-sm font-medium text-navy">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
