'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface AntiSpamEmailProps {
  user?: string;
  domain?: string;
  className?: string;
}

export default function AntiSpamEmail({
  user = 'editorial',
  domain = 'mentalhealthday.org',
  className = '',
}: AntiSpamEmailProps) {
  const [copied, setCopied] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const fullEmail = `${user}@${domain}`;

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(fullEmail);
      setCopied(true);
      setRevealed(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {revealed ? (
        <span className="font-mono text-emerald-300 select-all text-xs sm:text-sm">
          {fullEmail}
        </span>
      ) : (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="text-xs text-emerald-400 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/50 hover:decoration-emerald-400 font-medium transition-colors"
        >
          Click to reveal email
        </button>
      )}

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors border border-slate-700"
        title="Copy email to clipboard"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
}
