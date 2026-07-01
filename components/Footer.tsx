import Link from "next/link";

const quickLinks = [
  { href: "/massage-caboolture", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/what-to-expect", label: "What to Expect" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book Online" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-serif text-lg font-bold text-white">
              Glow in Wellness
            </span>
            <p className="text-sm text-white/60 leading-relaxed">
              Remedial massage and Bowen therapy in Caboolture, QLD — helping
              you move, feel, and live better.
            </p>
            <a
              href="tel:+61413502977"
              className="text-sm text-plum hover:text-white transition-colors"
            >
              0413 502 977
            </a>
            <address className="not-italic text-sm text-white/50 leading-relaxed">
              Level 1, Shop R1/20 King St
              <br />
              Caboolture QLD 4510
            </address>
          </div>

          {/* Column 2: Quick links */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </span>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Health funds */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Health Fund Rebates
            </span>
            <p className="text-sm text-white/60 leading-relaxed">
              HICAPS accepted — on-the-spot rebates available at time of
              treatment. Most major Australian health funds covered.
            </p>
            <div className="mt-1 inline-flex items-center gap-2 bg-plum/20 rounded-lg px-3 py-2 self-start">
              <svg
                className="w-4 h-4 text-plum"
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
              <span className="text-sm text-plum font-medium">
                HICAPS Provider
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <p>Copyright &copy; 2024, GLOW IN WELLNESS MASSAGE THERAPY — All rights reserved</p>
          <p>ABN: 94 727 980 015</p>
        </div>
      </div>
    </footer>
  );
}
