"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PublicLayout activeNav="home">
      <main className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-ice-tint px-4 py-8">
        <div className="w-full max-w-[420px] rounded-lg border border-border-gray bg-white p-10 shadow-md">
          <h2 className="mb-2 text-center font-heading text-2xl text-navy">
            Reset Password
          </h2>
          <p className="mb-8 text-center text-sm text-gray-500">
            Enter your registered email address and we&apos;ll send you a link to
            reset your password.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-navy"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your registered email"
                  className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:shadow-[0_0_0_3px_rgba(80,125,154,0.1)]"
                />
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-crimson px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg"
              >
                Send Reset Link
              </button>
            </form>
          ) : (
            <div className="rounded-md border border-border-gray bg-ice-tint p-6 text-center">
              <p className="text-sm text-gray-700">
                If an account with <span className="font-semibold text-navy">{email}</span> exists, you
                will receive a password reset link shortly.
              </p>
            </div>
          )}

          <div className="mt-6 text-center text-sm text-gray-500">
            <Link href="/login" className="font-semibold text-crimson">
              Back to Login
            </Link>
          </div>
        </div>
      </main>
    </PublicLayout>
  );
}
