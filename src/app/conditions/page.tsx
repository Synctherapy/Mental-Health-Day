import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Brain, HeartCrack, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { getPostsByCategory } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export const metadata: Metadata = {
  title: 'Mental Health Conditions & Treatment Directory',
  description:
    'Comprehensive evidence-based guides for Anxiety, Depression, Trauma, PTSD, and advanced therapies like EMDR and Ketamine.',
};

export default function ConditionsPage() {
  const anxietyPosts = getPostsByCategory('Anxiety').slice(0, 3);
  const depressionPosts = getPostsByCategory('Depression').slice(0, 3);

  const conditionHubs = [
    {
      id: 'anxiety',
      name: 'Anxiety Disorders',
      desc: 'Generalized anxiety (GAD), driving anxiety, panic attacks, cortisol regulation, and nervous system calming tools.',
      posts: anxietyPosts,
    },
    {
      id: 'depression',
      name: 'Depression & Mood',
      desc: 'Major depressive disorder, seasonal affective disorder, causes, clinical signs, and science-backed treatments.',
      posts: depressionPosts,
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <Brain className="w-3.5 h-3.5" />
          Conditions & Care Directory
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Understanding Mental Health Conditions
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          If you or someone you care about is experiencing behavioral, emotional, or psychiatric symptoms, explore our science-backed condition guides to understand causes, symptoms, and therapies.
        </p>
      </section>

      {/* Directory Hubs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {conditionHubs.map((hub) => (
          <div key={hub.id} id={hub.id} className="space-y-6 pt-6 scroll-mt-24 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {hub.name}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-1">
                  {hub.desc}
                </p>
              </div>
              <Link
                href={`/blog`}
                className="text-sm font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1"
              >
                <span>View all {hub.name} guides</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hub.posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Advanced Therapies Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest">
              Innovative & Trauma Therapies
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
              Explore Modern Therapeutic Approaches
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Read in-depth comparisons between evidence-based trauma modalities including Eye Movement Desensitization and Reprocessing (EMDR), Brainspotting, and Ketamine-assisted therapy.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/emdr-for-anxiety"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 text-sm font-medium border border-slate-700 transition-colors"
              >
                EMDR for Anxiety
              </Link>
              <Link
                href="/brainspotting-vs-emdr"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 text-sm font-medium border border-slate-700 transition-colors"
              >
                Brainspotting vs EMDR
              </Link>
              <Link
                href="/ketamine-for-anxiety"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 text-sm font-medium border border-slate-700 transition-colors"
              >
                Ketamine Therapy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
