import type { Metadata } from "next";
import Image from "next/image";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { compressionBootPricing } from "@/lib/compressionBootPricing";

const gallery = [
  {
    src: "/compression-boots-pair-tabletop.jpg",
    alt: "Pair of compression boots laid out on the treatment table, one open showing the inner lining",
  },
  {
    src: "/compression-boots-interior-panels.jpg",
    alt: "Close-up of the unzipped compression boots showing the internal air-chamber panels",
  },
  {
    src: "/compression-boots-cuff-closeup.jpg",
    alt: "Close-up of the compression boot cuffs",
  },
  {
    src: "/compression-boots-controller-display.jpg",
    alt: "Handheld compression boot controller showing battery level and mode icons on its display",
  },
];

export const metadata: Metadata = {
  title: "Compression Boot Recovery Caboolture",
  description:
    "Relax with a compression boot session in Caboolture with Gloria Mullaly at Glow in Wellness. Dynamic air compression, infrared heat, and gentle vibration for tired, heavy legs — a relaxation service, not a medical treatment. Book online today.",
  keywords: [
    "compression boots Caboolture",
    "compression boot relaxation Caboolture",
    "leg relaxation Caboolture",
    "recovery lounge Caboolture",
  ],
};

const useCases = [
  "Athletes and active clients looking for a relaxing recovery-style add-on after exercise",
  "Desk workers and anyone who's on their feet a lot during the day",
  "Anyone wanting a relaxing addition to their regular wellness routine",
  "That heavy, tired feeling in the legs after a long day",
  "Anyone wanting a relaxing add-on to their massage session",
];

// Phrased the way Gloria is required to phrase benefits as a Remedial Massage
// Therapist: "may help with" / "has been known to improve".
//
// The hedge does NOT make a therapeutic claim permissible. These are deliberately
// limited to comfort and relaxation outcomes. Do not add the supplier's claims
// (circulation, lymphatic drainage, inflammation, recovery time, pain relief)
// even in hedged form — commit 8c85894 stripped exactly that class of claim from
// this page for TGA compliance. Flag it back to Gloria instead.
const benefits = [
  "May help with that heavy, tired feeling in the legs after a long day on your feet",
  "Has been known to improve how relaxed and comfortable the legs feel after exercise",
  "Gentle warmth and rhythmic compression that many clients find soothing",
  "Popular with athletes and active clients as a recovery-style add-on",
  "A low-effort session — you simply sit back while the boots do the work",
  "Available as a standalone session or added on to any massage",
];

// Gloria's required wording: a check-with-your-doctor disclaimer has to sit with
// any list of benefits, not just in the FAQ further down the page.
const benefitsDisclaimer =
  "Individual experience varies. If you are not in generally good health, or you have a medical condition affecting your circulation or swelling, please check with your doctor before your session — and mention it when you book so it can be tailored appropriately. This is a relaxation and wellness service, not a medical treatment.";

const expectSteps = [
  {
    title: "Settle in",
    description:
      "You'll get comfortable in a treatment chair while Gloria explains how the session works and answers any questions you have.",
  },
  {
    title: "Boots fitted",
    description:
      "The compression boots are fitted snugly over your legs, from feet to thighs, over light clothing.",
  },
  {
    title: "Compression, heat and vibration cycle",
    description:
      "Once switched on, the boots move through gentle waves of dynamic air compression, combined with infrared heat and vibration, working from your feet upward.",
  },
  {
    title: "Relax and recover",
    description:
      "Sit back and relax for the length of your session — 20 or 45 minutes as a standalone treatment, or as a quick add-on during your massage.",
  },
];

const faqs = [
  {
    question: "What are the compression boots?",
    answer:
      "They're a relaxation device that fits over your legs and uses dynamic air compression, combined with infrared heat and vibration. Many people find the sensation relaxing, and they're a popular add-on for athletes and active people as part of a general wellness routine — they're not a medical treatment device.",
  },
  {
    question: "How long does a compression boot session take?",
    answer:
      "Sessions run for 20 or 45 minutes depending on what you're after, with 4-session packages available at a discount. You can also add a compression boot session on to any massage appointment for a shorter, focused top-up.",
  },
  {
    question: "Can I add compression boots on to my massage?",
    answer:
      "Yes — it's a popular add-on. Just let Gloria know when you book and she'll build it into your appointment time.",
  },
  {
    question: "What should I wear for a compression boot session?",
    answer:
      "You can stay fully clothed. Light, comfortable clothing like leggings, shorts, or tracksuit pants works best so the boots can be fitted easily over your legs.",
  },
  {
    question: "Is this suitable for me?",
    answer:
      "Compression boot sessions are a general relaxation and wellness service suitable for most people looking to unwind tired or heavy legs — it isn't a medical treatment. If you are not in generally good health, or you have a medical condition affecting your circulation or swelling, please check with your doctor before booking, or mention it when you book so the session can be tailored appropriately.",
  },
];

const relatedServices = [
  { name: "Remedial Massage", href: "/remedial-massage-caboolture" },
  { name: "Bowen Therapy", href: "/bowen-therapy-caboolture" },
];

export default function CompressionBootRecoveryCabooltureePage() {
  return (
    <ServicePageTemplate
      breadcrumb={{
        name: "Compression Boot Recovery Caboolture",
        href: "/compression-boot-recovery-caboolture",
      }}
      heading="Compression Boot Recovery Caboolture"
      intro="The compression boots combine dynamic air compression, infrared heat, and vibration for a relaxing, recovery-style session — a popular way to unwind tired, heavy legs, whether on their own or added on to your massage. This is a relaxation service, not a medical treatment."
      heroImage={{
        src: "/compression-boots-product-detail.jpg",
        alt: "Close-up of the compression boot cuffs",
      }}
      benefits={benefits}
      benefitsDisclaimer={benefitsDisclaimer}
      expectSteps={expectSteps}
      pricing={compressionBootPricing}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4">
        What Are Compression Boots?
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        Glow in Wellness uses professional-grade compression boots — a pair of full-leg sleeves that fit
        over your feet and legs and cycle through gentle waves of dynamic air compression. Built-in
        infrared heat and vibration work alongside the compression, and many clients find the
        sensation relaxing from the feet upward.
      </p>
      <p className="text-text-muted leading-relaxed mb-4">
        It&apos;s a relaxing, hands-off way to unwind — you simply sit back while the boots do
        the work, whether that&apos;s as its own session or added on to your regular massage. This is a
        relaxation and wellness service, not a medical treatment.
      </p>

      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4 mt-10">
        Who It&apos;s For
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        Compression boot sessions are general relaxation and wellness support suited to a wide
        range of people, including:
      </p>
      <ul className="flex flex-col gap-2 mb-4 text-sm text-text-muted">
        {useCases.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sage mt-1.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex items-start gap-2 bg-sage-light rounded-xl px-4 py-3 mt-2">
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
        <p className="text-text-muted text-sm leading-relaxed">
          If you are not in generally good health, or you have a medical condition affecting your
          circulation or swelling, please check with your doctor before booking — or mention it
          when you book so the session can be tailored appropriately.
        </p>
      </div>

      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4 mt-10">
        Take a Closer Look
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {gallery.map((image) => (
          <div key={image.src} className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </ServicePageTemplate>
  );
}
