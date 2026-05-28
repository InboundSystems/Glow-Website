import Link from "next/link";

const accreditations = [
  "Diploma of Remedial Massage, Q Academy, QLD",
  "IASTM – Instrument-Assisted Soft Tissue Mobilisation",
  "TMJ Massage Therapies — Level 1",
  "ANTA Member (Australian Natural Therapists Association)",
  "Insurance – Guild Insurance",
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Part A — Feature boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="rounded-2xl border border-border-brand bg-white p-6">
            <h3 className="font-semibold text-plum mb-3">Wholistic Assessment</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              When you receive a treatment at GIW, I adjust my approach to suit what you need.
              It might be hot stones, cupping, or taping. It&apos;s all included, depending on
              what&apos;s best for YOUR body.
            </p>
          </div>

          <div className="rounded-2xl border border-border-brand bg-white p-6">
            <h3 className="font-semibold text-plum mb-3">My promise to you</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              A judgement-free zone where everyone is welcome and treated with respect.
              Respect for your body, your treatment, your lifestyle.
            </p>
          </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Remedial Massage */}
          <div className="rounded-2xl border border-border-brand bg-white p-6 flex flex-col gap-4">
            <h3 className="font-bold text-plum text-lg">Remedial Massage Therapy</h3>
            <p className="text-sm text-text-muted leading-relaxed flex-1">
              Our Remedial Massage services offer tailored treatments for targeted relief.
              Choose the session length that suits your needs and goals.
            </p>
            <div className="flex flex-col gap-1.5 text-sm border-t border-border-brand pt-3">
              <div className="flex justify-between">
                <span className="text-text-muted">45 mins</span>
                <span className="font-semibold text-text-dark">$90</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">70 mins</span>
                <span className="font-semibold text-text-dark">$130</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">90 mins</span>
                <span className="font-semibold text-text-dark">$170</span>
              </div>
            </div>
            <Link
              href="/remedial-massage-caboolture"
              className="self-start inline-flex items-center justify-center px-6 py-2.5 rounded-[50px] border-2 border-plum text-plum text-sm font-medium hover:bg-plum hover:text-white transition-colors"
            >
              Learn more
            </Link>
          </div>

          {/* Bowen Therapy */}
          <div className="rounded-2xl border border-border-brand bg-white p-6 flex flex-col gap-4">
            <h3 className="font-bold text-plum text-lg">Bowen Therapy</h3>
            <p className="text-sm text-text-muted leading-relaxed flex-1">
              Bowen Therapy uses gentle, precise movements to restore balance to the Autonomic
              Nervous System, promoting the body&apos;s natural healing. Addresses pain, stress,
              and a wide range of conditions holistically.
            </p>
            <div className="flex flex-col gap-1.5 text-sm border-t border-border-brand pt-3">
              <div className="flex justify-between">
                <span className="text-text-muted">45–60 mins</span>
                <span className="font-semibold text-text-dark">$110</span>
              </div>
            </div>
            <Link
              href="/bowen-therapy-caboolture"
              className="self-start inline-flex items-center justify-center px-6 py-2.5 rounded-[50px] border-2 border-plum text-plum text-sm font-medium hover:bg-plum hover:text-white transition-colors"
            >
              Learn more
            </Link>
          </div>

          {/* TMJ Remedial Treatment */}
          <div className="rounded-2xl border border-border-brand bg-white p-6 flex flex-col gap-4">
            <h3 className="font-bold text-plum text-lg">TMJ Remedial Treatment</h3>
            <p className="text-sm text-text-muted leading-relaxed flex-1">
              A whole-body approach to treating dysfunction of the TMJ (jaw joint). Addresses
              the connection between your hips and jaw through fascial trains, including
              massage of the back, neck, shoulders, glutes, and intra-oral work.
            </p>
            <div className="flex flex-col gap-1.5 text-sm border-t border-border-brand pt-3">
              <div className="flex justify-between">
                <span className="text-text-muted">Pricing</span>
                <span className="font-semibold text-plum">Coming soon</span>
              </div>
            </div>
            <Link
              href="/tmj-treatment-caboolture"
              className="self-start inline-flex items-center justify-center px-6 py-2.5 rounded-[50px] border-2 border-plum text-plum text-sm font-medium hover:bg-plum hover:text-white transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Book CTA */}
        <div className="flex justify-center">
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] border-2 border-plum text-plum text-sm font-medium hover:bg-plum hover:text-white transition-colors"
          >
            Book your session now
          </Link>
        </div>

      </div>
    </section>
  );
}
