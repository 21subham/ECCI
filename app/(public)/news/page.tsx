"use client";

import { useState } from "react";
import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";
import { Reveal } from "../../components/Reveal";
import { SectionHeader } from "../../components/SectionHeader";

const articles = [
  { slug: "ecci-signs-mou-with-ficci", category: "Partnership", title: "ECCI Signs MOU with FICCI", date: "Jul 10, 2024", readTime: "5 min read", author: "ECCI Admin", badge: "bg-ice-tint text-ice-blue", desc: "A landmark memorandum of understanding signed between ECCI and FICCI to strengthen bilateral trade relations and create new pathways for business collaboration between India and Nepal." },
  { slug: "nepal-festival-2025-records", category: "Event", title: "Nepal Festival 2025 Breaks Attendance Records", date: "Feb 25, 2025", readTime: "4 min read", author: "Priya Sharma", badge: "bg-success-bg text-success-text", desc: "The annual Nepal Festival drew record footfall with over 15,000 visitors, showcasing Nepal's rich cultural heritage and fostering trade opportunities among participating businesses." },
  { slug: "trade-corridor-initiative", category: "Trade", title: "New Trade Corridor Initiative Launched", date: "Nov 15, 2024", readTime: "6 min read", author: "Rajesh Khanna", badge: "bg-warning-bg text-warning-text", desc: "ECCI unveils a strategic India-Nepal trade corridor initiative aimed at streamlining cross-border commerce, reducing transit times, and boosting bilateral trade volume significantly." },
  { slug: "quarterly-business-forum", category: "Networking", title: "Quarterly Business Forum — March 2025", date: "Mar 15, 2025", readTime: "3 min read", author: "ECCI Admin", badge: "bg-info-bg text-info-text", desc: "Join fellow members for an evening of strategic networking, industry insights, and policy discussions with key government stakeholders." },
];

const categories = [
  { name: "All News", count: 24 },
  { name: "Press Releases", count: 12 },
  { name: "Chamber Updates", count: 6 },
  { name: "Trade News", count: 4 },
  { name: "Event Highlights", count: 2 },
];

export default function NewsPage() {
  const [activeCat, setActiveCat] = useState("All News");

  return (
    <PublicLayout activeNav="none">
      <div className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-navy-deep-dark pt-[88px] pb-12 text-white lg:pt-[100px]">
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="text-crimson transition-colors hover:text-crimson-light">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">News &amp; Updates</span>
          </div>
          <h1 className="font-heading text-3xl text-white md:text-4xl lg:text-5xl">News &amp; Updates</h1>
          <p className="mt-3 max-w-[600px] text-lg text-white/70">Stay informed with the latest from ECCI and the business community.</p>
        </div>
      </div>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-8 flex flex-wrap items-end gap-4 rounded-xl border border-border-gray bg-white p-6">
            <div className="flex-1 min-w-[200px]">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">Search</label>
              <input type="text" placeholder="Search articles..." className="w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue" />
            </div>
            <div className="min-w-[180px]">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500">Category</label>
              <select className="w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue">
                {categories.map((c) => (
                  <option key={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <button className="rounded-md bg-crimson px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-crimson-dark">Filter</button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((article, idx) => (
                <Reveal key={article.slug} animation="fade-in-up" delay={(idx + 1) as 1 | 2 | 3}>
                  <Link href={`/news/${article.slug}`} className="block overflow-hidden rounded-xl border border-border-gray bg-white transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="h-[200px] bg-gray-100" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504711434969-e33886168d7c?w=400&h=250&fit=crop')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                    <div className="p-6">
                      <div className="mb-2 flex items-center gap-2">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${article.badge}`}>{article.category}</span>
                        <span className="text-xs text-gray-500">{article.date}</span>
                      </div>
                      <h3 className="mb-2 text-base font-semibold text-navy">{article.title}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-2">{article.desc}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{article.author}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <aside>
              <div className="mb-6 rounded-xl border border-border-gray bg-white">
                <div className="border-b border-border-gray px-6 py-5">
                  <h3 className="text-base font-semibold text-navy">Categories</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-1">
                    {categories.map((c) => (
                      <li key={c.name}>
                        <button onClick={() => setActiveCat(c.name)} className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${activeCat === c.name ? "bg-ice-tint text-crimson font-semibold" : "text-gray-600 hover:bg-gray-50"}`}>
                          <span>{c.name}</span>
                          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500">{c.count}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border border-border-gray bg-white p-6">
                <h3 className="mb-2 font-body text-base font-semibold text-navy">Newsletter Signup</h3>
                <p className="mb-4 text-sm text-gray-500">Get the latest updates delivered to your inbox.</p>
                <input type="email" placeholder="Your email address" className="mb-3 w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue" />
                <button className="w-full rounded-md bg-crimson px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-crimson-dark">Subscribe</button>
              </div>
            </aside>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2">
            {[1, 2, 3].map((p) => (
              <button key={p} className={`flex h-10 w-10 items-center justify-center rounded-md border text-sm font-semibold ${p === 1 ? "border-crimson bg-crimson text-white" : "border-border-gray bg-white text-gray-600 hover:border-navy hover:text-navy"}`}>{p}</button>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
