"use client";

import { useState } from "react";

const hours = [
  { day: "Monday",             time: "Closed" },
  { day: "Tuesday – Thursday", time: "9:00 am – 2:00 pm" },
  { day: "Friday",             time: "12:00 pm – 2:00 pm" },
  { day: "Saturday",           time: "Closed" },
  { day: "Evenings & Sundays", time: "By Appointment" },
];

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function HomeContact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // TODO: wire up form submission — send data to email handler or API route (e.g. /api/contact)
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <section className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-column contact layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* LEFT — info */}
          <div className="flex flex-col gap-6">
            <h2 className="font-script text-[2.5rem] font-semibold text-white leading-none">
              Get in touch with us
            </h2>
            <p className="text-white/70 leading-relaxed text-sm">
              We value each customer&apos;s perspectives and cherish the opportunity to hear
              from you. Whether you have a question, feedback, or just want to share your
              thoughts, we encourage you to reach out. Your insights drive us to continually
              enhance your experience.
            </p>

            <div className="flex flex-col gap-4 text-sm">
              <div className="flex gap-3">
                <span className="font-semibold text-plum shrink-0 w-16">Address</span>
                <span className="text-white/80">
                  Level 1 R1, 20 King Street, Caboolture Queensland 4510, Australia
                </span>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-plum shrink-0 w-16">Phone</span>
                <a href="tel:+61415020877" className="text-white/80 hover:text-white transition-colors">
                  0415 020 877
                </a>
              </div>
              <div className="flex gap-3">
                <span className="font-semibold text-plum shrink-0 w-16">Email</span>
                <a href="mailto:info@glowinwellness.com.au" className="text-white/80 hover:text-white transition-colors">
                  info@glowinwellness.com.au
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div>
            <p className="text-white text-[1.1rem] font-medium mb-6">
              We&apos;d love to hear from you!
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-plum transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-plum transition-colors"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-plum transition-colors"
              />
              <textarea
                name="message"
                placeholder="Message *"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-plum transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full px-7 py-3 rounded-[50px] bg-plum text-white text-sm font-medium hover:bg-plum-dark transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-12" />

        {/* Business hours */}
        <div className="max-w-md mx-auto mb-12">
          <dl className="flex flex-col divide-y divide-white/10">
            {hours.map(({ day, time }) => (
              <div key={day} className="flex justify-between py-3 text-sm">
                <dt className="text-white/60">{day}</dt>
                <dd className="text-white font-medium">{time}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Tagline + socials */}
        <div className="flex flex-col items-center gap-5">
          <p className="font-script text-[2rem] font-semibold text-white">
            Live with Wellness
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/glowinwellness"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-plum text-white flex items-center justify-center hover:bg-plum-dark transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/glowinwellness"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-plum text-white flex items-center justify-center hover:bg-plum-dark transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/glowinwellness"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-plum text-white flex items-center justify-center hover:bg-plum-dark transition-colors"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
