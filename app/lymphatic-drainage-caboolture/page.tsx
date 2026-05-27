import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Lymphatic Drainage Massage Caboolture",
  description:
    "Manual lymphatic drainage massage in Caboolture with Gloria Mullaly. Reduce swelling, support post-surgical recovery, and promote immune function. HICAPS rebates available.",
  keywords: [
    "lymphatic drainage Caboolture",
    "lymphatic massage Caboolture",
    "manual lymphatic drainage Moreton Bay",
    "post surgery massage Caboolture",
    "lymphoedema massage Caboolture",
  ],
};

const benefits = [
  "Reduces swelling and fluid retention (oedema) throughout the body",
  "Supports post-surgical recovery and reduces bruising",
  "Boosts immune function and the body's natural detoxification",
  "Relieves symptoms of lymphoedema",
  "Deeply relaxing — activates the parasympathetic nervous system",
  "Suitable post-surgery, post-illness, or as ongoing health maintenance",
];

const expectSteps = [
  {
    title: "Health history",
    description:
      "Gloria reviews your medical history and any conditions that may affect lymphatic drainage. Some conditions require medical clearance — she'll advise if that applies to you.",
  },
  {
    title: "Gentle, rhythmic treatment",
    description:
      "Manual lymphatic drainage uses very light, rhythmic strokes in a specific sequence that follows the lymphatic pathways. It's much gentler than standard massage.",
  },
  {
    title: "Full body or targeted",
    description:
      "The session can focus on a specific area of concern (such as post-surgical swelling) or cover the full body for general immune and detox support.",
  },
  {
    title: "Aftercare",
    description:
      "Hydration is especially important after lymphatic drainage. Gloria may also recommend compression or specific movement to support continued drainage between sessions.",
  },
];

const faqs = [
  {
    question: "What is manual lymphatic drainage?",
    answer:
      "Manual lymphatic drainage (MLD) is a specialised massage technique that uses gentle, rhythmic strokes to stimulate the flow of lymph fluid through the lymphatic system. Unlike blood, which is pumped by the heart, lymph relies on muscle movement and external pressure to circulate. MLD manually encourages this flow, helping to reduce swelling, clear waste products, and support immune function.",
  },
  {
    question: "Who can benefit from lymphatic drainage massage?",
    answer:
      "Lymphatic drainage is beneficial for people recovering from surgery (including cosmetic procedures), those with lymphoedema, people experiencing chronic swelling or fluid retention, those recovering from illness, and anyone looking to support their immune system and overall wellness. It is also deeply relaxing for people under high stress.",
  },
  {
    question: "Is lymphatic drainage massage the same as regular massage?",
    answer:
      "No. Manual lymphatic drainage uses very light, precise strokes specifically designed to stimulate lymphatic vessels just beneath the skin. It is much gentler than remedial or deep tissue massage and follows a specific sequence based on the lymphatic pathways. The technique and goals are completely different from standard massage.",
  },
  {
    question: "How many sessions do I need?",
    answer:
      "For post-surgical recovery, a series of sessions in the first few weeks is typically recommended — often every few days initially, tapering off as swelling reduces. For lymphoedema management, regular maintenance sessions are usually required. For general wellness and immune support, monthly sessions are a common approach.",
  },
  {
    question: "Can I claim lymphatic drainage on my health fund?",
    answer:
      "Lymphatic drainage performed by a qualified remedial massage therapist is claimable on many health fund extras policies. Glow in Wellness is a HICAPS registered provider, so you can claim on the spot if your fund covers the treatment. Check your fund's policy details or call us to discuss.",
  },
];

const relatedServices = [
  { name: "Remedial Massage", href: "/remedial-massage-caboolture" },
  { name: "Pregnancy Massage", href: "/pregnancy-massage-caboolture" },
];

export default function LymphaticDrainageCabooltureePage() {
  return (
    <ServicePageTemplate
      breadcrumb={{
        name: "Lymphatic Drainage Caboolture",
        href: "/lymphatic-drainage-caboolture",
      }}
      heading="Lymphatic Drainage Massage Caboolture"
      intro="Manual lymphatic drainage in Caboolture — a gentle, rhythmic massage technique that stimulates the lymphatic system to reduce swelling, support immune function, and promote healing after surgery or illness."
      benefits={benefits}
      expectSteps={expectSteps}
      showHicaps
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
