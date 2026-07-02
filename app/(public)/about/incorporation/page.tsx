"use client";

import Link from "next/link";
import { PublicLayout } from "../../../components/PublicLayout";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Reveal } from "../../../components/Reveal";

const documents = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Certificate of Incorporation",
    desc: "Certificate issued by the Registrar of Companies confirming ECCI's incorporation under the Societies Registration Act.",
    meta: ["Issued: 2024", "Registration No: ECCI/SRA/2024/001"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "PAN Card",
    desc: "Permanent Account Number issued by the Income Tax Department of India for ECCI's financial transactions and tax filings.",
    meta: ["PAN: AABCE1234D", "Status: Active"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "GST Registration Certificate",
    desc: "Goods and Services Tax registration certificate authorizing ECCI to collect and remit GST on taxable services.",
    meta: ["GSTIN: 07AABCE1234D1Z5", "Status: Active"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "TAN Registration",
    desc: "Tax Deduction and Collection Account Number issued for compliance with TDS/TCS provisions under the Income Tax Act.",
    meta: ["TAN: DELA12345E", "Status: Active"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "12A Registration Certificate",
    desc: "Registration under Section 12A of the Income Tax Act, 1961, providing exemption on income applied for charitable purposes.",
    meta: ["Application No: 12A/2024/ECCI", "Status: Registered"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "80G Registration Certificate",
    desc: "Approval under Section 80G of the Income Tax Act enabling donors to claim 50% deduction on donations made to ECCI.",
    meta: ["Approval No: 80G/2024/ECCI", "Validity: 3 Years"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "MSME Registration",
    desc: "Registration as a Micro, Small & Medium Enterprise under the MSME Development Act, 2006 (Udyam Registration).",
    meta: ["UDYAM: UDYAM-DL-XX-XXXXXXX", "Status: Registered"],
  },
];

export default function IncorporationPage() {
  return (
    <PublicLayout activeNav="about">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Incorporation Documents" }
      ]} />

      <section className="relative py-24 text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1400&q=80')", backgroundSize: "cover", backgroundPosition: "50% 50%" }}>
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.15em] text-white/60">Legal &amp; Compliance</span>
          <h1 className="font-heading text-4xl text-white md:text-5xl">Incorporation Documents</h1>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Official registration and tax documents of Everest Chamber of Commerce and Industries (ECCI). These documents certify our legal status as a registered chamber of commerce in India.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <h2 className="font-heading text-3xl text-navy md:text-4xl">Registered Documents</h2>
            <p className="mx-auto mt-2 max-w-xl text-lg text-gray-600">
              Download official ECCI incorporation and registration documents for your reference and compliance needs.
            </p>
          </Reveal>

          <div className="max-w-[800px] mx-auto space-y-4">
            {documents.map((doc, idx) => (
              <Reveal key={doc.title} animation="fade-in" delay={(idx % 4 + 1) as 1 | 2 | 3 | 4}>
                <div className="flex items-center gap-6 rounded-xl border border-border-gray bg-white p-6 transition-shadow hover:shadow-sm">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-ice-tint text-ice-blue">
                    {doc.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-body text-base font-semibold text-navy mb-1">{doc.title}</h4>
                    <p className="text-sm text-gray-500 mb-2">{doc.desc}</p>
                    <div className="flex gap-4 text-xs text-gray-400">
                      {doc.meta.map((m, i) => (
                        <span key={i}>{m}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="#" className="rounded-md bg-crimson px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-crimson-dark">
                    Download PDF
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ice-tint py-20">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">Verification</span>
          <h2 className="mb-3 font-heading text-3xl text-navy">Document Verification</h2>
          <p className="mb-6 text-gray-600">
            All documents displayed on this page are official registrations of Everest Chamber of Commerce and Industries. For verification or certified copies, please contact our compliance officer.
          </p>
          <Link href="/contact" className="rounded-md bg-crimson px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-crimson-dark">
            Request Verification
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}