'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, Sparkles, PhoneCall, Calendar } from 'lucide-react';
import SearchModal from '@/components/SearchModal';

const navLinks = [
  { name: 'WMHD (Oct 10)', href: '/world-mental-health-day' },
  { name: 'Conditions', href: '/conditions' },
  { name: 'PTO Email Tool', href: '/mental-health-day-off-email-generator', badge: 'Free Tool' },
  { name: 'Screening', href: '/screening' },
  { name: 'Activities', href: '/mental-health-activities' },
  { name: 'Quotes', href: '/mental-health-quotes' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/99 backdrop-blur-lg border-b border-slate-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#56B259] to-[#22C55E] flex items-center justify-center text-white overflow-hidden shadow-sm group-hover:scale-105 transition-transform p-1.5">
                <Image 
                  src="/brand-icon.svg" 
                  alt="Mental Health Day Logo" 
                  width={40} 
                  height={40} 
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="font-extrabold text-xl text-[#181E19] tracking-tight leading-tight flex items-center">
                  <span>mentalhealthday</span>
                  <span className="text-[#56B259]">.org</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium tracking-wide">
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
                  className="relative px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#56B259] hover:bg-slate-50 transition-all flex items-center gap-1.5"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 rounded-md">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions: Search + 988 Helpline CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search Trigger Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-500 bg-slate-100/80 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/60 transition-all cursor-pointer"
                aria-label="Search site"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span>Search</span>
                <kbd className="text-[10px] font-bold bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-400 shadow-2xs">
                  ⌘K
                </kbd>
              </button>

              <Link
                href="/helplines"
                className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>988 Crisis Lifeline</span>
              </Link>
            </div>

            {/* Mobile Menu & Search Buttons */}
            <div className="flex xl:hidden items-center gap-1.5">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 text-slate-600 hover:text-[#56B259] hover:bg-slate-100 rounded-xl"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/helplines"
                className="p-2.5 text-rose-600 hover:bg-rose-50 rounded-xl"
                aria-label="Crisis Helplines"
              >
                <PhoneCall className="w-5 h-5" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:text-[#56B259] hover:bg-slate-50 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-xs font-bold uppercase bg-emerald-100 text-emerald-800 rounded-md">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-800 font-bold py-3 rounded-xl text-sm"
              >
                <Search className="w-4 h-4 text-slate-500" />
                <span>Search Conditions & Guides</span>
              </button>
              <Link
                href="/helplines"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-rose-600 text-white font-bold py-3 rounded-xl text-sm shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call or Text 988 (24/7 Free & Confidential)</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
