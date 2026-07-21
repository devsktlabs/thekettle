"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react";

const links = [
  { label: "VIBE", href: "#vibe" },
  { label: "DRINKS", href: "#drinks" },
  { label: "EVENTS", href: "#events" },
  { label: "FIND US", href: "#hours" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-max max-w-[calc(100vw-2rem)]">
        <div className="rounded-full px-2 py-2 bg-white/[0.06] ring-1 ring-white/[0.10] backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-full font-display font-bold text-sm text-bone tracking-tight whitespace-nowrap hover:text-accent transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              The Brewer&apos;s Kettle
            </Link>

            <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-0.5">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-[11px] font-semibold tracking-[0.14em] text-white/55 hover:text-bone hover:bg-white/[0.07] transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="#events"
              className="hidden md:flex items-center gap-1.5 pl-5 pr-1.5 py-1.5 rounded-full bg-accent text-white text-[11px] font-semibold tracking-wide hover:bg-accent-light active:scale-[0.98] transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group ml-1"
            >
              <span>Book Event</span>
              <span className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center text-[10px] group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <ArrowUpRight aria-hidden="true" weight="bold" size={12} />
              </span>
            </Link>

            <button
              className="md:hidden w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-bone hover:bg-white/[0.07] transition-colors duration-300 ml-1"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <div className="relative w-5 h-[14px]">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current rounded-full transition-[top,transform] duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${
                    open ? "top-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-[1.5px] w-5 bg-current rounded-full transition-[bottom,transform] duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center ${
                    open ? "bottom-[7px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 backdrop-blur-3xl bg-[#090e09]/95 flex flex-col items-center justify-center overscroll-contain"
          >
            <nav id="mobile-menu" aria-label="Mobile navigation" className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-[2.75rem] font-display font-black text-bone tracking-tight hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.32, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              >
                <Link
                  href="#events"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center gap-2 pl-6 pr-2 py-2.5 rounded-full bg-accent text-white text-sm font-semibold tracking-wide group"
                >
                  Book an Event
                  <span className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <ArrowUpRight aria-hidden="true" weight="bold" size={14} />
                  </span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
