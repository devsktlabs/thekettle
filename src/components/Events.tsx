"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

const ease = [0.32, 0.72, 0, 1] as const;

const EVENT_TYPES = ["Birthdays", "Watch Parties", "Team Nights", "Private Buyouts", "Trivia Nights"];

export default function Events() {
  return (
    <section id="events" className="relative scroll-mt-16 py-28 md:py-40 overflow-hidden">
      {/* Background photo */}
      <Image
        src="https://static.wixstatic.com/media/1c1de9_6984bae1170345768016379e1218524a~mv2.jpg"
        alt="Events at The Brewer's Kettle"
        fill
        className="object-cover object-center"
        sizes="100vw"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease }}
            className="font-display font-black text-bone text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] mb-6"
          >
            Host something
            <br />
            <span className="text-accent">memorable.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="text-white/65 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
          >
            We make event nights effortless. Full bar, big TVs,
            and a crowd-ready room.
          </motion.p>

          {/* Event type tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {EVENT_TYPES.map((type) => (
              <span
                key={type}
                className="px-4 py-2 rounded-full bg-white/[0.08] ring-1 ring-white/[0.12] text-white/70 text-sm font-medium"
              >
                {type}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            <Link
              href="https://www.instagram.com/brewerskettleilm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pl-7 pr-2 py-3.5 rounded-full bg-accent text-white font-semibold text-base tracking-wide hover:bg-accent-light active:scale-[0.98] transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group"
            >
              Book an Event
              <span className="w-9 h-9 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-[2px] group-hover:-translate-y-[1px] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <ArrowRight weight="bold" size={16} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
