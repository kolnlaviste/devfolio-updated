"use client";

import { motion } from "framer-motion";
import { bioData } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const stats = [
  { k: "Location", v: bioData.location },
  { k: "Current Role", v: "Software Engineer — Coolmogo", dot: true },
  { k: "Status", v: bioData.availability, accent: true },
  { k: "Focus", v: "Full-stack · AI systems" },
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="max-w-[1200px] mx-auto px-14 py-28">
        {/* Header */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[0.68rem] tracking-[0.18em] uppercase font-medium mb-3"
          style={{ color: "var(--ac)" }}
        >
          About
        </motion.p>
        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="tracking-[-0.025em] leading-[1.1]"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: 600,
            color: "var(--tx)",
          }}
        >
          Who I Am
        </motion.h2>
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-12 h-0.5 rounded-full mt-6 mb-14"
          style={{ background: "var(--ac)" }}
        />

        {/* Two-column grid */}
        <div className="grid gap-20 items-start md:grid-cols-[1.4fr_1fr]">
          {/* Bio */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {bioData.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-[1.0625rem] leading-[1.8]"
                style={{ color: "var(--tx2)" }}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Stat cards */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            {stats.map((s) => (
              <div
                key={s.k}
                className="px-5 py-4 rounded-xl transition-all duration-200"
                style={{
                  background: "var(--sf)",
                  border: "1px solid var(--bd)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor =
                    "oklch(66% 0.21 282 / 0.45)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd)")
                }
              >
                <p
                  className="text-[0.65rem] tracking-[0.12em] uppercase mb-1.5"
                  style={{ color: "var(--tx3)" }}
                >
                  {s.k}
                </p>
                <p
                  className="text-[0.9375rem] font-medium flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    color: s.accent ? "var(--ac)" : "var(--tx)",
                  }}
                >
                  {s.dot && (
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--ac)" }}
                    />
                  )}
                  {s.v}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
