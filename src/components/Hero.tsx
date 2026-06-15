"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowDownRight, MessageSquare, Sparkles } from "lucide-react";

export default function Hero() {
  const avatarRef = useRef<HTMLDivElement>(null);

  // 3D tilt effect for the profile image
  useEffect(() => {
    const avatar = avatarRef.current;
    if (!avatar) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = avatar.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = -(y / (rect.height / 2)) * 8; // Max 8 degrees
      const rotateY = (x / (rect.width / 2)) * 8;
      
      avatar.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      avatar.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    avatar.addEventListener("mousemove", handleMouseMove);
    avatar.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      avatar.removeEventListener("mousemove", handleMouseMove);
      avatar.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative overflow-hidden z-10"
    >
      {/* Floating Code Snippet 1 */}
      <div className="absolute top-[20%] left-[8%] animate-float opacity-25 pointer-events-none hidden xl:block text-[11px] font-mono text-[#00f0ff] bg-zinc-955/80 border border-white/10 p-4 rounded-xl backdrop-blur-md shadow-2xl">
        <div className="flex gap-1.5 mb-2 border-b border-white/5 pb-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>
        <pre>{`const developer = {
  name: "Niharika Parne",
  role: "Software Developer",
  skills: ["Java", "Python", "Web"]
};`}</pre>
      </div>

      {/* Floating Code Snippet 2 */}
      <div className="absolute bottom-[20%] right-[8%] animate-float-delayed opacity-25 pointer-events-none hidden xl:block text-[11px] font-mono text-[#a855f7] bg-zinc-955/80 border border-white/10 p-4 rounded-xl backdrop-blur-md shadow-2xl">
        <div className="flex gap-1.5 mb-2 border-b border-white/5 pb-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>
        <pre>{`public class Main {
  public static void main(String[] args) {
    System.out.println("Clean Code");
  }
}`}</pre>
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="md:col-span-7 order-2 md:order-1 flex flex-col justify-center text-left">
          {/* Tag for intro */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00f0ff] w-fit mb-6 shadow-[0_0_15px_rgba(0,240,255,0.05)] animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Available for Internships &amp; Roles</span>
          </div>

          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-zinc-400 mb-3">
            Hello there, welcome to my site
          </p>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1] mb-8">
            I&apos;m <span className="text-white">Niharika Parne</span>
            <span className="block mt-3 text-[#ff0055] drop-shadow-[0_0_20px_rgba(255,0,85,0.2)] font-black">
              A Software Developer
            </span>
            <span className="block text-2xl sm:text-4xl text-zinc-300 font-bold mt-2">
              &amp; Problem Solver
            </span>
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            &ldquo;Building innovative software solutions through clean code, creativity, and continuous learning.&rdquo;
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <a
              href="#projects"
              id="hero-view-projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#ff0055] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#ff0055]/95 hover:shadow-[0_0_25px_rgba(255,0,85,0.45)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              See Portfolio
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowDownRight className="w-3.5 h-3.5 text-white" />
              </span>
            </a>
            <a
              href="#contact"
              id="hero-contact-me"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-[#ff0055] bg-zinc-950/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#ff0055]/10 hover:shadow-[0_0_15px_rgba(255,0,85,0.25)] transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Contact Me
              <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <MessageSquare className="w-3 h-3 text-[#ff0055]" />
              </span>
            </a>
          </div>
        </div>

        {/* Right Side: Glowing Avatar Frame */}
        <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Outer animated gradient glow */}
            <div className="absolute -inset-1.5 rounded-[2.2rem] bg-gradient-to-tr from-[#ff0055] via-[#a855f7] to-[#00f0ff] opacity-40 blur-xl group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse" />
            
            {/* Main picture container with gradient border */}
            <div className="relative p-[3px] rounded-[2.2rem] bg-gradient-to-tr from-[#ff0055] via-[#a855f7] to-[#00f0ff] shadow-2xl transition-all duration-300 hover:scale-[1.01]">
              <div
                ref={avatarRef}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] overflow-hidden bg-zinc-950 flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src="/niharika.jpg"
                  alt="Niharika Parne"
                  fill
                  sizes="(max-width: 640px) 256px, 320px"
                  className="object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-300 scale-102"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Sub-Section */}
      <div id="about" className="max-w-5xl mx-auto px-6 w-full mt-24 reveal">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 pulse-glow-cyan opacity-20 pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
              <h2 className="text-2xl font-extrabold text-white mb-2">About Me</h2>
              <p className="text-[#00f0ff] text-xs font-bold uppercase tracking-widest">Creative Engineer</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                I am a passionate Software Developer with expertise in Java, Python, and Web Technologies. 
                I enjoy solving real-world problems through technology and continuously learning modern development practices.
                My background in Artificial Intelligence &amp; Data Science enables me to design systems that are both intelligent and user-friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
