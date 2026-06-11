import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Gloria Mullaly",
  description:
    "Meet Gloria Mullaly — qualified remedial massage therapist and certified Bowen practitioner based in Caboolture, QLD. Learn about her training, approach, and philosophy.",
};

const qualifications = [
  "Diploma of Remedial Massage, Q Academy, QLD",
  "Certified Bowen Therapy Practitioner",
  "IASTM – Instrument-Assisted Soft Tissue Mobilisation",
  "Scar Tissue Therapy – CK Massage QLD",
  "TMJ Dysfunction Course",
  "ANTA Member (Australian Natural Therapists Association)",
  "HICAPS Registered Provider",
  "Current Senior First Aid Certificate",
  "Insurance – Guild Insurance",
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "About", href: "/about" }]} />

      {/* Hero — dark */}
      <section className="bg-cream pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-3">
            About
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Meet Gloria Mullaly
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            Qualified remedial massage therapist and certified Bowen
            practitioner — helping people in Caboolture and the Moreton Bay
            region move, feel, and live better.
          </p>
        </div>
      </section>

      {/* Main content — white */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Image */}
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden sticky top-24">
                <Image
                  src="/gloria.jpg"
                  alt="Gloria Mullaly — remedial massage therapist and Bowen practitioner"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-3 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-text-dark">My Story</h2>
                <p className="text-text-muted leading-relaxed">
                  I came to massage therapy not from personal pain, but from the
                  juggle of family and work. I had two young boys and was working
                  in hospitality, and I was finding the demands of the industry
                  were making it hard to be truly present for them.
                </p>
                <p className="text-text-muted leading-relaxed">
                  I had always been drawn to massage, so I visited Q Academy&apos;s
                  Sunshine Coast Campus — and from the moment I walked in, it felt
                  like exactly where I was supposed to be.
                </p>
                <p className="text-text-muted leading-relaxed">
                  The course started with relaxation techniques. Through practising
                  on friends and family, I began to see first-hand how much massage
                  could ease people&apos;s pain and tension. But when the course moved
                  into remedial massage, my love for this work deepened completely.
                  Learning to find the root cause of pain — rather than simply
                  treating the symptoms — felt like a whole new world opening up.
                  The idea that I could help people move more freely and live more
                  comfortably is what drives everything I do.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-text-dark">My Approach</h2>
                <p className="text-text-muted leading-relaxed">
                  I work with the whole person, not just the symptom. Before
                  every session I take time to understand what&apos;s going on —
                  your lifestyle, your stress levels, what your body is telling
                  you — because lasting results come from treating the cause,
                  not just the pain.
                </p>
                <p className="text-text-muted leading-relaxed">
                  I combine remedial massage techniques with Bowen therapy
                  where appropriate, which gives me a wider toolkit to draw
                  from. Bowen in particular is remarkable for its catalytic power
                  — it works with the fascial and nervous system to trigger
                  deep, lasting rebalancing that often surprises clients who
                  are used to more forceful approaches.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-text-dark">
                  Bowen Therapy in Caboolture
                </h2>
                <p className="text-text-muted leading-relaxed">
                  Bowen Therapy is a non-invasive technique developed
                  by Tom Bowen in Geelong, Australia. It uses precise,
                  rolling-type moves over muscles, tendons, and fascia to
                  stimulate the body&apos;s self-healing mechanisms. The pauses
                  built into a Bowen session are as important as the moves
                  themselves — they give the nervous system time to integrate
                  and respond.
                </p>
                <p className="text-text-muted leading-relaxed">
                  I&apos;m one of very few Bowen practitioners in the Caboolture
                  area, which means clients drive from across the Moreton Bay
                  region to access this therapy. It&apos;s effective for a wide
                  range of conditions — musculoskeletal pain, headaches, sleep
                  issues, stress, and much more.
                </p>
              </div>

              {/* Qualifications */}
              <div className="bg-sage-light rounded-2xl p-6 flex flex-col gap-4">
                <h2 className="font-serif text-xl font-bold text-text-dark">
                  Qualifications &amp; Memberships
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {qualifications.map((q) => (
                    <li key={q} className="flex items-start gap-3 text-sm text-text-muted">
                      <svg
                        className="w-4 h-4 text-plum mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {q}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Image
                    src="/badge-anta.jpg"
                    alt="ANTA Member — Australian Natural Therapists Association"
                    width={70}
                    height={70}
                    className="rounded-lg object-contain"
                  />
                  <Image
                    src="/badge-tmj-level1.png"
                    alt="TMJ Massage Therapies Level 1 Graduate"
                    width={70}
                    height={70}
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>

              {/* ANTA & TMJ callout */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-text-dark">
                  Regulated, Insured &amp; Always Learning
                </h2>
                <p className="text-text-muted leading-relaxed">
                  I&apos;m a proud member of ANTA — the Australian Natural Therapists
                  Association — which is the professional body that regulates natural
                  therapists across Australia and ensures we&apos;re meeting the standards
                  required to practise safely and effectively. Membership means I hold
                  appropriate qualifications, maintain continuing education, and carry
                  the right insurance to protect you.
                </p>
                <p className="text-text-muted leading-relaxed">
                  I recently completed a <strong>TMJ Dysfunction course</strong>, adding
                  specialist skills in treating jaw pain, headaches, and tension related
                  to the temporomandibular joint. If you&apos;ve been struggling with jaw
                  clenching, clicking, tinnitus, or persistent facial tension, this is something I
                  can now address directly as part of your treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery — white */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/clinic-treatment-room.jpg" alt="Treatment room at Glow in Wellness, Caboolture" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/clinic-reception.jpg" alt="Reception area at Glow in Wellness" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/clinic-logo-sign.jpg" alt="Glow in Wellness clinic sign" fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA — dark */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to experience the difference?
          </h2>
          <p className="text-white/70 mb-8">
            Book a session with Gloria and discover what&apos;s possible when
            treatment is truly tailored to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] bg-plum text-white font-medium text-sm hover:bg-plum-dark transition-colors"
            >
              Book Your Appointment
            </Link>
            <Link
              href="/what-to-expect"
              className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] border-2 border-white/30 text-white font-medium text-sm hover:border-white transition-colors"
            >
              What to Expect
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
