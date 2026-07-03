import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";

const sections = [
  { title: "1. Information We Collect", content: "We collect personal information such as name, email, phone number, company details, and membership preferences when you register or interact with our platform. We also collect usage data through cookies and analytics tools to improve user experience." },
  { title: "2. How We Use Your Information", content: "Your data is used to process membership applications, communicate events and updates, provide member services, improve our platform, and comply with legal obligations. We do not sell your personal data to third parties." },
  { title: "3. Data Sharing & Disclosure", content: "ECCI may share your information with trusted service providers (payment processors, email services), government authorities as required by law, and other members through the public directory only if you have opted in to be visible." },
  { title: "4. Data Security", content: "We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your personal data. However, no method of transmission over the internet is 100% secure." },
  { title: "5. Your Rights (DPDP Act 2023)", content: "Under India's Digital Personal Data Protection Act, 2023, you have the right to access, correct, delete, and port your personal data. You may also withdraw consent for data processing at any time by contacting privacy@everestchamber.com." },
  { title: "6. Cookies & Tracking", content: "We use cookies to enhance browsing experience, analyze traffic, and personalize content. You can manage cookie preferences through your browser settings. Disabling cookies may affect certain platform features." },
  { title: "7. Data Retention", content: "We retain your personal data only as long as necessary for the purposes outlined in this policy and as required by law. Membership data is retained for the duration of your membership plus 7 years for audit purposes." },
  { title: "8. Children's Privacy", content: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete it immediately." },
  { title: "9. International Data Transfers", content: "Your data may be processed in India or other jurisdictions where our service providers operate. We ensure adequate safeguards are in place for any cross-border data transfers." },
  { title: "10. Third-Party Links", content: "Our platform may contain links to third-party websites. We are not responsible for the privacy practices or content of external sites. We encourage you to review their privacy policies." },
  { title: "11. Changes to This Policy", content: "ECCI may update this Privacy Policy periodically. Members will be notified of significant changes via email. The updated policy will be posted on this page with a revised effective date." },
  { title: "12. Contact Us", content: "For privacy-related inquiries, data access requests, or complaints, please contact our Data Protection Officer at privacy@everestchamber.com or write to D-71C, 3rd Floor, Vishwakarma Colony, New Delhi – 110044, India." },
];

export default function PrivacyPage() {
  return (
    <PublicLayout activeNav="contact">
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-dark to-navy-deep-dark pb-12 pt-[88px] text-white lg:pt-[100px]">
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="text-crimson transition-colors hover:text-crimson-light">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Privacy Policy</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="font-heading text-3xl text-white md:text-4xl">Privacy Policy</h1>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Compliant with India&apos;s DPDP Act 2023
            </span>
          </div>
          <p className="mt-3 max-w-[600px] text-lg text-white/70">How ECCI collects, uses, and protects your personal data.</p>
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
