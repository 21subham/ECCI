"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useHeaderScrolled } from "../hooks/useScrollEffects";

interface HeaderProps {
  variant?: "public" | "dashboard";
  activeNav?:
    | "home"
    | "about"
    | "membership"
    | "directory"
    | "events"
    | "contact"
    | "none";
}

const aboutLinks = [
  { href: "/about", label: "Introduction" },
  { href: "/about/incorporation", label: "Incorporation Documents" },
  { href: "/about/partners", label: "Associates & Partners" },
  { href: "/awards", label: "Awards" },
  { href: "/financials", label: "Financials" },
  { href: "/careers", label: "Careers" },
  { href: "/media", label: "Media & Press" },
  { href: "/about/leadership", label: "Governing Body" },
  { href: "/about/state-committee", label: "State Committee" },
  { href: "/about/advisory-board", label: "Advisory Board" },
  { href: "/about/ethics-committee", label: "Ethics Committee" },
];

export function Header({ variant = "public", activeNav = "none" }: HeaderProps) {
  const scrolled = useHeaderScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClass = (active?: boolean) =>
    `relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      active
        ? "text-crimson"
        : "text-gray-600 hover:bg-gray-100 hover:text-navy"
    }`;

  const activeUnderline = (
    <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-crimson" />
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] h-[72px] border-b border-border-gray bg-white transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="flex flex-shrink-0 items-center gap-3">
          <Image
            src="/ECCI_logo.jpg"
            alt="ECCI Logo"
            width={44}
            height={44}
            className="h-11 w-auto rounded-sm"
          />
        </Link>

        <nav
          className={`items-center gap-1 md:flex ${
            mobileOpen
              ? "absolute top-[72px] left-0 right-0 flex flex-col items-stretch border-b border-border-gray bg-white px-6 py-4 shadow-lg"
              : "hidden md:flex"
          }`}
        >
          <Link
            href="/"
            className={`${navLinkClass(activeNav === "home")} block md:inline-flex`}
          >
            Home
            {activeNav === "home" && activeUnderline}
          </Link>

          <div className="group relative">
            <span
              className={`${navLinkClass(
                activeNav === "about"
              )} inline-flex cursor-pointer items-center md:inline-flex`}
            >
              About
              <svg
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-1 h-2.5 w-2.5"
              >
                <path d="M3 5l3 3 3-3" />
              </svg>
              {activeNav === "about" && activeUnderline}
            </span>
            <div className="invisible absolute top-full left-0 z-[100] mt-1 min-w-[220px] rounded-md border border-border-gray bg-white py-2 opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100">
              {aboutLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-ice-tint hover:text-crimson"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/membership"
            className={`${navLinkClass(activeNav === "membership")} block md:inline-flex`}
          >
            Membership
            {activeNav === "membership" && activeUnderline}
          </Link>

          <Link
            href="/directory"
            className={`${navLinkClass(activeNav === "directory")} block md:inline-flex`}
          >
            Directory
            {activeNav === "directory" && activeUnderline}
          </Link>

          <Link
            href="/events/indo-nepal-trade-festival"
            className={`${navLinkClass(activeNav === "events")} block md:inline-flex`}
          >
            Indo Nepal Trade Festival
            {activeNav === "events" && activeUnderline}
          </Link>

          <Link
            href="/contact"
            className={`${navLinkClass(activeNav === "contact")} block md:inline-flex`}
          >
            Contact
            {activeNav === "contact" && activeUnderline}
          </Link>
        </nav>

        <div className="flex flex-shrink-0 items-center gap-3">
          {variant === "public" ? (
            <>
              <Link
                href="/login"
                className="hidden rounded-md px-3 py-2 text-sm font-semibold text-navy transition-colors hover:bg-gray-100 hover:text-crimson md:inline-flex"
              >
                Login
              </Link>
              <Link
                href="/membership/apply"
                className="rounded-md bg-crimson px-4 py-2 text-xs font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg"
              >
                Join Now
              </Link>
            </>
          ) : (
            <>
              <span className="hidden text-sm text-gray-600 md:inline">
                Welcome, Member
              </span>
              <Link
                href="/"
                className="rounded-md px-3 py-2 text-xs font-semibold text-navy transition-colors hover:bg-gray-100 hover:text-crimson"
              >
                Logout
              </Link>
            </>
          )}

          <button
            className="flex p-2 text-navy md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-6 w-6"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
