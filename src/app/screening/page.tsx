'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, RotateCcw, ArrowRight, Printer, AlertTriangle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

interface ScreenerQuestion {
  id: number;
  text: string;
}

const phq9Questions: ScreenerQuestion[] = [
  { id: 1, text: 'Little interest or pleasure in doing things' },
  { id: 2, text: 'Feeling down, depressed, or hopeless' },
  { id: 3, text: 'Trouble falling or staying asleep, or sleeping too much' },
  { id: 4, text: 'Feeling tired or having little energy' },
  { id: 5, text: 'Poor appetite or overeating' },
  { id: 6, text: 'Feeling bad about yourself — or that you are a failure or have let yourself or your family down' },
  { id: 7, text: 'Trouble concentrating on things, such as reading the newspaper or watching television' },
  { id: 8, text: 'Moving or speaking so slowly that other people could have noticed, or being so fidgety/restless' },
  { id: 9, text: 'Thoughts that you would be better off dead, or of hurting yourself in some way' },
];

const gad7Questions: ScreenerQuestion[] = [
  { id: 1, text: 'Feeling nervous, anxious, or on edge' },
  { id: 2, text: 'Not being able to stop or control worrying' },
  { id: 3, text: 'Worrying too much about different things' },
  { id: 4, text: 'Trouble relaxing' },
  { id: 5, text: 'Being so restless that it is hard to sit still' },
  { id: 6, text: 'Becoming easily annoyed or irritable' },
  { id: 7, text: 'Feeling afraid, as if something awful might happen' },
];

const scoringOptions = [
  { label: 'Not at all', value: 0 },
  { label: 'Several days', value: 1 },
  { label: 'More than half the days', value: 2 },
  { label: 'Nearly every day', value: 3 },
];

export default function ScreeningPage() {
  const [activeTab, setActiveTab] = useState<'phq9' | 'gad7'>('phq9');
  const [phqAnswers, setPhqAnswers] = useState<Record<number, number>>({});
  const [gadAnswers, setGadAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestions = activeTab === 'phq9' ? phq9Questions : gad7Questions;
  const currentAnswers = activeTab === 'phq9' ? phqAnswers : gadAnswers;
  const setAnswers = activeTab === 'phq9' ? setPhqAnswers : setGadAnswers;

  const handleScoreChange = (qId: number, val: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const isComplete = currentQuestions.every((q) => currentAnswers[q.id] !== undefined);
  const totalScore = Object.values(currentAnswers).reduce((a, b) => a + b, 0);

  const getPhqSeverity = (score: number) => {
    if (score <= 4) return { tier: 'Minimal Depression', advice: 'Your score suggests minimal or no depressive symptoms.', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (score <= 9) return { tier: 'Mild Depression', advice: 'Your score indicates mild depressive symptoms. Lifestyle interventions, mindfulness, and regular sleep hygiene can provide strong support.', color: 'text-teal-800 bg-teal-50 border-teal-200' };
    if (score <= 14) return { tier: 'Moderate Depression', advice: 'Your score indicates moderate depressive symptoms. A consultation with a qualified mental health clinician is recommended.', color: 'text-amber-800 bg-amber-50 border-amber-200' };
    if (score <= 19) return { tier: 'Moderately Severe Depression', advice: 'Your score indicates moderately severe symptoms. We strongly suggest seeking professional medical and therapeutic care.', color: 'text-orange-800 bg-orange-50 border-orange-200' };
    return { tier: 'Severe Depression', advice: 'Your score indicates severe depressive symptoms. Please connect promptly with a healthcare provider or crisis counselor.', color: 'text-rose-800 bg-rose-50 border-rose-200' };
  };

  const getGadSeverity = (score: number) => {
    if (score <= 4) return { tier: 'Minimal Anxiety', advice: 'Your score suggests minimal anxiety symptoms.', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (score <= 9) return { tier: 'Mild Anxiety', advice: 'Your score suggests mild anxiety. Somatic exercises and daily grounding can help prevent escalation.', color: 'text-teal-800 bg-teal-50 border-teal-200' };
    if (score <= 14) return { tier: 'Moderate Anxiety', advice: 'Your score suggests moderate anxiety. Structured cognitive behavioral or somatic therapy is clinically advised.', color: 'text-amber-800 bg-amber-50 border-amber-200' };
    return { tier: 'Severe Anxiety', advice: 'Your score indicates severe anxiety. We recommend consulting a licensed mental health professional for a full assessment.', color: 'text-rose-800 bg-rose-50 border-rose-200' };
  };

  const result = activeTab === 'phq9' ? getPhqSeverity(totalScore) : getGadSeverity(totalScore);

  return (
    <div className="space-y-0 text-[#5F695F]">
      
      {/* Header */}
      <section className="bg-[#181E19] text-white py-20 border-b border-[#2D372E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#56B259]/20 text-[#56B259] text-xs font-bold uppercase tracking-wider border border-[#56B259]/40">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Private • Clinically Validated</span>
          </div>
          <div className="w-12 h-1 bg-[#56B259] rounded-full mx-auto" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Clinical Mental Health Screeners
          </h1>
          <p className="text-lg text-[#E2EBE2] leading-relaxed max-w-2xl mx-auto">
            Take standard clinical screening questionnaires used worldwide by doctors and psychologists (PHQ-9 for Depression, GAD-7 for Anxiety). All calculations occur on your device; no data is ever saved or shared.
          </p>
        </div>
      </section>

      {/* Main Screener Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Tab Selector */}
          <div className="flex justify-center gap-3">
            <button
              onClick={() => {
                setActiveTab('phq9');
                setShowResult(false);
              }}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'phq9'
                  ? 'bg-[#56B259] text-white shadow-sm'
                  : 'bg-[#F8FAF8] text-[#181E19] border border-[#E8ECE8] hover:bg-slate-100'
              }`}
            >
              PHQ-9 Depression Screener
            </button>
            <button
              onClick={() => {
                setActiveTab('gad7');
                setShowResult(false);
              }}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'gad7'
                  ? 'bg-[#56B259] text-white shadow-sm'
                  : 'bg-[#F8FAF8] text-[#181E19] border border-[#E8ECE8] hover:bg-slate-100'
              }`}
            >
              GAD-7 Anxiety Screener
            </button>
          </div>

          <div className="bg-[#F8FAF8] p-6 sm:p-10 rounded-3xl border border-[#E8ECE8] space-y-6">
            <div className="space-y-1 border-b border-[#E8ECE8] pb-4">
              <h2 className="text-2xl font-bold text-[#181E19]">
                {activeTab === 'phq9' ? 'Patient Health Questionnaire (PHQ-9)' : 'Generalized Anxiety Disorder-7 (GAD-7)'}
              </h2>
              <p className="text-xs text-[#5F695F]">
                Over the last 2 weeks, how often have you been bothered by any of the following problems?
              </p>
            </div>

            {!showResult ? (
              <div className="space-y-6">
                {currentQuestions.map((q) => (
                  <div key={q.id} className="p-4 rounded-2xl bg-white border border-[#E8ECE8] space-y-3">
                    <p className="text-sm font-bold text-[#181E19]">
                      {q.id}. {q.text}
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {scoringOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleScoreChange(q.id, opt.value)}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                            currentAnswers[q.id] === opt.value
                              ? 'bg-[#56B259] text-white border-[#56B259]'
                              : 'bg-[#F8FAF8] text-[#5F695F] border-[#E8ECE8] hover:bg-slate-100'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs text-[#7A8A7B]">
                    {Object.keys(currentAnswers).length} of {currentQuestions.length} answered
                  </span>
                  <button
                    disabled={!isComplete}
                    onClick={() => setShowResult(true)}
                    className="inline-flex items-center gap-2 bg-[#56B259] disabled:bg-slate-300 hover:bg-[#479E4A] text-white font-bold px-8 py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-sm"
                  >
                    <span>View Clinical Score</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#EBF7EC] text-[#56B259] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#56B259]">
                    Assessment Result
                  </span>
                  <h3 className="text-3xl font-extrabold text-[#181E19] mt-1">
                    Score: {totalScore} / {activeTab === 'phq9' ? 27 : 21}
                  </h3>
                  <div className={`mt-4 p-6 rounded-2xl border text-sm leading-relaxed max-w-xl mx-auto ${result.color}`}>
                    <p className="font-bold text-base mb-1">{result.tier}</p>
                    <p>{result.advice}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 justify-center pt-4">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 bg-[#181E19] hover:bg-black text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Results For Doctor</span>
                  </button>
                  <button
                    onClick={() => {
                      setAnswers({});
                      setShowResult(false);
                    }}
                    className="inline-flex items-center gap-2 bg-[#F8FAF8] hover:bg-slate-100 text-[#181E19] font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider border border-[#E8ECE8]"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Retake Screener</span>
                  </button>
                </div>

                <p className="text-xs text-[#7A8A7B] max-w-md mx-auto pt-4">
                  * Note: Clinical screeners are educational instruments designed to assist discussions with healthcare providers. They do not replace a full psychiatric evaluation.
                </p>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
