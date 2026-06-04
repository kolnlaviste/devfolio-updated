"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="text-center py-8 text-[0.8rem] flex items-center justify-between px-14"
      style={{ borderTop: "1px solid var(--bd)", color: "var(--tx3)" }}
    >
      <span style={{ fontFamily: "var(--font-dm-sans)" }}>
        Designed &amp; built by{" "}
        <Link href="#" style={{ color: "var(--tx2)" }} className="transition-colors hover:opacity-70">
          Koln Laviste
        </Link>{" "}
        · © {new Date().getFullYear()}
      </span>
      <button
        onClick={scrollToTop}
        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
        style={{ border: "1px solid var(--bd)", color: "var(--tx3)", background: "transparent" }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.borderColor = "var(--ac)";
          el.style.color = "var(--ac)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.borderColor = "var(--bd)";
          el.style.color = "var(--tx3)";
        }}
        aria-label="Back to top"
      >
        <ArrowUp size={14} />
      </button>
    </footer>
  );
}
