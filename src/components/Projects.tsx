"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  highlights: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Smart Cities — Predictive Air Quality Management",
      description:
        "A web-based air quality management application that predicts key air pollutants using the SPAM model with 90%+ forecasting accuracy.",
      techStack: ["Java (JSP)", "HTML", "CSS", "JavaScript"],
      image: "/project_air_quality.png",
      highlights: [
        "Predicted 3+ key air pollutants with 90%+ forecasting accuracy using the SPAM model.",
        "Implemented user authentication and form validation, reducing invalid submissions by ~40%.",
        "Handled 10,000+ air quality records for real-time monitoring and smart city decision-making.",
      ],
    },
    {
      title: "Daily Travel Booking System",
      description:
        "A Python-based booking system using core data structures to manage travel records efficiently with modular, reusable functions.",
      techStack: ["Python", "Lists", "Dictionaries"],
      image: "/project_travel_booking.png",
      highlights: [
        "Managed 500+ booking records using Python lists and dictionaries.",
        "Designed modular, reusable functions to improve maintainability.",
        "Optimized processing time by 20% through efficient data handling.",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Projects
        </h2>
        <p className="text-zinc-500 text-base mb-12 max-w-xl">
          Some of the projects I&apos;ve built and worked on.
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
            >
              {/* Image */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                      <ArrowUpRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-zinc-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
