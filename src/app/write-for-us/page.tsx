import React from 'react';
import type { Metadata } from 'next';
import { 
  PenTool, 
  CheckCircle2, 
  ShieldCheck, 
  Mail, 
  Award, 
  Clock 
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Write For Us: Editorial & Contributor Guidelines | Mental Health Day',
  description:
    'Join our community of mental health writers, clinicians, and wellness advocates. Learn about our editorial guidelines, sponsored content standards, and submission process.',
  alternates: {
    canonical: 'https://mentalhealthday.org/write-for-us',
  },
};

export default function WriteForUsPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
          <PenTool className="w-3.5 h-3.5 text-emerald-600" />
          Editorial &amp; Partner Submissions
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Write For Us: Share Your Voice on Mental Well-Being
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          MentalHealthDay.org reaches thousands of readers seeking practical, evidence-based guidance for anxiety, therapy, and emotional wellness. We welcome thoughtful contributions from licensed clinicians, wellness professionals, health journalists, and mission-aligned partners.
        </p>
      </div>

      {/* Key Standards Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">E-E-A-T &amp; Expertise</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            We prioritize clinically grounded perspectives, peer-reviewed citations (PubMed, APA, WHO), and real-world therapeutic experience.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Google &amp; FTC Compliant</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            All commercial partnerships, PR features, and sponsored contributions adhere strictly to Google Webmaster Guidelines and FTC disclosure policies.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Rapid Editorial Review</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our editorial board reviews incoming article pitches and PR proposals within <strong>24 to 48 business hours</strong>.
          </p>
        </div>
      </div>

      {/* Editorial Standards & Topics We Cover */}
      <div className="bg-[#181E19] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-emerald-400 font-semibold text-xs uppercase tracking-wider">
            Content Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Topics We Accept &amp; Review
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            We publish clear, actionable content that helps everyday individuals take proactive steps for their mental wellness:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="flex items-start gap-3 bg-[#242D25] p-4 rounded-xl border border-slate-700/50">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold mb-1">Therapy Modalities &amp; Tools</strong>
              <span className="text-slate-300 text-xs">EMDR, CBT, Somatic Experiencing, Brainspotting, IFS, and virtual counseling comparisons.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#242D25] p-4 rounded-xl border border-slate-700/50">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold mb-1">Anxiety, Stress &amp; Burnout</strong>
              <span className="text-slate-300 text-xs">Practical morning routines, vagus nerve regulation, panic attack prevention, and nervous system health.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#242D25] p-4 rounded-xl border border-slate-700/50">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold mb-1">Workplace Mental Health &amp; PTO</strong>
              <span className="text-slate-300 text-xs">Work-life balance, mental health day off policies, employee well-being, and communication templates.</span>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#242D25] p-4 rounded-xl border border-slate-700/50">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold mb-1">Holistic Wellness &amp; Lifestyle</strong>
              <span className="text-slate-300 text-xs">Sleep hygiene, gut-brain axis, mindfulness, nutrition for brain health, and men's mental health.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Guidelines & Quality Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Contributor &amp; Submission Requirements
            </h2>
            
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                <div>
                  <strong>Originality &amp; Depth:</strong> Articles must be 100% original, not published elsewhere, and typically range between 1,000 to 2,000+ words of actionable value.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                <div>
                  <strong>Credible Citations:</strong> Back medical claims with links to reputable medical journals, government bodies (.gov, .edu), or clinical trial databases.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                <div>
                  <strong>Author Bio &amp; Transparency:</strong> Include a 2–3 sentence author bio highlighting your background, credentials, or clinical focus.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                <div>
                  <strong>No Spam / Low-Quality Links:</strong> We do not accept promotional keyword-stuffed pitches, casino/gambling links, or non-health related anchor texts.
                </div>
              </li>
            </ul>

            <div className="border-t border-slate-100 pt-6">
              <h3 className="font-bold text-slate-900 text-base mb-2">Sponsored Content &amp; PR Opportunities</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you are a PR agency, brand representative, or outreach specialist submitting on behalf of a mental health platform or product, please specify your partnership type in the message form below. We offer sponsored placement, product reviews, and custom partner features.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Submit Your Pitch or Inquiry</h3>
            <p className="text-sm text-slate-600">
              Fill out the form below with your proposed article headline, outline, or PR inquiry.
            </p>
            <ContactForm />
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <Mail className="w-4 h-4" />
              <span>Direct Editorial Contact</span>
            </div>
            <h3 className="font-bold text-xl text-white">Prefer Direct Email?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              You can send article pitches, media kits, or sponsorship inquiries directly to our editorial team:
            </p>
            <div className="p-3 bg-slate-800 rounded-xl font-mono text-xs text-emerald-300 break-all select-all">
              info@mentalhealthday.org
            </div>
            <p className="text-[11px] text-slate-400">
              Please use the subject line: <code className="text-white">[Pitch] Your Topic Idea</code> or <code className="text-white">[Partnership] Brand Name</code>.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Safety &amp; Compliance Guarantee</span>
            </div>
            <p className="text-xs text-emerald-950 leading-relaxed">
              MentalHealthDay.org upholds high editorial integrity. Every submission undergoes human editorial review to protect our domain authority, reader trust, and search engine compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
