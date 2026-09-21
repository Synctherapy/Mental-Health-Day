import React from 'react';
import type { Metadata } from 'next';
import { Mail, MessageSquare, PhoneCall, HeartHandshake } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Mental Health Day',
  description:
    'Get in touch with the MentalHealthDay.org editorial team for questions, feedback, or collaborations.',
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          We Love Hearing From You
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          If you have a comment, question, or editorial suggestion to share, feel free to reach out using the form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-md space-y-4">
            <h3 className="font-bold text-xl text-white">Need Immediate Help?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              MentalHealthDay.org is an educational platform. We do not provide crisis intervention or individual clinical therapy.
            </p>
            <div className="pt-2">
              <a
                href="tel:988"
                className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call or Text 988 (24/7)</span>
              </a>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-3xl p-6 sm:p-8 space-y-3">
            <h4 className="font-bold text-teal-950 text-base">Editorial Guidelines</h4>
            <p className="text-xs text-teal-900/90 leading-relaxed">
              All health articles on MentalHealthDay.org are curated for accuracy, compassion, and practical relevance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
