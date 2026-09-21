import React from 'react';
import Link from 'next/link';
import { PhoneCall, HeartHandshake } from 'lucide-react';

export default function CrisisBanner() {
  return (
    <aside aria-label="Crisis Support" className="bg-slate-900 text-white text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium text-slate-200">
            Need immediate help or someone to talk to?
          </span>
          <span className="hidden md:inline text-slate-400">
            Free, confidential, 24/7 support is available.
          </span>
        </div>
        <div className="flex items-center gap-3 font-semibold">
          <a
            href="tel:988"
            className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-500 text-white px-2.5 py-1 rounded-md transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call/Text 988</span>
          </a>
          <Link
            href="/tools#crisis-resources"
            className="text-slate-300 hover:text-white underline underline-offset-2 flex items-center gap-1"
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Crisis Lines</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
