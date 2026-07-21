"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Leaf, ArrowRight } from "@phosphor-icons/react";

const ease = [0.32, 0.72, 0, 1] as const;

export default function CannabisDrinks() {
  return (
    <section id="drinks" className="scroll-mt-16 py-24 md:py-32 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* ── Left: Text ─────────────────────────────────── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-accent/10 ring-1 ring-accent/30">
                <Leaf weight="light" size={14} className="text-accent" />
                <span className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase">
                  Something New
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease, delay: 0.05 }}
              className="font-display font-black text-bone text-4xl md:text-5xl tracking-tight leading-tight mb-6"
            >
              Meet the
              <br />
              New Pour.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="text-muted text-lg leading-relaxed mb-4 max-w-[50ch]"
            >
              Hemp-derived cannabis alternative drinks are now part of the
              lineup. Zero alcohol, fully legal, and actually enjoyable.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              className="text-muted text-lg leading-relaxed mb-10 max-w-[50ch]"
            >
              Whether you&apos;re sober-curious, on a dry month, or just want
              something different, we&apos;ve got you covered.
            </motion.p>

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
                className="inline-flex items-center gap-2 pl-6 pr-2 py-3 rounded-full bg-accent text-white font-semibold text-sm tracking-wide hover:bg-accent-light active:scale-[0.98] transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group"
              >
                Ask us what&apos;s on tap
                <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-[2px] group-hover:-translate-y-[1px] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <ArrowRight weight="bold" size={14} />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Image ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="rounded-2xl p-[7px] bg-white/[0.04] ring-1 ring-accent/20"
          >
            <div className="rounded-[calc(1rem-7px)] overflow-hidden aspect-[4/3] relative">
              <Image
                src="https://static.wixstatic.com/media/1c1de9_52ed1000b83342c1ba23618c240614b3~mv2.webp"
                alt="Drinks and conversation at The Brewer's Kettle"
                fill
                className="object-cover object-center"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
