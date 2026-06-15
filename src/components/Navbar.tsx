"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "nav-about", label: "About", href: "#about" },
    { id: "nav-skills", label: "Skills", href: "#skills" },
    { id: "nav-projects", label: "Projects", href: "#projects" },
    { id: "nav-education", label: "Education", href: "#education" },
    { id: "nav-contact", label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/70 border-b border-white/10 backdrop-blur-md py-3.5 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          id="logo-link"
          className="text-sm font-bold tracking-widest text-white uppercase flex items-center gap-2.5 group"
        >
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_#00f0ff]" />
          Niharika Parne
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                id={l.id}
                className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 hover:text-[#00f0ff] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#00f0ff] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="mobile-nav-toggle"
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950/95 border-b border-white/10 backdrop-blur-xl transition-all duration-300">
          <ul className="flex flex-col items-center py-6 gap-4">
            {links.map((l) => (
              <li key={l.label} className="w-full text-center">
                <a
                  href={l.href}
                  id={`${l.id}-mobile`}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-[#00f0ff] transition-colors py-3 px-6 block"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
