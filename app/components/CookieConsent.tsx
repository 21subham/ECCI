"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("ecci-cookie-consent");
    if (!accepted) setShow(true);
  }, []);

  const handleChoice = () => {
    localStorage.setItem("ecci-cookie-consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1000] flex items-center justify-between gap-4 bg-navy px-6 py-4 text-sm text-gray-300 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] md:flex-row flex-col text-center">
      <p className="flex-1 leading-relaxed">
        We use cookies to ensure compliance with India&apos;s DPDP Act 2023. By
        continuing, you agree to our{" "}
        <Link href="/privacy" className="text-ice-blue underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="flex flex-shrink-0 gap-3">
        <button
          onClick={handleChoice}
          className="rounded-md bg-crimson px-5 py-2 font-semibold text-white"
        >
          Accept
        </button>
        <button
          onClick={handleChoice}
          className="rounded-md border border-gray-600 bg-transparent px-5 py-2 text-gray-400"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
