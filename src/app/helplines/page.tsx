import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PhoneCall, MessageSquare, ShieldAlert, HeartHandshake, Flag, Globe, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'North American Crisis & Mental Health Helplines (US & Canada)',
  description:
    'Free, confidential 24/7 mental health crisis lines in the United States and Canada. Direct access to 988, Crisis Text Line, Veterans Crisis Line, and specialized support.',
};

export default function HelplinesPage() {
  return (
    <div className="space-y-0 text-[#5F695F]">
      
      {/* Header Banner */}
      <section className="bg-[#181E19] text-white py-20 border-b border-[#2D372E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider border border-rose-500/40">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>24/7 Confidential Crisis Support</span>
          </div>
          <div className="w-12 h-1 bg-[#56B259] rounded-full mx-auto" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            North American Crisis Lines
          </h1>
          <p className="text-lg text-[#E2EBE2] leading-relaxed max-w-2xl mx-auto">
            If you or someone you know is struggling or in crisis, free and confidential support is available 24/7 across the United States and Canada. You are never alone.
          </p>
        </div>
      </section>

      {/* Navigation Anchor Bar */}
      <div className="bg-white border-b border-[#E8ECE8] sticky top-20 z-30 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4 text-sm font-bold">
          <a href="#united-states" className="text-[#181E19] hover:text-[#56B259] px-4 py-1.5 rounded-full bg-[#F8FAF8] border border-[#E8ECE8] transition-colors">
            🇺🇸 United States Resources
          </a>
          <a href="#canada" className="text-[#181E19] hover:text-[#56B259] px-4 py-1.5 rounded-full bg-[#F8FAF8] border border-[#E8ECE8] transition-colors">
            🇨🇦 Canada Resources
          </a>
          <a href="#specialized" className="text-[#181E19] hover:text-[#56B259] px-4 py-1.5 rounded-full bg-[#F8FAF8] border border-[#E8ECE8] transition-colors">
            Specialized & Community Lines
          </a>
        </div>
      </div>

      {/* UNITED STATES SECTION */}
      <section id="united-states" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex items-center gap-3">
            <span className="text-3xl">🇺🇸</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
                United States
              </span>
              <h2 className="text-3xl font-extrabold text-[#181E19]">
                National Crisis Resources (USA)
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* US 988 */}
            <div className="bg-[#F8FAF8] rounded-3xl p-8 border-2 border-rose-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-100 px-2.5 py-0.5 rounded-full inline-block">
                  Primary Lifeline
                </span>
                <h3 className="text-2xl font-bold text-[#181E19]">
                  988 Suicide & Crisis Lifeline
                </h3>
                <p className="text-sm text-[#5F695F] leading-relaxed">
                  Trained crisis counselors provide free, confidential support for suicidal thoughts, mental health distress, and substance use crises.
                </p>
                <div className="text-xs text-[#7A8A7B]">
                  • Available 24/7/365 in English and Spanish<br />
                  • Specialized option for Veterans & LGBTQ+ youth
                </div>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href="tel:988"
                  className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold px-5 py-3 rounded-full text-sm transition-colors shadow-xs"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call 988</span>
                </a>
                <a
                  href="sms:988"
                  className="inline-flex items-center justify-center gap-2 bg-[#181E19] hover:bg-black text-white font-bold px-5 py-3 rounded-full text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Text 988</span>
                </a>
              </div>
            </div>

            {/* Crisis Text Line US */}
            <div className="bg-[#F8FAF8] rounded-3xl p-8 border border-[#E8ECE8] shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#56B259] bg-[#EBF7EC] px-2.5 py-0.5 rounded-full inline-block">
                  Text Support
                </span>
                <h3 className="text-2xl font-bold text-[#181E19]">
                  Crisis Text Line (USA)
                </h3>
                <p className="text-sm text-[#5F695F] leading-relaxed">
                  Free 24/7 confidential texting service with trained crisis counselors for anyone in anxiety, depression, or distress.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="sms:741741?body=HOME"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#56B259] hover:bg-[#479E4A] text-white font-bold px-5 py-3 rounded-full text-sm transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Text HOME to 741741</span>
                </a>
              </div>
            </div>

            {/* SAMHSA National Helpline */}
            <div className="bg-[#F8FAF8] rounded-3xl p-8 border border-[#E8ECE8] shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-200 px-2.5 py-0.5 rounded-full inline-block">
                  Treatment Referral
                </span>
                <h3 className="text-2xl font-bold text-[#181E19]">
                  SAMHSA National Helpline
                </h3>
                <p className="text-sm text-[#5F695F] leading-relaxed">
                  Substance Abuse and Mental Health Services Administration confidential free referral and information service.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="tel:18006624357"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#181E19] hover:bg-black text-white font-bold px-5 py-3 rounded-full text-sm transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>1-800-662-HELP (4357)</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CANADA SECTION */}
      <section id="canada" className="py-20 bg-[#F8FAF8] border-y border-[#E8ECE8] scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex items-center gap-3">
            <span className="text-3xl">🇨🇦</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
                Canada
              </span>
              <h2 className="text-3xl font-extrabold text-[#181E19]">
                National Crisis Resources (Canada)
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Canada 988 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-rose-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-100 px-2.5 py-0.5 rounded-full inline-block">
                  Canada Nationwide
                </span>
                <h3 className="text-2xl font-bold text-[#181E19]">
                  988 Suicide Crisis Helpline
                </h3>
                <p className="text-sm text-[#5F695F] leading-relaxed">
                  Canada-wide 24/7 suicide prevention and crisis helpline providing bilingual support in English and French.
                </p>
                <div className="text-xs text-[#7A8A7B]">
                  • Free to call or text from anywhere in Canada<br />
                  • Available in English and French 24/7
                </div>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href="tel:988"
                  className="inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold px-5 py-3 rounded-full text-sm transition-colors shadow-xs"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call 988</span>
                </a>
                <a
                  href="sms:988"
                  className="inline-flex items-center justify-center gap-2 bg-[#181E19] hover:bg-black text-white font-bold px-5 py-3 rounded-full text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Text 988</span>
                </a>
              </div>
            </div>

            {/* Kids Help Phone Canada */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8ECE8] shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#56B259] bg-[#EBF7EC] px-2.5 py-0.5 rounded-full inline-block">
                  Youth & Teens (Canada)
                </span>
                <h3 className="text-2xl font-bold text-[#181E19]">
                  Kids Help Phone
                </h3>
                <p className="text-sm text-[#5F695F] leading-relaxed">
                  24/7 national support service offering professional counseling and volunteer-led text service for young people.
                </p>
              </div>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:18006686868"
                  className="inline-flex items-center justify-center gap-2 bg-[#181E19] hover:bg-black text-white font-bold px-5 py-2.5 rounded-full text-xs transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call 1-800-668-6868</span>
                </a>
                <a
                  href="sms:686868?body=CONNECT"
                  className="inline-flex items-center justify-center gap-2 bg-[#56B259] hover:bg-[#479E4A] text-white font-bold px-5 py-2.5 rounded-full text-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Text CONNECT to 686868</span>
                </a>
              </div>
            </div>

            {/* Hope for Wellness Indigenous Helpline */}
            <div className="bg-white rounded-3xl p-8 border border-[#E8ECE8] shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full inline-block">
                  Indigenous Communities
                </span>
                <h3 className="text-2xl font-bold text-[#181E19]">
                  Hope for Wellness Line
                </h3>
                <p className="text-sm text-[#5F695F] leading-relaxed">
                  Available to all Indigenous people across Canada seeking immediate emotional support or crisis intervention.
                </p>
                <div className="text-xs text-[#7A8A7B]">
                  • Cree, Ojibway, and Inuktitut available upon request
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="tel:18552423310"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#181E19] hover:bg-black text-white font-bold px-5 py-3 rounded-full text-sm transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>1-855-242-3310</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SPECIALIZED & COMMUNITY LINES */}
      <section id="specialized" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
              Identity & Community Specific
            </span>
            <h2 className="text-3xl font-extrabold text-[#181E19]">
              Specialized Mental Health Helplines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Veterans Crisis Line */}
            <div className="bg-[#F8FAF8] rounded-3xl p-6 border border-[#E8ECE8] space-y-3">
              <h3 className="text-xl font-bold text-[#181E19]">Veterans Crisis Line</h3>
              <p className="text-xs text-[#5F695F] leading-relaxed">
                Connect with the Veterans Crisis Line to reach caring, qualified responders with the Department of Veterans Affairs.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:988"
                  className="inline-flex items-center justify-center gap-2 bg-[#181E19] text-white font-bold px-4 py-2.5 rounded-full text-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Dial 988, then Press 1</span>
                </a>
                <a
                  href="sms:838255"
                  className="inline-flex items-center justify-center gap-2 bg-[#56B259] text-white font-bold px-4 py-2.5 rounded-full text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Text 838255</span>
                </a>
              </div>
            </div>

            {/* Trevor Project */}
            <div className="bg-[#F8FAF8] rounded-3xl p-6 border border-[#E8ECE8] space-y-3">
              <h3 className="text-xl font-bold text-[#181E19]">The Trevor Project (LGBTQ+)</h3>
              <p className="text-xs text-[#5F695F] leading-relaxed">
                24/7 confidential crisis intervention and suicide prevention services for lesbian, gay, bisexual, transgender, and queer youth.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:18664887386"
                  className="inline-flex items-center justify-center gap-2 bg-[#181E19] text-white font-bold px-4 py-2.5 rounded-full text-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>1-866-488-7386</span>
                </a>
                <a
                  href="sms:678678?body=START"
                  className="inline-flex items-center justify-center gap-2 bg-[#56B259] text-white font-bold px-4 py-2.5 rounded-full text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Text START to 678-678</span>
                </a>
              </div>
            </div>

            {/* Trans Lifeline */}
            <div className="bg-[#F8FAF8] rounded-3xl p-6 border border-[#E8ECE8] space-y-3">
              <h3 className="text-xl font-bold text-[#181E19]">Trans Lifeline</h3>
              <p className="text-xs text-[#5F695F] leading-relaxed">
                Peer support service run by trans individuals, for trans and questioning individuals in the US and Canada with zero non-consensual intervention.
              </p>
              <div className="pt-2">
                <a
                  href="tel:18775658860"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#181E19] text-white font-bold px-4 py-2.5 rounded-full text-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>1-877-565-8860</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
