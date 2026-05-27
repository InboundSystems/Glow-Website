import Link from "next/link";

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-border-brand px-4 py-3 flex gap-3 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
      <a
        href="tel:+61415020877"
        className="flex-1 flex items-center justify-center gap-2 rounded-[50px] border-2 border-plum text-plum font-medium text-sm py-2.5 hover:bg-plum hover:text-white transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call
      </a>
      <Link
        href="/book"
        className="flex-1 flex items-center justify-center gap-2 rounded-[50px] bg-plum text-white font-medium text-sm py-2.5 hover:bg-plum-dark transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Book
      </Link>
    </div>
  );
}
