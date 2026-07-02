"use client";

import Link from "next/link";
import { DashboardLayout } from "../../../../components/DashboardLayout";

export default function MatrimonialCreatePage() {
  return (
    <DashboardLayout activeItem="Create Profile">
      <div className="rounded-lg border border-border-gray bg-white p-6 md:p-8">
        <div className="mb-8">
          <h2 className="text-2xl text-navy">Create Matrimonial Profile</h2>
          <p className="mt-1 text-sm text-gray-500">Complete the form below to create your matrimonial profile.</p>
        </div>

        <div className="mb-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">
          Your profile will be visible to other active members. You can control visibility from your privacy settings.
        </div>

        <div className="space-y-8">
          <div className="rounded-xl border border-border-gray bg-ice-tint p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-crimson font-heading text-sm font-bold text-white">1</div>
              <h3 className="font-heading text-lg text-navy">Personal Information</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">Full Name</label>
                <input type="text" className="w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">Gender</label>
                <select className="w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">Age</label>
                <input type="number" className="w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">Height</label>
                <input type="text" placeholder="e.g. 5 ft 10 in" className="w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue" />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border-gray bg-ice-tint p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-crimson font-heading text-sm font-bold text-white">2</div>
              <h3 className="font-heading text-lg text-navy">Education & Career</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">Education</label>
                <input type="text" className="w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-navy">Profession</label>
                <input type="text" className="w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue" />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-navy">Annual Income</label>
                <select className="w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue">
                  <option>Select range</option>
                  <option>Below ₹5 Lakhs</option>
                  <option>₹5–15 Lakhs</option>
                  <option>₹15–30 Lakhs</option>
                  <option>₹30+ Lakhs</option>
                </select>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border-gray bg-ice-tint p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-crimson font-heading text-sm font-bold text-white">3</div>
              <h3 className="font-heading text-lg text-navy">Profile Photo</h3>
            </div>
            <div className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 p-10 text-center transition-all hover:border-ice-blue hover:bg-ice-tint">
              <div className="mx-auto mb-3 text-gray-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto h-10 w-10"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              </div>
              <div className="text-sm text-gray-500">
                <strong className="text-crimson">Click to upload</strong> or drag and drop
                <br />
                <span className="text-gray-400">PNG, JPG (max 2MB)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/portal/matrimonial" className="rounded-md border-2 border-ice-blue bg-transparent px-8 py-4 text-base font-semibold text-navy transition-all hover:-translate-y-px hover:bg-navy hover:text-white">Cancel</Link>
          <button className="rounded-md bg-crimson px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg">Save Profile</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
