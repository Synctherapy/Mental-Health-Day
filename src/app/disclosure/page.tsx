import React from 'react';
import type { Metadata } from 'next';
import { getPageBySlug } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Disclosure & Medical Disclaimer',
  description: 'Legal disclosure and medical disclaimer for MentalHealthDay.org.',
};

export default function DisclosurePage() {
  const page = getPageBySlug('disclosure');

  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
        {page?.title || 'Disclosure & Medical Disclaimer'}
      </h1>
      <div
        className="prose-mental"
        dangerouslySetInnerHTML={{ __html: page?.content || '<p>Disclaimer content loading...</p>' }}
      />
    </div>
  );
}
