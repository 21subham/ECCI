"use client";

import { useState } from "react";
import Link from "next/link";
import { PublicLayout } from "../../../components/PublicLayout";
import { Reveal } from "../../../components/Reveal";

const plans = [
  {
    value: "general",
    name: "General Member",
    price: "₹11,000",
    featured: false,
    features: [
      "Member profile on website",
      "Access to members-only directory",
      "Attend events at member rates",
      "Business leads & referrals",
      "Networking events & seminars",
    ],
  },
  {
    value: "specialist",
    name: "Specialist Member",
    price: "₹21,000",
    featured: false,
    features: [
      "Everything in General",
      "Training & capacity building",
      "Enhanced directory listing",
      "Priority event registration",
    ],
  },
  {
    value: "associate",
    name: "Associate Member",
    price: "₹51,000",
    featured: false,
    features: [
      "Everything in Specialist",
      "Speaking opportunities",
      "Discounted event stall space",
      "Priority event visibility",
    ],
  },
  {
    value: "corporate",
    name: "Corporate Member",
    price: "₹2,51,000",
    featured: true,
    features: [
      "Everything in Associate",
      "Dedicated support & account manager",
      "Exclusive networking circles",
      "Priority access to trade delegations",
      "Logo on event banners & communications",
    ],
  },
  {
    value: "patron",
    name: "Patron Member",
    price: "₹5,00,000",
    featured: false,
    features: [
      "Everything in Corporate",
      "Premium branding across platforms",
      "Speaking at flagship events",
      "VIP access to all events & summits",
      "Strategic advisory services",
    ],
  },
];

const countries = [
  "India",
  "Nepal",
  "Bangladesh",
  "Sri Lanka",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Singapore",
  "Other",
];

const industries = [
  "Information Technology",
  "Manufacturing",
  "Real Estate & Construction",
  "Hospitality & Tourism",
  "Finance & Banking",
  "Education & Training",
  "Healthcare & Pharmaceuticals",
  "Import & Export",
  "Media & Entertainment",
  "Logistics & Supply Chain",
  "Agriculture & Food Processing",
  "Energy & Infrastructure",
  "Legal & Consulting",
  "Other",
];

const companyTypes = [
  "Sole Proprietorship",
  "Partnership",
  "Private Limited",
  "Limited Liability Partnership (LLP)",
  "Public Limited",
  "One Person Company (OPC)",
  "Section 8 Company",
  "Foreign Company",
  "Other",
];

const interests = [
  { value: "trade-export", label: "Trade & Export" },
  { value: "import-sourcing", label: "Import & Sourcing" },
  { value: "tourism", label: "Tourism" },
  { value: "msme", label: "MSME" },
  { value: "corporate-networking", label: "Corporate Networking" },
  { value: "investment", label: "Investment" },
  { value: "indo-nepal", label: "Indo-Nepal Cooperation" },
  { value: "events", label: "Events" },
  { value: "policy", label: "Policy Advocacy" },
];

const documents = [
  { value: "pan", label: "PAN Card" },
  { value: "gst", label: "GST Certificate" },
  { value: "moa", label: "Memorandum of Association (MOA)" },
  { value: "incorporation", label: "Company Incorporation Certificate" },
  { value: "balance-sheet", label: "Balance Sheet" },
  { value: "other", label: "Other (Specify)" },
];

const steps = [
  { num: 1, label: "Choose Plan" },
  { num: 2, label: "Personal Info" },
  { num: 3, label: "Company Info" },
  { num: 4, label: "Payment" },
  { num: 5, label: "Confirmation" },
];

const nextSteps = [
  {
    title: "Application Review",
    desc: "Our membership committee will review your application and verify the submitted documents within 2-3 business days.",
  },
  {
    title: "Confirmation Email",
    desc: "Once approved, you'll receive a welcome email with your digital membership card and login credentials for the member portal.",
  },
  {
    title: "Access Your Dashboard",
    desc: "Log in to your member dashboard to manage your profile, register for events, and connect with the ECCI network.",
  },
  {
    title: "Join the Community",
    desc: "Attend your first networking event, explore the business directory, and discover exclusive member benefits.",
  },
];

export default function MembershipApplyPage() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("corporate");
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "upi">("bank");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [confirmedInfo, setConfirmedInfo] = useState(false);

  const currentPlan = plans.find((p) => p.value === selectedPlan) || plans[3];

  const stepStatus = (num: number) => {
    if (num === step) return "active";
    if (num < step) return "done";
    return "pending";
  };

  return (
    <PublicLayout activeNav="membership">
      <div className="min-h-screen bg-ice-tint pb-20 pt-[72px]">
        {/* Breadcrumb */}
        <div className="bg-white py-8">
          <div className="mx-auto max-w-[1200px] px-6">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="text-ice-blue transition-colors hover:text-crimson">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/membership" className="text-ice-blue transition-colors hover:text-crimson">
                Membership
              </Link>
              <span className="text-gray-400">/</span>
              <span>Register</span>
            </nav>
          </div>
        </div>

        {/* Stepper */}
        <div className="border-b border-border-gray bg-white py-6">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="flex flex-wrap items-center justify-center gap-0 md:flex-nowrap">
              {steps.map((s, idx) => {
                const status = stepStatus(s.num);
                const isLast = idx === steps.length - 1;
                return (
                  <div key={s.num} className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all ${
                          status === "active" || status === "done"
                            ? "border-crimson bg-crimson text-white"
                            : "border-gray-300 bg-white text-gray-400"
                        }`}
                      >
                        {s.num}
                      </div>
                      <div
                        className={`hidden whitespace-nowrap text-xs font-medium md:block ${
                          status === "active" ? "font-semibold text-crimson" : ""
                        } ${status === "done" ? "text-crimson" : ""} ${
                          status === "pending" ? "text-gray-500" : ""
                        }`}
                      >
                        {s.label}
                      </div>
                    </div>
                    {!isLast && (
                      <div
                        className={`mx-3 h-0.5 w-8 flex-shrink-0 transition-colors md:w-[60px] ${
                          status === "done" ? "bg-crimson" : "bg-gray-300"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-6">
          {/* Step 1: Choose Plan */}
          {step === 1 && (
            <Reveal animation="fade-in">
              <section className="mt-10 rounded-xl border border-border-gray bg-white p-6 md:p-10">
                <div className="mb-10 text-center">
                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-crimson">
                    Step 1 of 5
                  </div>
                  <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">
                    Choose Your Membership Plan
                  </h2>
                  <p className="mx-auto max-w-xl text-lg text-gray-600">
                    Select the tier that best fits your business needs. All plans include core portal access and directory listing.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {plans.map((plan) => (
                    <label key={plan.value} className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="plan"
                        value={plan.value}
                        checked={selectedPlan === plan.value}
                        onChange={() => setSelectedPlan(plan.value)}
                        className="peer sr-only"
                      />
                      {plan.featured && (
                        <span className="absolute -top-px left-1/2 z-10 -translate-x-1/2 rounded-b-md bg-crimson px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                          Most Popular
                        </span>
                      )}
                      <div
                        className={`h-full rounded-xl border-2 p-6 text-center transition-all hover:-translate-y-0.5 hover:border-ice-blue hover:shadow-md peer-checked:border-crimson peer-checked:shadow-[0_0_0_3px_rgba(158,11,25,0.12)] ${
                          plan.featured ? "border-crimson" : "border-border-gray"
                        }`}
                      >
                        <div
                          className={`mx-auto mb-4 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                            selectedPlan === plan.value
                              ? "border-crimson bg-crimson"
                              : "border-gray-400"
                          }`}
                        >
                          {selectedPlan === plan.value && (
                            <span className="h-2 w-2 rounded-full bg-white" />
                          )}
                        </div>
                        <div className="mb-2 font-heading text-lg text-navy">{plan.name}</div>
                        <div className="font-heading text-3xl font-bold text-crimson">
                          {plan.price}
                        </div>
                        <div className="mb-5 text-xs uppercase tracking-widest text-gray-500">
                          per year
                        </div>
                        <ul className="mb-6 space-y-2 text-left text-sm text-gray-600">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 border-b border-gray-200 pb-2">
                              <span className="text-xs font-bold text-crimson">&#10003;</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <span
                          className={`inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-xs font-semibold transition-all ${
                            selectedPlan === plan.value
                              ? "bg-crimson text-white"
                              : "border-2 border-ice-blue bg-transparent text-navy hover:bg-navy hover:text-white"
                          }`}
                        >
                          {selectedPlan === plan.value ? "Selected" : "Select Plan"}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-md bg-crimson px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg"
                  >
                    Continue to Personal Info
                  </button>
                </div>
              </section>
            </Reveal>
          )}

          {/* Step 2: Personal Info */}
          {step === 2 && (
            <Reveal animation="fade-in">
              <section className="mt-10 rounded-xl border border-border-gray bg-white p-6 md:p-10">
                <div className="mb-10 text-center">
                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-crimson">
                    Step 2 of 5
                  </div>
                  <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">
                    Personal Information
                  </h2>
                  <p className="mx-auto max-w-xl text-lg text-gray-600">
                    Tell us about yourself. Fields marked with * are required.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="email@example.com"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      We&apos;ll send a verification link to this address.
                    </p>
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">
                      Date of Birth *
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="DD / MM / YYYY"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">
                      Government ID Number{" "}
                      <span className="font-normal text-gray-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="PAN / Aadhaar / Passport"
                    />
                  </div>
                </div>

                <hr className="my-8 border-border-gray" />

                <h3 className="mb-6 font-heading text-lg text-navy">Residential Address</h3>

                <div className="mb-5">
                  <label className="mb-2 block text-sm font-semibold text-navy">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                    placeholder="House No., Street, Landmark"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">City *</label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="City"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">State *</label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="State"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">Country *</label>
                    <select className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10">
                      <option value="">Select country</option>
                      {countries.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-5 max-w-[240px]">
                  <label className="mb-2 block text-sm font-semibold text-navy">
                    PIN / Postal Code
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                    placeholder="PIN code"
                  />
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="rounded-md border-2 border-ice-blue bg-transparent px-8 py-4 text-base font-semibold text-navy transition-all hover:-translate-y-px hover:bg-navy hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="rounded-md bg-crimson px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg"
                  >
                    Next: Company Information
                  </button>
                </div>
              </section>
            </Reveal>
          )}

          {/* Step 3: Company Info */}
          {step === 3 && (
            <Reveal animation="fade-in">
              <section className="mt-10 rounded-xl border border-border-gray bg-white p-6 md:p-10">
                <div className="mb-10 text-center">
                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-crimson">
                    Step 3 of 5
                  </div>
                  <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">
                    Company Information
                  </h2>
                  <p className="mx-auto max-w-xl text-lg text-gray-600">
                    Details about your business help us tailor benefits and directory visibility.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="Legal business name"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">Industry *</label>
                    <select className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10">
                      <option value="">Select industry</option>
                      {industries.map((i) => (
                        <option key={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">
                      Company Type *
                    </label>
                    <select className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10">
                      <option value="">Select type</option>
                      {companyTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">
                      Registration Number *
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="CIN / Company Reg. No."
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">
                      Tax Identification Number (GST / PAN)
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="GSTIN or PAN"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">
                      Company Website
                    </label>
                    <input
                      type="url"
                      className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="https://www.example.com"
                    />
                  </div>
                </div>

                <hr className="my-8 border-border-gray" />

                <h3 className="mb-6 font-heading text-lg text-navy">Company Address</h3>

                <div className="mb-5">
                  <label className="mb-2 block text-sm font-semibold text-navy">
                    Registered Office Address *
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                    placeholder="Building, Street, Area"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">City *</label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="City"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">State *</label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="State"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">Country *</label>
                    <select className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10">
                      <option value="">Select country</option>
                      {countries.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <hr className="my-8 border-border-gray" />

                <div className="mb-5">
                  <label className="mb-2 block text-sm font-semibold text-navy">
                    Company Description
                  </label>
                  <textarea
                    className="min-h-[120px] w-full resize-y rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                    placeholder="Briefly describe your company's operations, products, and services (max 500 characters)"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    This will appear on your directory listing.
                  </p>
                </div>

                <hr className="my-8 border-border-gray" />

                <h3 className="mb-2 font-heading text-lg text-navy">Areas of Interest</h3>
                <p className="mb-4 text-xs text-gray-500">Select all that apply to your business needs.</p>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {interests.map((item) => (
                    <label key={item.value} className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        name="interest[]"
                        value={item.value}
                        className="h-4 w-4 accent-crimson"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>

                <hr className="my-8 border-border-gray" />

                <h3 className="mb-2 font-heading text-lg text-navy">Documents Enclosed</h3>
                <p className="mb-4 text-xs text-gray-500">
                  Upload the required documents for membership verification.
                </p>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {documents.map((doc) => (
                    <label key={doc.value} className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        name="docs[]"
                        value={doc.value}
                        className="h-4 w-4 accent-crimson"
                      />
                      <span>{doc.label}</span>
                    </label>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-md border-2 border-ice-blue bg-transparent px-8 py-4 text-base font-semibold text-navy transition-all hover:-translate-y-px hover:bg-navy hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="rounded-md bg-crimson px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg"
                  >
                    Next: Payment
                  </button>
                </div>
              </section>
            </Reveal>
          )}

          {/* Step 4: Payment */}
          {step === 4 && (
            <Reveal animation="fade-in">
              <section className="mt-10 rounded-xl border border-border-gray bg-white p-6 md:p-10">
                <div className="mb-10 text-center">
                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-crimson">
                    Step 4 of 5
                  </div>
                  <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Payment</h2>
                  <p className="mx-auto max-w-xl text-lg text-gray-600">
                    Choose your preferred payment method and upload proof of transaction.
                  </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
                  <div>
                    <div className="mb-5">
                      <label className="mb-2 block text-sm font-semibold text-navy">
                        Select Payment Method *
                      </label>
                      <div className="grid gap-4 md:grid-cols-2">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("bank")}
                          className={`rounded-xl border-2 p-6 text-center transition-all ${
                            paymentMethod === "bank"
                              ? "border-crimson shadow-[0_0_0_3px_rgba(158,11,25,0.12)]"
                              : "border-border-gray hover:border-ice-blue"
                          }`}
                        >
                          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-ice-tint text-navy">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                              <line x1="1" y1="10" x2="23" y2="10" />
                            </svg>
                          </div>
                          <div className="text-sm font-semibold text-navy">Bank Transfer</div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("upi")}
                          className={`rounded-xl border-2 p-6 text-center transition-all ${
                            paymentMethod === "upi"
                              ? "border-crimson shadow-[0_0_0_3px_rgba(158,11,25,0.12)]"
                              : "border-border-gray hover:border-ice-blue"
                          }`}
                        >
                          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-ice-tint text-navy">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                          </div>
                          <div className="text-sm font-semibold text-navy">UPI / QR Code</div>
                        </button>
                      </div>
                    </div>

                    <hr className="my-8 border-border-gray" />

                    {paymentMethod === "bank" && (
                      <div className="mb-6 rounded-xl border border-border-gray bg-ice-tint p-6">
                        <div className="mb-4 text-sm font-bold text-navy">Bank Transfer Details</div>
                        <div className="grid gap-3 text-sm md:grid-cols-2">
                          <div>
                            <span className="text-gray-500">Bank Name:</span>{" "}
                            <strong className="text-navy">Punjab National Bank</strong>
                          </div>
                          <div>
                            <span className="text-gray-500">Account Name:</span>{" "}
                            <strong className="text-navy">Everest Chamber of Commerce and Industries</strong>
                          </div>
                          <div>
                            <span className="text-gray-500">Account No:</span>{" "}
                            <strong className="text-navy">17412193000083</strong>
                          </div>
                          <div>
                            <span className="text-gray-500">IFSC Code:</span>{" "}
                            <strong className="text-navy">PUNB0174110</strong>
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "upi" && (
                      <div className="mb-6 rounded-xl border border-border-gray bg-ice-tint p-6 text-center">
                        <div className="mb-4 text-sm font-bold text-navy">UPI / QR Code Payment</div>
                        <p className="text-sm text-gray-600">
                          Scan the QR code or pay via UPI to{" "}
                          <strong className="text-navy">info@everestchamber.com</strong>
                        </p>
                        <div className="mx-auto mt-4 flex h-40 w-40 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white text-xs text-gray-400">
                          QR Code Placeholder
                        </div>
                      </div>
                    )}

                    <hr className="my-8 border-border-gray" />

                    <div className="mb-5">
                      <label className="mb-2 block text-sm font-semibold text-navy">
                        Upload Payment Proof *
                      </label>
                      <div className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 p-10 text-center transition-all hover:border-ice-blue hover:bg-ice-tint">
                        <div className="mx-auto mb-3 text-gray-400">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto h-10 w-10">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-500">
                          <strong className="text-crimson">Click to upload</strong> or drag and drop
                          <br />
                          <span className="text-gray-400">PNG, JPG or PDF (max 5MB)</span>
                        </div>
                      </div>
                    </div>

                    <hr className="my-8 border-border-gray" />

                    <div className="mb-5">
                      <label className="flex cursor-pointer items-start gap-2 text-sm text-gray-600">
                        <input
                          type="checkbox"
                          checked={agreedTerms}
                          onChange={(e) => setAgreedTerms(e.target.checked)}
                          className="mt-1 h-4 w-4 accent-crimson"
                        />
                        <span>
                          I agree to the{" "}
                          <Link href="/terms" className="font-semibold text-crimson">
                            Terms &amp; Conditions
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="font-semibold text-crimson">
                            Privacy Policy
                          </Link>{" "}
                          of ECCI
                        </span>
                      </label>
                    </div>
                    <div className="mb-5">
                      <label className="flex cursor-pointer items-start gap-2 text-sm text-gray-600">
                        <input
                          type="checkbox"
                          checked={confirmedInfo}
                          onChange={(e) => setConfirmedInfo(e.target.checked)}
                          className="mt-1 h-4 w-4 accent-crimson"
                        />
                        <span>I confirm that all information provided is accurate and complete</span>
                      </label>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="rounded-md border-2 border-ice-blue bg-transparent px-8 py-4 text-base font-semibold text-navy transition-all hover:-translate-y-px hover:bg-navy hover:text-white"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(5)}
                        disabled={!agreedTerms || !confirmedInfo}
                        className="w-full rounded-md bg-crimson px-6 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
                      >
                        Submit Registration &amp; Payment
                      </button>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="sticky top-[96px] h-fit rounded-xl border border-border-gray bg-gray-100 p-6">
                    <h3 className="mb-6 border-b border-border-gray pb-4 font-heading text-lg text-navy">
                      Order Summary
                    </h3>
                    <div className="mb-3 flex items-center justify-between text-sm">
                      <span className="text-gray-500">Selected Plan</span>
                      <span className="font-semibold text-navy">{currentPlan.name}</span>
                    </div>
                    <div className="mb-3 flex items-center justify-between text-sm">
                      <span className="text-gray-500">Duration</span>
                      <span>1 Year</span>
                    </div>
                    <div className="mb-3 flex items-center justify-between text-sm">
                      <span className="text-gray-500">Discount</span>
                      <span className="text-green-800">—</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t-2 border-navy pt-4 text-base font-bold text-navy">
                      <span>Total</span>
                      <span className="text-xl text-crimson">{currentPlan.price}</span>
                    </div>
                    <div className="mt-6 rounded-lg border border-border-gray bg-white p-4">
                      <div className="flex items-start gap-2 text-xs text-gray-500">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-3.5 w-3.5 flex-shrink-0">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="16" x2="12" y2="12" />
                          <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                        Membership is subject to approval. You will receive a confirmation email within 2-3 business days.
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Reveal>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <Reveal animation="fade-in">
              <section className="mt-10 rounded-xl border border-border-gray bg-gray-100 p-6 md:p-10">
                <div className="mx-auto max-w-[560px] rounded-xl border border-border-gray bg-white p-10 text-center">
                  <div className="mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-green-200">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9 text-green-900">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">
                    Registration Successful!
                  </h2>
                  <p className="mx-auto max-w-xl text-lg text-gray-600">
                    Thank you for joining the Everest Chamber of Commerce and Industries. Your application is being reviewed.
                  </p>
                </div>

                <div className="mx-auto mt-6 max-w-[560px] rounded-xl border border-border-gray bg-white p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gray-500">Member ID</div>
                      <div className="mt-1 font-heading text-2xl font-bold text-navy">ECCI-2024-0482</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-widest text-gray-500">Status</div>
                      <div className="mt-2 inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-yellow-800">
                        Under Review
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-6 max-w-[560px] overflow-hidden rounded-xl border border-border-gray bg-white text-left">
                  <div className="border-b border-border-gray px-6 py-4">
                    <h3 className="font-body text-base font-semibold text-navy">What Happens Next?</h3>
                  </div>
                  {nextSteps.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 border-b border-gray-200 px-6 py-4 last:border-b-0">
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-ice-tint text-xs font-bold text-crimson">
                        {idx + 1}
                      </div>
                      <p className="text-sm leading-relaxed text-gray-600">
                        <strong className="text-navy">{item.title}</strong> — {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/portal/dashboard"
                    className="rounded-md bg-crimson px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg"
                  >
                    Go to Dashboard
                  </Link>
                  <Link
                    href="/"
                    className="rounded-md border-2 border-ice-blue bg-transparent px-8 py-4 text-base font-semibold text-navy transition-all hover:-translate-y-px hover:bg-navy hover:text-white"
                  >
                    Return to Home
                  </Link>
                </div>
              </section>
            </Reveal>
          )}
        </div>
      </div>
    </PublicLayout>
  );
}
