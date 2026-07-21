// Static server component — no client JS needed

const HOURS = [
  { day: "Sun", hours: "12:00 – 8:30" },
  { day: "Mon", hours: "12:30 – 10:00" },
  { day: "Tue", hours: "12:30 – 10:00" },
  { day: "Wed", hours: "12:30 – 10:00" },
  { day: "Thu", hours: "12:30 – 10:00" },
  { day: "Fri", hours: "12:00 – 11:00" },
  { day: "Sat", hours: "12:00 – 11:00" },
];

export default function Hours() {
  return (
    <section id="hours" className="scroll-mt-16 py-24 md:py-32 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* ── Hours ──────────────────────────────────────── */}
          <div>
            <h2 className="font-display font-black text-bone text-3xl md:text-4xl tracking-tight mb-10">
              Hours
            </h2>
            <div className="divide-y divide-white/[0.07]">
              {HOURS.map(({ day, hours }) => (
                <div
                  key={day}
                  className="flex items-center justify-between py-4"
                >
                  <span className="text-muted font-medium text-base w-10">{day}</span>
                  <span className="text-bone font-medium text-base tabular-nums">{hours}</span>
                  <span className="text-muted/50 text-xs font-medium">PM</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Location ───────────────────────────────────── */}
          <div>
            <h2 className="font-display font-black text-bone text-3xl md:text-4xl tracking-tight mb-10">
              Find Us
            </h2>

            {/* Address card — double-bezel */}
            <div className="rounded-[1.5rem] p-[7px] bg-white/[0.04] ring-1 ring-white/[0.07] mb-6">
              <div className="rounded-[calc(1.5rem-7px)] bg-[#0f1a0f] p-6">
                <p className="text-bone text-lg font-semibold mb-1">
                  The Brewer&apos;s Kettle
                </p>
                <p className="text-muted text-base mb-4">Wilmington, NC</p>
                <a
                  href="https://maps.google.com/?q=The+Brewers+Kettle+Wilmington+NC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-wide hover:text-accent-light transition-colors duration-300"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Instagram CTA */}
            <a
              href="https://www.instagram.com/brewerskettleilm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-muted hover:text-bone transition-colors duration-300 text-sm font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              @brewerskettleilm
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
