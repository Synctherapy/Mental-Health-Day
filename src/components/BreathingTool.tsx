'use client';

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Sparkles, Wind } from 'lucide-react';

type Phase = 'Inhale' | 'Hold' | 'Exhale';

export default function BreathingTool() {
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState<Phase>('Inhale');
  const [countdown, setCountdown] = useState(4);
  const [cycleCount, setCycleCount] = useState(0);

  // 4-7-8 Technique timings: Inhale 4s, Hold 7s, Exhale 8s
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          // Switch phase
          if (phase === 'Inhale') {
            setPhase('Hold');
            return 7;
          } else if (phase === 'Hold') {
            setPhase('Exhale');
            return 8;
          } else {
            setPhase('Inhale');
            setCycleCount((c) => c + 1);
            return 4;
          }
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, phase]);

  const handleReset = () => {
    setIsRunning(false);
    setPhase('Inhale');
    setCountdown(4);
    setCycleCount(0);
  };

  const getPhaseInstruction = () => {
    if (phase === 'Inhale') return 'Inhale quietly through your nose...';
    if (phase === 'Hold') return 'Hold your breath gently...';
    return 'Exhale completely through your mouth...';
  };

  const getPhaseColor = () => {
    if (phase === 'Inhale') return 'from-teal-400 to-emerald-500 scale-110';
    if (phase === 'Hold') return 'from-indigo-400 to-teal-500 scale-105';
    return 'from-emerald-400 to-teal-600 scale-90';
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-teal-900/50 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
        <Wind className="w-64 h-64" />
      </div>

      <div className="max-w-md mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>4-7-8 Relaxing Breathing</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          Calm Nervous System Guide
        </h3>
        <p className="text-slate-300 text-sm mb-8">
          The 4-7-8 breathing method stimulates your parasympathetic nervous system, lowering acute anxiety and heart rate.
        </p>

        {/* Breathing Circle */}
        <div className="flex flex-col items-center justify-center my-6">
          <div
            className={`w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr ${getPhaseColor()} flex flex-col items-center justify-center shadow-2xl transition-all duration-1000 ease-in-out`}
          >
            <span className="text-xs uppercase tracking-widest font-semibold text-teal-950/80 mb-1">
              {phase}
            </span>
            <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tighter">
              {isRunning ? countdown : '4'}
            </span>
            <span className="text-xs text-white/80 mt-1 font-medium">seconds</span>
          </div>

          <p className="h-8 mt-6 text-base sm:text-lg font-medium text-teal-200">
            {isRunning ? getPhaseInstruction() : 'Press Start to begin breathing exercise'}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            {isRunning ? (
              <>
                <Pause className="w-5 h-5" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-current" />
                <span>Start Breathing</span>
              </>
            )}
          </button>

          <button
            onClick={handleReset}
            className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {cycleCount > 0 && (
          <p className="text-xs text-slate-400 mt-4">
            Completed <span className="text-teal-300 font-semibold">{cycleCount}</span> breath cycles
          </p>
        )}
      </div>
    </div>
  );
}
