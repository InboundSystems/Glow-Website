import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Sports Massage Caboolture",
  description:
    "Sports massage in Caboolture with Gloria Mullaly. Reduce muscle soreness, prevent injury, and perform at your best. HICAPS health fund rebates available. Book today.",
  keywords: [
    "sports massage Caboolture",
    "sports massage Moreton Bay",
    "athlete massage Caboolture",
    "performance massage Caboolture",
    "muscle recovery massage Caboolture",
  ],
};

const benefits = [
  "Reduces muscle soreness and speeds post-training recovery",
  "Improves flexibility, range of motion, and tissue quality",
  "Prevents injury through regular maintenance and early detection of tightness",
  "Prepares muscles for peak performance before events",
  "Addresses sport-specific tension patterns unique to your training load",
  "Suitable for all activity levels — from weekend warriors to competitive athletes",
];

const expectSteps = [
  {
    title: "Sport and training discussion",
    description:
      "Gloria asks about your sport, training schedule, recent events, and any niggles or areas of concern. This shapes every decision in the session.",
  },
  {
    title: "Assessment",
    description:
      "A quick movement and postural assessment to identify restrictions, compensation patterns, and priority areas before treatment begins.",
  },
  {
    title: "Targeted treatment",
    description:
      "Techniques are chosen based on whether the goal is pre-event preparation, post-event recovery, or maintenance. Pressure and focus are adjusted accordingly.",
  },
  {
    title: "Stretch and aftercare",
    description:
      "Sport-specific stretches and self-care recommendations to support recovery and keep you training consistently.",
  },
];

const faqs = [
  {
    question: "What is sports massage and who is it for?",
    answer:
      "Sports massage is a targeted form of remedial massage designed for people with active lifestyles. It addresses the specific demands that sport and exercise place on the body — tight quads, strained hamstrings, overworked shoulders, compressed hips. It's not just for elite athletes. Anyone who exercises regularly — runners, gym-goers, cyclists, team sport players, or weekend warriors — can benefit from regular sports massage.",
  },
  {
    question: "Should I get a sports massage before or after training?",
    answer:
      "Both serve different purposes. Pre-event massage focuses on warming up the muscles, improving circulation, and mentally preparing the body for effort — it uses lighter, stimulating techniques. Post-event massage focuses on flushing out metabolic waste, reducing soreness, and beginning the recovery process — it's generally gentler and more restorative. Maintenance massage between training sessions is the most common and typically involves firmer, deeper work.",
  },
  {
    question: "How often should I get a sports massage?",
    answer:
      "During heavy training periods, fortnightly sessions are a good baseline. During lighter training phases or off-season, monthly maintenance is often sufficient. If you're preparing for a specific event, Gloria can structure a pre-event plan around your competition calendar.",
  },
  {
    question: "Can I claim sports massage on my health fund?",
    answer:
      "Sports massage performed by a qualified remedial massage therapist is claimable on most health fund extras. Glow in Wellness is HICAPS registered, so you can claim on the spot at the time of your appointment. Bring your health fund card and we'll process it immediately.",
  },
  {
    question: "Will sports massage make me sore?",
    answer:
      "Some mild post-massage soreness is normal, particularly if areas of significant tightness are worked deeply. This typically resolves within 24–48 hours. Gloria communicates throughout the session and adjusts pressure based on your feedback. Staying well hydrated after your appointment helps the body clear waste products released during treatment.",
  },
];

const relatedServices = [
  { name: "Remedial Massage", href: "/remedial-massage-caboolture" },
  { name: "Lymphatic Drainage", href: "/lymphatic-drainage-caboolture" },
];

export default function SportsMassageCabooltureePage() {
  return (
    <ServicePageTemplate
      breadcrumb={{ name: "Sports Massage Caboolture", href: "/sports-massage-caboolture" }}
      heading="Sports Massage Caboolture"
      intro="Sports massage in Caboolture for athletes and active people at every level. Reduce soreness, recover faster, prevent injury, and perform at your best — with Gloria Mullaly at Glow in Wellness."
      benefits={benefits}
      expectSteps={expectSteps}
      showHicaps
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
