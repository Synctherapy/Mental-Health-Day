import React from 'react';
import type { Metadata } from 'next';
import { getPageBySlug } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and conditions of use for MentalHealthDay.org.',
};

export default function TermsPage() {
  const page = getPageBySlug('terms-and-conditions');

  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
        {page?.title || 'Terms and Conditions'}
      </h1>
      <div
        className="prose-mental"
        dangerouslySetInnerHTML={{ __html: page?.content || '<p>Terms loading...</p>' }}
      />
    </div>
  );
}
