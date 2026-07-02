"use client";

import { useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "../../../components/DashboardLayout";

const settingsSections: {
  title: string;
  items: (
    | { label: string; kind: "input"; type: string; value: string }
    | { label: string; kind: "toggle"; enabled: boolean }
  )[];
}[] = [
  {
    title: "Account Settings",
    items: [
      { label: "Email Address", kind: "input", type: "email", value: "yubraj@example.com" },
      { label: "Phone Number", kind: "input", type: "tel", value: "+91 98765 43210" },
      { label: "Current Password", kind: "input", type: "password", value: "" },
      { label: "New Password", kind: "input", type: "password", value: "" },
    ],
  },
  {
    title: "Notification Preferences",
    items: [
      { label: "Email Notifications", kind: "toggle", enabled: true },
      { label: "Spotlight Alerts", kind: "toggle", enabled: true },
      { label: "AGM Updates", kind: "toggle", enabled: false },
      { label: "Matrimonial Match Alerts", kind: "toggle", enabled: false },
    ],
  },
  {
    title: "Privacy Controls",
    items: [
      { label: "Show in Directory", kind: "toggle", enabled: true },
      { label: "Show Phone in Directory", kind: "toggle", enabled: false },
      { label: "Show Email in Directory", kind: "toggle", enabled: false },
      { label: "Enable Matrimonial Profile", kind: "toggle", enabled: true },
      { label: "Show in Matrimonial Directory", kind: "toggle", enabled: true },
    ],
  },
];

export default function SettingsPage() {
  return (
    <DashboardLayout activeItem="Account Settings">
      <div className="rounded-lg border border-border-gray bg-white p-6 md:p-8">
        <div className="mb-8">
          <h2 className="text-2xl text-navy">Account Settings</h2>
          <p className="mt-1 text-sm text-gray-500">Manage your account preferences and privacy controls.</p>
        </div>

        <div className="space-y-8">
          {settingsSections.map((section) => (
            <div key={section.title} className="rounded-xl border border-border-gray bg-ice-tint p-6">
              <h3 className="mb-4 font-heading text-lg text-navy">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-lg border border-border-gray bg-white p-4">
                    <span className="text-sm font-medium text-navy">{item.label}</span>
                    {item.kind === "toggle" ? (
                      <button className={`relative h-6 w-11 rounded-full transition-colors ${item.enabled ? "bg-crimson" : "bg-gray-300"}`}>
                        <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${item.enabled ? "translate-x-5" : "translate-x-0"}`} />
                      </button>
                    ) : (
                      <input type={item.type} defaultValue={item.value} className="w-64 rounded-md border border-border-gray px-3 py-1.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <button className="rounded-md border-2 border-ice-blue bg-transparent px-8 py-4 text-base font-semibold text-navy transition-all hover:-translate-y-px hover:bg-navy hover:text-white">Reset</button>
          <button className="rounded-md bg-crimson px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg">Save Changes</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
