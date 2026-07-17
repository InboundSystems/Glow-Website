"use client";

import FadeIn from "@/components/ui/FadeIn";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsWidget() {
  return (
    <section className="bg-cream py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mb-10">
          <p className="text-xs font-medium text-plum uppercase tracking-widest mb-3">Client stories</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-script text-3xl sm:text-4xl font-semibold text-white mb-2">
                What Clients Say
              </h2>
              <div className="flex items-center gap-2">
                <StarRating count={5} />
                <span className="text-sm text-white/60">5.0 on Google Reviews</span>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/Glow+in+Wellness+Caboolture"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors shrink-0"
            >
              See all reviews
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-4 border border-border-brand">
            <p className="text-text-muted leading-relaxed max-w-md">
              Client feedback for our massage and Bowen therapy services is
              hosted exclusively on Google — read what people are saying and
              leave your own review there.
            </p>
            <a
              href="https://www.google.com/maps/search/Glow+in+Wellness+Caboolture"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-[50px] bg-plum text-white text-sm font-medium hover:bg-plum-dark transition-colors"
            >
              View our Google Reviews
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
