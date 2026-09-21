import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#181E19] text-[#A0ACA0] pt-16 pb-12 border-t border-[#2D372E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2D372E]">
          
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#56B259] flex items-center justify-center text-white font-bold overflow-hidden shadow-sm">
                <Image src="/logo.svg" alt="Mental Health Day" width={36} height={36} className="object-contain p-1" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                mentalhealthday.org
              </span>
            </Link>
            <p className="text-sm text-[#A0ACA0] leading-relaxed max-w-sm">
              At mentalhealthday.org you'll find a holistic approach to mental well-being, weaving together mental, physical, spiritual, emotional, and environmental care. Small steps. Big leaps.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/mentalhealthly/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#242D25] hover:bg-[#56B259] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/Mental-Health-Day-105848761504929"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#242D25] hover:bg-[#56B259] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/mentalhealthly"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#242D25] hover:bg-[#56B259] text-white flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#A0ACA0] flex items-center gap-1 ml-2">
                <MapPin className="w-3.5 h-3.5 text-[#56B259]" />
                <span>Everywhere</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#56B259] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#56B259] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-[#56B259] transition-colors">Conditions Guide</Link>
              </li>
              <li>
                <Link href="/priorities" className="hover:text-[#56B259] transition-colors">Our Priorities</Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-[#56B259] transition-colors flex items-center gap-1.5 text-[#56B259] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Wellness Tools</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#56B259] transition-colors">Mental Health Blog</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Conditions */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Conditions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/conditions" className="hover:text-[#56B259] transition-colors">Anxiety Disorders</Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-[#56B259] transition-colors">Depression & Mood</Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-[#56B259] transition-colors">ADHD & Focus</Link>
              </li>
              <li>
                <Link href="/emdr-for-anxiety" className="hover:text-[#56B259] transition-colors">EMDR Therapy Guide</Link>
              </li>
              <li>
                <Link href="/brainspotting-vs-emdr" className="hover:text-[#56B259] transition-colors">Brainspotting vs EMDR</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Legal */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Support & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/contact-us" className="hover:text-[#56B259] transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/disclosure" className="hover:text-[#56B259] transition-colors">Medical Disclaimer</Link>
              </li>
              <li>
                <Link href="/privacy-notice" className="hover:text-[#56B259] transition-colors">Privacy Notice</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#56B259] transition-colors">Terms of Use</Link>
              </li>
              <li>
                <a href="tel:988" className="text-rose-400 hover:text-rose-300 font-bold flex items-center gap-1">
                  <span>988 Lifeline (24/7)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7A8A7B]">
          <p className="text-center md:text-left max-w-2xl">
            <strong>Medical Disclaimer:</strong> The information on MentalHealthDay.org is for educational purposes only and does not constitute psychiatric or medical diagnosis. Always consult a qualified healthcare provider.
          </p>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} MentalHealthDay.org. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
