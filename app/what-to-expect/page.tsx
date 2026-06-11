import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSchema from "@/components/schema/FaqSchema";

export const metadata: Metadata = {
  title: "What to Expect",
  description:
    "Not sure what to expect at your first massage or Bowen therapy appointment? I walk you through every step — from booking to aftercare.",
};

const steps = [
  {
    number: "01",
    title: "Book Your Appointment",
    body: "Book online at any time, or call me directly during business hours. When you book, you'll have the option to add a note about what you'd like help with — this helps me prepare for your session.",
    tip: "Not sure which service is right for you? Call first and Gloria will help you decide.",
  },
  {
    number: "02",
    title: "Arrival & Welcome",
    body: "Glow in Wellness is a calm, unhurried space. When you arrive you'll be welcomed and invited to relax for a moment before your session begins. There's no clinical rush here — your appointment time is yours from the moment you walk in.",
    tip: "Wear comfortable, loose-fitting clothing, especially for Bowen therapy sessions.",
  },
  {
    number: "03",
    title: "Health History & Consultation",
    body: "Every session — especially your first — begins with a short consultation. Gloria will ask about your health history, any current pain or discomfort, medications, recent injuries, and what you're hoping to achieve. This is not just paperwork — it directly shapes your treatment. Nothing you share leaves the room.",
    tip: "There are no right or wrong answers. The more honest you are, the better the result.",
  },
  {
    number: "04",
    title: "Your Treatment",
    body: "You'll lie on a comfortable treatment table, draped appropriately at all times. Gloria will work through the agreed approach — whether that's targeted remedial work on specific areas, a comprehensive session that moves through all your areas of concern, or a Bowen therapy session with its characteristic rest pauses. You can give feedback at any time — pressure, temperature, or pace. This is your session.",
    tip: "For Bowen therapy, you'll notice pauses between moves — this is deliberate and important. The body needs time to respond.",
  },
  {
    number: "05",
    title: "Aftercare & Next Steps",
    body: "After your session, Gloria will share any specific aftercare advice. Drink plenty of water, rest if you need to, and avoid strenuous exercise for the remainder of the day. You may feel deeply relaxed, or slightly tender in areas that were worked — both are normal. Many clients notice continued improvement over the 24-48 hours after a session.",
    tip: "If you have a health fund card, you can claim your HICAPS rebate on the spot before you leave (remedial massage only).",
  },
];

const faqs = [
  {
    q: "What should I wear?",
    a: "For massage, you'll be undressed to your comfort level and appropriately draped at all times. For Bowen therapy, you remain clothed, so wear something loose and comfortable.",
  },
  {
    q: "How long is a session?",
    a: "Sessions are typically 70 minutes, though 90-minute appointments are available. Your first session may run slightly longer due to the initial consultation.",
  },
  {
    q: "Will it hurt?",
    a: "Remedial massage can involve firm pressure, especially on areas of tension or injury — but it should never be beyond your comfort. Always communicate with Gloria during the session. Bowen therapy is very gentle and rarely uncomfortable.",
  },
  {
    q: "How many sessions will I need?",
    a: "This varies greatly depending on your condition and goals. Many clients feel significant relief after 1-3 sessions. Chronic conditions may benefit from ongoing maintenance. Gloria will give you an honest recommendation after your initial consultation.",
  },
  {
    q: "Can I claim a rebate from my health fund?",
    a: "Yes — for remedial massage. Glow in Wellness is a registered HICAPS provider, so you can claim your rebate on the spot at the time of your appointment. Please note that Bowen Therapy is not covered by health funds. Cover for remedial massage varies by fund and policy; contact your insurer to confirm your entitlements.",
  },
];

export default function WhatToExpectPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "What to Expect", href: "/what-to-expect" }]} />
      <FaqSchema faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      {/* Hero — dark */}
      <section className="bg-cream pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-3">
            Your First Visit
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            What to Expect
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            First time? Here&apos;s exactly what happens from the moment you
            book to the moment you leave — so there are no surprises, just calm.
          </p>
        </div>
      </section>

      {/* Steps — white */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-plum text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-border-brand mt-2 mb-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10 flex flex-col gap-2">
                  <h2 className="font-serif text-xl font-bold text-text-dark leading-tight pt-1.5">
                    {step.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed">{step.body}</p>
                  <div className="flex items-start gap-2 bg-sage-light rounded-xl px-4 py-3 mt-1">
                    <svg
                      className="w-4 h-4 text-plum shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-sm text-text-muted">{step.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — dark */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white mb-10">Common Questions</h2>
          <div className="flex flex-col gap-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border-b border-white/10 pb-6 last:border-0 last:pb-0"
              >
                <h3 className="font-serif text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — light */}
      <section className="bg-sage-light py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-dark mb-4">
            Ready to book your first session?
          </h2>
          <p className="text-text-muted mb-8">
            It only takes a minute — and HICAPS rebates are available on the spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] bg-plum text-white font-medium text-sm hover:bg-plum-dark transition-colors"
            >
              Book Online
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] border-2 border-plum text-plum font-medium text-sm hover:bg-plum hover:text-white transition-colors"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
