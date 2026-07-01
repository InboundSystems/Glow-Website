"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const accreditations = [
  "Diploma of Remedial Massage, Q Academy, QLD",
  "IASTM – Instrument-Assisted Soft Tissue Mobilisation",
  "TMJ Massage Therapies — Level 1",
  "ANTA Member (Australian Natural Therapists Association)",
  "Insurance – Guild Insurance",
];

const featureBoxes = [
  {
    title: "Wholistic Assessment",
    body: "When you receive a treatment at GIW, I adjust my approach to suit what you need. It might be hot stones, cupping, or taping. It's all included, depending on what's best for YOUR body.",
    icon: (
      <svg className="w-5 h-5 text-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "My promise to you",
    body: "A judgement-free zone where everyone is welcome and treated with respect. Respect for your body, your treatment, your lifestyle.",
    icon: (
      <svg className="w-5 h-5 text-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Part A — Feature boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {featureBoxes.map((box, i) => (
            <FadeIn key={box.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border-brand bg-white p-6 h-full flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-9 h-9 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                  {box.icon}
                </div>
                <h3 className="font-semibold text-text-dark">{box.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{box.body}</p>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-border-brand bg-white p-6 h-full flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="w-9 h-9 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-plum" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-dark">Accreditations</h3>
              <ul className="flex flex-col gap-1.5 flex-1">
                {accreditations.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-muted leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-plum shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border-brand">
                <Image
                  src="/badge-anta.jpg"
                  alt="ANTA Member — Australian Natural Therapists Association"
                  width={52}
                  height={52}
                  className="rounded-lg object-contain"
                />
                <Image
                  src="/badge-tmj-level1.png"
                  alt="TMJ Massage Therapies Level 1 Graduate"
                  width={52}
                  height={52}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Part B — Services and Pricing */}
        <FadeIn className="text-center mb-10">
          <p className="text-xs font-medium text-plum uppercase tracking-widest mb-3">What I offer</p>
          <h2 className="font-script text-[2.5rem] font-semibold text-plum mb-3">
            Services and Pricing
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto leading-relaxed">
            All of my massages combine remedial and relaxation techniques, so you don&apos;t
            need to choose between the two. Your body will let us know what you need.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Remedial Massage */}
          <FadeIn delay={0.05}>
            <div className="rounded-2xl border border-border-brand bg-white overflow-hidden flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="h-1.5 bg-plum rounded-t-2xl" />
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="font-bold text-text-dark text-lg">Remedial Massage Therapy</h3>
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  Tailored treatments for targeted relief. Assessment-based — every technique chosen for a reason, whether that's deep tissue work, myofascial release, or trigger point therapy.
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
            </div>
          </FadeIn>

          {/* Bowen Therapy */}
          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-border-brand bg-white overflow-hidden flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="h-1.5 bg-plum rounded-t-2xl" />
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="font-bold text-text-dark text-lg">Bowen Therapy</h3>
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  Gentle, precise movements that restore balance to the nervous system and promote the body&apos;s own healing response. Effective for pain, stress, and a wide range of conditions.
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
            </div>
          </FadeIn>

          {/* TMJ Remedial Treatment */}
          <FadeIn delay={0.25}>
            <div className="rounded-2xl border border-border-brand bg-white overflow-hidden flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="h-1.5 bg-plum rounded-t-2xl" />
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="font-bold text-text-dark text-lg">TMJ Remedial Treatment</h3>
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  A whole-body approach to jaw joint dysfunction — addressing the hip-jaw fascial connection through remedial massage, advanced fascial techniques, and intra-oral work.
                </p>
                <div className="flex flex-col gap-1.5 text-sm border-t border-border-brand pt-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Pricing</span>
                    <span className="font-semibold text-plum">Enquire</span>
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
          </FadeIn>

          {/* Compression Boot Recovery */}
          <FadeIn delay={0.35}>
            <div className="rounded-2xl border border-border-brand bg-white overflow-hidden flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <div className="h-1.5 bg-sage rounded-t-2xl" />
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="font-bold text-text-dark text-lg">Compression Boot Recovery</h3>
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  Therabody compression boots with infrared and vibration therapy — designed to flush lactic acid, boost circulation, and speed up muscle recovery. Perfect as a standalone session or added on to your massage.
                </p>
                <div className="flex flex-col gap-1.5 text-sm border-t border-border-brand pt-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">15 mins</span>
                    <span className="font-semibold text-text-dark">$20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">30 mins</span>
                    <span className="font-semibold text-text-dark">$40</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">60 mins</span>
                    <span className="font-semibold text-text-dark">$60</span>
                  </div>
                  <div className="flex justify-between border-t border-border-brand pt-1.5 mt-0.5">
                    <span className="text-text-muted">Add-on to massage</span>
                    <span className="font-semibold text-text-dark">$10</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Book CTA */}
        <FadeIn className="flex justify-center">
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] bg-plum text-white text-sm font-medium hover:bg-plum-dark transition-colors"
          >
            Book your session now
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
