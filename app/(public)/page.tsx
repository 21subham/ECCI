"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PublicLayout } from "../components/PublicLayout";
import { SectionHeader } from "../components/SectionHeader";
import { CTABanner } from "../components/CTABanner";
import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { useParallax } from "../hooks/useScrollEffects";

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  useParallax(heroRef, true);

  return (
    <PublicLayout activeNav="home">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex min-h-[700px] items-center justify-center overflow-hidden pt-[72px]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(17,35,59,0.78) 0%, rgba(17,35,59,0.78) 100%), url('https://everestchamber.com/wp-content/uploads/2025/01/Seminar5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <div className="relative z-10 mx-auto max-w-[800px] px-6 py-24 text-center">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-crimson-light" />
            Est. 2008 &mdash; Registered Chamber
          </span>
          <h1 className="mb-6 font-heading text-4xl leading-tight text-white md:text-5xl lg:text-[3.75rem]">
            Connecting <span className="text-crimson-light">Businesses</span>{" "}
            Across Borders
          </h1>
          <p className="mx-auto mb-10 max-w-[600px] text-lg leading-relaxed text-gray-300">
            Empowering regional commerce and fostering global trade
            relationships. Join 500+ members across 15+ countries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/membership/apply"
              className="rounded-md bg-crimson px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg"
            >
              Become a Member
            </Link>
            <Link
              href="/directory"
              className="rounded-md border-2 border-white/40 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-white hover:text-navy"
            >
              Explore Directory
            </Link>
          </div>
        </div>
      </section>

      {/* President Message */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[900px] px-6">
          <Reveal className="mb-8 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-gray-300">
              Welcome Message
            </span>
            <h2 className="font-heading text-3xl text-white md:text-4xl">
              Message from the President
            </h2>
          </Reveal>
          <Reveal animation="fade-in">
            <div className="grid items-center gap-8 md:grid-cols-[200px_1fr]">
              <div
                className="mx-auto h-[200px] w-[200px] rounded-full"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #9E0B19, #11233B), url('https://everestchamber.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-11-08-at-15.39.14_633f81df-219x300.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="text-center md:text-left">
                <p className="mb-4 text-lg italic leading-relaxed text-gray-200">
                  &ldquo;As we navigate the evolving landscape of global trade,
                  ECCI remains committed to bridging businesses across borders.
                  Together, we build prosperity.&rdquo;
                </p>
                <div className="font-semibold text-white">Yubraj Baral</div>
                <div className="text-sm text-gray-300">
                  President &amp; Chief Patron, ECCI
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Introduction Video */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[800px] px-6">
          <Reveal className="mb-8 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-gray-300">
              About ECCI
            </span>
            <h2 className="font-heading text-3xl text-white md:text-4xl">
              Introduction Video
            </h2>
          </Reveal>
          <Reveal animation="fade-in">
            <div className="overflow-hidden rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/J_iXM_kmtEM"
                title="Acharya Balkrishna's Message to ECCI Convention"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="block"
              />
            </div>
          </Reveal>
          <p className="mt-4 text-center text-sm text-gray-400">
            Watch Acharya Ji&apos;s message and learn about ECCI&apos;s mission
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { target: 500, suffix: "+", label: "Active Members" },
              { target: 15, suffix: "+", label: "Countries Reached" },
              { target: 11, suffix: "", label: "Indian States" },
              { target: 50, suffix: "+", label: "Events Hosted" },
            ].map((stat, idx) => (
              <Reveal key={stat.label} animation="fade-in" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div className="p-8">
                  <div className="mb-2 font-heading text-4xl font-bold text-white">
                    <Counter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-medium uppercase tracking-wider text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-16 text-center" animation="fade-in">
            <SectionHeader
              overline="Why ECCI"
              title="The Everest Advantage"
              subtitle="A global federation of businesses headquartered in India, fostering opportunities across diverse industries."
              centered
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "Networking",
                desc: "Connect with business leaders, entrepreneurs, and policymakers across India and Nepal through exclusive forums and events.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                ),
                title: "Wealth Creations",
                desc: "Access trade fairs, investment opportunities, and financial advisory services designed to grow your business capital.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                ),
                title: "Global Recognition",
                desc: "Gain international credibility through ECCI's partnerships with chambers across the UK, Singapore, Dubai, and the US.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                ),
                title: "Growth",
                desc: "Leverage training, workshops, and capacity-building programs to scale your operations and explore new markets.",
              },
            ].map((item, idx) => (
              <Reveal
                key={item.title}
                animation="fade-in-up"
                delay={(idx + 1) as 1 | 2 | 3 | 4}
              >
                <div className="group rounded-lg border border-border-gray bg-white p-10 text-center transition-all hover:-translate-y-1 hover:border-ice-blue hover:shadow-lg">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-ice-tint text-crimson transition-colors group-hover:bg-crimson group-hover:text-white">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-ice-tint py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal animation="fade-in-up">
            <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
                  Events &amp; Programs
                </span>
                <h2 className="mb-3 font-heading text-3xl text-navy md:text-4xl">
                  Upcoming Events
                </h2>
                <p className="max-w-xl text-lg text-gray-600">
                  Engage with key stakeholders, share market insights, and unlock
                  collaboration opportunities.
                </p>
              </div>
              <Link
                href="/events/indo-nepal-trade-festival"
                className="rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white"
              >
                View All Events
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
                date: "20–22 Feb 2026",
                tag: "Trade Fair &amp; Exhibition",
                title: "Nepal Festival Delhi 2026",
                location: "PHD House, Hauz Khas, New Delhi",
                desc: "A prestigious three-day celebration of Nepal's trade, industry, culture, and tourism featuring B2B networking, cultural performances, and panel discussions.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=250&fit=crop",
                date: "15 Mar 2026",
                tag: "Networking",
                title: "Quarterly Business Forum",
                location: "ECCI Headquarters, New Delhi",
                desc: "Join fellow members for an evening of strategic networking, industry insights, and policy discussions with key government stakeholders.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
                date: "10 Apr 2026",
                tag: "Workshop",
                title: "Trade Compliance &amp; Documentation",
                location: "Virtual &amp; In-Person",
                desc: "A hands-on workshop covering cross-border trade documentation, customs procedures, and compliance requirements for India-Nepal corridor.",
              },
            ].map((event, idx) => (
              <Reveal
                key={event.title}
                animation="fade-in-up"
                delay={(idx + 1) as 1 | 2 | 3}
              >
                <div className="overflow-hidden rounded-lg border border-border-gray bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className="relative flex h-[200px] items-center justify-center"
                    style={{
                      backgroundImage: `linear-gradient(135deg, #11233B, #1A3355), url('${event.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <span className="absolute top-4 left-4 rounded bg-crimson px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                      {event.date}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 text-xs font-bold uppercase tracking-wider text-crimson">
                      {event.tag}
                    </div>
                    <h3 className="mb-2 text-xl text-navy">{event.title}</h3>
                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 flex-shrink-0">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {event.location}
                    </div>
                    <p className="mb-6 text-sm leading-relaxed text-gray-600">
                      {event.desc}
                    </p>
                  </div>
                  <div className="px-6 pb-6">
                    <Link
                      href="/events/indo-nepal-trade-festival-2027"
                      className="rounded-md bg-crimson px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-crimson-dark"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ice-tint py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-16 text-center" animation="fade-in">
            <SectionHeader
              overline="Testimonials"
              title="What Our Members Say"
              subtitle="Hear from ECCI members about how the chamber has impacted their business."
              centered
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                initials: "RK",
                gradient: "from-navy to-ice-blue",
                quote:
                  "ECCI has opened doors for our business that we never knew existed. The connections made through networking events have led to partnerships across India and Nepal.",
                name: "Rajesh Khanna",
                role: "Director, Arch Venture International",
                rating: 5,
              },
              {
                initials: "PS",
                gradient: "from-crimson to-navy",
                quote:
                  "The membership has given us credibility in cross-border trade. The directory listing alone has brought us inquiries from Nepal, UAE, and Singapore.",
                name: "Priya Sharma",
                role: "CEO, Nepin Ventures",
                rating: 4,
              },
              {
                initials: "AM",
                gradient: "from-ice-blue to-navy",
                quote:
                  "The training programs and capacity-building workshops have been invaluable for our team. ECCI truly understands what businesses need to grow.",
                name: "Amit Mehta",
                role: "Founder, Academy of A4M Management",
                rating: 5,
              },
            ].map((t, idx) => (
              <Reveal
                key={t.name}
                animation="scale-in"
                delay={(idx + 1) as 1 | 2 | 3}
              >
                <div className="rounded-lg border border-border-gray bg-white p-8">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        className="h-4 w-4"
                        fill={i < t.rating ? "#9E0B19" : "none"}
                        stroke={i < t.rating ? "none" : "#9E0B19"}
                        strokeWidth={i < t.rating ? 0 : 1.5}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-6 text-sm italic leading-relaxed text-gray-600">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} font-heading text-sm font-bold text-white`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy">
                        {t.name}
                      </div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Member Spotlight */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-12 text-center" animation="fade-in">
            <SectionHeader
              overline="Member Spotlight"
              title="Featured Member"
              subtitle="Celebrating the achievements and stories of our distinguished members."
              centered
            />
          </Reveal>
          <Reveal animation="fade-in">
            <div className="mx-auto flex max-w-[800px] flex-col items-start gap-10 rounded-lg border border-border-gray bg-white p-10 transition-shadow hover:shadow-lg md:flex-row">
              <div
                className="h-[120px] w-[120px] flex-shrink-0 rounded-full bg-gradient-to-br from-ice-blue to-navy"
                style={{
                  backgroundImage:
                    "url('https://everestchamber.com/wp-content/uploads/2025/03/WhatsApp-Image-2024-11-08-at-15.39.14_633f81df-219x300.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="flex-1">
                <blockquote className="mb-6 border-l-[3px] border-crimson pl-6 text-lg italic leading-relaxed text-gray-700">
                  &ldquo;ECCI has been instrumental in connecting us with
                  international trade partners. The networking events and policy
                  advocacy have opened doors we never thought possible. Being
                  part of this chamber has transformed our business
                  trajectory.&rdquo;
                </blockquote>
                <div className="font-heading text-xl text-navy">Yubraj Baral</div>
                <div className="text-sm text-gray-500">
                  President, Everest Chamber of Commerce and Industries
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-8 text-center" animation="fade-in">
            <Link
              href="/portal/spotlights"
              className="rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              View All Spotlights
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Press Releases */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-10 text-center" animation="fade-in">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-crimson">
              Latest Updates
            </span>
            <h2 className="font-heading text-3xl text-navy md:text-4xl">
              Press Releases
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                date: "July 10, 2024",
                badge: "Partnership",
                title: "ECCI Signs MOU with FICCI",
                desc: "A landmark memorandum of understanding signed between ECCI and FICCI to strengthen bilateral trade relations and create new pathways for business collaboration between India and Nepal.",
              },
              {
                date: "Feb 25, 2025",
                badge: "Event",
                title: "Nepal Festival 2025 Breaks Attendance Records",
                desc: "The annual Nepal Festival drew record footfall with over 15,000 visitors, showcasing Nepal's rich cultural heritage and fostering trade opportunities among participating businesses.",
              },
              {
                date: "Nov 15, 2024",
                badge: "Trade",
                title: "New Trade Corridor Initiative Launched",
                desc: "ECCI unveils a strategic India-Nepal trade corridor initiative aimed at streamlining cross-border commerce, reducing transit times, and boosting bilateral trade volume significantly.",
              },
            ].map((press, idx) => (
              <Reveal
                key={press.title}
                animation="fade-in-up"
                delay={(idx + 1) as 1 | 2 | 3}
              >
                <Link
                  href="/news/ecci-signs-mou-with-ficci"
                  className="block rounded-lg border border-border-gray bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <div
                    className="mb-3 h-12 w-12 rounded-md"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1504711434969-e33886168d7c?w=96&h=96&fit=crop')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-sm text-gray-500">{press.date}</span>
                    <span className="rounded-full bg-ice-tint px-3 py-1 text-xs font-semibold text-ice-blue">
                      {press.badge}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-navy">
                    {press.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {press.desc}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/news"
              className="rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              View All Press Releases
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Preview */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal animation="fade-in-up">
            <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.15em] text-ice-blue-light">
                  Business Directory
                </span>
                <h2 className="mb-3 font-heading text-3xl text-white md:text-4xl">
                  Explore Our Members
                </h2>
                <p className="max-w-xl text-lg text-white">
                  Discover businesses across industries — from IT and logistics
                  to hospitality and manufacturing.
                </p>
              </div>
              <Link
                href="/directory"
                className="rounded-md border-2 border-white/40 bg-transparent px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white hover:text-navy"
              >
                Browse Full Directory
              </Link>
            </div>
          </Reveal>
          <div className="mb-10 flex max-w-[500px] gap-3">
            <input
              type="text"
              placeholder="Search businesses, industries, or locations..."
              className="flex-1 rounded-md border border-white/20 bg-white/[0.08] px-4 py-3 text-sm text-white placeholder-gray-400 outline-none transition-colors focus:border-ice-blue"
            />
            <button className="rounded-md bg-crimson px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-crimson-dark">
              Search
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                logo: "https://everestchamber.com/wp-content/uploads/2024/12/A4M-Logo-JPEG-10-150x150.png",
                name: "Academy of A4M Management",
                location: "New Delhi, India",
                tag: "Education &amp; Training",
              },
              {
                logo: "https://everestchamber.com/wp-content/uploads/2024/12/nepin-ventures-logo--150x150.png",
                name: "Nepin Ventures",
                location: "Kathmandu, Nepal",
                tag: "Venture Capital",
              },
              {
                logo: "https://everestchamber.com/wp-content/uploads/2024/12/arch-venture-international-150x150.jpg",
                name: "Arch Venture International",
                location: "Mumbai, India",
                tag: "Real Estate",
              },
              {
                logo: "https://everestchamber.com/wp-content/uploads/2024/12/north-indian-films-150x150.jpg",
                name: "North Indian Films",
                location: "New Delhi, India",
                tag: "Media &amp; Entertainment",
              },
            ].map((biz, idx) => (
              <Reveal
                key={biz.name}
                animation="fade-in-up"
                delay={(idx + 1) as 1 | 2 | 3 | 4}
              >
                <Link
                  href="/directory/everest-hospitality-group"
                  className="block overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/20"
                >
                  <div
                    className="flex h-20 items-center justify-center bg-white/[0.08]"
                    style={{
                      backgroundImage: `url('${biz.logo}')`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="p-4">
                    <h3 className="mb-1 text-sm font-semibold text-white">
                      {biz.name}
                    </h3>
                    <p className="mb-2 text-xs text-gray-400">{biz.location}</p>
                    <span className="inline-block rounded-full bg-ice-blue/20 px-2 py-0.5 text-[10px] font-semibold text-ice-blue-light">
                      {biz.tag}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal className="mb-16 text-center" animation="fade-in">
            <SectionHeader
              overline="Simple Process"
              title="How to Get Started"
              subtitle="Joining ECCI takes just a few steps. Here's how it works."
              centered
            />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                color: "bg-crimson",
                title: "Choose Your Plan",
                desc: "Select from 5 membership tiers tailored to your business size and goals.",
              },
              {
                step: "2",
                color: "bg-navy",
                title: "Submit Application",
                desc: "Fill out the online form with your business details and upload required documents.",
              },
              {
                step: "3",
                color: "bg-ice-blue",
                title: "Make Payment",
                desc: "Pay securely via bank transfer or UPI. Your membership is activated upon confirmation.",
              },
              {
                step: "4",
                color: "bg-crimson",
                title: "Start Networking",
                desc: "Access the directory, attend events, and connect with 500+ members across 15+ countries.",
              },
            ].map((s, idx) => (
              <Reveal
                key={s.step}
                animation="fade-in-up"
                delay={(idx + 1) as 1 | 2 | 3 | 4}
              >
                <div className="text-center">
                  <div
                    className={`mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full ${s.color} font-heading text-2xl font-bold text-white`}
                  >
                    {s.step}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-navy">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center" animation="fade-in">
            <Link
              href="/membership/apply"
              className="rounded-md bg-crimson px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg"
            >
              Get Started Today
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Join ECCI Today"
        description="Whether you are self-employed or leading a company, ECCI provides the platform to expose your brand, expand your network, and influence policy."
        primaryHref="/membership/apply"
        primaryLabel="Apply for Membership"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />

      {/* Partners */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <Reveal className="mb-12" animation="fade-in">
            <SectionHeader
              overline="Our Network"
              title="Associates &amp; Partners"
              subtitle="Trusted by leading organizations across India and Nepal."
              centered
            />
            <Link
              href="/about/partners"
              className="mt-4 rounded-md border-2 border-ice-blue bg-transparent px-4 py-2 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              View All Partners
            </Link>
          </Reveal>
          <Reveal className="flex flex-wrap items-center justify-center gap-8" animation="fade-in">
            {[
              "https://everestchamber.com/wp-content/uploads/2024/12/images-1-150x150.png",
              "https://everestchamber.com/wp-content/uploads/2024/12/A4M-Logo-JPEG-10-150x150.png",
              "https://everestchamber.com/wp-content/uploads/2024/12/nepin-ventures-logo--150x150.png",
              "https://everestchamber.com/wp-content/uploads/2024/12/everest-nepali-pustakalaya-150x150.jpg",
              "https://everestchamber.com/wp-content/uploads/2024/12/Hamro-Swabhiman-150x150.jpg",
              "https://everestchamber.com/wp-content/uploads/2024/12/north-indian-films-150x150.jpg",
              "https://everestchamber.com/wp-content/uploads/2024/12/arch-venture-international-150x150.jpg",
              "https://everestchamber.com/wp-content/uploads/2024/12/Logo1-150x150.jpg",
              "https://everestchamber.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-11-09-at-21.36.46_243103a7-150x150.jpg",
              "https://everestchamber.com/wp-content/uploads/2024/12/Untitled-design-2-1.png",
            ].map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt="Partner"
                width={120}
                height={60}
                className="h-[60px] w-[120px] rounded-md border border-border-gray bg-gray-100 object-contain p-2 transition-colors hover:border-ice-blue hover:bg-ice-tint"
              />
            ))}
          </Reveal>
        </div>
      </section>
    </PublicLayout>
  );
}
