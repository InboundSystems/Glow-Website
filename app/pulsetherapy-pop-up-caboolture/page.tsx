import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { pulsetherapyPopUpPricing } from "@/lib/pulsetherapyPricing";

export const metadata: Metadata = {
  title: "Pulsetherapy Pop-Up Event Caboolture",
  description:
    "Exclusive early access to Pulsetherapy at Glow in Wellness — one day only, Friday 18 September 2026, 10am–6pm in Caboolture. Limited appointments, introductory pop-up pricing, and a discount on future packages for anyone who books and attends.",
  keywords: [
    "Pulsetherapy Caboolture",
    "pop up event Caboolture",
    "new treatment Caboolture",
    "wellness pop up Caboolture",
  ],
};

const benefits = [
  "Be among the first in Caboolture to try Pulsetherapy before it officially launches",
  "A fully-clothed, reclined treatment — pulses timed to your own heartbeat, from ankles to abdomen",
  "Exclusive pop-up pricing — over 20% off the introductory rate",
  "A full consultation included so your session is tailored to you",
  "Face treatment available on the day at its lowest-ever price, ahead of its official launch next year",
  "A discount off future packages for everyone who books and attends",
];

const expectSteps = [
  {
    title: "Reserve your spot",
    description:
      "Pop-up appointments are limited and only available on the day of the event — book ahead to secure your time.",
  },
  {
    title: "15-minute consultation",
    description:
      "Your appointment starts with a consultation so your Pulsetherapy session can be talked through and tailored to you.",
  },
  {
    title: "30-minute treatment",
    description:
      "Sit back for your Pulsetherapy body treatment — or add on the face treatment, or book the combo, while it's available.",
  },
  {
    title: "Leave with a plan",
    description:
      "Ask about ongoing packages — anyone who books and attends the pop-up gets a discount on future Pulsetherapy bookings.",
  },
];

const faqs = [
  {
    question: "What is Pulsetherapy?",
    answer:
      "Pulsetherapy is delivered through a set of leg and abdomen sleeves connected to a console, which work through a pulsed mechanical stimulation timed to your own heartbeat. This pop-up event is your first chance to experience it, with a consultation included so it can be explained and tailored to you on the day.",
  },
  {
    question: "Do I need to book in advance?",
    answer:
      "Yes — pop-up appointments are limited, so booking ahead is strongly recommended.",
  },
  {
    question: "What's included in the appointment?",
    answer:
      "Body appointments run for 45 minutes in total: a 15-minute consultation followed by a 30-minute treatment.",
  },
  {
    question: "Can I book the face treatment too?",
    answer:
      "Yes — a face treatment is available as an add-on for the day only, and booking both together comes with a combo discount.",
  },
  {
    question: "What happens after the pop-up?",
    answer:
      "Pulsetherapy will become a regular service at Glow in Wellness once Gloria's machine arrives. Everyone who books and attends the pop-up receives a discount off future packages.",
  },
  {
    question: "Is this a medical treatment?",
    answer:
      "Pulsetherapy is offered as a wellness and relaxation service, not a medical treatment. If you have a specific medical condition, please check with your doctor before booking, or mention it when you book so your session can be tailored appropriately.",
  },
];

const relatedServices = [
  { name: "Compression Boot Recovery", href: "/compression-boot-recovery-caboolture" },
  { name: "Remedial Massage", href: "/remedial-massage-caboolture" },
];

export default function PulsetherapyPopUpCabooltureePage() {
  return (
    <ServicePageTemplate
      breadcrumb={{
        name: "Pulsetherapy Pop-Up Caboolture",
        href: "/pulsetherapy-pop-up-caboolture",
      }}
      badge="Caboolture, QLD · One Day Only"
      heading="Pulsetherapy Pop-Up — Exclusive Early Access"
      intro="Get exclusive early access to Pulsetherapy before it launches as a regular service at Glow in Wellness. Join us for one day only — Friday 18 September 2026, 10am to 6pm — for an introductory session at exclusive pop-up pricing, plus a discount off future packages when you book again."
      benefits={benefits}
      expectSteps={expectSteps}
      pricing={pulsetherapyPopUpPricing}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <div className="rounded-2xl border border-border-brand bg-sage-light px-6 py-5 mb-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <div className="flex items-center gap-2.5">
          <svg className="w-4 h-4 text-plum shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm text-text-dark font-medium">Friday 18 September 2026</span>
        </div>
        <div className="flex items-center gap-2.5">
          <svg className="w-4 h-4 text-plum shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm text-text-dark font-medium">10am – 6pm</span>
        </div>
        <div className="flex items-center gap-2.5">
          <svg className="w-4 h-4 text-plum shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M5.07 19h13.86a2 2 0 001.75-2.97l-6.93-12a2 2 0 00-3.5 0l-6.93 12A2 2 0 005.07 19z" />
          </svg>
          <span className="text-sm text-text-dark font-medium">Limited appointments — book early to secure your spot</span>
        </div>
      </div>

      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4">
        About Pulsetherapy
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        Pulsetherapy is delivered through a set of leg and abdomen sleeves connected to a
        console. Once fitted, the sleeves work through a pulsed mechanical stimulation timed to
        your own heartbeat, moving from the ankles up towards the abdomen. You&apos;ll stay
        fully clothed and reclined for the whole session.
      </p>
      <p className="text-text-muted leading-relaxed mb-4">
        A face treatment option is also available on the day, ahead of its official launch at
        Glow in Wellness next year — this is the lowest price it will ever be offered at, so
        it&apos;s a rare chance to try it early.
      </p>

      {/*
        Mechanism copy above is sourced from the supplier's own spec sheet
        (STENDO-Pulsetherapy.pdf, found 1 Sept 2026) — deliberately limited to what the
        device physically does (pulsed, cardio-synchronised sleeves, ankles to abdomen).

        NOT included: the supplier's separate marketing flyer ("Affiche n°6.pdf") claims it
        "stimulates the immune system," "detoxifies," "accelerates healing," "relieves pain,"
        "regulates inflammation," and treats "chronic pain" / "digestive disorders". These are
        exactly the class of therapeutic claim this site's TGA compliance pass (commit 8c85894)
        stripped from the compression boots page — do not add them here without a proper
        compliance check, even if Gloria asks for them directly. Flag it back to her instead.

        Also worth raising with Gloria: "Pulsetherapy" is STENDO's own registered trademark
        (see "Pulsetherapy®" in the flyer), not a neutral rename — if the naming restriction is
        about a supplier agreement or device labelling, this may not actually satisfy it.

        TODO (Blake): Swap in a hero image + gallery once non-branded photos are available —
        the supplier PDFs show visible STENDO branding on the console, so those images can't be
        used directly. Pattern matches the gallery block on the Compression Boot Recovery page.

        Also intentionally NOT hardcoding "6 spots left" from Gloria's email — that's a
        snapshot that goes stale fast and risks becoming a false scarcity claim. If she wants a
        live count, it needs to come from the booking system, not static copy.
      */}
    </ServicePageTemplate>
  );
}
