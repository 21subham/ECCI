"use client";

import Image from "next/image";
import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";
import { Reveal } from "../../components/Reveal";

const events = [
  {
    title: "Indo Nepal Trade Festival 2026",
    date: "20–22 Feb 2026",
    location: "PHD House, New Delhi",
    desc: "India's premier bilateral trade festival connecting businesses across borders. Featuring 200+ exhibitors, cultural performances, B2B networking, and investment showcases at PHD House, New Delhi.",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=700&h=450&fit=crop",
    featured: true,
    href: "/events/indo-nepal-trade-festival",
  },
  {
    title: "Startup Networking Meetup",
    date: "15 Mar 2026",
    location: "ECCI Conference Hall, Delhi",
    desc: "A curated networking evening bringing together ECCI's startup members, investors, and mentors for meaningful connections and collaboration opportunities.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop",
    href: "/events/indo-nepal-trade-festival",
  },
  {
    title: "International Trade Delegation",
    date: "10–12 Apr 2026",
    location: "New Delhi & NCR",
    desc: "ECCI hosts a high-level business delegation from Southeast Asia for cross-border trade discussions, site visits, and B2B matchmaking sessions.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=300&fit=crop",
    href: "/events/indo-nepal-trade-festival",
  },
  {
    title: "Annual Industry Summit 2026",
    date: "25–26 Jun 2026",
    location: "New Delhi",
    desc: "ECCI's flagship thought leadership event featuring keynote addresses, panel discussions, and policy recommendations from top industry captains and government officials.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=300&fit=crop",
    href: "/events/indo-nepal-trade-festival",
  },
  {
    title: "Export Documentation Workshop",
    date: "18 Jul 2026",
    location: "ECCI Training Centre",
    desc: "Hands-on workshop covering export-import documentation, customs procedures, and compliance requirements for businesses looking to expand internationally.",
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&h=300&fit=crop",
    href: "/events/indo-nepal-trade-festival",
  },
  {
    title: "Annual General Meeting 2026",
    date: "15 Aug 2026",
    location: "New Delhi",
    desc: "ECCI's Annual General Meeting for all members. Review of annual performance, financial statements, elections, and strategic roadmap for the coming year.",
    image: "https://images.unsplash.com/photo-1577962917302-cd1db5cd1b52?w=600&h=300&fit=crop",
    href: "/portal/governance",
  },
];

export default function EventsPage() {
  return (
    <PublicLayout activeNav="events">
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden pt-[72px]" style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-dark) 50%, var(--color-navy-light) 100%)" }}>
        <div className="absolute inset-0 bg-[url('https://everestchamber.com/wp-content/uploads/2025/01/Seminar5.jpg')] bg-cover bg-center opacity-12" />
        <div className="relative z-10 mx-auto max-w-[800px] px-6 py-24 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.15em] text-crimson-light">
            ECCI Events
          </span>
          <h1 className="mb-6 font-heading text-4xl text-white md:text-5xl lg:text-[3.75rem]">
            Events &amp; Programmes
          </h1>
          <p className="mx-auto max-w-[600px] text-lg leading-relaxed text-gray-300">
            From flagship trade festivals to networking meetups, industry summits to cultural showcases — discover all ECCI events here.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-8" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em]">
              Upcoming
            </span>
            <h2 className="font-heading text-3xl text-navy md:text-4xl">Featured Events</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, idx) => (
              <Reveal key={idx} animation="fade-in-up" delay={(idx % 4 + 1) as 1 | 2 | 3 | 4}>
                <div className={`event-card flex flex-col overflow-hidden rounded-lg border border-border-gray transition-all hover:border-ice-blue hover:shadow-lg ${event.featured ? "lg:col-span-3 lg:grid lg:grid-cols-2" : ""}`}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={700}
                    height={300}
                    className={`event-card__img h-[200px] w-full object-cover lg:h-full ${event.featured ? "lg:min-h-[300px]" : ""}`}
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-3 py-1 text-xs font-bold text-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {event.date}
                    </div>
                    <h3 className={`font-heading text-navy mb-2 ${event.featured ? "text-2xl" : "text-lg"}`}>{event.title}</h3>
                     <p className="text-sm text-gray-500 mb-4 flex-1">{event.desc}</p>
                    <div className="flex items-center justify-between pt-3 text-xs text-gray-400 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {event.location}
                      </span>
                      <Link href={event.href} className={`btn btn--sm ${event.featured ? "btn--primary" : "btn--outline"}`}>
                        {event.featured ? "View Details" : "Details"}
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ice-tint py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-[600px] text-center">
            <Reveal animation="fade-in">
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
                Archive
              </span>
              <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">Past Event Highlights</h2>
              <p className="mb-6 text-gray-600">
                Browse photo galleries, event reports, and recordings from ECCI's past events — including the Indo Nepal Trade Festival archives spanning multiple editions.
              </p>
              <Link href="/events/indo-nepal-trade-festival" className="inline-flex items-center justify-center rounded-md bg-crimson px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark">
                View Event Details
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}