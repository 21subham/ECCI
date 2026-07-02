"use client";

import { useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "../../../components/DashboardLayout";

const plans = [
  {
    id: "individual",
    name: "Individual",
    price: "NPR 5,000",
    period: "per year",
    features: ["Directory listing", "Event discounts", "Member networking"],
    current: false,
  },
  {
    id: "corporate",
    name: "Corporate",
    price: "NPR 15,000",
    period: "per year",
    features: [
      "Premium directory",
      "All event access",
      "Matrimonial listing",
      "Resource center",
    ],
    current: true,
  },
  {
    id: "patron",
    name: "Lifetime",
    price: "NPR 1,00,000",
    period: "one-time",
    features: [
      "Everything in Corporate",
      "No annual renewal",
      "Priority support",
      "Board nomination eligible",
    ],
    current: false,
  },
];

export default function RenewSubscriptionPage() {
  const [selected, setSelected] = useState("corporate");

  const selectedPlan = plans.find((p) => p.id === selected);
  const processingFee = 200;
  const total = selectedPlan ? parseInt(selectedPlan.price.replace(/[^0-9]/g, "")) + processingFee : 0;

  return (
    <DashboardLayout activeItem="Renew Subscription">
      {/* Welcome Banner */}
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg border border-border-gray bg-white p-8 md:flex-row md:items-center">
        <div>
          <h2 className="mb-2 text-2xl font-heading text-navy">Renew Subscription</h2>
          <p className="text-sm text-gray-500">Keep your ECCI membership active. Select a plan and complete payment.</p>
        </div>
      </div>

      {/* Current Status */}
      <div
        className="mb-6 rounded-lg border border-border-gray bg-white"
        style={{ borderLeft: "4px solid var(--crimson)" }}
      >
        <div className="p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="mb-1 text-sm text-gray-500">Current Plan</div>
              <div className="text-lg font-heading font-bold text-navy">Corporate Membership</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="mb-1 text-sm text-gray-500">Expires</div>
              <div className="text-base font-semibold text-crimson">March 31, 2026</div>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Selection */}
      <div className="mb-8">
        <h3 className="mb-4 text-xl font-heading text-navy">Select Renewal Plan</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelected(plan.id)}
              className={`cursor-pointer rounded-lg border-2 bg-white transition-all ${
                plan.current
                  ? "border-crimson"
                  : "border-border-gray hover:border-ice-blue"
              }`}
            >
              <div className="p-6 text-center">
                {plan.current && (
                  <div
                    style={{
                      display: "inline-block",
                      padding: "2px 10px",
                      borderRadius: "100px",
                      fontSize: "10px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      background: "var(--crimson)",
                      color: "white",
                      marginBottom: "var(--space-3)",
                    }}
                  >
                    Current Plan
                  </div>
                )}
                <div className="mb-2 font-heading text-lg font-bold text-navy">{plan.name}</div>
                <div className="mb-2 text-3xl font-bold text-crimson">{plan.price}</div>
                <div className="mb-4 text-sm text-gray-500">{plan.period}</div>
                <ul className="text-left text-sm text-gray-600" style={{ listStyle: "none", padding: 0 }}>
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        padding: "var(--space-2) 0",
                        borderBottom: "1px solid var(--gray-100)",
                      }}
                    >
                      ✓ {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Summary */}
      <div className="mb-6 rounded-lg border border-border-gray bg-white">
        <div className="border-b border-border-gray px-6 py-5">
          <div className="text-lg font-heading font-bold text-navy">Payment Summary</div>
        </div>
        <div className="p-6">
          <div
            className="flex justify-between py-3"
            style={{ borderBottom: "1px solid var(--gray-100)" }}
          >
            <span className="text-gray-600">Corporate Membership (1 Year)</span>
            <span className="font-semibold text-navy">NPR {selectedPlan?.price.replace(/[^0-9]/g, "")}</span>
          </div>
          <div
            className="flex justify-between py-3"
            style={{ borderBottom: "1px solid var(--gray-100)" }}
          >
            <span className="text-gray-600">Processing Fee</span>
            <span className="font-semibold text-navy">NPR {processingFee}</span>
          </div>
          <div className="flex justify-between py-3 text-lg">
            <span className="font-bold text-navy">Total</span>
            <span className="font-bold text-crimson">NPR {total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Payment Form */}
      <div className="rounded-lg border border-border-gray bg-white">
        <div className="border-b border-border-gray px-6 py-5">
          <div className="text-lg font-heading font-bold text-navy">Payment Details</div>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <label className="form-label mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
              Card Number
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="form-input w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-navy"
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="form-label mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="form-input w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-navy"
              />
            </div>
            <div>
              <label className="form-label mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                CVV
              </label>
              <input
                type="text"
                placeholder="123"
                className="form-input w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-navy"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="form-label mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
              Cardholder Name
            </label>
            <input
              type="text"
              placeholder="Name as on card"
              className="form-input w-full rounded-md border border-border-gray px-4 py-2.5 text-sm text-navy"
            />
          </div>
          <Link
            href="/portal/subscription"
            className="btn btn--primary btn--lg flex w-full items-center justify-center"
          >
            Pay NPR {total.toLocaleString()}
          </Link>
          <p
            className="mt-3 text-center text-xs text-gray-400"
            style={{ marginTop: "var(--space-3)" }}
          >
            Secure payment powered by Stripe. Your card details are encrypted.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
