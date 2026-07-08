"use client";

import { useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "../../../components/DashboardLayout";

const filters = [
  { label: "All", value: "all" },
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

const profiles = [
  { id: 1, name: "Priya Sharma", age: 28, location: "New Delhi", profession: "Doctor", education: "MBBS", gender: "female" },
  { id: 2, name: "Rahul Verma", age: 32, location: "Mumbai", profession: "Engineer", education: "B.Tech", gender: "male" },
  { id: 3, name: "Anjali Thapa", age: 26, location: "Kathmandu", profession: "Architect", education: "M.Arch", gender: "female" },
  { id: 4, name: "Vikram Singh", age: 34, location: "Bangalore", profession: "Entrepreneur", education: "MBA", gender: "male" },
  { id: 5, name: "Sneha Gupta", age: 27, location: "Pune", profession: "CA", education: "CA", gender: "female" },
  { id: 6, name: "Arjun Mehta", age: 30, location: "Delhi NCR", profession: "Lawyer", education: "LLB", gender: "male" },
];

export default function MatrimonialPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all" ? profiles : profiles.filter((p) => p.gender === activeFilter);

  return (
    <DashboardLayout activeItem="Matrimonial">
      <div className="rounded-lg border border-border-gray bg-white p-6 md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl text-navy">Matrimonial Listings</h2>
            <p className="mt-1 text-sm text-gray-500">Browse member profiles and find your perfect match.</p>
          </div>
        </div>

        <div className="mb-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
          <strong>Privacy Notice:</strong> Matrimonial profiles are visible only to active members. All interactions are monitored for community standards.
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">Gender</label>
            <select value={activeFilter} onChange={(e) => setActiveFilter(e.target.value)} className="w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue">
              {filters.map((f) => (
                <option key={f.value} value={f.value}>{f.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">Age Range</label>
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Min" className="w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue" />
              <span className="text-gray-400">-</span>
              <input type="text" placeholder="Max" className="w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue" />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">Profession</label>
            <select className="w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue">
              <option>Any</option>
              <option>Doctor</option>
              <option>Engineer</option>
              <option>Entrepreneur</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">Location</label>
            <select className="w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue">
              <option>Any</option>
              <option>New Delhi</option>
              <option>Mumbai</option>
              <option>Kathmandu</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((profile) => (
            <div key={profile.id} className="rounded-xl border border-border-gray bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-ice-blue to-navy text-xl font-heading font-bold text-white">
                {profile.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="mb-1 font-heading text-lg text-navy">{profile.name}</h3>
              <div className="mb-3 text-sm text-gray-500">{profile.age} yrs · {profile.location}</div>
              <div className="mb-4 flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-ice-tint px-2.5 py-0.5 text-xs font-semibold text-ice-blue">{profile.profession}</span>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600">{profile.education}</span>
              </div>
              <Link href={`/portal/matrimonial/${profile.id}`} className="rounded-md bg-crimson px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-crimson-dark">View Profile</Link>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {[1, 2, 3, 4, 5].map((p) => (
            <button key={p} className={`flex h-10 w-10 items-center justify-center rounded-md border text-sm font-semibold ${p === 1 ? "border-crimson bg-crimson text-white" : "border-border-gray bg-white text-navy hover:border-navy hover:text-navy"}`}>{p}</button>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
