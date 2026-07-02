"use client";

import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";
import { Reveal } from "../../components/Reveal";

const contactSubjects = [
  "General Inquiry",
  "Membership Information",
  "Partnership Opportunity",
  "Event Inquiry",
  "Media & Press",
  "Technical Support",
];

const officeHours = [
  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  return (
    <PublicLayout activeNav="contact">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy pb-12 pt-[120px] text-white lg:pt-[132px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/88 to-[#0D1B2E]/92" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Link href="/" className="font-medium text-crimson transition-colors hover:text-crimson-dark">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <span>Contact Us</span>
            </div>
          </div>
          <Reveal animation="fade-in">
            <h1 className="mb-3 font-heading text-3xl text-white md:text-4xl lg:text-5xl">
              Contact Us
            </h1>
            <p className="max-w-[560px] text-lg text-white/70">
              Have a question, partnership inquiry, or need assistance with membership? We&apos;re here to help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <Reveal animation="fade-in">
              <div className="rounded-xl border border-border-gray bg-white p-8">
                <h2 className="mb-2 font-heading text-2xl text-navy">Send Us a Message</h2>
                <p className="mb-8 text-sm text-gray-500">
                  Fill out the form below and our team will respond within 2 business days.
                </p>
                <form>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="mb-5">
                      <label className="mb-2 block text-sm font-semibold text-navy">Full Name</label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="mb-2 block text-sm font-semibold text-navy">Email Address</label>
                      <input
                        type="email"
                        className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="mb-5">
                      <label className="mb-2 block text-sm font-semibold text-navy">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="mb-2 block text-sm font-semibold text-navy">Company</label>
                      <input
                        type="text"
                        className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">Subject</label>
                    <select className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10">
                      {contactSubjects.map((subject) => (
                        <option key={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-navy">Message</label>
                    <textarea
                      className="min-h-[140px] w-full resize-y rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:ring-2 focus:ring-ice-blue/10"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-crimson px-6 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg"
                  >
                    Submit Message
                  </button>
                </form>
              </div>
            </Reveal>

            {/* Info Cards */}
            <div>
              <Reveal animation="fade-in">
                <div className="mb-5 rounded-xl border border-border-gray bg-white p-6 transition-all hover:border-ice-blue hover:shadow-md">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-ice-tint text-crimson">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="mb-3 font-body text-base font-bold text-navy">India Office</h3>
                  <div className="mb-2 flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>D-71C, 3rd Floor, Vishwakarma Colony, New Delhi – 110044, India</span>
                  </div>
                  <div className="mb-2 flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>info@everestchamber.com</span>
                  </div>
                </div>
              </Reveal>

              <Reveal animation="fade-in">
                <div className="mb-5 rounded-xl border border-border-gray bg-white p-6 transition-all hover:border-ice-blue hover:shadow-md">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-ice-tint text-crimson">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="mb-3 font-body text-base font-bold text-navy">Nepal Office</h3>
                  <div className="mb-2 flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Kathmandu, Nepal</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm leading-relaxed text-gray-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>info@everestchamber.com</span>
                  </div>
                </div>
              </Reveal>

              <Reveal animation="fade-in">
                <div className="rounded-xl border border-border-gray bg-white p-6 transition-all hover:border-ice-blue hover:shadow-md">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-ice-tint text-crimson">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <h3 className="mb-3 font-body text-base font-bold text-navy">Office Hours</h3>
                  {officeHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between border-b border-gray-100 py-2 text-sm last:border-b-0"
                    >
                      <strong className="font-semibold text-navy">{item.day}</strong>
                      <span className="text-gray-600">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
