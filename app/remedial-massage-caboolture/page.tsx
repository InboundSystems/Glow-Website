import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Remedial Massage Caboolture",
  description:
    "Remedial massage in Caboolture with qualified therapist Gloria Mullaly. HICAPS health fund rebates on the spot. Assessment-based treatment for pain, injury, and chronic tension. Book today.",
  keywords: [
    "remedial massage Caboolture",
    "remedial massage therapist Caboolture",
    "HICAPS massage Caboolture",
    "therapeutic massage Caboolture",
    "massage therapy Moreton Bay",
  ],
};

const conditions = [
  "Chronic lower back and neck pain",
  "Shoulder and rotator cuff issues",
  "Headaches and tension migraines",
  "Sciatica and nerve pain",
  "Postural imbalance and desk-related pain",
  "Sports injuries and overuse syndromes",
  "Workplace injuries and repetitive strain",
  "Hip and knee pain",
  "Plantar fasciitis",
  "Jaw tension (TMJ)",
];

const benefits = [
  "Relieves chronic and acute musculoskeletal pain",
  "Improves posture and range of motion",
  "Reduces recovery time after injury",
  "HICAPS health fund rebates available on the spot",
  "Assessment-based — targets the cause, not just the symptom",
  "Tailored to your specific body, history, and goals",
];

const expectSteps = [
  {
    title: "Intake and assessment",
    description:
      "Gloria takes a full health history and assesses your posture, range of motion, and areas of pain or restriction. This shapes the entire treatment plan.",
  },
  {
    title: "Tailored treatment",
    description:
      "A combination of techniques — including deep tissue work, myofascial release, trigger point therapy, and muscle energy techniques — selected based on what your body needs today.",
  },
  {
    title: "Feedback and adjustment",
    description:
      "Gloria checks in throughout the session. Communication is important — the pressure and focus are adjusted to be effective without being unnecessarily uncomfortable.",
  },
  {
    title: "Aftercare and recommendations",
    description:
      "You'll leave with practical guidance — stretches, postural tips, or self-care recommendations to extend the benefits of your session between appointments.",
  },
];

const faqs = [
  {
    question: "What is remedial massage?",
    answer:
      "Remedial massage is a therapeutic form of massage that targets specific muscles, tendons, and connective tissue to treat pain, injury, and dysfunction. Unlike relaxation massage, remedial massage begins with an assessment to identify the source of your symptoms, and the treatment is specifically designed to address those findings. Techniques vary depending on what's needed — they may include deep tissue work, trigger point therapy, myofascial release, and stretching.",
  },
  {
    question: "How is remedial massage different from relaxation massage?",
    answer:
      "Relaxation massage is designed to calm the nervous system and ease general tension — it uses flowing, rhythmic strokes across the whole body. Remedial massage is clinical and targeted. It starts with an assessment, works on specific structures, and aims to produce a measurable therapeutic outcome such as reduced pain, improved mobility, or faster recovery from injury. The techniques are often firmer and more focused.",
  },
  {
    question: "Can I claim remedial massage on my health fund?",
    answer:
      "Yes — most Australian private health funds cover remedial massage under their extras cover. Glow in Wellness is a registered HICAPS provider, which means you can claim your rebate on the spot at the time of your appointment. No receipts, no waiting, no paperwork. Bring your health fund card and we'll process it for you. Cover varies by fund and policy — call us or check your fund's app to confirm your entitlements.",
  },
  {
    question: "How often should I get a remedial massage?",
    answer:
      "For acute pain or injury, weekly sessions initially may be appropriate. For chronic conditions and general maintenance, most clients find fortnightly or monthly sessions keep them feeling their best. Gloria will recommend a realistic treatment plan at your first session based on your specific situation — she won't recommend more frequent appointments than are genuinely beneficial.",
  },
  {
    question: "What should I expect at my first session?",
    answer:
      "Your first session includes a thorough intake consultation covering your health history, current concerns, and goals. Gloria will assess your posture and movement before the hands-on treatment begins. The first session is often slightly shorter on treatment time because of the assessment, so it's worth booking 60 or 90 minutes to ensure you get adequate treatment time.",
  },
  {
    question: "What conditions does remedial massage treat?",
    answer:
      "Remedial massage is effective for a wide range of musculoskeletal conditions including back pain, neck and shoulder tension, headaches, sciatica, sports injuries, postural pain from desk work, hip and knee pain, plantar fasciitis, and repetitive strain injuries. If you're unsure whether remedial massage is right for your condition, call us — Gloria is happy to discuss your situation before you book.",
  },
];

const relatedServices = [
  { name: "Bowen Therapy", href: "/bowen-therapy-caboolture" },
  { name: "Sports Massage", href: "/sports-massage-caboolture" },
];

export default function RemedialMassageCabooltureePage() {
  return (
    <ServicePageTemplate
      breadcrumb={{
        name: "Remedial Massage Caboolture",
        href: "/remedial-massage-caboolture",
      }}
      heading="Remedial Massage Caboolture"
      intro="Assessment-based remedial massage in Caboolture — going beyond relaxation to identify and treat the root cause of your pain, tension, and restricted movement. HICAPS health fund rebates available on the spot."
      benefits={benefits}
      expectSteps={expectSteps}
      showHicaps
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4">
        What is Remedial Massage?
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        Remedial massage is a targeted, therapeutic form of massage that goes well beyond general
        relaxation. It begins with an assessment — Gloria evaluates your posture, range of motion,
        and areas of pain or dysfunction before any treatment begins. This assessment-first approach
        means that every technique applied is chosen for a reason, and the outcome is measurable:
        less pain, more movement, faster recovery.
      </p>
      <p className="text-text-muted leading-relaxed mb-4">
        Remedial massage draws on a range of techniques including deep tissue massage, myofascial
        release, trigger point therapy, and muscle energy techniques. The right combination depends
        on your specific presentation — what works for chronic postural pain is different from what&apos;s
        needed after a sports injury or workplace strain.
      </p>

      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4 mt-10">
        Conditions We Treat
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        Remedial massage at Glow in Wellness is effective for a wide range of musculoskeletal
        conditions, including:
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        {conditions.map((c) => (
          <li key={c} className="flex items-center gap-2 text-sm text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
            {c}
          </li>
        ))}
      </ul>

      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4 mt-10">
        Gloria&apos;s Approach
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        Gloria treats the whole person, not just the presenting symptom. Pain rarely exists in
        isolation — a shoulder problem might trace back to thoracic tightness or even an old hip
        injury. By taking a full history and assessing the body systemically, she can identify and
        address the actual cause rather than offering temporary relief that keeps clients coming back
        indefinitely.
      </p>
      <p className="text-text-muted leading-relaxed">
        As a HICAPS registered provider, Gloria can process your health fund claim at the time of
        your appointment. Most major funds — Medibank, BUPA, HCF, NIB, AHM, and HBF — cover
        remedial massage under their extras. Bring your card and we&apos;ll handle the rest.
      </p>
    </ServicePageTemplate>
  );
}
