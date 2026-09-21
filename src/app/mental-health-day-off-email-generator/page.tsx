'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Briefcase, 
  ShieldCheck, 
  Send, 
  FileText, 
  Info, 
  HelpCircle,
  Clock,
  HeartHandshake
} from 'lucide-react';
import Link from 'next/link';

interface EmailTemplate {
  subject: string;
  body: string;
}

export default function MentalHealthDayGeneratorPage() {
  const [reason, setReason] = useState<'burnout' | 'sick' | 'appointment' | 'reset' | 'emergency'>('burnout');
  const [tone, setTone] = useState<'formal' | 'casual' | 'brief' | 'hybrid'>('formal');
  const [recipient, setRecipient] = useState<string>('Manager');
  const [yourName, setYourName] = useState<string>('');
  const [includeCoverage, setIncludeCoverage] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const generateEmail = (): EmailTemplate => {
    const greeting = `Hi ${recipient || 'Team'},`;
    const signoff = `Best regards,\n${yourName || '[Your Name]'}`;

    let subject = 'Time Off Request - [Date]';
    let mainSentence = '';
    let coverageText = includeCoverage 
      ? 'I have completed my urgent priorities for today, and [Colleague Name] has kindly agreed to cover any immediate escalations while I am away.'
      : 'I will ensure all pending items are prioritized as soon as I return.';

    switch (reason) {
      case 'burnout':
        if (tone === 'formal') {
          subject = 'Personal Sick Day Request - [Date]';
          mainSentence = 'I am writing to let you know that I am unwell today and need to take a personal sick day to rest and recover. I expect to return to my regular schedule tomorrow.';
        } else if (tone === 'casual') {
          subject = 'Taking a personal day today - [Date]';
          mainSentence = 'I am feeling burned out and under the weather today, so I will be taking a personal day to reset. I plan to be fully back online tomorrow.';
        } else if (tone === 'brief') {
          subject = 'Out Sick - [Date]';
          mainSentence = 'I am taking a personal health day today and will be offline. I will resume regular hours tomorrow.';
        } else {
          subject = 'Personal Time Off - [Date]';
          mainSentence = 'I am taking an unexpected personal day today to attend to my well-being and recharge. I will be back in tomorrow morning.';
        }
        break;

      case 'sick':
        subject = 'Out Sick Today - [Date]';
        mainSentence = 'I am not feeling well today and will need to take a sick day to recover. I will be offline and resting, returning tomorrow.';
        break;

      case 'appointment':
        subject = 'Medical Appointment / Time Off - [Date]';
        mainSentence = 'I have a scheduled healthcare appointment today and will be taking the day off to manage personal health matters.';
        break;

      case 'emergency':
        subject = 'Urgent Personal Day - [Date]';
        mainSentence = 'Due to an urgent personal matter that requires my immediate attention, I will be unable to work today. I will update you as soon as I can.';
        break;

      case 'reset':
      default:
        subject = 'Mental Health Day Request - [Date]';
        mainSentence = 'I would like to request a mental health day on [Date] to prevent burnout and recharge. Taking this proactive rest will help me bring my best focus back to the team.';
        break;
    }

    const body = `${greeting}\n\n${mainSentence}\n\n${coverageText}\n\nThank you for your understanding.\n\n${signoff}`;

    return { subject, body };
  };

  const { subject, body } = generateEmail();

  const handleCopy = () => {
    const fullText = `Subject: ${subject}\n\n${body}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] text-[#5F695F] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#56B259]/10 text-[#56B259] text-xs font-bold uppercase tracking-wider border border-[#56B259]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Workplace Wellness Tool</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#181E19] tracking-tight leading-tight">
            Mental Health Day Off <br className="hidden sm:inline" />
            <span className="text-[#56B259]">Email Request Generator</span>
          </h1>
          <p className="text-base sm:text-lg text-[#5F695F] max-w-2xl mx-auto leading-relaxed">
            Need to ask your boss or HR for a mental health day without feeling guilty or disclosing private medical details? Use this tool to generate a professional, HIPAA-safe email in seconds.
          </p>
        </div>

        {/* Interactive Tool Card */}
        <div className="bg-white rounded-3xl border border-[#E8ECE8] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Controls (Options) */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-white border-b lg:border-b-0 lg:border-r border-[#E8ECE8] space-y-6">
            <h2 className="text-lg font-bold text-[#181E19] flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#56B259]" />
              <span>Customize Your Request</span>
            </h2>

            {/* Situation / Reason */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#181E19] uppercase tracking-wider">
                1. What is your situation?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'burnout', label: 'Burnout / Overwhelmed' },
                  { id: 'reset', label: 'Proactive Mental Reset' },
                  { id: 'sick', label: 'General Sick Day (Safe)' },
                  { id: 'appointment', label: 'Doctor / Therapy Visit' },
                  { id: 'emergency', label: 'Personal Emergency' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setReason(item.id as any)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all border ${
                      reason === item.id
                        ? 'bg-[#181E19] text-white border-[#181E19] shadow-xs'
                        : 'bg-[#F8FAF8] text-[#5F695F] border-[#E8ECE8] hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tone Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-[#181E19] uppercase tracking-wider">
                2. Select Your Email Tone
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'formal', label: 'Formal / Corporate' },
                  { id: 'brief', label: 'Short & Direct' },
                  { id: 'casual', label: 'Casual / Startup' },
                  { id: 'hybrid', label: 'Warm & Professional' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTone(item.id as any)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all border ${
                      tone === item.id
                        ? 'bg-[#56B259] text-white border-[#56B259] shadow-xs'
                        : 'bg-[#F8FAF8] text-[#5F695F] border-[#E8ECE8] hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs: Manager & Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="space-y-1">
                <label className="block text-xs font-medium text-gray-700">Manager / Recipient</label>
                <input
                  type="text"
                  placeholder="e.g. Sarah / Team"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8ECE8] bg-[#F8FAF8] focus:outline-none focus:ring-2 focus:ring-[#56B259]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Alex Smith"
                  value={yourName}
                  onChange={(e) => setYourName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8ECE8] bg-[#F8FAF8] focus:outline-none focus:ring-2 focus:ring-[#56B259]"
                />
              </div>
            </div>

            {/* Coverage Checkbox */}
            <div className="pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700 select-none">
                <input
                  type="checkbox"
                  checked={includeCoverage}
                  onChange={(e) => setIncludeCoverage(e.target.checked)}
                  className="w-4 h-4 rounded text-[#56B259] focus:ring-[#56B259] border-gray-300"
                />
                <span>Include workload coverage / emergency backup clause</span>
              </label>
            </div>

          </div>

          {/* Right Output Box */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#181E19] text-white flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#2D372E] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#56B259] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Generated Email Template</span>
                </span>
                <span className="text-xs text-[#A0ACA0]">Ready to Send</span>
              </div>

              {/* Subject Line */}
              <div className="bg-[#242D25] p-3 rounded-xl border border-[#2D372E] text-xs font-mono">
                <span className="text-[#A0ACA0]">Subject: </span>
                <span className="text-white font-semibold">{subject}</span>
              </div>

              {/* Email Body Preview */}
              <div className="bg-[#242D25] p-4 rounded-xl border border-[#2D372E] text-xs font-mono text-[#E2EBE2] whitespace-pre-line leading-relaxed min-h-[180px]">
                {body}
              </div>
            </div>

            {/* Copy Button */}
            <div>
              <button
                type="button"
                onClick={handleCopy}
                className={`w-full py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                  copied
                    ? 'bg-emerald-500 text-white'
                    : 'bg-[#56B259] hover:bg-[#479E4A] text-white hover:scale-[1.02]'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Full Email Template</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

        {/* Legal & Workplace Rights Guide (Content for SEO & Links) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8ECE8] space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-[#181E19] tracking-tight mb-3">
              Do You Legally Have to Explain Why You Need a Mental Health Day?
            </h2>
            <p className="text-sm leading-relaxed text-[#5F695F]">
              <strong>No. Under standard labor guidelines and the Health Insurance Portability and Accountability Act (HIPAA), you are not legally required to disclose private medical diagnoses or mental health symptoms to your manager.</strong> Most company PTO and sick leave policies treat mental health days under standard medical/sick leave.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 bg-[#F8FAF8] rounded-2xl border border-[#E8ECE8] space-y-2">
              <h3 className="font-bold text-sm text-[#181E19]">1. Keep It Professional</h3>
              <p className="text-xs text-[#5F695F] leading-relaxed">
                You do not need to over-explain. Using phrases like <em>"taking a personal sick day to rest"</em> is completely standard and protects your privacy.
              </p>
            </div>
            <div className="p-5 bg-[#F8FAF8] rounded-2xl border border-[#E8ECE8] space-y-2">
              <h3 className="font-bold text-sm text-[#181E19]">2. Give Advance Notice When Possible</h3>
              <p className="text-xs text-[#5F695F] leading-relaxed">
                If you are planning a proactive reset day, sending your email 2–3 days ahead helps your team prepare and prevents last-minute workload bottlenecks.
              </p>
            </div>
            <div className="p-5 bg-[#F8FAF8] rounded-2xl border border-[#E8ECE8] space-y-2">
              <h3 className="font-bold text-sm text-[#181E19]">3. Unplug Completely</h3>
              <p className="text-xs text-[#5F695F] leading-relaxed">
                Turn off Slack, Teams, and work notifications. A mental health day only works if your autonomic nervous system can actually exit work hypervigilance.
              </p>
            </div>
          </div>

          {/* Internal Links Hub */}
          <div className="pt-6 border-t border-[#E8ECE8] flex flex-wrap items-center justify-between gap-4 text-xs text-[#5F695F]">
            <div>
              <span>Need help knowing when to take time off? Read our </span>
              <Link href="/mental-health-day" className="text-[#56B259] font-bold underline hover:text-[#479E4A]">
                Guilt-Free Workplace Mental Health Day Guide
              </Link>.
            </div>
            <div>
              <span>Feeling overwhelmed? Take our </span>
              <Link href="/screening" className="text-[#56B259] font-bold underline hover:text-[#479E4A]">
                Free Anxiety & Depression Screener
              </Link>.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
