"use client";

import { useState } from "react";
import Link from "next/link";
import { PublicLayout } from "../../../components/PublicLayout";
import { Reveal } from "../../../components/Reveal";

const article = {
  title: "ECCI Signs MOU with FICCI",
  category: "Partnership",
  author: "ECCI Admin",
  date: "July 10, 2024",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1504711434969-e33886168d7c?w=1200&h=500&fit=crop",
  content: [
    "A landmark memorandum of understanding was signed today between the Everest Chamber of Commerce and Industries (ECCI) and the Federation of Indian Chambers of Commerce & Industry (FICCI) to strengthen bilateral trade relations and create new pathways for business collaboration between India and Nepal.",
    "The MOU was signed at ECCI Headquarters in New Delhi in the presence of senior dignitaries from both organizations. The agreement focuses on three key areas: trade facilitation, capacity building, and market access for SMEs.",
    "\"This partnership represents a significant milestone in our mission to foster cross-border commerce,\" said Yubraj Baral, President of ECCI. \"Together with FICCI, we will create unprecedented opportunities for businesses on both sides of the border.\"",
    "Key initiatives under the MOU include joint trade missions, B2B matchmaking programs, knowledge exchange workshops, and a shared digital platform for member businesses. The agreement is valid for three years with annual review clauses.",
    "Businesses interested in participating in the ECCI-FICCI partnership programs can register through the ECCI member portal or contact the partnerships team directly.",
  ],
  related: [
    { slug: "nepal-festival-2025-records", title: "Nepal Festival 2025 Breaks Attendance Records", date: "Feb 25, 2025" },
    { slug: "trade-corridor-initiative", title: "New Trade Corridor Initiative Launched", date: "Nov 15, 2024" },
    { slug: "quarterly-business-forum", title: "Quarterly Business Forum — March 2025", date: "Mar 15, 2025" },
  ],
};

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState<"article" | "related">("article");

  return (
    <PublicLayout activeNav="none">
      <div className="relative h-[320px] bg-gray-100" style={{ backgroundImage: `url('${article.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-[88px]">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="text-crimson transition-colors hover:text-crimson-light">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/news" className="text-crimson transition-colors hover:text-crimson-light">News</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">{article.title}</span>
          </div>
          <span className="inline-block rounded-full bg-crimson px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">{article.category}</span>
          <h1 className="mt-4 font-heading text-3xl text-white md:text-4xl lg:text-[3rem]">{article.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <span>{article.author}</span>
            <span className="text-gray-500">|</span>
            <span>{article.date}</span>
            <span className="text-gray-500">|</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="prose prose-lg max-w-none">
                {article.content.map((para, idx) => (
                  <p key={idx} className="mb-6 text-base leading-[1.8] text-gray-700">{para}</p>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold text-gray-500">Share:</span>
                {["Facebook", "Twitter", "LinkedIn", "Email"].map((social) => (
                  <button key={social} className="flex h-9 w-9 items-center justify-center rounded-full border border-border-gray text-navy transition-colors hover:border-crimson hover:text-crimson" aria-label={social}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                  </button>
                ))}
              </div>

              <div className="mt-10 rounded-xl border border-border-gray bg-gray-50 p-6">
                <h3 className="mb-4 font-heading text-lg text-navy">Related Articles</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {article.related.map((r) => (
                    <Link key={r.slug} href={`/news/${r.slug}`} className="rounded-lg border border-border-gray bg-white p-4 transition-all hover:border-ice-blue hover:shadow-md">
                      <div className="mb-2 text-xs text-gray-500">{r.date}</div>
                      <h4 className="text-sm font-semibold text-navy">{r.title}</h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <aside>
              <div className="mb-6 rounded-xl border border-border-gray bg-white">
                <div className="border-b border-border-gray px-6 py-5">
                  <h3 className="text-base font-semibold text-navy">Categories</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-1">
                    {[
                      { name: "Press Releases", count: 12 },
                      { name: "Chamber Updates", count: 6 },
                      { name: "Trade News", count: 4 },
                      { name: "Event Highlights", count: 2 },
                    ].map((c) => (
                      <li key={c.name}>
                        <button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-navy transition-colors hover:bg-gray-50">
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
                <input type="email" placeholder="Your email" className="mb-3 w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue" />
                <button className="w-full rounded-md bg-crimson px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-crimson-dark">Subscribe</button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
