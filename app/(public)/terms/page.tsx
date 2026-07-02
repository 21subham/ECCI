import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";

const sections = [
  { title: "1. Acceptance of Terms", content: "By accessing the Everest Chamber of Commerce and Industries (ECCI) website, digital platforms, or any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue use of our services immediately." },
  { title: "2. Membership Eligibility", content: "Membership is open to individuals and businesses that meet ECCI's eligibility criteria. All applicants must provide accurate and complete information during the registration process. ECCI reserves the right to approve or reject applications at its discretion." },
  { title: "3. Membership Fees & Payments", content: "Membership fees are payable annually as per the selected tier. Fees are non-refundable except as specified in the Refund Policy. Late payments may result in suspension of membership benefits until dues are cleared." },
  { title: "4. Member Obligations", content: "Members are expected to uphold the reputation of ECCI, participate in activities, and comply with all rules and regulations. Misrepresentation, fraud, or unethical conduct may result in termination of membership without refund." },
  { title: "5. Intellectual Property", content: "All content on the ECCI platform, including logos, text, graphics, and software, is the property of ECCI or its licensors. Unauthorized reproduction, distribution, or modification is prohibited." },
  { title: "6. Limitation of Liability", content: "ECCI shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by the member in the preceding 12 months." },
  { title: "7. Dispute Resolution", content: "Any disputes arising from these terms shall be resolved through arbitration under the Arbitration and Conciliation Act, 1996. The venue shall be New Delhi, India, and the language of arbitration shall be English." },
  { title: "8. Governing Law", content: "These terms are governed by the laws of India. Any legal proceedings shall be subject to the jurisdiction of courts in New Delhi, India." },
  { title: "9. Privacy & Data Protection", content: "ECCI is committed to protecting your personal data in accordance with India's Digital Personal Data Protection Act, 2023. Please refer to our Privacy Policy for detailed information on data handling practices." },
  { title: "10. Modification of Terms", content: "ECCI reserves the right to modify these terms at any time. Members will be notified of significant changes via email or platform notifications. Continued use of services after changes constitutes acceptance of modified terms." },
  { title: "11. Termination of Membership", content: "ECCI may terminate or suspend membership for violation of terms, non-payment of dues, or conduct detrimental to the chamber's interests. Members may also cancel membership by providing 30 days' written notice." },
  { title: "12. Contact Information", content: "For questions regarding these Terms and Conditions, please contact ECCI at D-71C, 3rd Floor, Vishwakarma Colony, New Delhi – 110044, or email legal@everestchamber.com." },
];

export default function TermsPage() {
  return (
    <PublicLayout activeNav="contact">
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-[#0D1B2E] to-[#162D4A] pb-12 pt-[88px] text-white lg:pt-[100px]">
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="text-crimson transition-colors hover:text-crimson-light">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Terms &amp; Conditions</span>
          </div>
          <h1 className="font-heading text-3xl text-white md:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-3 max-w-[560px] text-lg text-white/70">Please read these terms carefully before using ECCI services.</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-[800px] px-6">
          <span className="inline-block rounded-md bg-ice-tint px-4 py-2 text-xs font-semibold text-gray-500">Effective Date: January 1, 2026</span>
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
