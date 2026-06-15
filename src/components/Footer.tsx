"use client";

import React from "react";

export default function Footer() {
  return (
    <footer id="main-footer" className="py-12 border-t border-white/5 bg-zinc-950/20 backdrop-blur-sm relative z-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse shadow-[0_0_8px_#00f0ff]" />
          <p className="text-[11px] text-zinc-500 font-semibold tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Niharika Parne. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <a href="#home" id="footer-link-home" className="hover:text-white hover:text-[#00f0ff] transition-colors duration-200">Home</a>
          <a href="#about" id="footer-link-about" className="hover:text-white hover:text-[#00f0ff] transition-colors duration-200">About</a>
          <a href="#skills" id="footer-link-skills" className="hover:text-white hover:text-[#00f0ff] transition-colors duration-200">Skills</a>
          <a href="#projects" id="footer-link-projects" className="hover:text-white hover:text-[#00f0ff] transition-colors duration-200">Projects</a>
          <a href="#contact" id="footer-link-contact" className="hover:text-white hover:text-[#00f0ff] transition-colors duration-200">Contact</a>
        </div>
      </div>
    </footer>
  );
}
