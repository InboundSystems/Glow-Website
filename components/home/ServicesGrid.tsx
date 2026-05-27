import Link from "next/link";

const accreditations = [
  "Diploma of Remedial Massage, G Academy, QLD",
  "IASTM – Instrument-Assisted Soft Tissue Mobilisation",
  "Scar Tissue Therapy – CK Massage QLD",
  "ANTA Member (Australian Natural Therapists Association)",
  "TMJ Dysfunction Course",
  "Insurance – Guild Insurance",
];

const additionalServices = [
  {
    title: "Scar Tissue Therapy",
    description:
      "Specialist massage to break down adhesions, improve tissue mobility, and reduce pain around surgical or injury scars.",
    href: "/scar-tissue-therapy-caboolture",
  },
  {
    title: "Pregnancy Massage",
    description:
      "Safe, nurturing massage for expectant mothers — easing back pain, swelling, and the fatigue of pregnancy.",
    href: "/pregnancy-massage-caboolture",
  },
  {
    title: "Sports Massage",
    description:
      "Optimise performance and accelerate recovery. Ideal before events or to manage training load and prevent injury.",
    href: "/sports-massage-caboolture",
  },
  {
    title: "Lymphatic Drainage",
    description:
      "Gentle, rhythmic massage that stimulates lymph flow to reduce swelling and support post-surgical recovery.",
    href: "/lymphatic-drainage-caboolture",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Part A — Feature boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="rounded-2xl border border-border-brand bg-white p-6">
            <h3 className="font-semibold text-plum mb-3">Wholistic Assessment</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              When you receive a treatment at GIW, I adjust my approach to suit what you need.
              It might be hot stones, cupping, or taping. It&apos;s all included, depending on
              what&apos;s best for YOUR body.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-border-brand bg-white p-6">
            <h3 className="font-semibold text-plum mb-3">My promise to you</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              A judgement-free zone where everyone is welcome and treated with respect.
              Respect for your body, your treatment, your lifestyle.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-border-brand bg-white p-6">
            <h3 className="font-semibold text-plum mb-3">Accreditations</h3>
            <ul className="flex flex-col gap-1.5 mb-3">
              {accreditations.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-muted leading-relaxed">
                  <span className="mt-1 shrink-0 text-plum">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-text-muted/60 italic">Training badges coming soon.</p>
          </div>
        </div>

        {/* Part B — Services and Pricing */}
        <div className="text-center mb-10">
          <h2 className="font-script text-[2.5rem] font-semibold text-plum mb-3">
            Services and Pricing
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
            All of my massages combine remedial and relaxation techniques, so you don&apos;t
            need to choose between the two. Your body will let us know what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* Remedial Massage */}
          <div className="rounded-2xl border border-border-brand bg-white p-6 flex flex-col gap-4">
            <h3 className="font-bold text-plum text-lg">Remedial Massage Therapy</h3>
            <p className="text-sm text-text-muted leading-relaxed flex-1">
              Our Remedial Massage services offer tailored treatments for targeted relief.
              Choose a 30-minute session for focused attention, 60 minutes for thorough care
              and relaxation, or 90 minutes for a comprehensive full-body experience ensuring
              total rejuvenation.
            </p>
            <Link
              href="/remedial-massage-caboolture"
              className="self-start inline-flex items-center justify-center px-6 py-2.5 rounded-[50px] border-2 border-plum text-plum text-sm font-medium hover:bg-plum hover:text-white transition-colors"
            >
              See prices
            </Link>
          </div>

          {/* Bowen Therapy */}
          <div className="rounded-2xl border border-border-brand bg-white p-6 flex flex-col gap-4">
            <h3 className="font-bold text-plum text-lg">Bowen Therapy</h3>
            <p className="text-sm text-text-muted leading-relaxed flex-1">
              Bowen Therapy uses gentle, precise movements to restore balance to the Autonomic
              Nervous System, promoting the body&apos;s natural healing. It addresses various
              conditions holistically, including pain, stress, and digestive issues, with
              treatments lasting 30–60 minutes.
            </p>
            <Link
              href="/bowen-therapy-caboolture"
              className="self-start inline-flex items-center justify-center px-6 py-2.5 rounded-[50px] border-2 border-plum text-plum text-sm font-medium hover:bg-plum hover:text-white transition-colors"
            >
              See prices
            </Link>
          </div>
        </div>

        {/* Book CTA */}
        <div className="flex justify-center mb-16">
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] border-2 border-plum text-plum text-sm font-medium hover:bg-plum hover:text-white transition-colors"
          >
            Book your session now
          </Link>
        </div>

        {/* Additional services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border-brand bg-white p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-text-dark">{service.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed flex-1">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-plum hover:gap-2 transition-all"
              >
                Learn more
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
