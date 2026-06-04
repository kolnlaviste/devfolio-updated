"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="max-w-[1200px] mx-auto px-14 py-28">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-[0.68rem] tracking-[0.18em] uppercase font-medium mb-3"
          style={{ color: "var(--ac)" }}
        >
          Career
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="tracking-[-0.025em] leading-[1.1]"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: 600,
            color: "var(--tx)",
          }}
        >
          Work History
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="w-12 h-0.5 rounded-full mt-6 mb-14"
          style={{ background: "var(--ac)" }}
        />

        {/* Experience rows */}
        <div className="flex flex-col">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-12 py-10 md:grid-cols-[200px_1fr]"
              style={{ borderTop: "1px solid var(--bd)" }}
            >
              {/* Left: company / date */}
              <div>
                <p
                  className="text-[0.9375rem] font-semibold mb-1"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--tx)" }}
                >
                  {exp.company}
                </p>
                <p className="text-[0.8rem] mb-3" style={{ color: "var(--tx2)" }}>
                  {exp.period}
                </p>
                <span
                  className="inline-block px-2.5 py-1 rounded text-[0.65rem] tracking-[0.1em] uppercase"
                  style={{ border: "1px solid var(--bd)", color: "var(--tx3)" }}
                >
                  {exp.employment}
                </span>
              </div>

              {/* Right: role / description */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3
                    className="text-[1.25rem] font-semibold tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--tx)" }}
                  >
                    {exp.title}
                  </h3>
                  {exp.current && (
                    <span
                      className="px-2.5 py-1 rounded-full text-[0.65rem] tracking-[0.08em] uppercase"
                      style={{
                        background: "oklch(66% 0.21 282 / 0.1)",
                        border: "1px solid oklch(66% 0.21 282 / 0.35)",
                        color: "var(--ac)",
                      }}
                    >
                      Current
                    </span>
                  )}
                </div>
                <p
                  className="text-[0.9375rem] leading-[1.75] mb-4"
                  style={{ color: "var(--tx2)" }}
                >
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded text-[0.72rem]"
                      style={{
                        border: "1px solid var(--bd)",
                        background: "var(--sf2)",
                        color: "var(--tx2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom border */}
          <div style={{ borderTop: "1px solid var(--bd)" }} />
        </div>
      </div>
    </section>
  );
}
