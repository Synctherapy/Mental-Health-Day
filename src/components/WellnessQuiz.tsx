'use client';

import React, { useState } from 'react';
import { CheckCircle2, RotateCcw, ArrowRight, HeartHandshake, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: number;
  text: string;
  options: { text: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: 'How frequently have you felt overwhelmed, anxious, or on edge over the past 2 weeks?',
    options: [
      { text: 'Not at all', score: 0 },
      { text: 'Several days', score: 1 },
      { text: 'More than half the days', score: 2 },
      { text: 'Nearly every day', score: 3 },
    ],
  },
  {
    id: 2,
    text: 'Have you had trouble falling asleep, staying asleep, or sleeping too much?',
    options: [
      { text: 'Not at all', score: 0 },
      { text: 'Several days', score: 1 },
      { text: 'More than half the days', score: 2 },
      { text: 'Nearly every day', score: 3 },
    ],
  },
  {
    id: 3,
    text: 'How often have you felt little interest or pleasure in doing everyday activities?',
    options: [
      { text: 'Not at all', score: 0 },
      { text: 'Several days', score: 1 },
      { text: 'More than half the days', score: 2 },
      { text: 'Nearly every day', score: 3 },
    ],
  },
  {
    id: 4,
    text: 'Do you feel you have a reliable support system or healthy daily grounding habits?',
    options: [
      { text: 'Yes, I have strong support and daily habits', score: 0 },
      { text: 'Somewhat, but it could be better', score: 1 },
      { text: 'Rarely, I often feel isolated', score: 2 },
      { text: 'No support at all right now', score: 3 },
    ],
  },
];

export default function WellnessQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);

  const getResultFeedback = () => {
    if (totalScore <= 3) {
      return {
        title: 'Mild / Balanced Mental Well-Being',
        desc: 'You seem to be managing daily stressors relatively well. Continuing daily mindfulness, physical exercise, and restorative sleep will help sustain your mental balance.',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        recommendationLink: '/blog',
        recommendationText: 'Explore Mental Health Daily Habits',
      };
    } else if (totalScore <= 7) {
      return {
        title: 'Moderate Stress / Anxiety Indicator',
        desc: 'You are experiencing noticeable symptoms of stress, fatigue, or mood dips. Implementing targeted nervous system regulation techniques like 4-7-8 breathing or somatic grounding can provide significant relief.',
        color: 'text-amber-800 bg-amber-50 border-amber-200',
        recommendationLink: '/conditions',
        recommendationText: 'Browse Anxiety & Mood Strategies',
      };
    } else {
      return {
        title: 'Elevated Distress / Support Recommended',
        desc: 'Your responses indicate you are carrying a high emotional burden right now. We strongly encourage talking with a licensed therapist, counselor, or trusted medical provider for personalized care.',
        color: 'text-indigo-900 bg-indigo-50 border-indigo-200',
        recommendationLink: '/tools#crisis-resources',
        recommendationText: 'View Confidential Support Resources',
      };
    }
  };

  const result = getResultFeedback();

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-2xl mx-auto">
      {!isCompleted ? (
        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-teal-700 uppercase tracking-wider mb-3">
            <span>Self-Assessment Check</span>
            <span>
              Question {currentIndex + 1} of {questions.length}
            </span>
          </div>

          <div className="w-full bg-slate-100 h-2 rounded-full mb-6 overflow-hidden">
            <div
              className="bg-teal-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 leading-snug">
            {questions[currentIndex].text}
          </h3>

          <div className="space-y-3">
            {questions[currentIndex].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelectOption(opt.score)}
                className="w-full text-left px-5 py-4 rounded-xl border border-slate-200 hover:border-teal-500 hover:bg-teal-50/50 text-slate-800 font-medium text-sm sm:text-base transition-all flex items-center justify-between group"
              >
                <span>{opt.text}</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-7 h-7" />
          </div>

          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Your Wellness Summary
          </span>

          <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-4">
            {result.title}
          </h3>

          <div className={`p-5 rounded-2xl border text-sm leading-relaxed mb-6 ${result.color}`}>
            {result.desc}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={result.recommendationLink}
              className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition-colors text-sm"
            >
              <span>{result.recommendationText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={handleRestart}
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            * Disclaimer: This check-in is an informational wellness questionnaire, not a clinical diagnostic assessment.
          </p>
        </div>
      )}
    </div>
  );
}
