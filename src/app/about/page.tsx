import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Heart, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import Newsletter from '@/components/Newsletter';

export const metadata: Metadata = {
  title: 'About Us | Our Mission for Mental Wellness',
  description:
    'Learn about MentalHealthDay.org, our mission to champion brain health, and our 360-degree approach to mental wellness.',
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          About MentalHealthDay.org
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          We Believe Mental Health <br className="hidden sm:inline" />
          <span className="text-teal-700">Is Foundational Health</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
          We know that when the brain is healthy, people are happier, physically healthier, more resilient, and make better decisions. <strong>MentalHealthDay.org</strong> exists to create vibrant, healthy brains through science-backed education.
        </p>
      </section>

      {/* Mission Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-lg border border-teal-800/40">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-teal-300 font-semibold text-xs uppercase tracking-widest">
              Our Core Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              To Provide The Highest Quality Information & Resources Relating To Mental Health.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed pt-2">
              Here you’ll find a 360-degree approach to your wellness that weaves the mental, physical, spiritual, emotional, and environmental aspects of your mental well-being together.
            </p>
          </div>
        </div>
      </section>

      {/* 360 Degree Approach */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why We Take A 360° Approach
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Mental challenges rarely stem from a single source. They are deeply interconnected with sleep quality, somatic tension, thought patterns, emotional history, and community support.
            </p>
            <ul className="space-y-3 pt-2 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Evidence-Based:</strong> Synthesizing cognitive behavioral, somatic, and psychiatric research.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Actionable:</strong> Small, achievable daily practices that compound over time.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span><strong>Compassionate:</strong> Zero stigma, non-judgmental, inclusive mental wellness support.</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200 relative overflow-hidden">
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-600 text-white flex items-center justify-center mx-auto shadow-md">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">World Mental Health Day</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Observed annually on <strong>October 10</strong>, World Mental Health Day is an international day for global mental health education, awareness, and advocacy against social stigma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Review Board & E-E-A-T Standards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
            Editorial Rigor & E-E-A-T Standards
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            How We Ensure Clinical Accuracy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            In mental health, inaccurate information can cause real harm. Every guide, condition breakdown, and therapy review on MentalHealthDay.org adheres to strict clinical verification protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-base">
              1
            </div>
            <h3 className="font-bold text-base text-slate-900">DSM-5 & APA Alignment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Diagnostic criteria, symptom timelines, and therapy comparisons are strictly cross-referenced against DSM-5-TR standards and American Psychological Association guidelines.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-base">
              2
            </div>
            <h3 className="font-bold text-base text-slate-900">Peer-Reviewed Citations</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We prioritize randomized controlled trials (RCTs), systematic reviews (Cochrane, PubMed, JAMA Psychiatry), and academic research over anecdotal claims.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-base">
              3
            </div>
            <h3 className="font-bold text-base text-slate-900">Annual Fact-Check Cadence</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clinical protocols and therapy pricing (e.g. CPT billing codes, telehealth subscriptions) are re-evaluated annually to reflect current insurance and clinical realities.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </section>
    </div>
  );
}
