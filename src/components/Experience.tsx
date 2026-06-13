"use client";

import React from "react";
import { GraduationCap, Award, Users } from "lucide-react";

export default function Experience() {
  const education = [
    {
      degree: "B.Tech — AI & Data Science",
      institution: "Sri Indu College of Engineering and Technology",
      period: "2022 – 2026",
      detail: "CGPA: 8.9",
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College",
      period: "2020 – 2022",
      detail: "Percentage: 95.7%",
    },
    {
      degree: "Secondary School (SSC)",
      institution: "Trinity High School",
      period: "2019 – 2020",
      detail: "Percentage: 100%",
    },
  ];

  const certifications = [
    "Deloitte — Data Analytics Job Simulation",
    "Simplilearn — Python Programming",
    "Tata GenAI — Powered Data Analytics Simulation",
    "Scaler — Java",
  ];

  return (
    <section id="education" className="py-24 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Education &amp; Certifications
        </h2>
        <p className="text-zinc-500 text-base mb-12 max-w-xl">
          My academic background and professional certifications.
        </p>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-zinc-400" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Education
            </h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border border-zinc-200 bg-zinc-50/50 hover:bg-zinc-50 transition-colors"
              >
                <div>
                  <h4 className="text-base font-semibold text-zinc-900">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-zinc-500 mt-0.5">{edu.institution}</p>
                </div>
                <div className="mt-2 sm:mt-0 flex items-center gap-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
                    {edu.detail}
                  </span>
                  <span className="text-xs text-zinc-400">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-zinc-400" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50"
              >
                <div className="w-2 h-2 rounded-full bg-zinc-900 flex-shrink-0" />
                <span className="text-sm text-zinc-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Position of Responsibility */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-zinc-400" />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Leadership
            </h3>
          </div>

          <div className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50/50">
            <h4 className="text-base font-semibold text-zinc-900 mb-1">
              Event Coordinator — AI &amp; Data Science Club
            </h4>
            <ul className="space-y-1.5 mt-3">
              <li className="text-sm text-zinc-600 flex items-start gap-2">
                <span className="text-zinc-400">•</span>
                Coordinated college-level events and activities.
              </li>
              <li className="text-sm text-zinc-600 flex items-start gap-2">
                <span className="text-zinc-400">•</span>
                Managed participants and registrations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
