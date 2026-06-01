import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your remedial massage or Bowen therapy appointment with Gloria Mullaly at Glow in Wellness, Caboolture QLD. HICAPS health fund rebates available.",
};

const hours = [
  { day: "Monday",             time: "Closed" },
  { day: "Tuesday – Thursday", time: "9:00 am – 2:00 pm" },
  { day: "Friday",             time: "12:00 pm – 2:00 pm" },
  { day: "Saturday",           time: "Closed" },
  { day: "Evenings & Sundays", time: "By Appointment" },
];

export default function BookPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Book an Appointment", href: "/book" }]} />

      {/* Hero — dark */}
      <section className="bg-cream pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-3">
            Book Online
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed">
            Choose your service and time below. HICAPS health fund rebates
            are available on the spot at your appointment.
          </p>
        </div>
      </section>

      {/* Booking CTA + sidebar — white */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Booking CTA */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border-brand bg-sage-light p-10 flex flex-col items-center text-center gap-6 min-h-[320px] justify-center">
                <div className="w-16 h-16 rounded-full bg-plum flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-serif text-2xl font-bold text-text-dark">
                    Book your appointment online
                  </h2>
                  <p className="text-text-muted text-sm max-w-sm leading-relaxed">
                    Our booking portal is quick and easy — choose your service, pick a time that suits you, and you&apos;re confirmed.
                  </p>
                </div>
                <a
                  href="https://myappointments.app/portal/public/get-embeded-code?business_id=Njk1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[50px] bg-plum text-white font-medium text-sm hover:bg-plum-dark transition-colors"
                >
                  Open Booking Portal
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="text-xs text-text-muted">
                  Prefer to call?{" "}
                  <a href="tel:+61413502977" className="text-plum hover:underline">
                    0413 502 977
                  </a>
                  {" "}or{" "}
                  <Link href="/contact" className="text-plum hover:underline">
                    send a message
                  </Link>
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {/* Phone */}
              <div className="bg-sage-light rounded-2xl p-5 flex flex-col gap-2">
                <h3 className="font-serif text-lg font-semibold text-text-dark">
                  Prefer to Call?
                </h3>
                <p className="text-sm text-text-muted">
                  Gloria is happy to take bookings over the phone during business hours.
                </p>
                <a
                  href="tel:+61413502977"
                  className="inline-flex items-center gap-2 text-plum font-semibold hover:text-plum-dark transition-colors mt-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  0413 502 977
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl border border-border-brand p-5 flex flex-col gap-3">
                <h3 className="font-serif text-lg font-semibold text-text-dark">
                  Opening Hours
                </h3>
                <table className="text-sm w-full">
                  <tbody>
                    {hours.map(({ day, time }) => (
                      <tr key={day} className="border-b border-border-brand last:border-0">
                        <td className="py-2 font-medium text-text-dark pr-4 text-xs">{day}</td>
                        <td
                          className={`py-2 text-right text-xs ${
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

              {/* HICAPS */}
              <div className="bg-plum rounded-2xl p-5 flex flex-col gap-2 text-white">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-white/80"
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
                  <h3 className="font-serif text-lg font-semibold">HICAPS Rebates</h3>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  Claim your health fund rebate on the spot at the time of your
                  appointment. Bring your health fund card. Most major Australian
                  funds accepted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
