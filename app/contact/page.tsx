import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Glow in Wellness. Call, email, or send a message to book your remedial massage or Bowen therapy appointment in Caboolture, QLD.",
};

const hours = [
  { day: "Monday",             time: "Closed" },
  { day: "Tuesday – Thursday", time: "9:00 am – 2:00 pm" },
  { day: "Friday",             time: "12:00 pm – 2:00 pm" },
  { day: "Saturday",           time: "Closed" },
  { day: "Evenings & Sundays", time: "By Appointment" },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Contact", href: "/contact" }]} />

      {/* Hero — dark */}
      <section className="bg-cream pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-3">
            Contact
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed">
            Questions about services, rebates, or availability? Send a message
            or call directly — Gloria typically responds within one business day.
          </p>
        </div>
      </section>

      {/* Form + details — white */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: form */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl font-bold text-text-dark mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>

            {/* Right: contact details */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Phone */}
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted/60">
                  Phone
                </h3>
                <a
                  href="tel:+61413502977"
                  className="text-xl font-serif font-semibold text-plum hover:text-plum-dark transition-colors"
                >
                  0413 502 977
                </a>
                <p className="text-sm text-text-muted">
                  Prefer to call? Gloria is happy to answer questions and take
                  bookings over the phone.
                </p>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted/60">
                  Location
                </h3>
                <address className="not-italic text-text-dark leading-relaxed">
                  Level 1 R1, 20 King Street
                  <br />
                  Caboolture Queensland 4510, Australia
                </address>
                <p className="text-sm text-text-muted">Free parking available on site.</p>
              </div>

              {/* Hours */}
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted/60">
                  Opening Hours
                </h3>
                <table className="text-sm w-full">
                  <tbody>
                    {hours.map(({ day, time }) => (
                      <tr key={day} className="border-b border-border-brand last:border-0">
                        <td className="py-2 font-medium text-text-dark pr-4">{day}</td>
                        <td
                          className={`py-2 text-right ${
                            time === "Closed" ? "text-text-muted/50" : "text-text-muted"
                          }`}
                        >
                          {time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* HICAPS badge */}
              <div className="bg-sage-light rounded-xl px-4 py-3 flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-plum shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm text-text-muted">
                  <span className="font-medium text-text-dark">HICAPS provider</span> — on-the-spot
                  health fund rebates at the time of your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map — dark */}
      <section className="bg-cream py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-white mb-6">Find Us</h2>
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/7]">
            <iframe
              src="https://maps.google.com/maps?q=29+King+Street+Caboolture+QLD+4510&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Glow in Wellness location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
