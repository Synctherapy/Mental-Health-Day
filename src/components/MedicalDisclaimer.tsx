import React from 'react';
import { ShieldCheck, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function MedicalDisclaimer() {
  return (
    <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-5 my-8">
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-2 text-xs sm:text-sm text-amber-900 leading-relaxed">
          <p className="font-semibold">
            Medical & Mental Health Guidance Notice
          </p>
          <p className="text-amber-800/90">
            This article is curated by the Mental Health Day editorial team for educational and informational purposes only. It is not intended to replace professional psychiatric diagnosis, medical advice, or individualized therapy.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs font-medium">
            <span>In immediate crisis?</span>
            <a href="tel:988" className="text-amber-950 font-bold underline inline-flex items-center gap-1">
              <PhoneCall className="w-3 h-3" />
              Call or Text 988 (24/7)
            </a>
            <Link href="/disclosure" className="text-amber-800 underline">
              Read our complete medical disclosure
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
