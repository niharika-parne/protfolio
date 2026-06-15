"use client";

import React, { useState, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { GraduationCap, Award, Users, CheckCircle2 } from "lucide-react";

// Performant requestAnimationFrame-based counter with quadratic easing
const Counter = ({ target, decimals = 0, suffix = "" }: { target: number; decimals?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isVisible && !hasStarted.current) {
      hasStarted.current = true;
      const start = 0;
      const end = target;
      const duration = 1500; // 1.5 seconds
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Eased out quadratic
        const easedProgress = progress * (2 - progress);
        const currentVal = easedProgress * (end - start) + start;
        setCount(currentVal);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, target]);

  return (
    <span ref={ref} className="font-mono font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default function Experience() {
  const education = [
    {
      degree: "B.Tech — Artificial Intelligence & Data Science",
      institution: "Sri Indu College of Engineering and Technology",
      period: "2022 – 2026",
      score: "CGPA: 8.9",
      description: "Focusing on machine learning architectures, statistical model algorithms, and modern data structures.",
    },
    {
      degree: "Intermediate Education",
      institution: "Narayana Junior College",
      period: "2020 – 2022",
      score: "Score: 95.7%",
      description: "Majored in Mathematics, Physics, and Chemistry (MPC).",
    },
    {
      degree: "Secondary School (SSC)",
      institution: "Trinity High School",
      period: "2019 – 2020",
      score: "Score: 100%",
      description: "General board curriculum with a perfect score.",
    },
  ];

  const certifications = [
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Deloitte simulated tasks",
    },
    {
      title: "Python Programming",
      issuer: "Simplilearn",
      date: "Core concepts & scripts",
    },
    {
      title: "Data Analytics Simulation",
      issuer: "Tata (via Forage)",
      date: "GenAI-powered visualization",
    },
    {
      title: "Java Certification",
      issuer: "Scaler",
      date: "OOPs & data structures",
    },
  ];

  return (
    <section id="education" className="py-24 border-t border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Statistics Section (Animated Counters) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20 reveal">
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border-glowing text-center">
            <p className="text-[10px] sm:text-xs font-bold tracking-widest text-[#00f0ff] uppercase mb-1">B.Tech CGPA</p>
            <Counter target={8.9} decimals={1} />
          </div>
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border-glowing text-center">
            <p className="text-[10px] sm:text-xs font-bold tracking-widest text-[#a855f7] uppercase mb-1">Projects Built</p>
            <Counter target={2} suffix="+" />
          </div>
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border-glowing text-center">
            <p className="text-[10px] sm:text-xs font-bold tracking-widest text-emerald-400 uppercase mb-1">Certifications</p>
            <Counter target={4} suffix="+" />
          </div>
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border-glowing text-center">
            <p className="text-[10px] sm:text-xs font-bold tracking-widest text-amber-400 uppercase mb-1">Tech Skills</p>
            <Counter target={8} suffix="+" />
          </div>
        </div>

        {/* Header */}
        <div className="reveal mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
            Education &amp; Credentials
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl">
            My academic progression, professional certifications, and student leadership roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Vertical Timeline (8 Columns) */}
          <div className="lg:col-span-7 space-y-8 relative">
            <div className="flex items-center gap-2.5 mb-6 reveal">
              <GraduationCap className="w-5 h-5 text-[#00f0ff]" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Education Timeline</h3>
            </div>

            {/* Vertical Line */}
            <div className="absolute left-[15px] sm:left-[21px] top-14 bottom-4 w-[1px] bg-gradient-to-b from-[#00f0ff] via-[#a855f7] to-transparent pointer-events-none" />

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-10 sm:pl-14 reveal">
                  {/* Timeline Bullet Node */}
                  <span className="absolute left-[6px] sm:left-[12px] top-1.5 w-5 h-5 rounded-full border border-white/10 bg-zinc-950 flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                  </span>

                  <div className="glass-panel p-5 sm:p-6 rounded-2xl relative border-glowing">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00f0ff]">
                          {edu.degree}
                        </h4>
                        <p className="text-xs text-zinc-400 font-medium mt-0.5">{edu.institution}</p>
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff]">
                        {edu.score}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-2">
                      {edu.description}
                    </p>
                    <span className="text-[10px] text-zinc-500 font-mono block">
                      🗓️ {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications & Leadership (5 Columns) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Certifications Card Grid */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 mb-6 reveal">
                <Award className="w-5 h-5 text-[#a855f7]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Certifications</h3>
              </div>

              <div className="grid grid-cols-1 gap-3 reveal">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-4 rounded-xl flex items-center gap-3.5 border-glowing group hover:translate-x-1 transition-transform duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-zinc-950/60 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#a855f7]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{cert.title}</h4>
                      <p className="text-[10px] text-zinc-500 font-medium">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 mb-6 reveal">
                <Users className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Leadership Role</h3>
              </div>

              <div className="glass-panel p-5 sm:p-6 rounded-2xl border-glowing bg-gradient-to-br from-emerald-500/5 to-teal-500/5 reveal">
                <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                  Event Coordinator
                </h4>
                <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-4">
                  AI &amp; Data Science Club
                </p>
                
                <ul className="space-y-2.5">
                  <li className="text-xs text-zinc-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#10b981]" />
                    <span>Event Management &amp; Planning</span>
                  </li>
                  <li className="text-xs text-zinc-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#10b981]" />
                    <span>Registration Coordination</span>
                  </li>
                  <li className="text-xs text-zinc-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#10b981]" />
                    <span>Participant Engagement &amp; Logistics</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
