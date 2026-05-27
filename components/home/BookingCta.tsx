import Link from "next/link";

export default function BookingCta() {
  return (
    <section className="bg-sage-light py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-script text-3xl sm:text-4xl font-semibold text-plum mb-4">
          Ready to Feel Better?
        </h2>
        <p className="text-text-muted leading-relaxed mb-8">
          Take the first step toward relief, recovery, and wellbeing. Book
          your appointment with Gloria today — HICAPS rebates available on
          the spot.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] bg-plum text-white font-medium text-sm hover:bg-plum-dark transition-colors"
          >
            Book Your Appointment
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] border-2 border-plum text-plum font-medium text-sm hover:bg-plum hover:text-white transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
