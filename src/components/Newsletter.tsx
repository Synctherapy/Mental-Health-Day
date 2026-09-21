'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="bg-[#181E19] text-white rounded-3xl p-8 sm:p-14 shadow-lg border border-[#2D372E] text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
          Subscribe To Our Newsletter
        </span>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Get The Latest Updates On Your Brain
        </h3>
        <p className="text-[#A0ACA0] text-base leading-relaxed">
          Let us show you how to get and keep a healthy brain. Receive our science-backed guides, research roundups, and practical daily habits.
        </p>

        {subscribed ? (
          <div className="bg-[#56B259]/20 border border-[#56B259] rounded-2xl p-6 text-white flex items-center justify-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#56B259] shrink-0" />
            <span className="font-semibold text-white">
              Thank you for subscribing! We look forward to sharing our latest mental wellness insights.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A8A7B]" />
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-[#202721] border border-[#2D372E] rounded-full text-white placeholder:text-[#7A8A7B] text-sm focus:outline-none focus:ring-2 focus:ring-[#56B259]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#56B259] hover:bg-[#479E4A] text-white font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-sm shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-[#7A8A7B] pt-2">
          No spam, ever. View our{' '}
          <a href="/privacy-notice" className="underline hover:text-white">
            Privacy Notice
          </a>.
        </p>
      </div>
    </section>
  );
}
