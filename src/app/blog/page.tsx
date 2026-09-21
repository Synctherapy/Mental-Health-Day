import React from 'react';
import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { getAllPosts, getAllCategories } from '@/lib/posts';
import BlogFilter from '@/components/BlogFilter';
import Newsletter from '@/components/Newsletter';

export const metadata: Metadata = {
  title: 'Mental Health Blog | Science-Backed Wellness Articles',
  description:
    'Read articles, recovery tips, and clinical guides on anxiety, depression, trauma release, EMDR, and holistic mental health.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="py-12 sm:py-16 space-y-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          Mental Health Articles & Guides
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Evidence-Based Mental Wellness
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Keeping your brain healthy involves habits that nourish the whole person. Browse our comprehensive library of articles and practical guides.
        </p>
      </div>

      {/* Filter and Posts */}
      <BlogFilter posts={posts} categories={categories} />

      {/* Newsletter */}
      <div className="pt-8">
        <Newsletter />
      </div>
    </div>
  );
}
