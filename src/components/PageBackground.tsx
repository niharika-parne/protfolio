"use client";

import React, { useEffect, useState } from "react";
import SoftAurora from "./SoftAurora";
import Particles from "./Particles";

export default function PageBackground() {
  const [coords, setCoords] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Global intersection observer for scroll reveal elements (adds 'active' class)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    // Initial query
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    // Create a MutationObserver to watch for dynamic DOM content insertions (e.g. state triggers)
    const mutationObserver = new MutationObserver(() => {
      const activeElements = document.querySelectorAll(".reveal:not(.active)");
      activeElements.forEach((el) => observer.observe(el));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 bg-[#030303] overflow-hidden select-none">
      {/* 1. WebGL Soft Aurora Waves */}
      <div className="absolute inset-0 opacity-40">
        <SoftAurora
          speed={0.25}
          scale={1.2}
          brightness={0.8}
          color1="#0055ff" // Sapphire Blue
          color2="#a855f7" // Violet Purple
          enableMouseInteraction={true}
          mouseInfluence={0.12}
        />
      </div>

      {/* 2. Grid Overlay Pattern */}
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />

      {/* 3. Global Mouse-following glow */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(550px at ${coords.x}px ${coords.y}px, rgba(0, 240, 255, 0.04), rgba(168, 85, 247, 0.02) 50%, transparent 100%)`,
        }}
      />

      {/* 4. Falling Stars / Constellation Particles */}
      <Particles />

      {/* Gradient dims to keep text readable and focus intense */}
      <div className="absolute top-0 inset-x-0 h-[45vh] bg-gradient-to-b from-[#030303] via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[35vh] bg-gradient-to-t from-[#030303] via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
