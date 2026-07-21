"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  BeerStein,
  GameController,
  Martini,
  Leaf,
  CalendarBlank,
} from "@phosphor-icons/react";

const ease = [0.32, 0.72, 0, 1] as const;

interface CellProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function BentoCell({ children, className = "", delay = 0 }: CellProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease, delay }}
      whileHover={{ y: -3, transition: { duration: 0.3, ease } }}
      className={`rounded-[1.5rem] p-[7px] bg-white/[0.04] ring-1 ring-white/[0.07] ${className}`}
    >
      {/* Inner core — double-bezel */}
      <div className="rounded-[calc(1.5rem-7px)] h-full overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
        {children}
      </div>
    </motion.div>
  );
}

export default function VibeGrid() {
  return (
    <section id="vibe" className="scroll-mt-16 py-24 md:py-32 bg-bg">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-12"
        >
          <h2 className="font-display font-black text-bone text-4xl md:text-5xl tracking-tight leading-tight">
            Bring the crew.
            <br />
            <span className="text-muted">Find your pour.</span>
          </h2>
        </motion.div>

        {/* Bento grid — 4 cols desktop, 1 col mobile */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-3"
          style={{ gridAutoRows: "225px" }}
        >
          {/* ── Cell 1: Events (2×2) ─────────────────────────── */}
          <BentoCell
            className="md:col-span-2 md:row-span-2"
            delay={0.05}
          >
            <div className="relative h-full min-h-[280px] md:min-h-0">
              <Image
                src="https://static.wixstatic.com/media/1c1de9_f81e0b893e6a4cda95bcf9e925f0ff0c~mv2.jpg"
                alt="Events at The Brewer's Kettle"
                fill
                className="object-cover object-center"
                sizes="(max-width:768px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-3">
                  <CalendarBlank weight="light" size={18} className="text-accent" />
                  <span className="text-[11px] font-semibold tracking-[0.15em] text-accent uppercase">
                    Events
                  </span>
                </div>
                <h3 className="font-display font-black text-bone text-2xl md:text-3xl tracking-tight leading-tight mb-2">
                  Make the group chat easy.
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Birthdays, watch parties, team nights - we&apos;ve got the space,
                  screens, and bar.
                </p>
              </div>
            </div>
          </BentoCell>

          {/* ── Cell 2: Beers on Tap ─────────────────────────── */}
          <BentoCell delay={0.1}>
            <div className="relative h-full min-h-[225px] bg-surface flex flex-col justify-between p-6">
              <BeerStein
                weight="light"
                size={32}
                className="text-accent opacity-80"
              />
              <div>
                <h3 className="font-display font-bold text-bone text-xl tracking-tight mb-1">
                  Beers on Tap
                </h3>
                <p className="text-muted text-sm leading-snug">
                  Rotating craft taps, always cold, always fresh.
                </p>
              </div>
            </div>
          </BentoCell>

          {/* ── Cell 3: Games ────────────────────────────────── */}
          <BentoCell delay={0.15}>
            <div className="relative h-full min-h-[225px] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/bar-games-pool-table/400/450"
                alt="Games area"
                fill
                className="object-cover object-center"
                sizes="(max-width:768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-2 mb-2">
                  <GameController
                    weight="light"
                    size={16}
                    className="text-accent"
                  />
                  <span className="text-[10px] font-semibold tracking-[0.15em] text-accent uppercase">
                    Games
                  </span>
                </div>
                <h3 className="font-display font-bold text-bone text-lg tracking-tight leading-tight">
                  Games for kids.
                  <br />
                  TVs for the table.
                </h3>
              </div>
            </div>
          </BentoCell>

          {/* ── Cell 4: Full Bar ─────────────────────────────── */}
          <BentoCell delay={0.2}>
            <div className="relative h-full min-h-[225px] bg-surface flex flex-col justify-between p-6">
              <Martini
                weight="light"
                size={32}
                className="text-accent opacity-80"
              />
              <div>
                <h3 className="font-display font-bold text-bone text-xl tracking-tight mb-1">
                  Full Bar
                </h3>
                <p className="text-muted text-sm leading-snug">
                  Spirits, wine, cocktails — the full lineup, done right.
                </p>
              </div>
            </div>
          </BentoCell>

          {/* ── Cell 5: Cannabis Alt Drinks (highlighted) ────── */}
          <BentoCell delay={0.25}>
            <div className="relative h-full min-h-[225px] bg-[#0d1f0e] flex flex-col justify-between p-6 ring-1 ring-[#3a6e3a]/40 rounded-[calc(1.5rem-7px)]">
              <Leaf
                weight="light"
                size={32}
                className="text-[#5db85d] opacity-90"
              />
              <div>
                <h3 className="font-display font-bold text-bone text-xl tracking-tight mb-1">
                  Cannabis Alt Drinks
                </h3>
                <p className="text-[#8ab88a] text-sm leading-snug">
                  Hemp-derived, zero alcohol, and finally on the menu.
                </p>
              </div>
            </div>
          </BentoCell>
        </div>
      </div>
    </section>
  );
}
