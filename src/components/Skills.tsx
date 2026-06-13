"use client";

import React from "react";

interface Skill {
  name: string;
  level: "Proficient" | "Intermediate" | "Familiar";
}

interface SkillGroup {
  title: string;
  items: Skill[];
}

export default function Skills() {
  const groups: SkillGroup[] = [
    {
      title: "Programming Languages",
      items: [
        { name: "C", level: "Intermediate" },
        { name: "Python", level: "Proficient" },
        { name: "Java", level: "Proficient" },
      ],
    },
    {
      title: "Frontend Technologies",
      items: [
        { name: "HTML5", level: "Proficient" },
        { name: "CSS3", level: "Proficient" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "JSP", level: "Intermediate" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "VS Code", level: "Proficient" },
        { name: "GitHub", level: "Proficient" },
        { name: "Git", level: "Intermediate" },
      ],
    },
    {
      title: "Soft Skills",
      items: [
        { name: "Analytical Thinking", level: "Proficient" },
        { name: "Problem Solving", level: "Proficient" },
        { name: "Communication", level: "Proficient" },
      ],
    },
  ];

  const levelColor = (level: Skill["level"]) => {
    switch (level) {
      case "Proficient":
        return "bg-zinc-900 text-white";
      case "Intermediate":
        return "bg-zinc-100 text-zinc-700";
      case "Familiar":
        return "bg-white text-zinc-500 border border-zinc-200";
    }
  };

  return (
    <section id="about" className="py-24 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Skills
        </h2>
        <p className="text-zinc-500 text-base mb-12 max-w-xl">
          Technologies and tools I work with on a daily basis.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-block text-xs font-medium px-3 py-1.5 rounded-full ${levelColor(skill.level)}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
