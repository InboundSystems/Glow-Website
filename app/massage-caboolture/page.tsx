import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Massage Caboolture | All Services",
  description:
    "Massage therapy in Caboolture with Gloria Mullaly at Glow in Wellness. Remedial massage, Bowen therapy, and TMJ Remedial Treatment. HICAPS rebates available on remedial massage.",
  keywords: [
    "massage Caboolture",
    "massage therapist Caboolture",
    "massage therapy Caboolture",
    "HICAPS massage Caboolture",
    "Caboolture massage clinic",
  ],
};

const services = [
  {
    title: "Remedial Massage",
    description:
      "Assessment-based therapeutic massage targeting the root cause of pain, tension, and restricted movement. HICAPS rebates available.",
    href: "/remedial-massage-caboolture",
    badge: "Most Popular · HICAPS",
  },
  {
    title: "Bowen Therapy",
    description:
      "A gentle, non-invasive technique that works with the nervous system to trigger deep healing. One of the only practitioners in Caboolture.",
    href: "/bowen-therapy-caboolture",
    badge: "Uncontested in Caboolture",
  },
  {
    title: "TMJ Remedial Treatment",
    description:
      "A whole-body approach to treating jaw joint dysfunction through fascial connections — addressing the back, neck, shoulders, glutes, and intra-oral tissue.",
    href: "/tmj-treatment-caboolture",
    badge: "Specialist Service",
  },
];

export default function MassageCabooltureePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Massage Caboolture", href: "/massage-caboolture" }]} />

      {/* Hero — dark */}
      <section className="bg-cream pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-3">
            Caboolture, Queensland
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Massage Caboolture
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
            Glow in Wellness offers a full range of massage and bodywork therapies in Caboolture,
            QLD. Whether you need targeted pain relief, gentle healing, or post-surgical recovery
            support — Gloria Mullaly has a treatment designed for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] bg-plum text-white font-medium text-sm hover:bg-plum-dark transition-colors"
            >
              Book Your Appointment
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] border-2 border-white/30 text-white font-medium text-sm hover:border-white transition-colors"
            >
              About Gloria
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid — white */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-10">
            All Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-2xl p-6 flex flex-col gap-4 border border-border-brand hover:shadow-md transition-shadow"
              >
                {service.badge && (
                  <span className="inline-block self-start text-xs font-medium text-plum bg-sage-light rounded-full px-3 py-1">
                    {service.badge}
                  </span>
                )}
                <h3 className="font-serif text-lg font-semibold text-text-dark">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-plum group-hover:gap-2 transition-all">
                  Learn more
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HICAPS strip — plum */}
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
              Claim your health fund rebate at the time of your appointment — no receipts, no
              waiting. Medibank, BUPA, HCF, NIB, AHM, HBF and more.
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

      {/* Why Gloria — dark */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6">
            Why Choose Glow in Wellness?
          </h2>
          <div className="flex flex-col gap-5">
            {[
              {
                title: "Qualified and experienced",
                body: "Gloria holds a Diploma of Remedial Massage from Q Academy, is a certified Bowen Therapy practitioner, a TMJ Massage Therapies Level 1 graduate, and a proud member of ANTA — the Australian Natural Therapists Association.",
              },
              {
                title: "Every session is personalised",
                body: "No cookie-cutter treatments. Every session starts with a proper assessment and is tailored to your specific body, history, and goals.",
              },
              {
                title: "HICAPS on the spot",
                body: "As a registered HICAPS provider, Gloria can process your health fund claim for remedial massage immediately at your appointment. No receipts, no waiting.",
              },
              {
                title: "Rare expertise in Caboolture",
                body: "Gloria is one of a small number of certified Bowen Therapy practitioners in the region — giving Caboolture clients access to a therapy that's genuinely hard to find locally.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-1.5 rounded-full bg-plum shrink-0 self-stretch" />
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — light */}
      <section className="bg-sage-light py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-4">
            Ready to Book?
          </h2>
          <p className="text-text-muted mb-8">
            Book online or call Gloria directly — she&apos;d love to help you find the right
            treatment for what you&apos;re dealing with.
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
              className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] border-2 border-plum text-plum font-medium text-sm hover:bg-plum hover:text-white transition-colors"
            >
              Contact Gloria
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
