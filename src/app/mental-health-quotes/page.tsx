'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Quote, 
  Sparkles, 
  Copy, 
  Check, 
  Search, 
  Heart, 
  Share2, 
  ArrowRight,
  Filter,
  CheckCircle2,
  BookOpen,
  Calendar,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import Newsletter from '@/components/Newsletter';

interface QuoteItem {
  id: number;
  quote: string;
  author: string;
  category: 'Depression & Hope' | 'Anxiety & Calm' | 'Ending Stigma' | 'Self-Care & Compassion' | 'Short & Powerful' | 'Workplace & Resilience';
  context?: string;
}

const allQuotes: QuoteItem[] = [
  // 1. Depression & Hope
  { id: 1, quote: "There is hope, even when your brain tells you there isn’t.", author: "John Green", category: "Depression & Hope", context: "Author of The Fault in Our Stars" },
  { id: 2, quote: "You are not your illness. You have an individual story to tell. You have a name, a history, a personality. Staying yourself is part of the battle.", author: "Julian Seifter", category: "Depression & Hope", context: "Harvard Medical School" },
  { id: 3, quote: "Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.", author: "Matt Haig", category: "Depression & Hope", context: "Reasons to Stay Alive" },
  { id: 4, quote: "The darkest hour has only sixty minutes.", author: "Morris Mandel", category: "Depression & Hope" },
  { id: 5, quote: "Even if happiness forgets you a little bit, never completely forget about it.", author: "Jacques Prévert", category: "Depression & Hope" },
  { id: 6, quote: "Ring the bells that still can ring. Forget your perfect offering. There is a crack in everything, that's how the light gets in.", author: "Leonard Cohen", category: "Depression & Hope" },
  { id: 7, quote: "I found that with depression, one of the most important things you could realize is that you're not alone. You're not the first to go through it.", author: "Dwayne Johnson", category: "Depression & Hope" },
  { id: 8, quote: "Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened.", author: "Helen Keller", category: "Depression & Hope" },
  { id: 9, quote: "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.", author: "Kahlil Gibran", category: "Depression & Hope" },
  { id: 10, quote: "If you are going through hell, keep going.", author: "Winston Churchill", category: "Depression & Hope" },
  { id: 11, quote: "The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.", author: "Charles Dickens", category: "Depression & Hope" },
  { id: 12, quote: "Although the world is full of suffering, it is also full of the overcoming of it.", author: "Helen Keller", category: "Depression & Hope" },

  // 2. Anxiety & Calm
  { id: 13, quote: "You don’t have to control your thoughts. You just have to stop letting them control you.", author: "Dan Millman", category: "Anxiety & Calm", context: "Way of the Peaceful Warrior" },
  { id: 14, quote: "Worrying does not empty tomorrow of its troubles, it empties today of its strength.", author: "Corrie ten Boom", category: "Anxiety & Calm" },
  { id: 15, quote: "We suffer more often in imagination than in reality.", author: "Seneca", category: "Anxiety & Calm", context: "Stoic philosopher" },
  { id: 16, quote: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.", author: "Thich Nhat Hanh", category: "Anxiety & Calm", context: "Zen Master" },
  { id: 17, quote: "Anxiety is the dizziness of freedom.", author: "Søren Kierkegaard", category: "Anxiety & Calm" },
  { id: 18, quote: "Present-moment awareness is the only antidote to existential dread.", author: "Alan Watts", category: "Anxiety & Calm" },
  { id: 19, quote: "Nothing diminishes anxiety faster than action.", author: "Walter Anderson", category: "Anxiety & Calm" },
  { id: 20, quote: "Trust yourself. You’ve survived a lot, and you’ll survive whatever is coming.", author: "Robert Tew", category: "Anxiety & Calm" },
  { id: 21, quote: "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.", author: "Oprah Winfrey", category: "Anxiety & Calm" },
  { id: 22, quote: "Rule number one is, don't sweat the small stuff. Rule number two is, it's all small stuff.", author: "Robert Eliot", category: "Anxiety & Calm" },
  { id: 23, quote: "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.", author: "Benjamin Franklin", category: "Anxiety & Calm" },
  { id: 24, quote: "Calm mind brings inner strength and self-confidence, so that's very important for good health.", author: "Dalai Lama", category: "Anxiety & Calm" },

  // 3. Ending Stigma & Speaking Up
  { id: 25, quote: "What mental health needs is more sunlight, more candor, and more unashamed conversation.", author: "Glenn Close", category: "Ending Stigma", context: "Founder of Bring Change to Mind" },
  { id: 26, quote: "Anything that’s human is mentionable, and anything that is mentionable can be more manageable. When we can talk about our feelings, they become less overwhelming, less upsetting, and less scary.", author: "Fred Rogers", category: "Ending Stigma" },
  { id: 27, quote: "Vulnerability is not winning or losing; it's having the courage to show up and be seen when we have no control over the outcome.", author: "Brené Brown", category: "Ending Stigma", context: "Daring Greatly" },
  { id: 28, quote: "I think the saddest people always try their hardest to make people happy because they know what it’s like to feel absolutely worthless and they don’t want anyone else to feel like that.", author: "Robin Williams", category: "Ending Stigma" },
  { id: 29, quote: "There is no shame in having a mental illness. It is a biological illness, just like diabetes or cancer.", author: "Dr. Thomas Insel", category: "Ending Stigma", context: "Former NIMH Director" },
  { id: 30, quote: "Everyone you meet is fighting a battle you know nothing about. Be kind. Always.", author: "Ian Maclaren", category: "Ending Stigma" },
  { id: 31, quote: "Mental illness is nothing to be ashamed of, but stigma and bias shame us all.", author: "Bill Clinton", category: "Ending Stigma" },
  { id: 32, quote: "My brain and my heart are really important to me. I don't know why I wouldn't seek help to have those things be as healthy as my teeth.", author: "Kerry Washington", category: "Ending Stigma" },
  { id: 33, quote: "It’s okay not to be okay. It’s okay to ask for help.", author: "Naomi Osaka", category: "Ending Stigma", context: "4-time Grand Slam Champion" },
  { id: 34, quote: "The humanity we all share is more important than the mental illness we may face.", author: "Elyn Saks", category: "Ending Stigma", context: "The Center Cannot Hold" },
  { id: 35, quote: "Real strength is not holding it all together; it is having the bravery to admit when you are falling apart.", author: "Kevin Love", category: "Ending Stigma", context: "NBA Champion" },
  { id: 36, quote: "No one would ever say to someone with a broken bone: 'Just pull yourself together.' Why do we say it to those with a struggling brain?", author: "Stephen Fry", category: "Ending Stigma" },

  // 4. Self-Care & Compassion
  { id: 37, quote: "Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.", author: "Audre Lorde", category: "Self-Care & Compassion" },
  { id: 38, quote: "Self-care is not selfish. You cannot serve from an empty vessel.", author: "Eleanor Brown", category: "Self-Care & Compassion" },
  { id: 39, quote: "You yourself, as much as anybody in the entire universe, deserve your love and affection.", author: "Buddha", category: "Self-Care & Compassion" },
  { id: 40, quote: "Talk to yourself like you would to someone you love.", author: "Brené Brown", category: "Self-Care & Compassion" },
  { id: 41, quote: "To love oneself is the beginning of a lifelong romance.", author: "Oscar Wilde", category: "Self-Care & Compassion" },
  { id: 42, quote: "Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day, listening to the murmur of the water, is by no means a waste of time.", author: "John Lubbock", category: "Self-Care & Compassion" },
  { id: 43, quote: "Almost everything will work again if you unplug it for a few minutes, including you.", author: "Anne Lamott", category: "Self-Care & Compassion" },
  { id: 44, quote: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden", category: "Self-Care & Compassion" },
  { id: 45, quote: "Nourishing yourself in a way that helps you blossom in the direction you want to go is attainable, and you are worth the effort.", author: "Deborah Day", category: "Self-Care & Compassion" },
  { id: 46, quote: "Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity.", author: "Unknown", category: "Self-Care & Compassion" },
  { id: 47, quote: "Compassion for others begins with kindness to yourself.", author: "Pema Chödrön", category: "Self-Care & Compassion" },
  { id: 48, quote: "Give yourself permission to pause and take a breath without apologizing.", author: "MentalHealthDay.org", category: "Self-Care & Compassion" },

  // 5. Short & Powerful
  { id: 49, quote: "This too shall pass.", author: "Persian Adage", category: "Short & Powerful" },
  { id: 50, quote: "You are stronger than you know.", author: "Robin Milne", category: "Short & Powerful" },
  { id: 51, quote: "One day at a time. One breath at a time.", author: "Ancient Proverb", category: "Short & Powerful" },
  { id: 52, quote: "Healing is not linear.", author: "Therapy Proverb", category: "Short & Powerful" },
  { id: 53, quote: "Your story isn't over yet.", author: "Project Semicolon", category: "Short & Powerful" },
  { id: 54, quote: "Peace begins with a pause.", author: "Tara Brach", category: "Short & Powerful" },
  { id: 55, quote: "Small steps lead to big leaps.", author: "MentalHealthDay.org", category: "Short & Powerful" },
  { id: 56, quote: "Breathe in peace, exhale tension.", author: "Mindfulness Proverb", category: "Short & Powerful" },
  { id: 57, quote: "Be patient with yourself; nothing in nature blooms all year.", author: "Donna Hibbert", category: "Short & Powerful" },
  { id: 58, quote: "You survived 100% of your worst days so far.", author: "Unknown", category: "Short & Powerful" },
  { id: 59, quote: "Light tomorrow with today.", author: "Elizabeth Barrett Browning", category: "Short & Powerful" },
  { id: 60, quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey", category: "Short & Powerful" },

  // 6. Workplace & Resilience
  { id: 61, quote: "Burnout is not a badge of honor. It is a sign you need to recalibrate your boundaries.", author: "Arianna Huffington", category: "Workplace & Resilience", context: "Thrive Global" },
  { id: 62, quote: "Leadership is not about being in charge. It is about taking care of those in your charge.", author: "Simon Sinek", category: "Workplace & Resilience", context: "Leaders Eat Last" },
  { id: 63, quote: "Do not confuse having a career with having a life.", author: "Hillary Clinton", category: "Workplace & Resilience" },
  { id: 64, quote: "Never get so busy making a living that you forget to make a life.", author: "Dolly Parton", category: "Workplace & Resilience" },
  { id: 65, quote: "A company’s greatest asset is not its software or its balance sheet; it is the mental clarity and well-being of its people.", author: "MentalHealthDay.org", category: "Workplace & Resilience" },
  { id: 66, quote: "You can’t do good work when you don’t feel good inside.", author: "Satya Nadella", category: "Workplace & Resilience", context: "CEO of Microsoft" },
  { id: 67, quote: "Taking a mental health day is not skipping work; it is maintaining the engine that drives your work.", author: "Unknown", category: "Workplace & Resilience" },
  { id: 68, quote: "Resilience is accepting your new reality, even if it's less good than the one you had before.", author: "Elizabeth Edwards", category: "Workplace & Resilience" },
  { id: 69, quote: "Stress should be a powerful driving force, not an obstacle.", author: "Bill Phillips", category: "Workplace & Resilience" },
  { id: 70, quote: "The greatest weapon against stress is our ability to choose one thought over another.", author: "William James", category: "Workplace & Resilience", context: "Father of American Psychology" },
  { id: 71, quote: "Balance is not something you find, it's something you create.", author: "Jana Kingsford", category: "Workplace & Resilience" },
  { id: 72, quote: "Rest before you are exhausted. Replenish before you are depleted.", author: "MentalHealthDay.org", category: "Workplace & Resilience" },
];

export default function MentalHealthQuotesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const categories = ['All', 'Depression & Hope', 'Anxiety & Calm', 'Ending Stigma', 'Self-Care & Compassion', 'Short & Powerful', 'Workplace & Resilience'];

  const filteredQuotes = useMemo(() => {
    return allQuotes.filter((q) => {
      const matchesCategory = selectedCategory === 'All' || q.category === selectedCategory;
      const matchesSearch = 
        q.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (q.context && q.context.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopy = (id: number, text: string, author: string) => {
    navigator.clipboard.writeText(`"${text}" — ${author} (via mentalhealthday.org)`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the best mental health quotes for overcoming depression?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '"There is hope, even when your brain tells you there isn’t" by John Green and "You are not your illness. You have an individual story to tell" by Julian Seifter are two of the most popular quotes for depression.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can reading mental health quotes help reduce stress?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reading uplifting mental health quotes activates cognitive reframing, reminding the prefrontal cortex that uncomfortable emotions are temporary, fostering self-compassion and reducing feelings of isolation.',
        },
      },
    ],
  };

  return (
    <div className="space-y-0 text-[#5F695F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-[#181E19] text-white py-20 border-b border-[#2D372E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#56B259]/20 text-[#56B259] text-xs font-bold uppercase tracking-wider border border-[#56B259]/40">
            <Quote className="w-4 h-4" />
            <span>72+ Curated Quotes • Updated 2026</span>
          </div>
          <div className="w-12 h-1 bg-[#56B259] rounded-full mx-auto" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            72 Powerful Mental Health Quotes <br className="hidden sm:block" />to Inspire & Uplift [2026]
          </h1>
          <p className="text-lg text-[#E2EBE2] leading-relaxed max-w-3xl mx-auto">
            A comprehensive, searchable collection of evidence-based, inspirational quotes on overcoming depression, calming anxiety, ending stigma, and sustaining workplace resilience.
          </p>
          <div className="pt-2 text-xs text-[#A0ACA0] flex items-center justify-center gap-2">
            <span>Reviewed by: MentalHealthDay.org Editorial Board</span>
            <span>•</span>
            <span>Free to share & cite</span>
          </div>
        </div>
      </section>

      {/* Quick Summary / Answer Box (David Quaid Top-of-Fold Rule) */}
      <section className="py-8 bg-white border-b border-[#E8ECE8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[#F8FAF8] border border-[#E8ECE8] space-y-2">
            <div className="flex items-center gap-2 text-[#181E19] font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#56B259]" />
              <span>Quick Takeaways & Highlights:</span>
            </div>
            <p className="text-xs text-[#5F695F] leading-relaxed">
              Words have neurological power. Research in cognitive reframing indicates that reading and meditating on empowering mantras calms sympathetic nervous system arousal. Use the interactive filters below to find quotes by category, copy text with one click, or use our social templates.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Interactive Filter Bar */}
      <section className="py-6 bg-white border-b border-[#E8ECE8] sticky top-20 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A8A7B]" />
            <input
              type="text"
              placeholder="Search quotes by author, phrase (e.g. 'John Green', 'anxiety', 'strength')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#F8FAF8] border border-[#E8ECE8] rounded-full text-sm text-[#181E19] placeholder:text-[#7A8A7B] focus:outline-none focus:ring-2 focus:ring-[#56B259]"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#56B259] text-white shadow-xs'
                    : 'bg-[#F8FAF8] text-[#5F695F] border border-[#E8ECE8] hover:bg-slate-100 hover:text-[#181E19]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Quotes Grid */}
      <section className="py-16 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex items-center justify-between text-sm text-[#7A8A7B]">
            <span>Showing <strong>{filteredQuotes.length}</strong> of {allQuotes.length} quotes</span>
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-[#56B259] font-bold hover:underline">
                Clear search
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuotes.map((q) => (
              <article
                key={q.id}
                className="bg-white rounded-3xl p-8 border border-[#E8ECE8] shadow-2xs hover:shadow-md hover:border-[#56B259] transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#56B259] bg-[#EBF7EC] px-2.5 py-0.5 rounded-full">
                      {q.category}
                    </span>
                    <button
                      onClick={() => handleCopy(q.id, q.quote, q.author)}
                      className="p-1.5 rounded-lg text-[#7A8A7B] hover:text-[#56B259] hover:bg-[#EBF7EC] transition-colors"
                      title="Copy quote with citation"
                    >
                      {copiedId === q.id ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <blockquote className="text-lg font-bold text-[#181E19] leading-snug">
                    "{q.quote}"
                  </blockquote>
                </div>

                <div className="pt-3 border-t border-[#E8ECE8] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#181E19] block">— {q.author}</span>
                    {q.context && (
                      <span className="text-[11px] text-[#7A8A7B]">{q.context}</span>
                    )}
                  </div>
                  {copiedId === q.id && (
                    <span className="text-[11px] font-bold text-emerald-600 animate-pulse">
                      Copied!
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Social Caption Pack */}
      <section className="py-16 bg-white border-t border-[#E8ECE8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
              Social Media Pack
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#181E19]">
              Copy-Paste Social Captions
            </h2>
            <p className="text-sm text-[#5F695F]">
              Ready-to-use social posts for LinkedIn, Instagram, and X with hashtags.
            </p>
          </div>

          <div className="bg-[#181E19] text-[#E2EBE2] p-8 rounded-3xl border border-[#2D372E] space-y-4 font-mono text-xs">
            <p className="text-[#56B259] font-bold">Template 1 (Ending Stigma):</p>
            <p className="leading-relaxed">
              "What mental health needs is more sunlight, more candor, and more unashamed conversation." — Glenn Close
              <br /><br />
              Prioritizing your brain is not a luxury; it is foundational health. If you are struggling today, remember you are never alone.
              <br /><br />
              Explore 70+ inspiring quotes & resources at https://mentalhealthday.org/mental-health-quotes
              <br /><br />
              #MentalHealthMatters #EndTheStigma #MindBodyHealth
            </p>
          </div>
        </div>
      </section>

      {/* Internal Navigation Links */}
      <section className="py-16 bg-[#F8FAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-[#181E19]">Explore More Mental Health Resources</h3>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link href="/mental-health-activities" className="inline-flex items-center gap-2 bg-[#56B259] text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider">
              <span>25 Workplace Activities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/statistics" className="inline-flex items-center gap-2 bg-[#181E19] text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider">
              <span>2026 Research & Statistics</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/screening" className="inline-flex items-center gap-2 bg-white border border-[#E8ECE8] text-[#181E19] font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider">
              <span>Clinical Screeners</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Newsletter />
      </section>

    </div>
  );
}
