import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowRight,
  ListTree,
  PhoneCall,
  Printer
} from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const cleanTitle = post.title;

  return {
    title: cleanTitle,
    description: post.excerpt,
    authors: [{ name: post.author, url: 'https://mentalhealthday.org/about' }],
    alternates: {
      canonical: `https://mentalhealthday.org/${post.slug}`,
    },
    openGraph: {
      title: cleanTitle,
      description: post.excerpt,
      url: `https://mentalhealthday.org/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modifiedDate || post.date,
      authors: [post.author],
      images: [
        {
          url: post.image || '/logo.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: cleanTitle,
      description: post.excerpt,
      images: [post.image || '/logo.png'],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.category === 'Mental Health'))
    .slice(0, 3);

  const fallbackRelated = relatedPosts.length === 0 ? allPosts.filter(p => p.slug !== post.slug).slice(0, 3) : relatedPosts;

  // Schema.org MedicalWebPage & Article JSON-LD
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: post.title,
    headline: post.title,
    description: post.excerpt,
    url: `https://mentalhealthday.org/${post.slug}`,
    image: `https://mentalhealthday.org${post.image || '/logo.png'}`,
    datePublished: post.date,
    dateModified: post.modifiedDate || post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: 'https://mentalhealthday.org/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mental Health Day',
      url: 'https://mentalhealthday.org',
      sameAs: [
        'https://www.wikidata.org/wiki/Q1786581',
        'https://en.wikipedia.org/wiki/World_Mental_Health_Day'
      ],
      logo: {
        '@type': 'ImageObject',
        url: 'https://mentalhealthday.org/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://mentalhealthday.org/${post.slug}`,
    },
    about: post.slug.includes('emdr')
      ? {
          '@type': 'MedicalTherapy',
          name: 'Eye Movement Desensitization and Reprocessing',
          sameAs: 'https://www.wikidata.org/wiki/Q333333',
        }
      : post.slug.includes('depression')
      ? {
          '@type': 'MedicalCondition',
          name: 'Major Depressive Disorder',
          sameAs: 'https://www.wikidata.org/wiki/Q42844',
        }
      : post.slug.includes('anxiety')
      ? {
          '@type': 'MedicalCondition',
          name: 'Anxiety Disorder',
          sameAs: 'https://www.wikidata.org/wiki/Q171018',
        }
      : {
          '@type': 'Thing',
          name: post.category,
          sameAs: 'https://www.wikidata.org/wiki/Q202450',
        },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mentalhealthday.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://mentalhealthday.org/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://mentalhealthday.org/${post.slug}`,
      },
    ],
  };

  return (
    <article className="space-y-0 text-[#5F695F] bg-[#F8FAF8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ARTICLE HEADER (Dark Forest #181E19 with E-E-A-T Badges) */}
      <header className="bg-[#181E19] text-white pt-16 pb-20 border-b border-[#2D372E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Breadcrumb navigation */}
          <nav className="flex items-center gap-2 text-xs text-[#A0ACA0] font-medium" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#56B259] truncate">{post.category}</span>
          </nav>

          {/* Category Pill */}
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#56B259] text-white shadow-xs">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-[#56B259] font-semibold bg-[#56B259]/10 px-3 py-1 rounded-full border border-[#56B259]/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Clinically Reviewed [2026]</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Author, Date & Reading Time Metadata */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#A0ACA0] border-t border-[#2D372E]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#242D25] text-[#56B259] flex items-center justify-center font-bold text-xs border border-[#2D372E]">
                <User className="w-3.5 h-3.5" />
              </div>
              <span className="text-white font-medium">{post.author}</span>
            </div>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          </div>

        </div>
      </header>

      {/* MAIN CONTENT AREA WITH SIDEBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Body (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Featured Image */}
            {post.image && (
              <div className="relative h-72 sm:h-[440px] w-full rounded-3xl overflow-hidden shadow-md border border-[#E8ECE8] bg-slate-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            )}

            {/* TOP-OF-FOLD INTENT SATISFACTION / KEY TAKEAWAYS BOX (David Quaid 0% Fluff Rule) */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#56B259]/30 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#181E19] font-bold text-base">
                <Sparkles className="w-5 h-5 text-[#56B259]" />
                <span>Executive Summary & Clinical Takeaways:</span>
              </div>
              <p className="text-sm text-[#5F695F] leading-relaxed">
                {post.excerpt}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#7A8A7B]">
                <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#56B259]" />
                  <span>Evidence-Based</span>
                </span>
                <span className="flex items-center gap-1 text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>5-10 Min Read</span>
                </span>
                <span className="flex items-center gap-1 text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#56B259]" />
                  <span>Updated for 2026</span>
                </span>
              </div>
            </div>

            {/* MOBILE TABLE OF CONTENTS (if headings exist) */}
            {post.headings && post.headings.length > 0 && (
              <div className="lg:hidden bg-white p-6 rounded-2xl border border-[#E8ECE8] space-y-3">
                <div className="flex items-center gap-2 font-bold text-sm text-[#181E19]">
                  <ListTree className="w-4 h-4 text-[#56B259]" />
                  <span>Table of Contents</span>
                </div>
                <ul className="space-y-2 text-xs">
                  {post.headings.map((h, i) => (
                    <li key={i} className={h.level === 3 ? 'pl-3 text-[#7A8A7B]' : 'font-semibold text-[#181E19]'}>
                      <a href={`#${h.slug}`} className="hover:text-[#56B259] transition-colors">
                        • {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ARTICLE SANITIZED HTML CONTENT */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E8ECE8] shadow-2xs">
              <div
                className="prose-mental"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* CONTEXTUAL INTERNAL LINKING SILO CALLOUT */}
            <div className="bg-[#181E19] text-white p-8 rounded-3xl border border-[#2D372E] space-y-4">
              <div className="flex items-center gap-2 text-[#56B259] font-bold text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Next Steps in Your Wellness Journey</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Take an Objective Clinical Mental Health Check
              </h3>
              <p className="text-xs text-[#E2EBE2] leading-relaxed">
                Take our free, 100% private, clinically validated <strong>PHQ-9 (Depression)</strong> and <strong>GAD-7 (Anxiety)</strong> screeners to benchmark your symptoms and generate a confidential summary for your doctor.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/screening"
                  className="inline-flex items-center gap-2 bg-[#56B259] hover:bg-[#479E4A] text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all"
                >
                  <span>Start Free Screener</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/mental-health-quotes"
                  className="inline-flex items-center gap-2 bg-[#202721] hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider border border-[#2D372E] transition-all"
                >
                  <span>72+ Daily Quotes</span>
                </Link>
              </div>
            </div>

            {/* MEDICAL DISCLAIMER */}
            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Medical & Editorial Disclaimer:</strong> The articles published on MentalHealthDay.org are for educational and informational purposes only. They do not constitute individualized medical, psychiatric, or clinical advice. If you are experiencing a mental health emergency, please dial or text <strong>988</strong> immediately in the US & Canada.
              </div>
            </div>

          </div>

          {/* DESKTOP SIDEBAR (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* STICKY TABLE OF CONTENTS */}
            {post.headings && post.headings.length > 0 && (
              <div className="hidden lg:block bg-white p-6 rounded-3xl border border-[#E8ECE8] shadow-2xs sticky top-24 space-y-4">
                <div className="flex items-center gap-2 font-bold text-base text-[#181E19] border-b border-[#E8ECE8] pb-3">
                  <ListTree className="w-4 h-4 text-[#56B259]" />
                  <span>Table of Contents</span>
                </div>
                <nav className="max-h-[380px] overflow-y-auto space-y-2 text-xs pr-2">
                  {post.headings.map((h, i) => (
                    <a
                      key={i}
                      href={`#${h.slug}`}
                      className={`block py-1 transition-colors hover:text-[#56B259] ${
                        h.level === 3
                          ? 'pl-3 text-[#7A8A7B] text-[11px]'
                          : 'font-semibold text-[#181E19]'
                      }`}
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>

                {/* Quick 988 Helpline Badge */}
                <div className="pt-4 border-t border-[#E8ECE8]">
                  <Link
                    href="/helplines"
                    className="flex items-center justify-between p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-rose-600" />
                      <span className="font-bold text-xs">Need Help? 988 Crisis Line</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* HIGH-IMPACT RESOURCE HUBS CARD */}
            <div className="bg-white p-6 rounded-3xl border border-[#E8ECE8] shadow-2xs space-y-4">
              <h4 className="font-bold text-base text-[#181E19]">
                Featured Authority Hubs
              </h4>
              <ul className="space-y-3 text-xs">
                <li>
                  <Link href="/world-mental-health-day" className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAF8] hover:bg-[#EBF7EC] transition-colors font-semibold text-[#181E19] group">
                    <span>Oct 10 WMHD Toolkit</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#56B259] group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </li>
                <li>
                  <Link href="/mental-health-quotes" className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAF8] hover:bg-[#EBF7EC] transition-colors font-semibold text-[#181E19] group">
                    <span>72+ Daily Quotes</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#56B259] group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </li>
                <li>
                  <Link href="/mental-health-activities" className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAF8] hover:bg-[#EBF7EC] transition-colors font-semibold text-[#181E19] group">
                    <span>25 Workplace Activities</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#56B259] group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </li>
                <li>
                  <Link href="/statistics" className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAF8] hover:bg-[#EBF7EC] transition-colors font-semibold text-[#181E19] group">
                    <span>2026 Research Report</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#56B259] group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </div>

      {/* RELATED ARTICLES GRID */}
      <section className="py-16 bg-white border-t border-[#E8ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
                Continue Reading
              </span>
              <h3 className="text-2xl font-bold text-[#181E19] mt-1">
                Related Mental Wellness Guides
              </h3>
            </div>
            <Link href="/blog" className="text-xs font-bold text-[#56B259] hover:underline flex items-center gap-1">
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fallbackRelated.map((rel) => (
              <PostCard key={rel.id} post={rel} />
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Newsletter />
      </section>

    </article>
  );
}
