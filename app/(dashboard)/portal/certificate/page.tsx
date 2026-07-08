"use client";

import Link from "next/link";
import { DashboardLayout } from "../../../components/DashboardLayout";

export default function CertificatePage() {
  return (
    <DashboardLayout activeItem="Download Certificate">
      <div className="rounded-lg border border-border-gray bg-white p-6 md:p-8">
        <div className="mb-8">
          <h2 className="text-2xl text-navy">Download Certificate</h2>
          <p className="mt-1 text-sm text-gray-500">Access your membership certificate and related documents.</p>
        </div>

        <div className="mx-auto max-w-[600px]">
          <div className="relative overflow-hidden rounded-xl border border-border-gray bg-gradient-to-br from-navy to-[#0D1B2E] p-8 text-center text-white">
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            <div className="relative z-10">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/20 bg-white/10">
                <span className="font-heading text-2xl font-bold text-white">E</span>
              </div>
              <h3 className="font-heading text-xl text-white">Membership Certificate</h3>
              <p className="mt-2 text-sm text-gray-300">This certifies that</p>
              <p className="mt-1 font-heading text-2xl text-white">Yubraj Baral</p>
              <p className="mt-1 text-sm text-gray-300">is a recognized member of</p>
              <p className="mt-1 font-heading text-lg text-crimson-light">Everest Chamber of Commerce and Industries</p>
              <div className="mx-auto mt-6 h-px w-48 bg-white/20" />
              <div className="mt-6 grid grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="text-gray-400">Member No.</div>
                  <div className="mt-1 font-semibold text-white">ECCI-2024-0482</div>
                </div>
                <div>
                  <div className="text-gray-400">Issued On</div>
                  <div className="mt-1 font-semibold text-white">Jan 15, 2024</div>
                </div>
                <div>
                  <div className="text-gray-400">Valid Until</div>
                  <div className="mt-1 font-semibold text-white">Jan 15, 2025</div>
                </div>
              </div>
              <button className="mt-6 rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gray-100">
                Download PDF
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border-gray bg-ice-tint p-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-crimson">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <h4 className="mb-1 text-sm font-semibold text-navy">Membership ID Card</h4>
            <p className="mb-3 text-xs text-gray-500">Digital ID card for easy verification.</p>
            <button className="rounded-md border border-ice-blue bg-transparent px-4 py-2 text-xs font-semibold text-navy transition-colors hover:bg-navy hover:text-white">Download</button>
          </div>
          <div className="rounded-xl border border-border-gray bg-ice-tint p-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-crimson">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            </div>
            <h4 className="mb-1 text-sm font-semibold text-navy">Payment Receipts</h4>
            <p className="mb-3 text-xs text-gray-500">Download your payment history.</p>
            <button className="rounded-md border border-ice-blue bg-transparent px-4 py-2 text-xs font-semibold text-navy transition-colors hover:bg-navy hover:text-white">View Receipts</button>
          </div>
          <div className="rounded-xl border border-border-gray bg-ice-tint p-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-crimson">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </div>
            <h4 className="mb-1 text-sm font-semibold text-navy">Receipt of Payment</h4>
            <p className="mb-3 text-xs text-gray-500">Latest payment confirmation.</p>
            <button className="rounded-md border border-ice-blue bg-transparent px-4 py-2 text-xs font-semibold text-navy transition-colors hover:bg-navy hover:text-white">Download</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
