"use client";

import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Code, Globe, Terminal, BrainCircuit, Cpu, ShieldAlert } from "lucide-react";

interface SkillItem {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  items: SkillItem[];
}

export default function Skills() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const categories: SkillCategory[] = [
    {
      title: "Programming",
      icon: <Code className="w-5 h-5 text-[#00f0ff]" />,
      color: "from-[#00f0ff]/10 to-[#3b82f6]/5",
      items: [
        { name: "Java", percentage: 90 },
        { name: "Python", percentage: 85 },
        { name: "C", percentage: 75 },
      ],
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-5 h-5 text-[#a855f7]" />,
      color: "from-[#a855f7]/10 to-[#ec4899]/5",
      items: [
        { name: "HTML5", percentage: 90 },
        { name: "CSS3", percentage: 85 },
        { name: "JavaScript", percentage: 80 },
      ],
    },
    {
      title: "Tools & Systems",
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      color: "from-emerald-400/10 to-teal-500/5",
      items: [
        { name: "VS Code", percentage: 90 },
        { name: "GitHub", percentage: 85 },
      ],
    },
    {
      title: "Soft Skills",
      icon: <BrainCircuit className="w-5 h-5 text-amber-400" />,
      color: "from-amber-400/10 to-orange-500/5",
      items: [
        { name: "Problem Solving", percentage: 95 },
        { name: "Analytical Thinking", percentage: 90 },
        { name: "Communication", percentage: 85 },
        { name: "Teamwork", percentage: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 border-t border-white/5 relative overflow-hidden z-10"
    >
      {/* Floating Decorative Elements */}
      <div className="absolute top-1/3 left-5 w-24 h-24 pulse-glow-purple opacity-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-32 h-32 pulse-glow-cyan opacity-15 pointer-events-none" />
      
      {/* Floating Technology Icon Tags */}
      <div className="absolute top-10 right-[15%] opacity-10 animate-float pointer-events-none hidden md:block">
        <Cpu className="w-16 h-16 text-[#00f0ff]" />
      </div>
      <div className="absolute bottom-12 left-[12%] opacity-10 animate-float-delayed pointer-events-none hidden md:block">
        <ShieldAlert className="w-12 h-12 text-[#a855f7]" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
            Skills &amp; Expertise
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl">
            A breakdown of my technical strengths, development tools, and interpersonal qualities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-br ${cat.color} reveal border-glowing`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-zinc-950/60 border border-white/10 shadow-md">
                  {cat.icon}
                </div>
                <h3 className="text-base font-bold text-white tracking-wide uppercase">
                  {cat.title}
                </h3>
              </div>

              {/* Progress items */}
              <div className="space-y-5">
                {cat.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-400 font-mono">{skill.percentage}%</span>
                    </div>
                    {/* Progress Track */}
                    <div className="h-1.5 w-full bg-zinc-950/80 rounded-full overflow-hidden border border-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#3b82f6] transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.percentage}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
