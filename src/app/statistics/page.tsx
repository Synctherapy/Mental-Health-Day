import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Brain, 
  CheckCircle2, 
  Copy, 
  ShieldAlert, 
  Sparkles, 
  Building2, 
  GraduationCap, 
  HeartHandshake,
  ArrowRight,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import Newsletter from '@/components/Newsletter';

export const metadata: Metadata = {
  title: 'Mental Health Statistics & Facts (2026 Edition): Global & North American Research Data',
  description:
    'Comprehensive 2026 research report on mental health statistics. Data on anxiety prevalence, depression rates, youth mental wellness, workplace burnout costs, and 988 lifeline outcomes with citations.',
  keywords: [
    'Mental health statistics 2026',
    'Depression statistics',
    'Anxiety disorder prevalence',
    'Workplace mental health costs',
    'Youth mental health facts',
    '988 Lifeline statistics',
    'World mental health data',
  ],
  alternates: {
    canonical: 'https://mentalhealthday.org/statistics',
  },
  openGraph: {
    title: 'Mental Health Statistics & Facts (2026 Edition) | MentalHealthDay.org',
    description: 'Verified 2026 research data, global prevalence rates, workplace economic impact, and citable statistics.',
    url: 'https://mentalhealthday.org/statistics',
    type: 'article',
  },
};

export default function StatisticsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Mental Health Statistics and Prevalence Report (2026 Edition)',
    description: 'Comprehensive epidemiological data on mental health disorders, workplace economics, youth trends, and suicide prevention outcomes.',
    url: 'https://mentalhealthday.org/statistics',
    creator: {
      '@type': 'Organization',
      name: 'Mental Health Day Editorial Team',
      url: 'https://mentalhealthday.org/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mental Health Day',
      url: 'https://mentalhealthday.org',
    },
    temporalCoverage: '2024/2026',
    spatialCoverage: 'Global, United States, Canada',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What percentage of people experience a mental health condition?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Approximately 1 in 5 adults in the United States and Canada (over 50 million people) experience a diagnosed mental illness each year. Globally, the World Health Organization estimates that 1 in 8 people live with a mental disorder.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the most common mental health disorder?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Anxiety disorders are the most common mental health condition globally and in North America, affecting over 301 million people worldwide and 31.1% of US adults at some point during their lifetime.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the economic cost of untreated mental health in the workplace?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The World Health Organization (WHO) and World Bank estimate that depression and anxiety cost the global economy $1 trillion per year in lost productivity, equivalent to roughly 12 billion working days lost annually.',
        },
      },
    ],
  };

  const statCategories = [
    {
      category: 'Global & General Prevalence',
      stats: [
        {
          metric: '1 in 8',
          title: 'Global Population Affected',
          details: 'Over 970 million people worldwide live with a diagnosed mental disorder, with anxiety and depressive disorders being the most prevalent.',
          source: 'World Health Organization (WHO)',
          sourceUrl: 'https://www.who.int',
        },
        {
          metric: '1 in 5',
          title: 'North American Adults Annually',
          details: '22.8% of US adults (57.8 million) and 20.1% of Canadian adults experience a mental illness in any given year.',
          source: 'NAMI & Mental Health Commission of Canada',
          sourceUrl: 'https://www.nami.org',
        },
        {
          metric: '1 in 20',
          title: 'Serious Mental Illness (SMI)',
          details: '5.5% of adults (14.1 million in the US) live with a serious mental illness that substantially impairs or limits major life activities (e.g., Schizophrenia, Bipolar I).',
          source: 'NIMH (National Institute of Mental Health)',
          sourceUrl: 'https://www.nimh.nih.gov',
        },
        {
          metric: '11 Years',
          title: 'Average Delay in Seeking Treatment',
          details: 'The average delay between the initial onset of mental health symptoms and receiving medical or psychiatric intervention is over a decade.',
          source: 'American Psychological Association (APA)',
          sourceUrl: 'https://www.apa.org',
        },
      ],
    },
    {
      category: 'Anxiety & Stress Disorders',
      stats: [
        {
          metric: '301M',
          title: 'Global Anxiety Prevalence',
          details: '301 million people live with an anxiety disorder worldwide, making anxiety the single most widespread psychiatric classification on Earth.',
          source: 'Global Burden of Disease Study (Lancet)',
          sourceUrl: 'https://www.thelancet.com',
        },
        {
          metric: '31.1%',
          title: 'Lifetime US Adult Experience',
          details: 'Nearly one-third of US adults (over 40 million individuals) will experience an anxiety disorder (GAD, Panic Disorder, Social Anxiety, Specific Phobias) in their lifetime.',
          source: 'National Institute of Mental Health (NIMH)',
          sourceUrl: 'https://www.nimh.nih.gov',
        },
        {
          metric: '36.9%',
          title: 'Treatment Rate for Anxiety',
          details: 'Despite being highly treatable through evidence-based methods like CBT, EMDR, and medications, only 36.9% of people with anxiety disorders receive care.',
          source: 'Anxiety & Depression Association of America (ADAA)',
          sourceUrl: 'https://adaa.org',
        },
      ],
    },
    {
      category: 'Depression & Mood Disorders',
      stats: [
        {
          metric: '280M',
          title: 'Living with Clinical Depression',
          details: 'An estimated 3.8% of the global population suffers from depression, including 5.0% of adults and 5.7% of adults aged 60+.',
          source: 'World Health Organization (WHO)',
          sourceUrl: 'https://www.who.int',
        },
        {
          metric: '21.0M',
          title: 'US Adults with Major Depressive Episode',
          details: '8.3% of all US adults had at least one major depressive episode in the past 12 months, with highest prevalence among individuals aged 18–25 (18.6%).',
          source: 'SAMHSA National Survey on Drug Use and Health',
          sourceUrl: 'https://www.samhsa.gov',
        },
        {
          metric: '30%–35%',
          title: 'Treatment-Resistant Depression (TRD)',
          details: 'Approximately one-third of patients with major depressive disorder do not achieve remission after two or more adequate antidepressant trials.',
          source: 'Journal of Clinical Psychiatry',
          sourceUrl: 'https://www.psychiatrist.com',
        },
      ],
    },
    {
      category: 'Youth & Young Adults (Ages 12–25)',
      stats: [
        {
          metric: '50%',
          title: 'Onset by Age 14',
          details: 'Half of all lifetime mental illnesses begin by age 14, and 75% develop by age 24, underscoring early intervention as critical.',
          source: 'World Health Organization (WHO)',
          sourceUrl: 'https://www.who.int',
        },
        {
          metric: '42%',
          title: 'High Schoolers with Persistent Sadness',
          details: '42% of high school students report experiencing persistent feelings of sadness or hopelessness, a 40% increase over the past decade.',
          source: 'CDC Youth Risk Behavior Survey (YRBS)',
          sourceUrl: 'https://www.cdc.gov',
        },
        {
          metric: '60%',
          title: 'College Students Meeting Criteria',
          details: 'Over 60% of college students meet criteria for at least one mental health problem, primarily anxiety, depression, and academic burnout.',
          source: 'Healthy Minds Study',
          sourceUrl: 'https://healthymindsnetwork.org',
        },
      ],
    },
    {
      category: 'Workplace Mental Health & Economics',
      stats: [
        {
          metric: '$1 Trillion',
          title: 'Annual Global Cost of Lost Productivity',
          details: 'Depression and anxiety result in 12 billion lost working days each year, costing the global economy $1,000,000,000,000 annually.',
          source: 'WHO & International Labour Organization (ILO)',
          sourceUrl: 'https://www.ilo.org',
        },
        {
          metric: '4:1 ROI',
          title: 'Return on Workplace Wellness Investment',
          details: 'For every $1 USD invested in scaled treatment for common mental health disorders, there is a return of $4 in improved health and employee productivity.',
          source: 'World Health Organization (Lancet Psychiatry)',
          sourceUrl: 'https://www.who.int',
        },
        {
          metric: '77%',
          title: 'Workers Experiencing Work Burnout',
          details: '77% of employees report experiencing burnout at their current jobs, with over half citing unmanageable workloads and lack of communication.',
          source: 'Deloitte Workplace Well-Being Report',
          sourceUrl: 'https://www.deloitte.com',
        },
      ],
    },
    {
      category: 'Suicide Prevention & Crisis Intervention',
      stats: [
        {
          metric: '700,000+',
          title: 'Global Lives Lost to Suicide Annually',
          details: 'More than 700,000 people die by suicide every year worldwide—one death every 40 seconds. Suicide is the 4th leading cause of death among 15–29 year olds.',
          source: 'World Health Organization (WHO)',
          sourceUrl: 'https://www.who.int',
        },
        {
          metric: '10M+',
          title: 'Contacts Handled by 988 Lifeline',
          details: 'Since the launch of the 988 dialing code in North America, trained counselors have responded to over 10 million calls, texts, and chats.',
          source: 'SAMHSA 988 Performance Metrics',
          sourceUrl: 'https://www.samhsa.gov',
        },
        {
          metric: '98%',
          title: 'De-escalation Without Emergency Dispatch',
          details: 'Over 98% of people who call the 988 Lifeline get the support they need during the conversation without requiring 911 dispatch or armed emergency response.',
          source: 'Vibrant Emotional Health',
          sourceUrl: 'https://www.vibrant.org',
        },
      ],
    },
  ];

  return (
    <div className="space-y-0 text-[#5F695F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-[#181E19] text-white py-20 border-b border-[#2D372E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#56B259]/20 text-[#56B259] text-xs font-bold uppercase tracking-wider border border-[#56B259]/40">
            <BarChart3 className="w-4 h-4" />
            <span>2026 Authoritative Research Report</span>
          </div>
          <div className="w-12 h-1 bg-[#56B259] rounded-full mx-auto" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Mental Health Statistics & Facts <br className="hidden sm:block" />(2026 Edition)
          </h1>
          <p className="text-lg text-[#E2EBE2] leading-relaxed max-w-3xl mx-auto">
            A comprehensive, verified data compilation covering global prevalence rates, youth trends, workplace economic impacts, and 988 crisis intervention outcomes.
          </p>
          <div className="pt-2 text-xs text-[#A0ACA0] flex items-center justify-center gap-2">
            <span>Last Updated: January 2026</span>
            <span>•</span>
            <span>Reviewed by: MentalHealthDay.org Editorial Board</span>
          </div>
        </div>
      </section>

      {/* Quick Stat Highlights */}
      <section className="py-12 bg-white border-b border-[#E8ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-[#E8ECE8] text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#56B259] block">1 in 5</span>
              <span className="text-xs font-bold text-[#181E19] uppercase tracking-wider mt-1 block">North American Adults</span>
              <span className="text-[11px] text-[#7A8A7B]">Experience mental illness yearly</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-[#E8ECE8] text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#56B259] block">301M</span>
              <span className="text-xs font-bold text-[#181E19] uppercase tracking-wider mt-1 block">Global Anxiety Cases</span>
              <span className="text-[11px] text-[#7A8A7B]">World's most common disorder</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-[#E8ECE8] text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#56B259] block">$1T</span>
              <span className="text-xs font-bold text-[#181E19] uppercase tracking-wider mt-1 block">Annual Workplace Loss</span>
              <span className="text-[11px] text-[#7A8A7B]">12B working days lost / year</span>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-[#E8ECE8] text-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#56B259] block">4:1</span>
              <span className="text-xs font-bold text-[#181E19] uppercase tracking-wider mt-1 block">Treatment ROI</span>
              <span className="text-[11px] text-[#7A8A7B]">$4 return for every $1 invested</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Breakdown by Categories */}
      <section className="py-20 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {statCategories.map((group, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#56B259] text-white flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#181E19]">
                  {group.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.stats.map((item, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-white p-8 rounded-3xl border border-[#E8ECE8] shadow-2xs hover:shadow-md hover:border-[#56B259] transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-[#56B259] tracking-tight block">
                        {item.metric}
                      </span>
                      <h3 className="text-lg font-bold text-[#181E19] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#5F695F] leading-relaxed">
                        {item.details}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E8ECE8] flex items-center justify-between text-xs text-[#7A8A7B]">
                      <span>Source: <strong className="text-[#181E19]">{item.source}</strong></span>
                      {item.sourceUrl && (
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#56B259]"
                          aria-label={`Source for ${item.title}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Media & Research Citation Box */}
      <section className="py-16 bg-white border-y border-[#E8ECE8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
              Media & Academic Attribution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#181E19]">
              How to Cite These Mental Health Statistics
            </h2>
            <p className="text-sm text-[#5F695F]">
              If you are referencing this research report in academic papers, press articles, company presentations, or blog posts, please use the standard citations below:
            </p>
          </div>

          <div className="bg-[#181E19] text-white p-8 rounded-3xl border border-[#2D372E] space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#56B259]">
                APA Format (7th Edition)
              </span>
              <div className="bg-[#202721] p-4 rounded-xl font-mono text-xs text-[#E2EBE2] border border-[#2D372E] select-all leading-relaxed">
                Mental Health Day Editorial Team. (2026). Mental Health Statistics and Facts: 2026 Global & North American Research Report. MentalHealthDay.org. https://mentalhealthday.org/statistics
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#56B259]">
                Web / HTML Markdown Link
              </span>
              <div className="bg-[#202721] p-4 rounded-xl font-mono text-xs text-[#E2EBE2] border border-[#2D372E] select-all leading-relaxed">
                &lt;a href="https://mentalhealthday.org/statistics"&gt;2026 Mental Health Statistics Report&lt;/a&gt; by MentalHealthDay.org
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Navigation & Related Hubs */}
      <section className="py-16 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-[#181E19]">Explore Related Mental Health Resources</h3>
            <p className="text-sm text-[#5F695F]">Take action with clinically validated screeners and event toolkits.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/screening"
              className="p-6 rounded-3xl bg-white border border-[#E8ECE8] hover:border-[#56B259] hover:shadow-md transition-all group"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#56B259]">Interactive Assessment</span>
              <h4 className="text-lg font-bold text-[#181E19] group-hover:text-[#56B259] mt-1 mb-2">
                PHQ-9 & GAD-7 Clinical Screeners &rarr;
              </h4>
              <p className="text-xs text-[#5F695F]">
                Take free, private, evidence-based questionnaires for depression and anxiety with doctor-printable scoring.
              </p>
            </Link>

            <Link
              href="/world-mental-health-day"
              className="p-6 rounded-3xl bg-white border border-[#E8ECE8] hover:border-[#56B259] hover:shadow-md transition-all group"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#56B259]">Event Toolkit</span>
              <h4 className="text-lg font-bold text-[#181E19] group-hover:text-[#56B259] mt-1 mb-2">
                World Mental Health Day (Oct 10) &rarr;
              </h4>
              <p className="text-xs text-[#5F695F]">
                Access the complete guide, workplace action kit, and click-to-copy executive email announcements.
              </p>
            </Link>

            <Link
              href="/helplines"
              className="p-6 rounded-3xl bg-white border border-[#E8ECE8] hover:border-rose-500 hover:shadow-md transition-all group"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Crisis Directory</span>
              <h4 className="text-lg font-bold text-[#181E19] group-hover:text-rose-600 mt-1 mb-2">
                North American Helplines &rarr;
              </h4>
              <p className="text-xs text-[#5F695F]">
                24/7 free and confidential crisis phone and text lines for the United States and Canada (988).
              </p>
            </Link>
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
