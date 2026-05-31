"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease },
  };
}

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
        <motion.p {...fadeUp(0.15)} className="text-base text-white uppercase tracking-[0.35em] font-light">
          Welcome to
        </motion.p>
        <motion.h1 {...fadeUp(0.3)} className="font-script font-semibold text-white text-6xl lg:text-[5rem] leading-none">
          Glow in Wellness
        </motion.h1>
        <motion.p {...fadeUp(0.45)} className="text-sm text-white uppercase tracking-[0.5em] font-light">
          Massage and Bowen Therapy
        </motion.p>
        <motion.div {...fadeUp(0.6)}>
          <Link
            href="/book"
            className="mt-2 inline-flex items-center justify-center px-7 py-3 rounded-[50px] bg-plum text-white font-medium text-sm hover:bg-plum-dark transition-colors"
          >
            Book an Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
