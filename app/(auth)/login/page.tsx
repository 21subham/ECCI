"use client";

import { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import { AuthLayout } from "../../components/AuthLayout";
import { Reveal } from "../../components/Reveal";

export default function LoginPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("user@example.com");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleSendOtp = (e: FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const next = [...otp];
    next[index] = value.slice(0, 1);
    setOtp(next);
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  return (
    <AuthLayout>
      <Reveal animation="fade-in">
        <div className="w-full max-w-[420px] rounded-lg border border-border-gray bg-white p-10 shadow-md">
          <h2 className="mb-2 text-center font-heading text-2xl text-navy">
            Member Login
          </h2>
          <p className="mb-8 text-center text-sm text-gray-500">
            Enter your details to access the ECCI member portal
          </p>

          {step === 1 && (
            <form onSubmit={handleSendOtp}>
              <div className="mb-5">
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-semibold text-navy"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  placeholder="Enter your first name"
                  className="w-full rounded-md border border-border-gray px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-ice-blue focus:shadow-[0_0_0_3px_rgba(80,125,154,0.1)]"
                />
              </div>
              <div className="mb-5">
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
                className="w-full rounded-md bg-crimson px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg"
              >
                Send OTP
              </button>
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Don&apos;t have an account?</p>
                <Link href="/membership/apply" className="font-semibold text-crimson">
                  Join ECCI Today
                </Link>
              </div>
            </form>
          )}

          {step === 2 && (
            <div>
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-ice-tint">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#507D9A"
                    strokeWidth="2"
                    className="h-7 w-7"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">
                  Enter the 6-digit code sent to
                </p>
                <p className="font-semibold text-navy">{email}</p>
              </div>

              <div className="mb-6 flex justify-center gap-3">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => {
                      otpRefs.current[idx] = el;
                    }}
                    type="text"
                    maxLength={1}
                    inputMode="numeric"
                    pattern="[0-9]"
                    value={digit}
                    autoFocus={idx === 0}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                    className="h-14 w-[52px] rounded-md border-2 border-border-gray text-center text-xl font-bold text-navy outline-none transition-colors focus:border-crimson focus:shadow-[0_0_0_3px_rgba(158,11,25,0.1)]"
                  />
                ))}
              </div>

              <Link
                href="/portal"
                className="flex w-full justify-center rounded-md bg-crimson px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg"
              >
                Verify &amp; Sign In
              </Link>

              <div className="mt-4 text-center text-sm text-gray-500">
                Didn&apos;t receive the code?{" "}
                <button
                  type="button"
                  className="font-semibold text-crimson"
                  onClick={() => setOtp(["", "", "", "", "", ""])}
                >
                  Resend OTP
                </button>
              </div>

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-gray-500 hover:text-navy"
                >
                  Back to login
                </button>
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </AuthLayout>
  );
}
