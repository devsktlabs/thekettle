"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const HERO_IMAGE =
  "https://static.wixstatic.com/media/1c1de9_74ebe89d0ea74fe18616c3808177edba~mv2.jpg";

const ease = [0.32, 0.72, 0, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
      {/* Background photo */}
      <Image
        src={HERO_IMAGE}
        alt="The Brewer's Kettle — interior atmosphere"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        unoptimized
      />

      {/* Layered scrims */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 48, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="font-display font-black text-bone text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[1.0] mb-6"
          >
            Meet up.
            <br />
            Stay awhile.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed max-w-lg mb-10"
          >
            Cold beer, cocktails, cannabis alt drinks, TVs, and games for the
            kids - all under one roof.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="#vibe"
              className="flex items-center gap-2 pl-6 pr-2 py-3 rounded-full bg-accent text-white font-semibold text-sm tracking-wide hover:bg-accent-light active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group"
            >
              See the Vibe
              <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-[2px] group-hover:-translate-y-[1px] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
                ↓
              </span>
            </Link>
            <Link
              href="#events"
              className="flex items-center px-6 py-3 rounded-full ring-1 ring-white/30 text-white font-semibold text-sm tracking-wide hover:ring-white/60 hover:bg-white/[0.05] active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              Book an Event
            </Link>
          </motion.div>
        </div>

        {/* Hours strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 0.7 }}
          className="absolute bottom-6 right-6 md:right-12 hidden md:flex items-center gap-1 text-[11px] text-white/40 tracking-[0.1em] font-medium"
        >
          <span className="w-1 h-1 rounded-full bg-accent mr-1.5" />
          NOW OPEN · MON–THU 12:30–10 · FRI–SAT 12–11 · SUN 12–8:30
        </motion.div>
      </div>
    </section>
  );
}
