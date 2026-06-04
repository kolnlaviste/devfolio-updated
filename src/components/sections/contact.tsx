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

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ background: "var(--sf)", borderTop: "1px solid var(--bd)" }}
    >
      <div className="max-w-[720px] mx-auto px-8 py-32 text-center">
        {/* Label */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[0.68rem] tracking-[0.18em] uppercase font-medium mb-4"
          style={{ color: "var(--ac)" }}
        >
          Get in Touch
        </motion.p>

        {/* Title */}
        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="leading-[1.02] tracking-[-0.04em]"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            color: "var(--tx)",
          }}
        >
          Let&apos;s Work
          <br />
          Together
        </motion.h2>

        {/* Sub */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-5 mb-10 text-[1.0625rem] leading-[1.75] max-w-[36ch] mx-auto"
          style={{ color: "var(--tx2)" }}
        >
          Whether you have a project in mind or just want to talk, feel free to reach out.
        </motion.p>

        {/* Email */}
        <motion.a
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href={`mailto:${bioData.email}`}
          className="inline-block text-[1.375rem] mb-10 transition-opacity duration-200 hover:opacity-70"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            color: "var(--ac)",
            borderBottom: "1px solid oklch(66% 0.21 282 / 0.3)",
            paddingBottom: "0.25rem",
          }}
        >
          {bioData.email}
        </motion.a>

        {/* Social buttons */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-3 justify-center flex-wrap"
        >
          {[
            { label: "GitHub", href: bioData.github },
            { label: "LinkedIn", href: bioData.linkedin },
            { label: "Email", href: `mailto:${bioData.email}` },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="px-6 py-2.5 rounded-lg text-[0.875rem] transition-all duration-200"
              style={{
                border: "1px solid var(--bd)",
                color: "var(--tx2)",
                fontFamily: "var(--font-dm-sans)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--ac)";
                el.style.color = "var(--ac)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--bd)";
                el.style.color = "var(--tx2)";
              }}
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
