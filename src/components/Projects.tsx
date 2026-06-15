"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  highlights: string[];
  iconText: string;
  iconColor: string;
}

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * 10; // Max 10 deg
    const rotateY = (x / (rect.width / 2)) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)" }}
    >
      {children}
    </div>
  );
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Smart Cities Impact on Predictive Air Quality Management",
      description:
        "An advanced smart city analytics and management system designed to forecast key air quality metrics with 90%+ accuracy to optimize city planning.",
      techStack: ["Java", "JSP", "HTML", "CSS", "JavaScript"],
      image: "/project_air_quality.png",
      highlights: [
        "Air Quality Prediction (SPAM Forecasting Model)",
        "Real-time Monitoring & Visualization",
        "Secure User Authentication & Verification",
        "10,000+ Air Quality Records Managed",
        "Smart City Environmental Analytics & Controls",
      ],
      iconText: "☕ Java",
      iconColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    },
    {
      title: "Daily Travel Booking System",
      description:
        "A travel management platform built with high performance in mind, using optimized data processing layouts and modular architectures.",
      techStack: ["Python", "Modular Logic", "Data Structures"],
      image: "/project_travel_booking.png",
      highlights: [
        "Efficient Travel Booking Management",
        "Highly Modular System Architecture",
        "Optimized Internal Data Processing (20% faster execution)",
        "Fully Reusable Python Core Functions",
      ],
      iconText: "🐍 Python",
      iconColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    },
  ];

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl">
            A showcase of selected academic and personal projects demonstrating full-stack, software design, and analytical skills.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="reveal">
              <TiltCard className="glass-panel p-6 sm:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-glowing relative group overflow-hidden">
                {/* Visual Glow behind card hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Floating technology icon */}
                <div className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full border flex items-center gap-1.5 shadow-md ${project.iconColor} animate-float`}>
                  {project.iconText}
                </div>

                {/* Image Section */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <ArrowUpRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#00f0ff]/70" />
                        <span className="font-medium">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
