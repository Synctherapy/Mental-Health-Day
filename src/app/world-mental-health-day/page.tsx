import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Sparkles, CheckCircle2, Download, Copy, Share2, Users, Building2, GraduationCap, ArrowRight } from 'lucide-react';
import Newsletter from '@/components/Newsletter';

export const metadata: Metadata = {
  title: 'World Mental Health Day (October 10): Official Guide, Theme & Workplace Kit',
  description:
    'Complete guide for World Mental Health Day observed annually on October 10. Official themes, workplace activities, school toolkits, email templates, and facts.',
};

export default function WorldMentalHealthDayPage() {
  return (
    <div className="space-y-0 text-[#5F695F]">
      
      {/* Hero Banner */}
      <section className="bg-[#181E19] text-white py-20 border-b border-[#2D372E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#56B259]/20 text-[#56B259] text-xs font-bold uppercase tracking-wider border border-[#56B259]/40">
            <Calendar className="w-4 h-4" />
            <span>Observed Annually on October 10</span>
          </div>
          <div className="w-12 h-1 bg-[#56B259] rounded-full mx-auto" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            World Mental Health Day: <br />
            The Complete Guide & Toolkit
          </h1>
          <p className="text-lg text-[#E2EBE2] leading-relaxed max-w-2xl mx-auto">
            World Mental Health Day is an international day for global mental health education, awareness, and advocacy against social stigma. Explore actionable activities for teams, schools, and individuals.
          </p>
        </div>
      </section>

      {/* What is WMHD Section */}
      <section className="py-20 bg-white border-b border-[#E8ECE8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
                Global Significance
              </span>
              <h2 className="text-3xl font-extrabold text-[#181E19]">
                Why October 10 Matters Every Year
              </h2>
              <p className="text-[#5F695F] leading-relaxed">
                First celebrated in 1992 by the World Federation for Mental Health (WFMH) and supported by the World Health Organization (WHO), World Mental Health Day provides an opportunity for all stakeholders working on mental health issues to talk about their work and what more needs to be done.
              </p>
              <p className="text-[#5F695F] leading-relaxed">
                Over <strong>1 in 8 people globally</strong> live with a diagnosed mental health condition. October 10 unites millions worldwide to champion mental health as a universal human right.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#F8FAF8] p-8 rounded-3xl border border-[#E8ECE8] space-y-4 text-center">
              <div className="w-16 h-16 rounded-full bg-[#EBF7EC] text-[#56B259] flex items-center justify-center mx-auto shadow-2xs font-extrabold text-2xl">
                10
              </div>
              <h3 className="text-xl font-bold text-[#181E19]">October 10th</h3>
              <p className="text-xs text-[#5F695F]">
                Mark your calendar. Host workshops, share stories, review corporate policies, and take small steps that lead to big leaps.
              </p>
              <div className="pt-2">
                <Link
                  href="/statistics"
                  className="text-xs font-bold text-[#56B259] hover:underline"
                >
                  View 2026 Mental Health Statistics &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Workplace Action Kit */}
      <section className="py-20 bg-[#F8FAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
              Organizational Toolkit
            </span>
            <div className="w-12 h-1 bg-[#56B259] rounded-full mx-auto" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181E19]">
              Workplace Mental Health Day Action Kit
            </h2>
            <p className="text-[#5F695F] text-base leading-relaxed">
              Plug-and-play resources designed for HR leaders, people managers, and team organizers to implement on October 10.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Activity 1 */}
            <div className="bg-white p-8 rounded-3xl border border-[#E8ECE8] space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF7EC] text-[#56B259] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#181E19]">
                1. "No Internal Meetings" Day
              </h3>
              <p className="text-sm text-[#5F695F] leading-relaxed">
                Designate October 10 as a meeting-free focus and reflection day. Allow employees time to decompress, catch up on deep work, and take mental breathers.
              </p>
            </div>

            {/* Activity 2 */}
            <div className="bg-white p-8 rounded-3xl border border-[#E8ECE8] space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF7EC] text-[#56B259] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#181E19]">
                2. Executive Listening Session
              </h3>
              <p className="text-sm text-[#5F695F] leading-relaxed">
                Host a transparent fireside chat where company leaders normalize mental health conversations and review employee assistance program (EAP) coverage.
              </p>
            </div>

            {/* Activity 3 */}
            <div className="bg-white p-8 rounded-3xl border border-[#E8ECE8] space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF7EC] text-[#56B259] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#181E19]">
                3. Wellness Stipend / Time Off
              </h3>
              <p className="text-sm text-[#5F695F] leading-relaxed">
                Provide a small wellness credit (for therapy apps, books, massage, fitness) or grant a half-day off dedicated entirely to self-care and family time.
              </p>
            </div>

          </div>

          {/* Copy-Paste HR Email Template */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E8ECE8] space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#56B259]">
                Click-To-Copy HR Email Announcement
              </span>
            </div>
            <div className="bg-[#181E19] text-[#E2EBE2] p-6 rounded-2xl font-mono text-xs leading-relaxed overflow-x-auto">
              <p className="text-slate-400">Subject: Recognizing World Mental Health Day (October 10) at [Company Name]</p>
              <br />
              <p>Hi Team,</p>
              <br />
              <p>Today is World Mental Health Day—an international reminder that our mental health is foundational health.</p>
              <br />
              <p>At [Company Name], we prioritize your well-being. Burnout and stress affect all of us, and asking for support is a sign of strength, not weakness.</p>
              <br />
              <p>Here are a few resources available to you starting today:</p>
              <p>1. Our Employee Assistance Program (EAP): [Insert link/phone]</p>
              <p>2. Mental Health Screening & Guides: https://mentalhealthday.org</p>
              <p>3. Immediate 24/7 confidential support: Call or Text 988 (USA/Canada)</p>
              <br />
              <p>Please take some dedicated time today to step away from screens, take a walk, and recharge.</p>
              <br />
              <p>Warmly,</p>
              <p>[Your Name / People Team]</p>
            </div>
          </div>

        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Newsletter />
      </section>

    </div>
  );
}
