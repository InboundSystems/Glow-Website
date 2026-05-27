import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Bowen Therapy Caboolture",
  description:
    "Certified Bowen Therapy in Caboolture with Gloria Mullaly. One of the only Bowen practitioners in the Moreton Bay region. Gentle, non-invasive healing for pain, stress, and chronic conditions. HICAPS rebates available.",
  keywords: [
    "bowen therapy Caboolture",
    "bowen therapy Moreton Bay",
    "bowen therapy near me",
    "bowen technique Caboolture",
    "holistic therapy Caboolture",
  ],
};

const conditions = [
  "Chronic lower back pain",
  "Neck and shoulder tension",
  "Headaches and migraines",
  "Sciatica",
  "Frozen shoulder",
  "Sports and overuse injuries",
  "Fibromyalgia",
  "Stress and anxiety",
  "Sleep disturbances",
  "TMJ dysfunction",
  "Respiratory conditions",
  "Plantar fasciitis",
];

const benefits = [
  "Gentle and non-invasive — suitable for all ages including children and the elderly",
  "Addresses the root cause, not just the surface symptom",
  "No oils, no deep pressure — sessions can be done over light clothing",
  "Effective for chronic, long-standing conditions others haven't resolved",
  "Cumulative healing — each session builds on the last",
  "HICAPS health fund rebates available on the spot",
];

const expectSteps = [
  {
    title: "Consultation",
    description:
      "Gloria takes time to understand your health history, current concerns, and what you're hoping to achieve. No detail is too small — the full picture informs the treatment.",
  },
  {
    title: "Gentle moves",
    description:
      "Using precise, rolling-type moves over specific points on your muscles, tendons, and fascia. There is no cracking, no deep pressure, and no manipulation of joints.",
  },
  {
    title: "Integrated pauses",
    description:
      "Short rest periods between sequences are a core part of Bowen Therapy. During these pauses your nervous system processes and responds to the moves — this is where much of the healing happens.",
  },
  {
    title: "Aftercare guidance",
    description:
      "Gloria will advise on hydration, gentle movement, and what to notice in the days following your session. Responses to Bowen can continue for 48–72 hours after treatment.",
  },
];

const faqs = [
  {
    question: "What is Bowen Therapy and how is it different from massage?",
    answer:
      "Bowen Therapy is a gentle, non-invasive bodywork technique that uses small, precise moves over muscles and fascia at specific points on the body. Unlike remedial or relaxation massage, it doesn't use sustained pressure or kneading — instead it relies on the body's own nervous system to trigger a healing response. The deliberate pauses built into each session are as important as the moves themselves.",
  },
  {
    question: "Is Bowen Therapy painful?",
    answer:
      "No. Bowen Therapy is one of the gentlest forms of bodywork available. Most clients find it deeply relaxing. The moves are light and precise — there is no deep pressure, no cracking, and no manipulation. People who have been put off by the discomfort of other therapies often find Bowen to be a welcome alternative.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "Many clients notice significant improvement after just two or three sessions. Chronic conditions that have built up over years may require more. Gloria will give you an honest assessment after your first session and won't recommend ongoing treatment that isn't warranted.",
  },
  {
    question: "What conditions does Bowen Therapy treat?",
    answer:
      "Bowen is effective for a wide range of musculoskeletal, neurological, and stress-related conditions including back pain, sciatica, frozen shoulder, headaches, fibromyalgia, sports injuries, sleep problems, and anxiety. It is also used as a general maintenance treatment for people who want to stay well and manage the physical demands of daily life.",
  },
  {
    question: "Can I claim Bowen Therapy on my health fund?",
    answer:
      "Many Australian health funds cover Bowen Therapy under their natural therapies or remedial therapy extras. Glow in Wellness is a registered HICAPS provider, so if your fund covers the treatment you can claim your rebate on the spot at the time of your appointment. Check your specific policy or call us to find out more.",
  },
  {
    question: "Is Bowen Therapy safe during pregnancy?",
    answer:
      "Yes. Bowen Therapy is one of the safest therapies available during pregnancy. Its gentle, non-invasive nature makes it particularly well suited to expectant mothers experiencing back pain, hip discomfort, or stress. Gloria has experience working with pregnant clients and will adapt the treatment accordingly.",
  },
];

const relatedServices = [
  { name: "Remedial Massage", href: "/remedial-massage-caboolture" },
  { name: "Scar Tissue Therapy", href: "/scar-tissue-therapy-caboolture" },
];

export default function BowenTherapyCabooltureePage() {
  return (
    <ServicePageTemplate
      breadcrumb={{ name: "Bowen Therapy Caboolture", href: "/bowen-therapy-caboolture" }}
      heading="Bowen Therapy Caboolture"
      intro="Gloria Mullaly is one of very few certified Bowen Therapy practitioners in Caboolture and the wider Moreton Bay region. If you've been searching for Bowen therapy near you, you've found it."
      benefits={benefits}
      expectSteps={expectSteps}
      showHicaps
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4">
        What is Bowen Therapy?
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        Bowen Therapy is a gentle, non-invasive bodywork technique developed by Tom Bowen in
        Geelong, Australia during the 1950s and 60s. Rather than applying sustained pressure or
        manipulation, Bowen uses a series of precise, rolling-type moves over muscles, tendons, and
        fascia at specific points on the body. These moves are separated by deliberate pauses — a
        defining feature of the technique that gives the nervous system time to integrate and respond.
      </p>
      <p className="text-text-muted leading-relaxed mb-4">
        The pauses are not passive waiting periods. They are an active part of the treatment. During
        these breaks, the body processes each sequence of moves, triggering a cascade of neurological
        and physiological responses that promote healing from within. This is why Bowen is often
        described as working <em>with</em> the body, not <em>on</em> it.
      </p>

      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4 mt-10">
        How Does Bowen Therapy Work?
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        Bowen Therapy works primarily through the fascial system — the connective tissue network that
        surrounds every muscle, organ, and structure in the body. Tension and dysfunction held in the
        fascia can cause pain, restricted movement, and postural imbalance. By targeting specific
        fascial points, Bowen moves send signals through the nervous system that prompt the body to
        reset and rebalance.
      </p>
      <p className="text-text-muted leading-relaxed mb-4">
        Research suggests that Bowen works in part through the autonomic nervous system, shifting the
        body from a sympathetic (fight-or-flight) state into a parasympathetic (rest-and-heal) state.
        This shift is often felt immediately — many clients report a deep sense of relaxation during
        their very first session, even before structural changes become apparent.
      </p>

      <h2 className="font-serif text-2xl font-bold text-text-dark mb-4 mt-10">
        Conditions Bowen Therapy Can Help
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        Bowen Therapy is versatile and suitable for people of all ages, from young children to the
        elderly. It is particularly effective for:
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
        Bowen Therapy in Caboolture — Gloria&apos;s Clinic
      </h2>
      <p className="text-text-muted leading-relaxed mb-4">
        Gloria Mullaly is one of a small number of certified Bowen Therapy practitioners serving the
        Caboolture and Moreton Bay region. Clients travel from Morayfield, Narangba, Burpengary,
        Bribie Island, and across the Sunshine Coast to access Bowen Therapy at Glow in Wellness —
        because qualified practitioners in this area are rare.
      </p>
      <p className="text-text-muted leading-relaxed">
        Gloria combines her Bowen Therapy training with her background in remedial massage, giving
        her a comprehensive understanding of the musculoskeletal system that informs every session.
        Each appointment begins with a thorough consultation to understand your history, goals, and
        what your body is currently holding — because every Bowen session is personalised to you.
      </p>
    </ServicePageTemplate>
  );
}
