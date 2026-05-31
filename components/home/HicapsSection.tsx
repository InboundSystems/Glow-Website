import Link from "next/link";

export default function HicapsSection() {
  return (
    <section className="bg-plum py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
          <svg
            className="w-4 h-4 text-white"
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
          <span className="text-white/90 text-sm font-medium">
            HICAPS Provider
          </span>
        </div>

        <h2 className="font-script text-3xl sm:text-4xl font-semibold text-white mb-4 mt-2">
          Health Fund Rebates On the Spot
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Glow in Wellness is a registered HICAPS provider. Claim your
          health fund rebate instantly at the time of your appointment — no
          receipts, no waiting, no paperwork. Most major Australian health
          funds accepted.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm text-white/70">
          {["Medibank", "BUPA", "HCF", "NIB", "AHM", "HBF"].map((fund) => (
            <span
              key={fund}
              className="bg-white/10 rounded-full px-3 py-1"
            >
              {fund}
            </span>
          ))}
          <span className="bg-white/10 rounded-full px-3 py-1">
            + more
          </span>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] bg-white text-plum font-medium text-sm hover:bg-sage-light transition-colors"
        >
          Check Your Cover
        </Link>
      </div>
    </section>
  );
}
