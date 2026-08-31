import Link from "next/link";

// TEMPORARY — promotes the one-day Pulsetherapy pop-up event.
// Remove this banner (and its import in app/page.tsx) after 18 Sept 2026.
export default function PulsetherapyPopupBanner() {
  return (
    <section className="bg-plum py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <p className="text-white text-sm">
          <span className="font-semibold">Pulsetherapy Pop-Up</span> — Friday 18 September,
          10am–6pm · Exclusive early-access pricing, limited appointments
        </p>
        <Link
          href="/pulsetherapy-pop-up-caboolture"
          className="shrink-0 inline-flex items-center justify-center px-5 py-2 rounded-[50px] bg-white text-plum text-xs font-semibold hover:bg-sage-light transition-colors"
        >
          Reserve Your Spot
        </Link>
      </div>
    </section>
  );
}
