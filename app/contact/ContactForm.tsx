"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const inputClass =
  "w-full rounded-xl border border-border-brand bg-white px-4 py-3 text-sm text-text-dark placeholder:text-text-muted/60 focus:border-plum focus:outline-none focus:ring-2 focus:ring-plum/10 transition-colors";

export default function ContactForm() {
  const [state, action, isPending] = useActionState<ContactState, FormData>(
    submitContact,
    null
  );

  if (state?.success) {
    return (
      <div className="rounded-2xl bg-sage-light border border-sage/30 p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-6 h-6 text-sage"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-serif text-xl font-semibold text-text-dark mb-2">
          Message received!
        </h3>
        <p className="text-sm text-text-muted">
          Thanks for getting in touch. Gloria will get back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5">
      {state?.error && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-text-dark">
            Full name <span className="text-plum">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-text-dark">
            Email <span className="text-plum">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-text-dark">
          Phone <span className="text-text-muted/50 font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="04XX XXX XXX"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-text-dark"
        >
          Message <span className="text-plum">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell Gloria a little about what you'd like help with…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-plum text-white font-medium text-sm hover:bg-plum-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
