import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "TMJ Remedial Treatment Caboolture",
  description:
    "Specialist TMJ Remedial Treatment in Caboolture with Gloria Mullaly. A whole-body approach to jaw joint dysfunction using remedial massage, fascial techniques, and intra-oral massage. Book today.",
  keywords: [
    "TMJ treatment Caboolture",
    "jaw pain massage Caboolture",
    "TMJ dysfunction Caboolture",
    "jaw massage Caboolture",
    "temporomandibular joint massage",
  ],
};

const benefits = [
  "Whole-body approach — treats the jaw joint and its connected fascial chains",
  "Addresses the hip-jaw connection through the fascial trains of the body",
  "Includes intra-oral massage of the muscles that control the jaw",
  "Helps with jaw pain, clicking, clenching, teeth grinding, and facial tension",
  "Can relieve associated headaches, neck pain, and shoulder tension",
  "Personalised treatment — every session is tailored to your presentation",
];

const expectSteps = [
  {
    title: "Consultation and history",
    description:
      "We start with a thorough consultation covering your jaw symptoms, posture, and health history. TMJ dysfunction often has contributing factors throughout the body, so understanding the whole picture is essential.",
  },
  {
    title: "Whole-body assessment",
    description:
      "The treatment addresses the fascial connections from your hips to your jaw. Scientific research shows that tension and dysfunction in the hips, glutes, lower back, and shoulders can directly influence jaw function.",
  },
  {
    title: "Treatment",
    description:
      "Your session includes remedial massage of the back, neck, shoulders, and glutes, followed by specialised techniques for the jaw muscles — including intra-oral massage of the pterygoids, masseter, and temporalis where appropriate. You are in control throughout.",
  },
  {
    title: "Aftercare and self-care guidance",
    description:
      "You'll receive specific aftercare advice including exercises and self-care techniques to extend the benefits of your session and support ongoing improvement between appointments.",
  },
];

const faqs = [
  {
    question: "What is TMJ dysfunction?",
    answer:
      "TMJ stands for temporomandibular joint — the joint that connects your jaw to your skull. TMJ dysfunction refers to pain, clicking, locking, or restricted movement of this joint, often accompanied by headaches, facial pain, neck tension, and teeth grinding. It can be caused by stress, postural habits, injury, or chronic muscle tension.",
  },
  {
    question: "What is intra-oral massage?",
    answer:
      "Intra-oral massage involves working on the muscles inside the mouth that control jaw movement — particularly the pterygoid muscles, which cannot be accessed externally. It is performed with gloved hands and is an important part of comprehensive TMJ treatment. You are in full control and can stop at any time.",
  },
  {
    question: "How does this treatment differ from regular remedial massage?",
    answer:
      "TMJ Remedial Treatment is a specialist protocol that combines full-body remedial massage with specific jaw and facial techniques, including intra-oral work. It is based on the understanding that the jaw does not function in isolation — tension throughout the fascial system, particularly through the hips, influences jaw function. A regular massage session does not include this level of jaw-specific assessment and treatment.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "This varies depending on how long you have had symptoms and the complexity of your presentation. Many clients notice meaningful improvement after two or three sessions. Gloria will give you an honest assessment and will not recommend ongoing treatment that isn't clearly beneficial.",
  },
  {
    question: "Can I claim TMJ Remedial Treatment on my health fund?",
    answer:
      "As a remedial massage treatment, it may be covered under your extras. Glow in Wellness is a registered HICAPS provider. Cover varies by fund and policy — bring your health fund card and we can check on the spot.",
  },
];

const relatedServices = [
  { name: "Remedial Massage", href: "/remedial-massage-caboolture" },
  { name: "Bowen Therapy", href: "/bowen-therapy-caboolture" },
];

export default function TmjTreatmentCabooltureePage() {
  return (
    <ServicePageTemplate
      breadcrumb={{ name: "TMJ Remedial Treatment Caboolture", href: "/tmj-treatment-caboolture" }}
      heading="TMJ Remedial Treatment Caboolture"
      intro="A whole-body approach to treating jaw joint dysfunction — addressing the fascial connections between your hips and jaw to relieve pain, tension, and restricted movement."
      benefits={benefits}
      expectSteps={expectSteps}
      showHicaps
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4">
        Understanding TMJ Dysfunction
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        The temporomandibular joint — more commonly known as the jaw joint — is one of the most
        complex joints in the body. It is used hundreds of times a day for talking, eating, and
        breathing, and when it&apos;s not functioning well, the effects can ripple outward into
        headaches, neck pain, shoulder tension, and even changes in posture.
      </p>
      <p className="text-text-muted leading-relaxed mb-4">
        Scientific research has demonstrated a significant connection between the hips and the jaw
        through the fascial trains of the body. This means that addressing TMJ dysfunction effectively
        requires treating the whole body — not just the jaw in isolation.
      </p>

      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4 mt-10">
        What the Treatment Involves
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        Gloria&apos;s TMJ Remedial Treatment protocol was developed through specialist training with
        TMJ Massage Therapies. The treatment includes:
      </p>
      <ul className="flex flex-col gap-2 mb-4 text-sm text-text-muted">
        {[
          "Remedial massage of the back, neck, shoulders, and glutes",
          "Advanced fascial techniques targeting the anterior neck",
          "Intra-oral massage of the pterygoids, masseter, and temporalis",
          "Post-treatment exercises and self-care guidance",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-plum mt-1.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4 mt-10">
        Who Can Benefit
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        This treatment is suitable for anyone experiencing jaw pain, jaw clicking or locking,
        teeth grinding (bruxism), chronic facial tension, or headaches with a jaw or neck
        component. It is also beneficial for those who have been told their jaw pain is
        &quot;stress related&quot; but haven&apos;t found lasting relief through other approaches.
      </p>
      <p className="text-text-muted leading-relaxed">
        Pricing for TMJ Remedial Treatment is currently being finalised as Gloria develops a
        treatment package that includes the extras she feels are essential to a complete session.
        Enquire for details.
      </p>
    </ServicePageTemplate>
  );
}
