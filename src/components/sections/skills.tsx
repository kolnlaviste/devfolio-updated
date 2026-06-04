"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative">
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
          Expertise
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
          What I Work With
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="w-12 h-0.5 rounded-full mt-6 mb-14"
          style={{ background: "var(--ac)" }}
        />

        {/* Grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))" }}
        >
          {Object.entries(skillsData).map(([key, category], idx) => (
            <motion.div
              key={key}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 rounded-xl transition-all duration-200"
              style={{
                background: "var(--sf)",
                border: "1px solid var(--bd)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor =
                  "oklch(66% 0.21 282 / 0.4)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--bd)")
              }
            >
              {/* Category label */}
              <p
                className="text-[0.65rem] tracking-[0.15em] uppercase mb-5"
                style={{ color: "var(--ac)" }}
              >
                {category.name}
              </p>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-md text-[0.8125rem] transition-all duration-200 cursor-default"
                    style={{
                      border: "1px solid var(--bd)",
                      background: "var(--sf2)",
                      color: "var(--tx2)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.borderColor = "var(--ac)";
                      el.style.background = "var(--glow)";
                      el.style.color = "var(--tx)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.borderColor = "var(--bd)";
                      el.style.background = "var(--sf2)";
                      el.style.color = "var(--tx2)";
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
