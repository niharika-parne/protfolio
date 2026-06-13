"use client";

import React from "react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16"
    >
      <div className="max-w-5xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight mb-6">
              Hello! I&apos;m Niharika, an{" "}
              <span className="bg-purple-100 px-1 rounded">AI &amp; Data Science</span>{" "}
              engineer based in India.
            </h1>

            <p className="text-zinc-500 text-base leading-relaxed mb-3">
              I build data-driven applications that are{" "}
              <span className="underline decoration-wavy decoration-zinc-300 underline-offset-4">user-friendly</span>,{" "}
              <span className="underline decoration-wavy decoration-zinc-300 underline-offset-4">efficient</span> and{" "}
              <span className="bg-yellow-100 px-1 rounded">impactful</span>.
            </p>

            <p className="text-zinc-500 text-base leading-relaxed mb-3">
              I&apos;m a B.Tech student in AI &amp; Data Science at Sri Indu College of Engineering and Technology with a CGPA of 8.9. I have strong problem-solving skills and a passion for turning complex data into meaningful solutions.
            </p>

            <p className="text-zinc-500 text-base leading-relaxed mb-3">
              Through my projects, I&apos;ve worked with Java, Python, HTML, CSS, and JavaScript — building everything from smart city air quality systems to booking platforms.
            </p>

            <p className="text-zinc-900 font-medium text-base mb-8">
              I&apos;m currently looking for opportunities as a developer. Hire me?
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/niharikaparne7644326"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-700 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                View LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-300 text-zinc-900 text-sm font-medium rounded-full hover:bg-zinc-50 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                View GitHub
              </a>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-zinc-100 border border-zinc-200 flex items-center justify-center overflow-hidden">
              <div className="text-center p-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-zinc-200 flex items-center justify-center">
                  <span className="text-3xl font-bold text-zinc-400">NP</span>
                </div>
                <p className="text-sm font-semibold text-zinc-700">Niharika Parne</p>
                <p className="text-xs text-zinc-400 mt-1">AI &amp; Data Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
