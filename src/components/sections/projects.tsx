"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { GitBranch, ExternalLink } from "lucide-react";

const FILTERS = ["All", "Next.js", "React", "Flutter", "Python", "TypeScript"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projectsData;
    return projectsData.filter((p) =>
      p.technologies.some((t) =>
        t.toLowerCase().includes(active.toLowerCase())
      )
    );
  }, [active]);

  return (
    <section id="projects" className="relative">
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
          Work
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
          Featured Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="w-12 h-0.5 rounded-full mt-6 mb-8"
          style={{ background: "var(--ac)" }}
        />

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="px-3.5 py-1.5 rounded-full text-[0.8rem] transition-all duration-200"
              style={
                active === f
                  ? {
                      background: "var(--ac)",
                      border: "1px solid var(--ac)",
                      color: "#fff",
                      fontFamily: "var(--font-dm-sans)",
                    }
                  : {
                      background: "transparent",
                      border: "1px solid var(--bd)",
                      color: "var(--tx2)",
                      fontFamily: "var(--font-dm-sans)",
                    }
              }
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))" }}>
          {filtered.map((project, idx) => (
            <motion.div
              key={project.title}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden flex flex-col transition-all duration-250"
              style={{
                background: "var(--sf)",
                border: "1px solid var(--bd)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-5px)";
                el.style.borderColor = "var(--ac)";
                el.style.boxShadow = "0 12px 40px var(--glow)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "";
                el.style.borderColor = "var(--bd)";
                el.style.boxShadow = "";
              }}
            >
              {/* Image */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "16/9", background: "var(--sf2)", borderBottom: "1px solid var(--bd)" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1 gap-3">
                <h3
                  className="text-[1.0625rem] font-semibold"
                  style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--tx)" }}
                >
                  {project.title}
                </h3>
                <p className="text-[0.875rem] leading-[1.65] flex-1" style={{ color: "var(--tx2)" }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((t) => (
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
                  {project.technologies.length > 4 && (
                    <span
                      className="px-2.5 py-1 rounded text-[0.72rem]"
                      style={{ border: "1px solid var(--bd)", background: "var(--sf2)", color: "var(--tx3)" }}
                    >
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                {(project.github || project.demo) && (
                  <div className="flex gap-4 pt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[0.8rem] transition-opacity duration-200 hover:opacity-60"
                        style={{ color: "var(--ac)" }}
                      >
                        <GitBranch size={14} /> GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[0.8rem] transition-opacity duration-200 hover:opacity-60"
                        style={{ color: "var(--ac)" }}
                      >
                        <ExternalLink size={14} /> Live
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
