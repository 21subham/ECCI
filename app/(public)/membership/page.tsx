"use client";

import { useState } from "react";
import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";
import { Reveal } from "../../components/Reveal";
import { CTABanner } from "../../components/CTABanner";

const tiers = [
  {
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
    name: "Specialist Member",
    price: "₹21,000",
    featured: false,
    features: [
      "All General benefits",
      "Training & capacity building",
      "Enhanced directory listing",
      "Priority event registration",
      "Dedicated support channel",
    ],
  },
  {
    name: "Associate Member",
    price: "₹51,000",
    featured: false,
    features: [
      "All Specialist benefits",
      "Speaking opportunities",
      "Discounted event stall space",
      "Priority event visibility",
      "Committee participation",
    ],
  },
  {
    name: "Corporate Member",
    price: "₹2,51,000",
    featured: true,
    features: [
      "All Associate benefits",
      "Dedicated support & account manager",
      "Exclusive networking circles",
      "Priority access to trade delegations",
      "Logo on event banners & communications",
    ],
  },
  {
    name: "Patron Member",
    price: "₹5,00,000",
    featured: false,
    features: [
      "All Corporate benefits",
      "Premium branding across platforms",
      "Speaking at flagship events",
      "VIP access to all events & summits",
      "Strategic advisory services",
    ],
  },
];

const comparison = [
  { feature: "Member Profile on Website", general: true, specialist: true, associate: true, corporate: true, patron: true },
  { feature: "Members-Only Directory", general: true, specialist: true, associate: true, corporate: true, patron: true },
  { feature: "Events at Member Rates", general: true, specialist: true, associate: true, corporate: true, patron: true },
  { feature: "Business Leads & Referrals", general: true, specialist: true, associate: true, corporate: true, patron: true },
  { feature: "Training & Capacity Building", general: false, specialist: true, associate: true, corporate: true, patron: true },
  { feature: "Speaking Opportunities", general: false, specialist: false, associate: true, corporate: true, patron: true },
  { feature: "Discounted Stall Space", general: false, specialist: false, associate: true, corporate: true, patron: true },
  { feature: "Dedicated Account Manager", general: false, specialist: false, associate: false, corporate: true, patron: true },
  { feature: "Exclusive Networking Circles", general: false, specialist: false, associate: false, corporate: true, patron: true },
  { feature: "Priority Trade Delegations", general: false, specialist: false, associate: false, corporate: true, patron: true },
  { feature: "Logo on Event Banners", general: false, specialist: false, associate: false, corporate: true, patron: true },
  { feature: "Premium Branding", general: false, specialist: false, associate: false, corporate: false, patron: true },
  { feature: "VIP Event Access", general: false, specialist: false, associate: false, corporate: false, patron: true },
  { feature: "Strategic Advisory", general: false, specialist: false, associate: false, corporate: false, patron: true },
];

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Networking Access",
    desc: "Connect with 500+ business leaders, policymakers, and entrepreneurs across India and Nepal.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Directory Listing",
    desc: "Get listed in our members-only directory and increase your business visibility across industries.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Event Participation",
    desc: "Attend seminars, trade fairs, workshops, and networking events at exclusive member rates.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Business Support",
    desc: "Access referrals, trade leads, and policy advocacy support for your business growth journey.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Credibility & Trust",
    desc: "Gain international credibility through ECCI's partnerships and recognized chamber membership.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Policy Influence",
    desc: "Have your voice heard on trade policies, regulations, and bilateral issues affecting your industry.",
  },
];

const steps = [
  {
    num: "1",
    title: "Choose Your Plan",
    desc: "Select the membership tier that best fits your business — from General to Patron — and review the benefits included.",
  },
  {
    num: "2",
    title: "Complete Application",
    desc: "Fill in your business details, upload required documents (PAN, GST, MOA), and submit your application with payment proof.",
  },
  {
    num: "3",
    title: "Get Approved & Connected",
    desc: "Once approved, receive your member ID and unlock access to the members-only directory, events, resources, and networking.",
  },
];

const faqs = [
  {
    question: "How do I apply for ECCI membership?",
    answer: (
      <>
        Visit our{" "}
        <Link href="/membership/apply" className="font-semibold text-crimson">
          Registration Page
        </Link>{" "}
        and complete the 5-step form: choose your plan, fill personal details, company information, upload payment proof, and submit. You will receive a Member ID within 3–5 business days after verification.
      </>
    ),
  },
  {
    question: "Can I upgrade my membership later?",
    answer: "Yes. You can upgrade at any time by paying the difference between your current tier and the new tier. The upgrade takes effect immediately and your renewal date is adjusted proportionally.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept bank transfer (RTGS/NEFT), demand draft, and online payment. For bank transfers: Punjab National Bank, Account No. 17412193000083, IFSC: PUNB0174110, Branch: New Delhi-Bhogal. You can also upload payment proof through the registration form.",
  },
  {
    question: "What are the benefits of joining ECCI?",
    answer: "ECCI provides business networking, legal and financial advisory, trade fair access, international trade missions, government policy advocacy, cross-border trade support, and a platform to grow your brand globally. Higher tiers unlock additional benefits like board advisory roles and named event sponsorships.",
  },
  {
    question: "How do I renew my membership?",
    answer: "You will receive a renewal reminder 30 days before your membership expires. Log in to your member dashboard, review your plan, and complete the renewal payment. Members in good standing receive a 10% early renewal discount.",
  },
];

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <PublicLayout activeNav="membership">
      {/* Hero */}
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden pt-[72px]">
        <div className="absolute inset-0 bg-[url('https://everestchamber.com/wp-content/uploads/2025/01/Seminar5.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 mx-auto max-w-[800px] px-6 py-24 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.15em] text-gray-300">
            Membership
          </span>
          <h1 className="mb-6 font-heading text-4xl text-white md:text-5xl lg:text-[3.75rem]">
            Membership Plans
          </h1>
          <p className="mx-auto max-w-[600px] text-lg leading-relaxed text-gray-300">
            Joining ECCI means becoming part of a global network that supports and promotes businesses. Whether you are a startup, SME, or an established enterprise, our platform offers you the tools to expand, innovate, and succeed.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-16 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
              Choose Your Plan
            </span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Membership Tiers</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              Select the membership level that best fits your business needs and ambitions.
            </p>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, idx) => (
              <Reveal key={tier.name} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div
                  className={`relative rounded-xl border p-8 text-center transition-all hover:-translate-y-1 hover:shadow-xl ${
                    tier.featured
                      ? "border-crimson shadow-lg"
                      : "border-border-gray bg-white"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-md bg-crimson px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      Recommended
                    </div>
                  )}
                  <div className="mb-4 font-heading text-xl text-navy">{tier.name}</div>
                  <div className="font-heading text-4xl font-bold text-crimson">{tier.price}</div>
                  <div className="mb-6 text-sm text-gray-500">per year</div>
                  <ul className="mb-8 space-y-2 text-left">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 border-b border-gray-200 pb-2 text-sm text-gray-600">
                        <span className="text-xs font-bold text-crimson">&#10003;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/membership/apply"
                    className={`inline-flex w-full items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-px ${
                      tier.featured
                        ? "bg-crimson text-white hover:bg-crimson-dark hover:shadow-lg"
                        : "border-2 border-ice-blue bg-transparent text-navy hover:bg-navy hover:text-white"
                    }`}
                  >
                    Select Plan
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-ice-tint py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
              Compare Plans
            </span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Benefits Comparison</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              A detailed look at what each membership tier offers.
            </p>
          </Reveal>
          <Reveal animation="fade-in-up">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-xl bg-white shadow-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-4 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-3 py-4 text-center text-sm font-semibold">General</th>
                    <th className="px-3 py-4 text-center text-sm font-semibold">Specialist</th>
                    <th className="px-3 py-4 text-center text-sm font-semibold">Associate</th>
                    <th className="px-3 py-4 text-center text-sm font-semibold">Corporate</th>
                    <th className="px-3 py-4 text-center text-sm font-semibold">Patron</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr key={row.feature} className={idx === comparison.length - 1 ? "" : "border-b border-border-gray"}>
                      <td className="px-4 py-3 text-left text-sm font-medium text-gray-700">{row.feature}</td>
                      <td className="px-3 py-3 text-center text-sm font-bold text-crimson">{row.general ? "\u2713" : "\u2014"}</td>
                      <td className="px-3 py-3 text-center text-sm font-bold text-crimson">{row.specialist ? "\u2713" : "\u2014"}</td>
                      <td className="px-3 py-3 text-center text-sm font-bold text-crimson">{row.associate ? "\u2713" : "\u2014"}</td>
                      <td className="px-3 py-3 text-center text-sm font-bold text-crimson">{row.corporate ? "\u2713" : "\u2014"}</td>
                      <td className="px-3 py-3 text-center text-sm font-bold text-crimson">{row.patron ? "\u2713" : "\u2014"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-ice-tint py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-16 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
              Why Join
            </span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Benefits Across All Tiers</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              Every ECCI member enjoys these core benefits regardless of their chosen tier.
            </p>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, idx) => (
              <Reveal key={item.title} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div className="rounded-xl border border-border-gray bg-white p-8 text-center transition-all hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-ice-tint text-crimson">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 font-body text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
              Process
            </span>
            <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">How to Become a Member</h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600">
              Three simple steps to join ECCI and unlock global opportunities.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, idx) => (
              <Reveal key={step.num} animation="fade-in" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div className="rounded-xl border border-border-gray bg-ice-tint p-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-crimson font-heading text-2xl font-bold text-white">
                    {step.num}
                  </div>
                  <h3 className="mb-3 font-body text-lg font-semibold text-navy">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
              Questions
            </span>
            <h2 className="font-heading text-3xl text-navy md:text-4xl">Frequently Asked Questions</h2>
          </Reveal>
          <div className="mx-auto max-w-[720px]">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div className="mb-3 overflow-hidden rounded-lg border border-border-gray">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between bg-white px-6 py-5 text-left font-body text-base font-semibold text-navy transition-colors hover:bg-gray-100"
                  >
                    {faq.question}
                    <span
                      className={`ml-4 flex-shrink-0 text-xl text-gray-500 transition-transform ${
                        openFaq === idx ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaq === idx ? "max-h-[300px]" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Join?"
        description="Take the next step toward success. Join ECCI today and become part of a global network driving economic progress."
        primaryHref="/membership/apply"
        primaryLabel="Register Now"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </PublicLayout>
  );
}
