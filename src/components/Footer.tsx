import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-white/[0.06] py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Wordmark */}
        <span className="font-display font-bold text-bone/70 text-sm tracking-tight">
          The Brewer&apos;s Kettle
        </span>

        {/* Links */}
        <nav className="flex items-center gap-6 text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">
          <Link href="#vibe" className="hover:text-bone transition-colors duration-300">Vibe</Link>
          <Link href="#drinks" className="hover:text-bone transition-colors duration-300">Drinks</Link>
          <Link href="#events" className="hover:text-bone transition-colors duration-300">Events</Link>
          <Link href="#hours" className="hover:text-bone transition-colors duration-300">Find Us</Link>
        </nav>

        {/* Social + legal */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/brewerskettleilm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full flex items-center justify-center ring-1 ring-white/[0.10] text-muted hover:text-bone hover:ring-white/20 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          <span className="text-muted/40 text-xs">
            © {new Date().getFullYear()} The Brewer&apos;s Kettle · Wilmington, NC
          </span>
        </div>
      </div>
    </footer>
  );
}
