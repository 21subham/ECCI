"use client";

import Image from "next/image";
import Link from "next/link";
import { PublicLayout } from "../../../components/PublicLayout";
import { Reveal } from "../../../components/Reveal";
import { useParallax } from "../../../hooks/useScrollEffects";
import { useRef } from "react";

const scheduleItems = [
  { time: "10:00 AM", title: "Opening Ceremony & Inaugural Address", desc: "The festival opens with a ceremonial lighting of the lamp, followed by keynote addresses from the Chief Guest, Nepal's Ambassador to India, and the ECCI President. The inaugural session sets the stage for three days of cultural exchange and trade dialogue." },
  { time: "12:00 PM", title: "Cultural Performances — Dances of Nepal", desc: "Experience the mesmerizing folk dances of all seven provinces of Nepal, from the graceful Maruni and Dhime to the energetic Deuda and Sorathi. Artists from Kathmandu, Pokhara, and Janakpur will showcase the living traditions of Nepali performing arts." },
  { time: "6:00 PM", title: "Closing Remarks & Networking Reception", desc: "Day One concludes with a networking reception featuring authentic Nepali cuisine, live acoustic performances, and an opportunity to connect with business leaders, exhibitors, and cultural ambassadors in an intimate setting." },
];

const speakers = [
  { name: "Yubraj Baral", title: "President, ECCI", image: "https://everestchamber.com/wp-content/uploads/2024/08/300.jpg" },
  { name: "Dr. Deep Kumar Upadhyay", title: "Former Ambassador of Nepal to India", image: "https://everestchamber.com/wp-content/uploads/2024/08/300.jpg" },
  { name: "Rajesh Khetan", title: "Chairman, Nepal Chamber of Commerce", image: "https://everestchamber.com/wp-content/uploads/2024/08/300.jpg" },
  { name: "Sunita Danuwar", title: "CEO, Nepal Tourism Board", image: "https://everestchamber.com/wp-content/uploads/2024/08/300.jpg" },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop", alt: "Inaugural ceremony", wide: true },
  { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=500&fit=crop", alt: "Exhibition hall", tall: true },
  { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=300&fit=crop", alt: "Cultural performance" },
  { src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&h=300&fit=crop", alt: "Panel discussion" },
  { src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=300&fit=crop", alt: "Networking session" },
];

export default function EventDetailPage() {
  const heroRef = useRef<HTMLElement>(null);
  useParallax(heroRef);

  return (
    <PublicLayout activeNav="events">
      <section ref={heroRef} className="relative min-h-[420px] overflow-hidden pt-[72px]" style={{ background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-dark) 50%, var(--color-navy-deep-dark) 100%)", backgroundImage: "url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=600&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/30" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pb-12 pt-16">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-crimson-light">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Trade Fair & Cultural Celebration
          </div>
          <h1 className="mb-6 font-heading text-3xl text-white md:text-4xl lg:text-[3rem]">
            Nepal Festival 2026
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              20 – 22 February 2026
            </span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              10:00 AM – 7:00 PM
            </span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              PHD House, Hauz Khas, New Delhi
            </span>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 border-b border-border-gray py-4">
        <div className="mx-auto max-w-[1200px] px-6">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="text-gray-500 transition-colors hover:text-crimson">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/events" className="text-gray-500 transition-colors hover:text-crimson">Events</Link>
            <span className="text-gray-400">/</span>
            <span>Nepal Festival 2026</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 pt-12 lg:grid-cols-[1fr_360px]">
        <div>
          <Reveal animation="fade-in">
            <div className="mb-12">
              <div className="text-xs font-bold uppercase tracking-[0.12em] text-crimson mb-3">About This Event</div>
              <h2 className="font-heading text-2xl text-navy">A Grand Celebration of Nepali Culture in the Heart of Delhi</h2>
              <div className="mt-4 space-y-4 text-base text-gray-600 leading-relaxed">
                <p>Nepal Festival Delhi 2026 is the largest and most anticipated celebration of Nepali culture, trade, and heritage in India's capital. Organized by the Everest Chamber of Commerce and Industries (ECCI) in collaboration with the Embassy of Nepal and leading Nepali business associations, this three-day extravaganza brings together entrepreneurs, artists, diplomats, and cultural enthusiasts under one roof. From traditional music and dance performances to curated trade exhibitions and B2B matchmaking sessions, the festival showcases the vibrant spirit of Nepal while forging meaningful commercial ties between India and Nepal.</p>
                <p>Now in its landmark edition, Nepal Festival has grown from a modest cultural gathering into a premier Indo-Nepal trade and cultural platform. Over 300 exhibitors from Nepal's key industries — including handicrafts, textiles, tourism, tea, and IT services — will present their products and services to Indian buyers, distributors, and investors. The festival also features panel discussions on cross-border trade facilitation, investment opportunities in Nepal's Special Economic Zones, and the growing role of digital commerce in the India-Nepal corridor. Attendees can enjoy authentic Nepali cuisine, witness stunning folk dance performances from all seven provinces of Nepal, and explore interactive cultural installations that tell the story of Himalayan heritage.</p>
              </div>
            </div>
          </Reveal>

          <Reveal animation="fade-in">
            <div className="mb-12">
              <div className="text-xs font-bold uppercase tracking-[0.12em] text-crimson mb-6">Event Schedule</div>
              <h2 className="font-heading text-2xl text-navy mb-6">Day One — Saturday, 20 February 2026</h2>
              <div className="space-y-8">
                {scheduleItems.map((item, idx) => (
                  <Reveal key={idx} animation="fade-in" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                    <div className="relative flex gap-6">
                      <div className="w-3 h-3 rounded-full bg-crimson flex-shrink-0 mt-2 relative z-10 shadow-[0_0_0_3px_white]" />
                      <div className="absolute left-1.5 top-7 bottom-[-24px] w-0.5 bg-border-gray" style={{ display: idx === scheduleItems.length - 1 ? "none" : undefined }} />
                      <div className="flex-1 pl-1">
                        <div className="text-xs font-bold text-crimson uppercase tracking-wider mb-1">{item.time}</div>
                        <div className="text-base font-semibold text-navy mb-1">{item.title}</div>
                        <div className="text-sm text-gray-600 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal animation="fade-in">
            <div className="mb-12">
              <div className="text-xs font-bold uppercase tracking-[0.12em] text-crimson mb-6">Speakers &amp; Dignitaries</div>
              <h2 className="font-heading text-2xl text-navy mb-6">Featured Voices</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {speakers.map((speaker, idx) => (
                  <Reveal key={idx} animation="fade-in" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                    <div className="text-center p-6 border border-border-gray rounded-lg transition-all hover:-translate-y-1 hover:shadow-md bg-white">
                      <div className="mx-auto mb-3 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-gradient-to-br from-ice-blue to-navy overflow-hidden">
                        <Image src={speaker.image} alt={speaker.name} width={80} height={80} className="h-full w-full object-cover" />
                      </div>
                      <h4 className="font-body text-sm font-semibold text-navy mb-1">{speaker.name}</h4>
                      <p className="text-xs text-gray-500">{speaker.title}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal animation="fade-in">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.12em] text-crimson mb-6">Event Gallery</div>
              <h2 className="font-heading text-2xl text-navy mb-6">Highlights from the Festival</h2>
              <div className="grid grid-cols-3 gap-4">
                {galleryImages.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    width={img.wide ? 800 : img.tall ? 400 : 600}
                    height={img.wide ? 400 : img.tall ? 500 : 300}
                    className={`w-full rounded-lg object-cover transition-transform hover:scale-105 cursor-pointer ${img.wide ? "col-span-2" : ""} ${img.tall ? "row-span-2 h-full min-h-[460px]" : "h-[220px]"}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-8">
            <Link href="/events" className="btn btn--outline">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Events
            </Link>
          </div>
        </div>

        <aside className="lg:pt-0 pt-0">
          <Reveal animation="fade-in">
            <div className="sticky top-20 bg-white border border-border-gray rounded-lg p-8 shadow-md">
              <div className="mb-6">
                <span className="inline-block px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] bg-success-bg text-success-text rounded-full">Registration Open</span>
              </div>
              <div className="mb-5">
                <div className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-500 mb-1">Date &amp; Time</div>
                <div className="text-sm font-semibold text-navy">20 – 22 February 2026<br />10:00 AM – 7:00 PM</div>
              </div>
              <div className="mb-5">
                <div className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-500 mb-1">Venue</div>
                <div className="text-sm font-semibold text-navy">PHD House, Hauz Khas Village, New Delhi 110016</div>
              </div>
              <div className="mb-5">
                <div className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-500 mb-1">Price</div>
                <div className="text-sm font-semibold text-navy">Free Entry</div>
              </div>
              <div className="mb-0">
                <div className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-500 mb-1">Category</div>
                <div className="text-sm font-semibold text-navy">Trade Fair &amp; Cultural Exhibition</div>
              </div>
              <Link href="/events/indo-nepal-trade-festival" className="btn btn--primary btn--lg w-full mt-4">Register Now</Link>
              <p className="text-xs text-gray-500 text-center mt-3">B2B sessions require pre-registration</p>
            </div>
          </Reveal>
        </aside>
      </div>
    </PublicLayout>
  );
}