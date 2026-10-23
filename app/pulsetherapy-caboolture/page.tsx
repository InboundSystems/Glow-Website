import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { pulsetherapyPricing } from "@/lib/pulsetherapyPricing";

export const metadata: Metadata = {
  title: "Pulsetherapy Caboolture",
  description:
    "Pulsetherapy in Caboolture with Gloria Mullaly at Glow in Wellness. A fully-clothed, reclined session using compression sleeves that pulse in time with your own heartbeat, from the ankles up. Introductory pricing — book online today.",
  keywords: [
    "Pulsetherapy Caboolture",
    "Pulsetherapy near me",
    "Pulsetherapy Moreton Bay",
    "rhythmic compression therapy Caboolture",
    "compression therapy Caboolture",
    "wellness services Caboolture",
    "relaxation therapy Caboolture",
  ],
};

// Phrased the way Gloria is required to phrase benefits as a Remedial Massage
// Therapist: "may help with" / "has been known to improve".
//
// The hedge does NOT make a therapeutic claim permissible. Kept deliberately to
// comfort and relaxation outcomes. The supplier's marketing flyer additionally
// claims the device "stimulates the immune system", "detoxifies", "accelerates
// healing", "relieves pain", "regulates inflammation" and treats "chronic pain"
// and "digestive disorders" — that is exactly the class of claim commit 8c85894
// stripped from this site for TGA compliance. Do not add them, even hedged, even
// if asked directly. Flag it back to Gloria instead.
const benefits = [
  "May help with that heavy, tired feeling in the legs and lower body",
  "Has been known to improve how relaxed and comfortable you feel after a session",
  "A fully-clothed, reclined session — nothing to undress for",
  "Pulses are timed to your own heartbeat, working from the ankles up",
  "A full consultation is included so the session is tailored to you",
  "A low-effort way to unwind, on its own or alongside your regular massage",
];

// Gloria's required wording: the check-with-your-doctor disclaimer has to sit
// with any list of benefits, not just in the FAQ further down the page.
const benefitsDisclaimer =
  "Individual experience varies. If you are not in generally good health, or you have a medical condition affecting your circulation, heart or swelling, please check with your doctor before your session — and mention it when you book so it can be tailored appropriately. This is a relaxation and wellness service, not a medical treatment.";

const expectSteps = [
  {
    title: "Book your session",
    description:
      "Sessions run for 45 minutes in total and are booked online or by phone. Let Gloria know if it's your first one.",
  },
  {
    title: "15-minute consultation",
    description:
      "Your appointment starts with a consultation so the session can be talked through and tailored to you, and so any health questions can be covered first.",
  },
  {
    title: "30-minute treatment",
    description:
      "The sleeves are fitted over your legs and abdomen while you stay fully clothed and reclined. Once switched on, they pulse in time with your own heartbeat, working from the ankles upward.",
  },
  {
    title: "Take your time getting up",
    description:
      "There's no recovery needed afterwards — you're free to get going straight away, or sit for a few minutes if you'd rather.",
  },
];

const faqs = [
  {
    question: "What is Pulsetherapy?",
    answer:
      "It's delivered through a set of leg and abdomen sleeves connected to a console. Once fitted, the sleeves work through a pulsed mechanical stimulation timed to your own heartbeat, moving from the ankles up towards the abdomen. You stay fully clothed and reclined for the whole session.",
  },
  {
    question: "What does \"synchronised to your heartbeat\" actually mean?",
    answer:
      "A sensor reads your pulse for the whole session, and the device times each stimulation to land in the pause between one heartbeat and the next. That means one stimulation per heartbeat, or around 1,800 in a 30-minute session at a resting heart rate of 60 beats per minute. A conventional fixed-cycle compression session delivers around 90.",
  },
  {
    question: "How long is a session, and what does it cost?",
    answer:
      "Sessions run for 45 minutes in total: a 15-minute consultation followed by a 30-minute treatment. It's currently offered at an introductory price of $130.",
  },
  {
    question: "What should I wear?",
    answer:
      "You stay fully clothed throughout. Light, comfortable clothing like leggings, shorts or tracksuit pants works best so the sleeves can be fitted easily.",
  },
  {
    question: "How is it different from the compression boots?",
    answer:
      "The compression boots cover the legs only and combine air compression with infrared heat and vibration. Pulsetherapy covers the legs and abdomen, and its pulses are synchronised to your own heartbeat rather than running on a fixed cycle. Gloria can talk you through which suits what you're after.",
  },
  {
    question: "Is this a medical treatment?",
    answer:
      "No — it's offered as a wellness and relaxation service, not a medical treatment. If you are not in generally good health, or you have a specific medical condition, please check with your doctor before booking, or mention it when you book so your session can be tailored appropriately.",
  },
];

const relatedServices = [
  { name: "Compression Boot Recovery", href: "/compression-boot-recovery-caboolture" },
  { name: "Remedial Massage", href: "/remedial-massage-caboolture" },
];

export default function PulsetherapyCaboolturePage() {
  return (
    <ServicePageTemplate
      breadcrumb={{
        name: "Pulsetherapy Caboolture",
        href: "/pulsetherapy-caboolture",
      }}
      heading="Pulsetherapy Caboolture"
      intro="A fully-clothed, reclined session using compression sleeves that pulse in time with your own heartbeat, working from the ankles up towards the abdomen. Every appointment includes a consultation so it can be tailored to you. This is a relaxation and wellness service, not a medical treatment."
      benefits={benefits}
      benefitsDisclaimer={benefitsDisclaimer}
      expectSteps={expectSteps}
      pricing={pulsetherapyPricing}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4">
        How It Works
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        Pulsetherapy is a rhythmic compression treatment delivered through a set of leg and
        abdomen sleeves connected to a console. Once fitted, the sleeves work through a pulsed mechanical
        stimulation timed to your own heartbeat, moving from the ankles up towards the abdomen.
        You&apos;ll stay fully clothed and reclined for the whole session.
      </p>
      <p className="text-text-muted leading-relaxed mb-4">
        Because the pulses are synchronised to your heart rate rather than running on a fixed
        cycle, the rhythm is different for every person and adjusts as your session goes on. Many
        clients find the sensation relaxing, and there&apos;s nothing to recover from
        afterwards — you can head off as soon as you&apos;re ready.
      </p>
      <p className="text-text-muted leading-relaxed mb-10">
        Every appointment includes a 15-minute consultation. It&apos;s a chance to talk through
        what you&apos;re after, cover any health questions, and have the session tailored to you
        before it starts.
      </p>

      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4">
        The Science Behind the Rhythm
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        Pulsetherapy is a patented process developed in France. What sets it apart is that it
        doesn&apos;t run on a timer. A small sensor reads your pulse throughout the session, and
        the console uses it to time each stimulation so it lands in the pause between one
        heartbeat and the next. The technical term for this is <em>cardio-synchronised</em>{" "}
        stimulation: the device follows your heart&apos;s rhythm rather than setting its own.
      </p>
      <p className="text-text-muted leading-relaxed mb-4">
        Each of those stimulations travels through the sleeves in sequence, starting at the
        ankles and moving up through the legs to the abdomen. Because it&apos;s driven by your
        heart rate, the pace is unique to you, and it shifts naturally as you settle and your
        heart rate changes during the session.
      </p>
      <p className="text-text-muted leading-relaxed mb-6">
        That makes it a very different experience from conventional compression. A typical
        compression cycle squeezes for around 4 seconds and then releases for around 16, the same
        for everyone, which works out to roughly 3 cycles a minute. Pulsetherapy delivers one
        stimulation per heartbeat instead.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="rounded-2xl bg-sage-light p-6 text-center">
          <p className="font-serif text-4xl font-bold text-plum mb-1">~1,800</p>
          <p className="text-sm text-text-muted">
            stimulations in a 30-minute Pulsetherapy session
          </p>
        </div>
        <div className="rounded-2xl bg-sage-light p-6 text-center">
          <p className="font-serif text-4xl font-bold text-text-dark mb-1">~90</p>
          <p className="text-sm text-text-muted">
            cycles in 30 minutes of conventional fixed-cycle compression
          </p>
        </div>
      </div>
      <p className="text-xs text-text-muted leading-relaxed">
        Based on a resting heart rate of 60 beats per minute. Your own count depends on your
        heart rate during the session.
      </p>

      {/*
        NAMING — "Pulsetherapy" is STENDO's registered trademark. It was briefly renamed
        "Rhythmic Compression Therapy" (11 Oct 2026), but Gloria confirmed (email, 15 Oct 2026)
        that as an owner of an official STENDO machine she can use "Pulsetherapy" in her
        marketing, and the supplier asked her to, as it's the term clients search for.
        "STENDO" itself must still never appear in copy, metadata, keywords or alt text.

        Mechanism copy above is sourced from the supplier's own spec sheet
        (STENDO-Pulsetherapy.pdf, found 1 Sept 2026) — deliberately limited to what the device
        physically does (pulsed, cardio-synchronised sleeves, ankles to abdomen). See the note
        above the benefits array for what must NOT be added.

        "The Science Behind the Rhythm" (added 23 Oct 2026, after Gloria asked for "more of the
        science", 15 Oct) uses spec-sheet pp. 2, 4–5 only: pulse sensor, one stimulation between
        heartbeats, ankles-to-abdomen sequence, 1800 vs 90 (60 bpm; 4s on / 16s off, 3/min),
        patented in France. Deliberately EXCLUDED from the same PDF: endothelium stimulation /
        "shear stress", "blood flow activation", "exercise-like" blood pulsatility, "entire body
        effect", lymphatic / metabolic-waste claims, and the indications chart. They are all
        physiological outcome claims, and rule 3 applies to them however they're framed.

        HISTORY — this route was /pulsetherapy-pop-up-caboolture (one-day event, 18 Sept 2026),
        then /rhythmic-compression-therapy-caboolture (11–16 Oct 2026). Both old URLs 308 here
        via next.config.ts. The page is a standing service page at the introductory rate. Gloria has not said
        whether the face treatment is launching as a standing service, so its event-only pricing
        (Face $90, Body + Face combo $170) is not listed. Ask before adding it back.

        TODO: no photography exists for this service yet — the supplier PDFs show visible STENDO
        branding on the console, so those images can't be used. Gloria offered to shoot some once
        the new clinic is set up. Add a heroImage + gallery when they arrive, matching the gallery
        block on the Compression Boot Recovery page.

        NEXT: this page and the Compression Boot Recovery page are both due to be merged into a
        single "Wellness Services" page (Gloria's request), with 308s from both URLs.
      */}
    </ServicePageTemplate>
  );
}
