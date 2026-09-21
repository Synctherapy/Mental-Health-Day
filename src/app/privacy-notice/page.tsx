import React from 'react';
import type { Metadata } from 'next';
import { getPageBySlug } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description: 'Privacy notice and data protection policies for MentalHealthDay.org.',
};

export default function PrivacyPage() {
  const page = getPageBySlug('privacy-notice');

  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
        {page?.title || 'Privacy Notice'}
      </h1>
      <div
        className="prose-mental"
        dangerouslySetInnerHTML={{ __html: page?.content || '<p>Privacy policy loading...</p>' }}
      />
    </div>
  );
}
