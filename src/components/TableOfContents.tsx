'use client';

import React, { useState, useEffect } from 'react';
import { ListOrdered, ChevronRight } from 'lucide-react';
import { Heading } from '@/types';

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0% 0% -70% 0%' }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length < 2) return null;

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-8">
      <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-3">
        <ListOrdered className="w-4 h-4 text-teal-600" />
        <span>In This Article</span>
      </div>
      <nav className="space-y-1.5 text-sm">
        {headings.map((h, i) => (
          <a
            key={i}
            href={`#${h.slug}`}
            className={`block py-1 px-2 rounded-lg transition-colors leading-snug ${
              h.level === 3 ? 'pl-5 text-xs text-slate-500' : 'text-slate-700 font-medium'
            } ${
              activeId === h.slug
                ? 'bg-teal-100/70 text-teal-900 font-semibold'
                : 'hover:bg-slate-100 hover:text-teal-700'
            }`}
          >
            {h.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
