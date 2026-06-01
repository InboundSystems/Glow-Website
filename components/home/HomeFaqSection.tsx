import Link from "next/link";
import FaqSchema from "@/components/schema/FaqSchema";

export const homeFaqs = [
  {
    question: "Do you accept health fund rebates?",
    answer:
      "Yes. Glow in Wellness is a registered HICAPS provider. You can claim your health fund rebate on the spot at the time of your appointment — no receipts or forms needed. Most major Australian funds are accepted including Medibank, BUPA, HCF, NIB, AHM, and HBF.",
  },
  {
    question: "Where is Glow in Wellness located?",
    answer:
      "Glow in Wellness is located at Level 1 R1, 20 King Street, Caboolture Queensland 4510. Call me on 0413 502 977 for parking instructions.",
  },
  {
    question: "What is the difference between remedial massage and Bowen therapy?",
    answer:
      "Remedial massage uses targeted hands-on techniques to address specific muscle groups, relieve pain, and improve mobility. Bowen therapy is a gentle, non-invasive technique that uses light, rolling moves over fascia and muscles to stimulate the body's own healing response. Both are effective — the right choice depends on your condition and goals, and Gloria can advise you.",
  },
  {
    question: "Do I need a doctor's referral to book?",
    answer:
      "No referral is needed. You can book directly online or by calling Gloria. If you have a chronic condition or recent injury it's helpful to mention it when booking so the session can be prepared appropriately.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online any time through our booking page, or call Gloria directly during business hours on 0413 502 977. First-time clients are welcome to call with questions before booking.",
  },
];

export default function HomeFaqSection() {
  return (
    <section className="bg-sage-light py-16">
      <FaqSchema faqs={homeFaqs} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <p className="text-xs font-medium text-plum uppercase tracking-widest mb-3">Got questions?</p>
          <h2 className="font-script text-3xl sm:text-4xl font-semibold text-plum">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {homeFaqs.map((faq) => (
            <details key={faq.question} className="group bg-white rounded-2xl border border-border-brand overflow-hidden">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 hover:bg-sage-light transition-colors">
                <h3 className="font-serif text-base font-semibold text-text-dark">
                  {faq.question}
                </h3>
                <div className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center shrink-0 group-open:bg-plum transition-colors">
                  <svg
                    className="w-3.5 h-3.5 text-plum group-open:text-white transition-all duration-200 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </summary>
              <div className="px-6 pb-5 pt-1 border-t border-border-brand">
                <p className="text-text-muted leading-relaxed text-sm">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/what-to-expect"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-plum hover:text-plum-dark transition-colors"
          >
            See what to expect at your first visit
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
