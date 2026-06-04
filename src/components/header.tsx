"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./theme-provider";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "color-mix(in srgb, var(--bg) 88%, transparent)",
              borderBottom: "1px solid var(--bd)",
              backdropFilter: "blur(18px)",
            }
          : {}
      }
    >
      <div className="max-w-[1200px] mx-auto px-14 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link
          href="#"
          className="text-[1.125rem] font-bold tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk)", color: "var(--tx)" }}
        >
          KL
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.8rem] tracking-[0.06em] uppercase transition-colors duration-200"
              style={{ color: "var(--tx2)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--tx)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--tx2)")
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-5 py-2 rounded-md text-[0.8rem] tracking-[0.05em] uppercase transition-all duration-200"
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
            Resume
          </a>

          <button
            onClick={toggle}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ border: "1px solid var(--bd)", color: "var(--tx2)", background: "transparent" }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-full transition-colors"
            style={{ color: "var(--tx2)" }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav
          className="md:hidden px-6 pb-5 pt-3 flex flex-col gap-4"
          style={{ borderTop: "1px solid var(--bd)", background: "var(--bg)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.08em] uppercase"
              style={{ color: "var(--tx2)" }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-[0.06em] uppercase"
            style={{ color: "var(--ac)" }}
          >
            Resume ↗
          </a>
        </nav>
      )}
    </header>
  );
}
