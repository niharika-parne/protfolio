"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Mail, Phone, MapPin, Loader2 } from "lucide-react";

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API request delay
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    // Reset back to idle after a few seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="reveal mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl">
            Have an opportunity, a question, or just want to say hello? Leave a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Contact Information Cards (5 Columns) */}
          <div className="md:col-span-5 space-y-4 reveal">
            
            {/* Email Card */}
            <div className="glass-panel p-5 rounded-2xl flex items-start gap-4 border-glowing hover:translate-x-1 transition-transform duration-200">
              <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/20 flex items-center justify-center text-[#00f0ff] flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Email Me</p>
                <a
                  href="mailto:niharikaparne@gmail.com"
                  id="contact-email-link"
                  className="text-sm font-semibold text-white hover:text-[#00f0ff] transition-colors"
                >
                  niharikaparne@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-panel p-5 rounded-2xl flex items-start gap-4 border-glowing hover:translate-x-1 transition-transform duration-200">
              <div className="w-10 h-10 rounded-xl bg-[#a855f7]/10 border border-[#a855f7]/20 flex items-center justify-center text-[#a855f7] flex-shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/niharikaparne7644326"
                  target="_blank"
                  rel="noreferrer"
                  id="contact-linkedin-link"
                  className="text-sm font-semibold text-white hover:text-[#a855f7] transition-colors break-all"
                >
                  linkedin.com/in/niharikaparne7644326
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-2xl flex items-start gap-4 border-glowing hover:translate-x-1 transition-transform duration-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Call Me</p>
                <p id="contact-phone" className="text-sm font-semibold text-white">+91-9573913676</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-2xl flex items-start gap-4 border-glowing hover:translate-x-1 transition-transform duration-200">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Based In</p>
                <p id="contact-location" className="text-sm font-semibold text-white">Hyderabad, India</p>
              </div>
            </div>

          </div>

          {/* Right Side: Animated Contact Form (7 Columns) */}
          <div className="md:col-span-7 reveal">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border-glowing relative overflow-hidden bg-zinc-950/20">
              
              {status === "sent" ? (
                // Success message state
                <div className="flex flex-col items-center justify-center py-12 text-center animate-pulse">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                    <CheckCircle2 className="w-9 h-9 text-emerald-400 animate-bounce" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Message Received!</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm max-w-xs leading-relaxed">
                    Thank you for reaching out. Your message has been sent successfully. Niharika will get back to you shortly.
                  </p>
                </div>
              ) : (
                // Form entry state
                <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        disabled={status === "sending"}
                        className="w-full bg-zinc-950/40 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300 placeholder:text-zinc-600 disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        disabled={status === "sending"}
                        className="w-full bg-zinc-950/40 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300 placeholder:text-zinc-600 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                      Message Content
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Hi Niharika, I'd love to chat about..."
                      disabled={status === "sending"}
                      className="w-full bg-zinc-950/40 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white outline-none focus:border-[#00f0ff] focus:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300 placeholder:text-zinc-600 resize-none disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={status !== "idle"}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                  >
                    {status === "idle" && (
                      <>
                        Send Message
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                    {status === "sending" && (
                      <>
                        Sending Message
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
