const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    date: "March 2025",
    text: "I came to Gloria with chronic lower back pain that had been limiting me for years. After just three sessions I noticed a real difference — less stiffness in the morning, more range of movement. She genuinely listens and adapts every session. Highly recommend.",
  },
  {
    name: "James T.",
    rating: 5,
    date: "February 2025",
    text: "Had my first Bowen therapy session and I genuinely did not know what to expect. The gentleness of it surprised me — and then how effective it was surprised me even more. Drove home feeling like I'd had a full reset. Already booked my next appointment.",
  },
  {
    name: "Karen B.",
    rating: 5,
    date: "January 2025",
    text: "Gloria has been treating my shoulder for the past two months and the improvement has been remarkable. Professional, warm, and she explains everything she's doing. Being able to claim my Medibank rebate on the spot is a bonus. 10/10.",
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
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-border-brand"
            >
              <StarRating count={review.rating} />
              <p className="text-sm text-text-muted leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-border-brand">
                <span className="text-sm font-semibold text-text-dark">{review.name}</span>
                <span className="text-xs text-text-muted">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
