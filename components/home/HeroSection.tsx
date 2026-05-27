import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/massage-overhead.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-cream/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 sm:px-6">
        <p className="text-base text-white uppercase tracking-[0.35em] font-light">
          Welcome to
        </p>
        <h1 className="font-script font-semibold text-white text-6xl lg:text-[5rem] leading-none">
          Glow in Wellness
        </h1>
        <p className="text-sm text-white uppercase tracking-[0.5em] font-light">
          Massage and Bowen Therapy
        </p>
        <Link
          href="/book"
          className="mt-2 inline-flex items-center justify-center px-7 py-3 rounded-[50px] bg-plum text-white font-medium text-sm hover:bg-plum-dark transition-colors"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
}
