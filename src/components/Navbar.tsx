'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, Sparkles, PhoneCall, Calendar, Quote } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'WMHD Oct 10', href: '/world-mental-health-day' },
  { name: 'Quotes', href: '/mental-health-quotes' },
  { name: 'Activities', href: '/mental-health-activities' },
  { name: 'Statistics', href: '/statistics' },
  { name: 'Screening', href: '/screening' },
  { name: 'Helplines', href: '/helplines', highlight: true },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-sm border-b border-[#E8ECE8] shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-lg bg-[#56B259] flex items-center justify-center text-white overflow-hidden shadow-xs group-hover:scale-105 transition-transform">
              <Image 
                src="/logo.svg" 
                alt="Mental Health Day" 
                width={36} 
                height={36} 
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-[#181E19] tracking-tight leading-none group-hover:text-[#56B259] transition-colors">
                mentalhealthday.org
              </span>
              <span className="text-[11px] text-[#5F695F] font-medium tracking-wide">
                Small steps. Big leaps.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  link.highlight
                    ? 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-600 hover:text-white'
                    : 'text-[#181E19] hover:text-[#56B259] hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/helplines"
              className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>988 Lifeline</span>
            </Link>
            <Link
              href="/world-mental-health-day"
              className="inline-flex items-center gap-2 bg-[#56B259] hover:bg-[#479E4A] text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Oct 10 Kit</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              href="/helplines"
              className="p-2 text-rose-600 rounded-lg"
              aria-label="Helplines"
            >
              <PhoneCall className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#181E19] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E8ECE8] px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                link.highlight
                  ? 'bg-rose-50 text-rose-700 font-bold'
                  : 'text-[#181E19] hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <Link
              href="/helplines"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-rose-600 text-white font-bold py-3 rounded-full text-xs text-center"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Crisis 988</span>
            </Link>
            <Link
              href="/world-mental-health-day"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-[#56B259] text-white font-bold py-3 rounded-full text-xs text-center"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Oct 10 Kit</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
