import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Pregnancy Massage Caboolture",
  description:
    "Safe, nurturing pregnancy massage in Caboolture with Gloria Mullaly. Relieve back pain, swelling, and fatigue throughout every trimester. HICAPS health fund rebates available.",
  keywords: [
    "pregnancy massage Caboolture",
    "prenatal massage Caboolture",
    "pregnancy massage Moreton Bay",
    "massage during pregnancy Caboolture",
  ],
};

const benefits = [
  "Relieves lower back, hip, and pelvic pain common in pregnancy",
  "Reduces swelling in the hands, feet, and ankles",
  "Eases muscle tension, joint pain, and sciatic discomfort",
  "Improves sleep quality and reduces fatigue",
  "Calms the nervous system and reduces stress and anxiety",
  "Safe and comfortable positioning for every stage of pregnancy",
];

const expectSteps = [
  {
    title: "Consultation",
    description:
      "Gloria checks in on your current trimester, any pregnancy complications, and what's been bothering you most. Your safety and comfort are the priority from the start.",
  },
  {
    title: "Positioning and setup",
    description:
      "Supportive bolsters and pillows are used to ensure safe, comfortable positioning throughout. Side-lying positions are used as the pregnancy progresses.",
  },
  {
    title: "Gentle, targeted treatment",
    description:
      "Techniques are adapted for pregnancy — lighter pressure, avoidance of specific areas, and focus on where you need it most: lower back, hips, legs, and shoulders.",
  },
  {
    title: "Aftercare",
    description:
      "Practical tips for managing discomfort at home between sessions, including positioning, movement, and self-care strategies suited to your stage of pregnancy.",
  },
];

const faqs = [
  {
    question: "Is pregnancy massage safe?",
    answer:
      "Yes. Pregnancy massage is safe at all stages of pregnancy when performed by a therapist with appropriate training. Gloria takes a thorough health history before your first session and follows safe practice guidelines throughout. If you have a high-risk pregnancy or any complications, please consult your midwife or obstetrician before booking.",
  },
  {
    question: "What trimester can I start from?",
    answer:
      "Pregnancy massage can generally begin from the second trimester onwards. Some therapists also work with clients in the first trimester — please call us to discuss your situation and we'll advise on the best approach for where you're at.",
  },
  {
    question: "Will I lie on my stomach?",
    answer:
      "No. As your pregnancy progresses, side-lying positions with supportive bolsters are used to ensure your comfort and safety. Gloria is experienced in positioning for pregnant clients at every stage.",
  },
  {
    question: "Can I claim pregnancy massage on my health fund?",
    answer:
      "Pregnancy massage may be claimable as remedial massage on your health fund extras, depending on your policy. Glow in Wellness is a HICAPS registered provider, so if your fund covers the treatment you can claim on the spot. Check your fund's app or call them to confirm your entitlements before your appointment.",
  },
  {
    question: "How often should I come during pregnancy?",
    answer:
      "Many pregnant clients find monthly sessions helpful during the second trimester, increasing to fortnightly in the third trimester as discomfort typically intensifies. Gloria will recommend a frequency that suits your needs and budget.",
  },
];

const relatedServices = [
  { name: "Remedial Massage", href: "/remedial-massage-caboolture" },
  { name: "Bowen Therapy", href: "/bowen-therapy-caboolture" },
];

export default function PregnancyMassageCabooltureePage() {
  return (
    <ServicePageTemplate
      breadcrumb={{
        name: "Pregnancy Massage Caboolture",
        href: "/pregnancy-massage-caboolture",
      }}
      heading="Pregnancy Massage Caboolture"
      intro="Safe, nurturing massage for expectant mothers in Caboolture. Gloria Mullaly provides gentle pregnancy massage designed to ease back pain, swelling, sciatic discomfort, and the fatigue that comes with each stage of pregnancy."
      benefits={benefits}
      expectSteps={expectSteps}
      showHicaps
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
