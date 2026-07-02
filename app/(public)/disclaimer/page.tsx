import Link from "next/link";
import { PublicLayout } from "../../components/PublicLayout";

const sections = [
  { title: "1. No Warranty", content: "The information on this website is provided on an 'as is' basis. ECCI makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website." },
  { title: "2. Limitation of Liability", content: "In no event shall ECCI be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from the use of or inability to use the information on this website." },
  { title: "3. External Links", content: "This website may contain links to external websites. ECCI is not responsible for the content or privacy practices of external sites. Inclusion of any link does not imply endorsement by ECCI." },
  { title: "4. Membership & Events", content: "Membership benefits and event details are subject to change. ECCI reserves the right to modify, suspend, or discontinue any aspect of its services without prior notice. Event dates, venues, and speakers are subject to change." },
  { title: "5. Financial Information", content: "Financial statements and reports published on this website are for informational purposes only. They have been prepared in good faith but may contain estimates. For official records, please contact the ECCI office." },
  { title: "6. Directory Listings", content: "Directory listings are based on information provided by members. ECCI does not endorse any listed business and is not responsible for the quality of services provided by directory members." },
  { title: "7. Copyright & Trademarks", content: "All content on this website, including text, graphics, logos, and images, is the property of ECCI or its licensors and is protected by copyright and trademark laws. Unauthorized use is prohibited." },
  { title: "8. Governing Law", content: "These terms and conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in New Delhi, India." },
];

export default function DisclaimerPage() {
  return (
    <PublicLayout activeNav="contact">
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-[#0D1B2E] to-[#162D4A] pb-12 pt-[88px] text-white lg:pt-[100px]">
        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-300">
            <Link href="/" className="text-crimson transition-colors hover:text-crimson-light">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">Disclaimer</span>
          </div>
          <h1 className="font-heading text-3xl text-white md:text-4xl">Disclaimer</h1>
          <p className="mt-3 max-w-[600px] text-lg text-white/70">Legal disclaimers for content and services.</p>
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
