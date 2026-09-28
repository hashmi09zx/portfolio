"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { PORTFOLIO_USER } from "@/data/portfolioData";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);

    try {
      // Optional: Replace YOUR_WEB3FORMS_ACCESS_KEY with your free key from https://web3forms.com
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY",
          name,
          email,
          subject: subject || "New Contact Form Submission from Portfolio",
          message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        // Fallback: Open mailto link directly if API key is not configured
        const mailtoSubject = encodeURIComponent(subject || `Portfolio Contact from ${name}`);
        const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${PORTFOLIO_USER.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
        setSubmitted(true);
      }
    } catch {
      // Fallback: Open mailto client
      const mailtoSubject = encodeURIComponent(subject || `Portfolio Contact from ${name}`);
      const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:${PORTFOLIO_USER.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-3 mb-12">
          <span className="orange-badge text-xs inline-block">Contact & Collaboration</span>
          <h2 className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tight leading-none">
            LET&apos;S WORK <br />
            <span className="stroke-text">TOGETHER</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto sawad-card p-6 sm:p-10 bg-[#161616] border border-white/10 rounded-[32px] shadow-2xl">
          {submitted ? (
            <div className="bg-[#0D0D0D] border border-[#FF5722]/30 rounded-3xl p-8 text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <CheckCircle2 className="w-16 h-16 text-[#FF5722] mx-auto" />
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-[#9E9E9E] text-sm max-w-md mx-auto">
                Thank you for reaching out. I&apos;ve received your message and will respond promptly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline text-xs px-6 py-2.5 mt-2 cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#9E9E9E] uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-white/10 rounded-[18px] px-5 py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FF5722] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#9E9E9E] uppercase tracking-wider">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0D0D0D] border border-white/10 rounded-[18px] px-5 py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FF5722] transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#9E9E9E] uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject / Opportunity Title"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#0D0D0D] border border-white/10 rounded-[18px] px-5 py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FF5722] transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#9E9E9E] uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your Message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#0D0D0D] border border-white/10 rounded-[18px] px-5 py-4 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#FF5722] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FF5722] hover:bg-[#f4511e] text-white font-black text-sm uppercase tracking-wider py-4 rounded-[18px] transition-all duration-300 shadow-xl shadow-[#FF5722]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    SENDING...
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <span>SEND IT</span>
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </button>
            </form>
          )}

          {/* Quick Direct Contact Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/10 text-xs text-[#9E9E9E]">
            <a
              href={`mailto:${PORTFOLIO_USER.email}`}
              className="flex items-center gap-2 hover:text-[#FF5722] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#FF5722]" />
              <span className="truncate">{PORTFOLIO_USER.email}</span>
            </a>
            <a
              href={PORTFOLIO_USER.socials.phone}
              className="flex items-center gap-2 hover:text-[#FF5722] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FF5722]" />
              <span>{PORTFOLIO_USER.phone}</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF5722]" />
              <span>{PORTFOLIO_USER.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
