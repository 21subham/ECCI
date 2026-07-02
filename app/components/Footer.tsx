import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 text-gray-400">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/ECCI_logo.jpg"
                alt="ECCI Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              At Everest Chamber of Commerce and Industries (ECCI), we are a
              global federation of businesses and industries headquartered in
              India. Our mission is to foster opportunities across diverse
              fields and industries.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/everestchamber"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-crimson hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/everestchamber"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-crimson hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCf_p3sKBoJ21aAelkszVviA"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-gray-400 transition-colors hover:bg-crimson hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#11233B" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  About ECCI
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/directory"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Directory
                </Link>
              </li>
              <li>
                <Link
                  href="/events/indo-nepal-trade-festival"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Indo Nepal Trade Festival
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Member Access
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/login"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Members Login
                </Link>
              </li>
              <li>
                <span
                  className="text-sm text-gray-400"
                  title="Coming Soon"
                >
                  Employee Login
                </span>
              </li>
              <li>
                <span
                  className="text-sm text-gray-400"
                  title="Coming Soon"
                >
                  Admin Login
                </span>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Feedback Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Media Page
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm md:flex-row">
          <span>
            &copy; 2026 Everest Chamber of Commerce and Industries (ECCI). All
            rights reserved.
          </span>
          <span>
            <Link
              href="/privacy"
              className="text-gray-500 transition-colors hover:text-white"
            >
              Privacy
            </Link>{" "}
            &middot;{" "}
            <Link
              href="/terms"
              className="text-gray-500 transition-colors hover:text-white"
            >
              Terms
            </Link>{" "}
            &middot;{" "}
            <Link
              href="/"
              className="text-gray-500 transition-colors hover:text-white"
            >
              Sitemap
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
