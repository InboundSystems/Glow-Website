import Link from "next/link";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSchema, { FaqItem } from "@/components/schema/FaqSchema";

type Step = { title: string; description: string };
type RelatedService = { name: string; href: string };

type ServicePageTemplateProps = {
  breadcrumb: { name: string; href: string };
  badge?: string;
  heading: string;
  intro: string;
  children?: React.ReactNode;
  benefits: string[];
  expectSteps: Step[];
  showHicaps?: boolean;
  faqs: FaqItem[];
  relatedServices: RelatedService[];
};

export default function ServicePageTemplate({
  breadcrumb,
  badge = "Caboolture, QLD",
  heading,
  intro,
  children,
  benefits,
  expectSteps,
  showHicaps = false,
  faqs,
  relatedServices,
}: ServicePageTemplateProps) {
  return (
    <>
      <BreadcrumbSchema items={[breadcrumb]} />
      <FaqSchema faqs={faqs} />

      {/* Hero — dark */}
      <section className="bg-cream pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-3">
            {badge}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            {heading}
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
            {intro}
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] bg-plum text-white font-medium text-sm hover:bg-plum-dark transition-colors"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>

      {/* Optional body content — white */}
      {children && (
        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        </section>
      )}

      {/* Benefits — light purple tint */}
      <section className="bg-sage-light py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-8">
            Key Benefits
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-plum mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-muted">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What to Expect — white */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-8">
            What to Expect at Your Appointment
          </h2>
          <div className="flex flex-col gap-6 max-w-2xl">
            {expectSteps.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <div className="w-8 h-8 rounded-full bg-plum text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HICAPS callout — plum */}
      {showHicaps && (
        <section className="bg-plum py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">
                HICAPS Provider
              </p>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                Health Fund Rebates On the Spot
              </h2>
              <p className="text-white/80 text-sm max-w-lg">
                Glow in Wellness is a registered HICAPS provider. Claim your health fund rebate
                instantly at the time of your appointment — no receipts, no waiting.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center justify-center px-7 py-3 rounded-[50px] bg-white text-plum font-medium text-sm hover:bg-sage-light transition-colors"
            >
              Check Your Cover
            </Link>
          </div>
        </section>
      )}

      {/* FAQ — white */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-8">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y divide-border-brand">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-5">
                <h3 className="font-semibold text-text-dark mb-2">{faq.question}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services — light */}
      <section className="bg-sage-light py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl font-bold text-text-dark mb-6">
            Related Services
          </h2>
          <div className="flex flex-wrap gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[50px] border-2 border-plum text-plum text-sm font-medium hover:bg-plum hover:text-white transition-colors"
              >
                {s.name}
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            ))}
            <Link
              href="/book"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[50px] bg-plum text-white text-sm font-medium hover:bg-plum-dark transition-colors"
            >
              Book Now
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA — dark */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-script text-3xl sm:text-4xl font-semibold text-white mb-4">
            Ready to Feel Better?
          </h2>
          <p className="text-white/70 mb-8">
            Book your appointment online or call Gloria directly. She&apos;d love to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] bg-plum text-white font-medium text-sm hover:bg-plum-dark transition-colors"
            >
              Book Your Appointment
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] border-2 border-white/30 text-white font-medium text-sm hover:border-white transition-colors"
            >
              Contact Gloria
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
