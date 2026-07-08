"use client";

import Image from "next/image";
import Link from "next/link";
import { PublicLayout } from "../../../components/PublicLayout";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Reveal } from "../../../components/Reveal";

const platinumPartners = [
  {
    name: "Academy of A4M Management",
    desc: "Leading private sector bank providing cross-border financial solutions, trade finance, and treasury services for India-Nepal commerce.",
    img: "https://everestchamber.com/wp-content/uploads/2024/12/A4M-Logo-JPEG-10-150x150.png",
  },
  {
    name: "Arch Venture International",
    desc: "Premier banking institution in Nepal facilitating bilateral investment flows and currency exchange services for trade corridors.",
    img: "https://everestchamber.com/wp-content/uploads/2024/12/arch-venture-international-150x150.jpg",
  },
  {
    name: "Everest Nepali Pustakalaya",
    desc: "India's apex business chamber collaborating on policy advocacy, trade facilitation, and bilateral business forum coordination.",
    img: "https://everestchamber.com/wp-content/uploads/2024/12/everest-nepali-pustakalaya-150x150.jpg",
  },
];

const goldPartners = [
  {
    name: "Hamro Swabhiman",
    desc: "Promoting connectivity and people-to-people links across India-Nepal routes.",
    img: "https://everestchamber.com/wp-content/uploads/2024/12/Hamro-Swabhiman-150x150.jpg",
  },
  {
    name: "Nepin Ventures",
    desc: "Regional chamber fostering trade alliances and business matchmaking in North India.",
    img: "https://everestchamber.com/wp-content/uploads/2024/12/nepin-ventures-logo--150x150.png",
  },
  {
    name: "North Indian Films",
    desc: "Bilateral partnership driving market access and regulatory harmonization.",
    img: "https://everestchamber.com/wp-content/uploads/2024/12/north-indian-films-150x150.jpg",
  },
  {
    name: "WhatsApp Partner",
    desc: "Supporting eastern corridor trade with Nepal and facilitating logistics partnerships.",
    img: "https://everestchamber.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-11-09-at-21.36.46_243103a7-150x150.jpg",
  },
];

const silverPartners = [
  {
    name: "Design Partner",
    desc: "End-to-end logistics solutions for cross-border freight and supply chain management.",
    img: "https://everestchamber.com/wp-content/uploads/2024/12/Untitled-design-2-1.png",
  },
  {
    name: "Design Partner",
    desc: "Digital transformation partner enabling technology-driven trade platforms.",
    img: "https://everestchamber.com/wp-content/uploads/2024/12/Untitled-design-3-1.png",
  },
  {
    name: "Design Partner",
    desc: "Export facilitation and trade compliance advisory for SMEs entering the Nepal market.",
    img: "https://everestchamber.com/wp-content/uploads/2024/12/Untitled-design-4-1.png",
  },
];

export default function PartnersPage() {
  return (
    <PublicLayout activeNav="about">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Partners" }
      ]} />

      <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-[#0D1B2E] to-[#162D4A] py-20 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(80,125,154,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(158,11,25,0.08)_0%,transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-[800px] px-6">
          <h1 className="mb-4 font-heading text-4xl text-white md:text-5xl">
            Associates &amp; <span className="text-crimson-light">Partners</span>
          </h1>
          <p className="mx-auto max-w-[600px] text-lg text-white/70">
            Organizations that support ECCI's mission to foster cross-border commerce and strengthen the India-Nepal business corridor.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="mx-auto max-w-[720px] text-center text-lg leading-relaxed text-gray-600">
            ECCI's partner network brings together leading organizations committed to driving bilateral trade, investment, and economic cooperation between India and Nepal. Our partners provide critical support through expertise, resources, and shared vision for regional prosperity.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-gray-100 px-4 py-1 text-xs font-bold uppercase tracking-wider text-navy">
              Platinum
            </span>
            <h2 className="mb-2 font-heading text-2xl text-navy">Platinum Partners</h2>
            <p className="text-base text-gray-500">Premier organizations with deep strategic alignment to ECCI's mission.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {platinumPartners.map((partner, idx) => (
              <Reveal key={idx} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div className="flex flex-col items-center rounded-xl border border-border-gray bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-30 w-full items-center justify-center border-b border-border-gray bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={partner.img}
                      alt={partner.name}
                      width={120}
                      height={120}
                      className="h-30 w-30 object-contain"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="mb-2 font-heading text-base text-navy">{partner.name}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-500">{partner.desc}</p>
                    <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-crimson transition-colors hover:text-navy">
                      Visit Website
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-warning-bg px-4 py-1 text-xs font-bold uppercase tracking-wider text-navy">
              Gold
            </span>
            <h2 className="mb-2 font-heading text-2xl text-navy">Gold Partners</h2>
            <p className="text-base text-gray-500">Valued partners supporting key initiatives and industry verticals.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {goldPartners.map((partner, idx) => (
              <Reveal key={idx} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div className="flex flex-col items-center rounded-xl border border-border-gray bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-25 w-full items-center justify-center border-b border-border-gray bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={partner.img}
                      alt={partner.name}
                      width={100}
                      height={100}
                      className="h-25 w-25 object-contain"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="mb-2 font-heading text-base text-navy">{partner.name}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-500">{partner.desc}</p>
                    <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-crimson transition-colors hover:text-navy">
                      Visit Website
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-gray-200 px-4 py-1 text-xs font-bold uppercase tracking-wider text-navy">
              Silver
            </span>
            <h2 className="mb-2 font-heading text-2xl text-navy">Silver Partners</h2>
            <p className="text-base text-gray-500">Industry partners contributing to specific sectors and programs.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {silverPartners.map((partner, idx) => (
              <Reveal key={idx} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3 | 4}>
                <div className="flex flex-col items-center rounded-xl border border-border-gray bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-20 w-full items-center justify-center border-b border-border-gray bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={partner.img}
                      alt={partner.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="mb-2 font-heading text-base text-navy">{partner.name}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-500">{partner.desc}</p>
                    <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-crimson transition-colors hover:text-navy">
                      Visit Website
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-crimson to-[#7A0914] py-20 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <h2 className="mb-4 font-heading text-3xl text-white">Become a Partner</h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/85">
            Align your organization with ECCI's mission. Gain visibility, access networks, and contribute to cross-border economic growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-white px-8 py-4 text-base font-semibold text-navy transition-all hover:-translate-y-px hover:shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/membership/apply"
              className="rounded-md border-2 border-white/40 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-white hover:text-navy"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}