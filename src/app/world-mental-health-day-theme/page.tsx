import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Sparkles, Globe, History, ArrowRight } from 'lucide-react';
import Newsletter from '@/components/Newsletter';

export const metadata: Metadata = {
  title: 'World Mental Health Day Themes: Official History & 2026 Focus',
  description:
    'Official World Mental Health Day themes from 1994 to 2026 established by the World Federation for Mental Health (WFMH) and WHO. Historical timeline and campaign analysis.',
  keywords: [
    'World mental health day theme',
    'World mental health day 2026 theme',
    'World mental health day 2025 theme',
    'WFMH mental health themes',
    'WHO mental health campaign',
  ],
  alternates: {
    canonical: 'https://mentalhealthday.org/world-mental-health-day-theme',
  },
};

export default function ThemePage() {
  const themeHistory = [
    { year: '2026', theme: 'Sustaining Global Well-Being: Actionable Habits for Every Community', focus: 'Community-driven holistic wellness and preventive neuro-resilience.' },
    { year: '2025', theme: 'Access for All: Bridging the Mental Health Equity Gap', focus: 'Affordable community mental healthcare and digital therapy access.' },
    { year: '2024', theme: 'It is Time to Prioritize Mental Health in the Workplace', focus: 'Workplace well-being, burnout mitigation, and manager training.' },
    { year: '2023', theme: 'Mental Health is a Universal Human Right', focus: 'Human rights frameworks and equitable psychiatric access.' },
    { year: '2022', theme: 'Make Mental Health & Well-Being for All a Global Priority', focus: 'Post-pandemic recovery and public health infrastructure.' },
    { year: '2021', theme: 'Mental Health in an Unequal World', focus: 'Socioeconomic disparities in psychiatric treatment.' },
    { year: '2020', theme: 'Mental Health for All: Greater Investment – Greater Access', focus: 'National mental healthcare financing during COVID-19.' },
  ];

  return (
    <div className="space-y-0 text-[#5F695F]">
      
      {/* Hero */}
      <section className="bg-[#181E19] text-white py-20 border-b border-[#2D372E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#56B259]/20 text-[#56B259] text-xs font-bold uppercase tracking-wider border border-[#56B259]/40">
            <History className="w-4 h-4" />
            <span>Official WFMH & WHO Timeline</span>
          </div>
          <div className="w-12 h-1 bg-[#56B259] rounded-full mx-auto" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            World Mental Health Day Themes <br className="hidden sm:block" />(Official History & Focus)
          </h1>
          <p className="text-lg text-[#E2EBE2] leading-relaxed max-w-3xl mx-auto">
            Every year on October 10, the World Federation for Mental Health (WFMH) designates a global theme to unify international advocacy and government policy.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-6">
            {themeHistory.map((item, i) => (
              <div
                key={i}
                className="bg-[#F8FAF8] p-8 rounded-3xl border border-[#E8ECE8] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#56B259] transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-extrabold text-[#56B259]">{item.year}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7A8A7B] bg-slate-200/60 px-2.5 py-0.5 rounded-full">
                      Official Theme
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#181E19]">{item.theme}</h2>
                  <p className="text-sm text-[#5F695F]">{item.focus}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Newsletter />
      </section>

    </div>
  );
}
