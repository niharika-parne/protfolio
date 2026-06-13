import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} Niharika Parne. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a href="#home" className="hover:text-zinc-900 transition-colors">Home</a>
          <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
          <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
          <a href="#education" className="hover:text-zinc-900 transition-colors">Education</a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
