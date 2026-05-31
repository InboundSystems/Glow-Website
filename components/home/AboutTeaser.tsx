"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutTeaser() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Text column */}
          <FadeIn direction="left" className="flex flex-col gap-5 order-2 lg:order-1">
            <p className="text-xs font-medium text-plum uppercase tracking-widest">Your therapist</p>
            <h2 className="font-script text-[2.5rem] font-semibold text-plum leading-none">
              Meet Gloria
            </h2>
            <p className="text-sm font-light text-text-muted uppercase tracking-widest">
              You may not have met a massage therapist quite like me!
            </p>

            <div className="flex flex-col gap-4 text-text-muted text-sm leading-relaxed">
              <p>
                Glow in Wellness is a place where everyone is welcome without judgement.
                And your visit has a purpose — to relax you, to relieve aches and pains,
                and to empower you in living YOUR version of a healthy life.
              </p>
              <p>
                I came to massage therapy from my love of people and a passion for wanting
                to help others. Massage is often looked at as a luxury, but to me, it is a
                necessity — a necessity in dealing with the aches and pains that come from
                being a regular person in a busy world.
              </p>
              <p>
                When you first step into my massage room, I&apos;ll take a moment to get to
                know you, your body, and how you manage it. I listen to my clients to
                determine what they really need, because managing your muscles, aches, scars
                and energy should enhance your life, not weigh it down and become a chore.
              </p>
              <p>
                Every client is unique in their needs and the way they manage their body.
                You won&apos;t leave with an armful of exercises to do if that&apos;s not
                you, and I take a personalised approach — it&apos;s not one size fits all.
              </p>
              <p>
                Massage is about working with a purpose, and I want you to be empowered in
                managing your physical and mental well-being.
              </p>
              <p>
                My business is an extension of me — authentic, balanced and honest.
              </p>
            </div>

            <p className="font-script text-[1.8rem] font-semibold text-plum leading-none mt-1">
              – Gloria
            </p>

            <div className="mt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] bg-plum text-white text-sm font-medium hover:bg-plum-dark transition-colors"
              >
                About Gloria
              </Link>
            </div>
          </FadeIn>

          {/* Photo column */}
          <FadeIn direction="right" className="order-1 lg:order-2 relative min-h-[400px] lg:min-h-0">
            <div className="absolute inset-0 rounded-2xl overflow-hidden ring-4 ring-plum/10">
              <Image
                src="/gloria.jpg"
                alt="Gloria Mullaly — remedial massage therapist and Bowen practitioner, Caboolture"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
