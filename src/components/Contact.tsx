"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Contact
        </h2>
        <p className="text-zinc-500 text-base mb-12 max-w-xl">
          Have a question or want to work together? Drop me a message.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-1 text-zinc-400" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">Email</p>
                <a href="mailto:niharikaparne@gmail.com" className="text-sm text-zinc-900 hover:underline">
                  niharikaparne@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-1 text-zinc-400" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">Phone</p>
                <p className="text-sm text-zinc-900">+91-9573913676</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-zinc-400" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">Location</p>
                <p className="text-sm text-zinc-900">Hyderabad, India</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 mt-1 text-zinc-400" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/niharikaparne7644326"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-900 hover:underline"
                >
                  linkedin.com/in/niharikaparne7644326
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full border border-zinc-200 bg-white rounded-xl px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors placeholder:text-zinc-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full border border-zinc-200 bg-white rounded-xl px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors placeholder:text-zinc-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                className="w-full border border-zinc-200 bg-white rounded-xl px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors placeholder:text-zinc-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-700 transition-colors disabled:opacity-50"
            >
              {status === "idle" && (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
              {status === "sending" && "Sending..."}
              {status === "sent" && (
                <>
                  Sent <CheckCircle2 className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
