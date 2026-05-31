"use client";

import FadeIn from "@/components/ui/FadeIn";

const reviews = [
  {
    name: "Sandra Dare",
    rating: 5,
    text: "I have been going to Gloria for years now, always walk out feeling better than I walked in. She especially loves working on necks and shoulders (which I need). And she accepts health funds — big bonus!!",
  },
  {
    name: "Caroline Sonter",
    rating: 5,
    text: "I have been seeing Gloria for many years now, and I see her frequently to ease my pain! Gloria is an awesome massage therapist, she knows how to create a calming environment, she is able to release the tension and knows the exact spots to massage. I highly recommend Gloria to all my family and friends, and many of them see Gloria on a frequent basis also. Do yourself a favour and book in with Gloria!",
  },
  {
    name: "Laura Sheather",
    rating: 5,
    text: "Gloria has been helping with muscle and joint pain for many years now and I cannot recommend her highly enough. We have used remedial massage and Bowen for lower leg and back pain, as well as scar tissue therapy after multiple surgeries. Thank you Glo!",
  },
];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <FadeIn key={review.name} delay={i * 0.12}>
              <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-border-brand h-full relative overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                {/* Decorative quote mark */}
                <span className="absolute top-3 right-4 font-serif text-[5rem] leading-none text-plum/8 select-none pointer-events-none">
                  &ldquo;
                </span>
                <StarRating count={review.rating} />
                <p className="text-sm text-text-muted leading-relaxed flex-1 relative">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-border-brand">
                  <span className="text-sm font-semibold text-text-dark">{review.name}</span>
                  <span className="text-xs text-text-muted">Google Review</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
