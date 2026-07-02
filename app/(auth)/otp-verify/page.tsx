"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";

export default function OtpVerifyPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email] = useState("yubraj@example.com");
  const [resendTimer, setResendTimer] = useState(45);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTimer <= 0) return;
    const interval = setInterval(() => {
      setResendTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [resendTimer]);

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

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setResendTimer(45);
    otpRefs.current[0]?.focus();
  };

  const handleVerify = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <PublicLayout activeNav="home">
      <main
        className="min-h-[calc(100vh-72px)] flex items-center justify-center px-4 py-8"
        style={{
          background:
            "linear-gradient(135deg, rgba(240,244,248,0.95) 0%, rgba(235,240,246,0.92) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop') center/cover fixed no-repeat",
        }}
      >
        <div className="w-full max-w-[420px] rounded-lg border border-border-gray bg-white p-10 shadow-md">
          <h2 className="mb-2 text-center font-heading text-2xl text-navy">
            Verify Your Email
          </h2>
          <p className="mb-2 text-center text-sm text-gray-500">
            We&apos;ve sent a 6-digit code to your email address
          </p>
          <p className="mb-6 text-center text-sm text-gray-500">{email}</p>

          <form onSubmit={handleVerify}>
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
                  className="h-14 w-12 rounded-md border-2 border-border-gray text-center text-xl font-bold text-navy outline-none transition-colors focus:border-crimson focus:shadow-[0_0_0_3px_rgba(158,11,25,0.1)]"
                />
              ))}
            </div>

            <p className="mb-6 text-center text-sm text-gray-500">
              {resendTimer > 0
                ? `Resend in ${resendTimer}s`
                : "Didn&apos;t receive the code? "}
              {resendTimer === 0 && (
                <button
                  type="button"
                  onClick={handleResend}
                  className="font-semibold text-crimson"
                >
                  Resend
                </button>
              )}
            </p>

            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-crimson px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-px hover:bg-crimson-dark hover:shadow-lg"
            >
              Verify
            </button>
          </form>

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
