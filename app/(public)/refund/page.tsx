import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";

const sections = [
  { title: "1. Membership Refunds", content: "Membership fees are refundable within 14 days of payment if the application is rejected by ECCI. No refunds are provided after membership activation, except as required by law. Pro-rated refunds may be considered at ECCI's discretion for exceptional circumstances." },
  { title: "2. Event Stall Booking Refunds", content: "Cancellations made 30+ days before the event receive a 80% refund. 15–29 days before: 50% refund. Less than 15 days: no refund. All cancellation requests must be submitted in writing to events@everestchamber.com." },
  { title: "3. Event Registration Refunds", content: "Event registration fees are refundable up to 7 days before the event with a 10% administrative deduction. No refunds are provided for no-shows or cancellations within 7 days of the event." },
  { title: "4. Processing Time", content: "Refund requests are processed within 15–20 business days. Refunds are issued via the original payment method. Bank transfer refunds may take an additional 3–5 business days to reflect in your account." },
  { title: "5. Non-Refundable Items", content: "Administrative fees, processing charges, and third-party costs (venue, catering, materials) are non-refundable. Discounted or promotional rates may have additional non-refundable components." },
  { title: "6. Cancellation by ECCI", content: "If ECCI cancels an event or program, registered participants will receive a full refund within 30 days. For membership program cancellations, members will receive a pro-rated refund for the unused period." },
  { title: "7. Dispute Resolution", content: "Any disputes regarding refunds should first be addressed to accounts@everestchamber.com. Unresolved disputes will be mediated by an independent arbitrator in New Delhi, India." },
  { title: "8. Contact for Refunds", content: "For all refund inquiries, please email accounts@everestchamber.com or call +91 98765 43210. Include your Member ID, transaction reference, and reason for refund request." },
];

export default function RefundPage() {
  return (
    <PublicLayout activeNav="contact">
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-[#0D1B2E] to-[#162D4A] pb-12 pt-[88px] text-white lg:pt-[100px]">
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="text-crimson transition-colors hover:text-crimson-light">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Refund Policy</span>
          </div>
          <h1 className="font-heading text-3xl text-white md:text-4xl">Refund Policy</h1>
          <p className="mt-3 max-w-[600px] text-lg text-white/70">Membership and stall booking refund procedures.</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.title} className="legal-section">
                <h3 className="font-heading text-xl text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-[1.8] text-gray-600">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
