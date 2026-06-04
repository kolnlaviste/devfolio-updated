"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const roles = [
  "Full Stack Developer",
  "Web Developer",
  "Software Developer",
  "Software Engineer",
];

const fu = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-svh flex flex-col items-center justify-center text-center px-8 pt-24 pb-16 relative"
    >
      {/* Badge */}
      <motion.div
        custom={0.1}
        variants={fu}
        initial="hidden"
        animate="visible"
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-[0.72rem] tracking-[0.12em] uppercase"
        style={{
          border: "1px solid oklch(66% 0.21 282 / 0.3)",
          background: "oklch(66% 0.21 282 / 0.07)",
          color: "var(--ac)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: "var(--ac)", boxShadow: "0 0 0 0 var(--glow)" }}
        />
        Open to part-time opportunities
      </motion.div>

      {/* Name */}
      <motion.h1
        custom={0.2}
        variants={fu}
        initial="hidden"
        animate="visible"
        className="leading-[0.92] tracking-[-0.045em]"
        style={{
          fontFamily: "var(--font-space-grotesk)",
          fontSize: "clamp(4rem, 10vw, 8rem)",
          fontWeight: 700,
          color: "var(--tx)",
        }}
      >
        Koln
        <br />
        <span style={{ fontWeight: 300, color: "var(--tx3)" }}>Laviste</span>
      </motion.h1>

      {/* Cycling Role */}
      <motion.div
        custom={0.35}
        variants={fu}
        initial="hidden"
        animate="visible"
        className="mt-5 overflow-hidden"
        style={{
          height: "1.5em",
          fontFamily: "var(--font-space-grotesk)",
          fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
          fontWeight: 300,
          color: "var(--tx2)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={roleIdx}
            initial={{ opacity: 0, y: "60%", filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: "-60%", filter: "blur(4px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{ display: "block" }}
          >
            {roles[roleIdx]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* Description */}
      <motion.p
        custom={0.5}
        variants={fu}
        initial="hidden"
        animate="visible"
        className="mt-6 mb-10 leading-[1.75] text-[1.0625rem] max-w-[42ch]"
        style={{ color: "var(--tx2)" }}
      >
        Building modern, scalable applications with Next.js, FastAPI, and Flutter.
        Based in Cebu City, Philippines.
      </motion.p>

      {/* CTAs */}
      <motion.div
        custom={0.65}
        variants={fu}
        initial="hidden"
        animate="visible"
        className="flex gap-4 flex-wrap justify-center"
      >
        <Link href="#projects">
          <button
            className="px-8 py-3 rounded-lg text-[0.9375rem] font-medium text-white transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
            style={{ background: "var(--ac)", border: "none", fontFamily: "var(--font-dm-sans)" }}
          >
            View My Work
          </button>
        </Link>
        <a href="/assets/resume.pdf" download="koln-laviste-resume.pdf">
          <button
            className="px-8 py-3 rounded-lg text-[0.9375rem] font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{
              border: "1px solid var(--bd)",
              color: "var(--tx)",
              background: "transparent",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Download Resume
          </button>
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        custom={0.9}
        variants={fu}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 flex flex-col items-center gap-2 text-[0.65rem] tracking-[0.15em] uppercase"
        style={{ color: "var(--tx3)" }}
      >
        <span>Scroll</span>
        <div
          className="w-px h-10 animate-pulse"
          style={{ background: "linear-gradient(var(--tx3), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
