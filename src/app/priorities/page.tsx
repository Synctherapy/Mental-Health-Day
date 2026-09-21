import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Heart, ArrowRight, ShieldCheck } from 'lucide-react';
import Newsletter from '@/components/Newsletter';

export const metadata: Metadata = {
  title: 'Our Priorities | Mental Health is Health',
  description:
    'Advocating for mental illness recognition on par with cardiovascular disease and cancer.',
};

export default function PrioritiesPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <Target className="w-3.5 h-3.5" />
          Our Advocacy & Focus
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          Mental Health Is Health.
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Many people don't see mental illness in the same way or even the same category as physical illness. We are working to permanently change that paradigm.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Elevating Brain Health To Global Parity
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We want to do for mental illness what others have done for heart disease, diabetes, and cancer. When someone experiences a cardiovascular event, society responds with care, medical intervention, and rehabilitation.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Brain and psychiatric challenges require the exact same dignity, scientific rigor, and community support.
            </p>
            <div className="pt-2">
              <blockquote className="border-l-4 border-teal-600 pl-4 py-1 italic text-slate-800 font-medium">
                "We want people to see mental health for what it really is—health."
                <footer className="text-xs text-slate-500 font-normal mt-1 not-italic">
                  — Daryl Stubbs, Creator of MentalHealthDay.org
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="md:col-span-5 relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
            <Image
              src="/wp-content/uploads/2020/08/woman-portrait-quote.png"
              alt="Mental Health is Health"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </section>
    </div>
  );
}
