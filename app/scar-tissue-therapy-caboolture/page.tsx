import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Scar Tissue Therapy Caboolture",
  description:
    "Specialist scar tissue massage therapy in Caboolture with Gloria Mullaly. Reduce pain, improve mobility, and soften scar tissue from surgery, injury, or burns. Book today.",
  keywords: [
    "scar tissue therapy Caboolture",
    "scar tissue massage Caboolture",
    "scar massage Moreton Bay",
    "post surgery massage Caboolture",
    "scar treatment Caboolture",
  ],
};

const scarTypes = [
  "Surgical scars (caesarean, laparoscopic, appendix)",
  "Injury and trauma scars",
  "Burn scars",
  "Abdominal and pelvic surgery scars",
  "Mastectomy and breast surgery scars",
  "Old and new scars (once fully healed)",
];

const benefits = [
  "Reduces pain and hypersensitivity around the scar site",
  "Breaks down adhesions that restrict movement and flexibility",
  "Improves skin texture, elasticity, and overall appearance",
  "Restores normal tissue mobility in surrounding structures",
  "Addresses internal restrictions that can affect posture and organ function",
  "Works on both new and long-standing scars",
];

const expectSteps = [
  {
    title: "Assessment",
    description:
      "Gloria evaluates the scar, the surrounding tissue, and any movement restrictions or areas of pain. She'll ask about how the scar occurred and how long you've had it.",
  },
  {
    title: "Gentle mobilisation",
    description:
      "Starting with the tissue surrounding the scar to prepare it before working directly on the scar itself. This approach avoids discomfort and encourages natural tissue response.",
  },
  {
    title: "Scar tissue work",
    description:
      "Specific techniques to soften the scar, address adhesions beneath the surface, and restore the natural glide between tissue layers.",
  },
  {
    title: "Progress review",
    description:
      "Gloria tracks changes between sessions and adjusts the treatment plan. Most clients notice meaningful improvement within three to five sessions.",
  },
];

const faqs = [
  {
    question: "What types of scars can be treated?",
    answer:
      "Scar tissue therapy can help with surgical scars, trauma and injury scars, burn scars, and scars from procedures like caesarean section, appendix removal, or laparoscopic surgery. Both old and new scars can benefit, provided the wound has fully closed and healed — typically at least 6–8 weeks post-surgery, though Gloria will advise based on your specific situation.",
  },
  {
    question: "How soon after surgery can I start scar tissue therapy?",
    answer:
      "Generally, scar tissue therapy begins once the wound has fully closed and the superficial skin has healed — usually 6 to 8 weeks after surgery, though this varies. Gloria will not work on a scar that is still healing or has open areas. If you're unsure, check with your surgeon or GP first.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "This depends on the age, size, and depth of the scar, and whether there are internal adhesions. Many clients notice clear improvement after three to five sessions. Older, deeply adherent scars may require more. Gloria will give you a realistic picture after your assessment.",
  },
  {
    question: "Does scar tissue massage hurt?",
    answer:
      "Scar tissue massage should not be painful. The tissue around a scar can be sensitive, so Gloria works gradually and communicates throughout the session. Some clients feel mild discomfort as adhesions are released, but this is generally described as a 'productive' sensation rather than pain. The work should feel manageable at all times.",
  },
  {
    question: "Can scar tissue therapy improve the appearance of my scar?",
    answer:
      "Yes, in many cases. Regular scar tissue massage can reduce redness, soften raised or hardened tissue, and improve the overall texture and colour of the scar. Results vary depending on the type and age of the scar, but most clients see a noticeable improvement in appearance alongside functional improvements in movement and pain.",
  },
];

const relatedServices = [
  { name: "Remedial Massage", href: "/remedial-massage-caboolture" },
  { name: "Bowen Therapy", href: "/bowen-therapy-caboolture" },
];

export default function ScarTissueTherapyCabooltureePage() {
  return (
    <ServicePageTemplate
      breadcrumb={{
        name: "Scar Tissue Therapy Caboolture",
        href: "/scar-tissue-therapy-caboolture",
      }}
      heading="Scar Tissue Therapy Caboolture"
      intro="Scar tissue therapy is a specialised massage technique designed to break down adhesions, improve tissue mobility, and reduce the pain and tightness that can develop after surgery, injury, or burns. Gloria Mullaly offers this specialist service in Caboolture."
      benefits={benefits}
      expectSteps={expectSteps}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4">
        What is Scar Tissue Therapy?
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        When the skin and underlying tissue heal after injury or surgery, the body lays down collagen
        fibres rapidly and without the organised structure of normal tissue. This scar tissue can
        become thick, inflexible, and adherent — binding to surrounding structures and creating
        restrictions that affect movement, sensation, and sometimes even organ function.
      </p>
      <p className="text-text-muted leading-relaxed mb-4">
        Scar tissue massage works to break down these adhesions manually, restoring glide between
        tissue layers and encouraging the collagen fibres to remodel into a more functional
        arrangement. The results go beyond the surface — internal restrictions from surgery or
        trauma can affect posture, breathing, and musculoskeletal alignment in ways that are
        not always immediately obvious.
      </p>

      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4 mt-10">
        Types of Scars We Treat
      </h2>
      <ul className="flex flex-col gap-2.5">
        {scarTypes.map((s) => (
          <li key={s} className="flex items-start gap-3 text-sm text-text-muted">
            <svg
              className="w-4 h-4 text-sage mt-0.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {s}
          </li>
        ))}
      </ul>
    </ServicePageTemplate>
  );
}
