'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, Sparkles, PhoneCall, ArrowRight, Activity, FileText } from 'lucide-react';
import postsData from '@/data/posts.json';
import { Post } from '@/types';

interface SearchItem {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  type: 'article' | 'tool' | 'condition' | 'crisis';
}

const staticSearchItems: SearchItem[] = [
  {
    title: 'Workplace Mental Health Day-Off Email Generator',
    slug: 'mental-health-day-off-email-generator',
    category: 'Interactive Tool',
    excerpt: 'Generate a professional, guilt-free PTO request email for mental health rest days in 10 seconds.',
    type: 'tool'
  },
  {
    title: 'Free Mental Health Self-Screening Assessment',
    slug: 'screening',
    category: 'Assessment',
    excerpt: 'Confidential clinically-informed self-check assessment for anxiety, stress, and mood symptoms.',
    type: 'tool'
  },
  {
    title: '24/7 Crisis Lifelines & Helplines (988)',
    slug: 'helplines',
    category: 'Emergency & Crisis',
    excerpt: 'Immediate, free, confidential support from suicide prevention and mental health crisis counselors.',
    type: 'crisis'
  },
  {
    title: 'World Mental Health Day 2026 (Oct 10 Event Hub)',
    slug: 'world-mental-health-day',
    category: 'Global Awareness',
    excerpt: 'Complete guide, history, toolkits, and participation ideas for World Mental Health Day.',
    type: 'tool'
  },
  {
    title: '50+ Calming Mental Health Activities for Schools & Workplaces',
    slug: 'mental-health-activities',
    category: 'Activities & Toolkits',
    excerpt: 'Practical, evidence-backed mindfulness and wellness exercises for teams and individuals.',
    type: 'tool'
  },
  {
    title: 'Inspirational Mental Health Quotes for Tough Days',
    slug: 'mental-health-quotes',
    category: 'Mindfulness & Hope',
    excerpt: 'Curated uplifting quotes for healing, resilience, and self-compassion.',
    type: 'tool'
  },
  {
    title: 'Global Mental Health Statistics & Facts',
    slug: 'statistics',
    category: 'Clinical Data',
    excerpt: 'Verified WHO and APA epidemiological data on depression, anxiety, and workplace burnout.',
    type: 'condition'
  },
  {
    title: 'Mental Health Conditions & Disorders Guide',
    slug: 'conditions',
    category: 'Clinical Overview',
    excerpt: 'Comprehensive diagnostic and symptom guide for anxiety, depression, trauma, and ADHD.',
    type: 'condition'
  },
  {
    title: 'BetterHelp Clinical Review & Pricing (2026)',
    slug: 'betterhelp',
    category: 'Therapy Platforms',
    excerpt: 'Honest review of BetterHelp features, cost, therapist matching, and insurance alternatives.',
    type: 'article'
  }
];

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const postItems: SearchItem[] = (postsData as unknown as Post[]).map((p) => ({
    title: p.title,
    slug: p.slug,
    category: p.category || 'Article',
    excerpt: p.excerpt || '',
    type: 'article'
  }));

  const allItems = [...staticSearchItems, ...postItems.filter(p => !staticSearchItems.some(s => s.slug === p.slug))];

  const filtered = query.trim() === '' 
    ? allItems.slice(0, 7)
    : allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex items-start justify-center">
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        <div className="relative flex items-center border-b border-slate-200 px-4">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search conditions, therapy (EMDR, CBT), tools, PTO generator..."
            className="w-full py-4 pl-3 pr-10 text-slate-900 placeholder-slate-400 bg-transparent text-base focus:outline-none"
          />
          {query ? (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block text-[11px] font-semibold text-slate-400 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
              ESC
            </kbd>
          )}
        </div>

        {query.trim() === '' && (
          <div className="px-4 py-3 bg-slate-50 border-b border-slate-100 flex flex-wrap gap-2 text-xs">
            <span className="text-slate-500 font-medium py-1">Popular:</span>
            {['EMDR Therapy', 'BetterHelp', 'Workplace PTO', 'Anxiety', 'Depression', '988 Helpline'].map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-[#56B259] hover:text-[#56B259] transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        )}

        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-100">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <p className="font-semibold text-base">No results found for "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for anxiety, trauma, EMDR, email generator, or screening.</p>
            </div>
          ) : (
            filtered.map((item) => {
              const bgClass =
                item.type === 'tool'
                  ? 'bg-emerald-50 text-[#56B259]'
                  : item.type === 'crisis'
                  ? 'bg-rose-50 text-rose-600'
                  : item.type === 'condition'
                  ? 'bg-blue-50 text-blue-600'
                  : 'bg-slate-100 text-slate-600';

              return (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  onClick={onClose}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 group transition-colors"
                >
                  <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${bgClass}`}>
                    {item.type === 'tool' ? (
                      <Sparkles className="w-4 h-4" />
                    ) : item.type === 'crisis' ? (
                      <PhoneCall className="w-4 h-4" />
                    ) : item.type === 'condition' ? (
                      <Activity className="w-4 h-4" />
                    ) : (
                      <FileText className="w-4 h-4" />
                    )}
                  </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#56B259] transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {item.excerpt}
                  </p>
                </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#56B259] group-hover:translate-x-1 transition-all shrink-0 self-center" />
                </Link>
              );
            })
          )}
        </div>

        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>{filtered.length} resources available</span>
          <span className="flex items-center gap-1">
            Need urgent help? Call <strong className="text-rose-600">988</strong>
          </span>
        </div>

      </div>
    </div>
  );
}
