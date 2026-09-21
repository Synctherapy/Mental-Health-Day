import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Lightbulb, 
  Heart, 
  Star, 
  CheckCircle2, 
  Play, 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin, 
  ChevronRight,
  Sparkles 
} from 'lucide-react';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 6);

  const curatedLinksCol1 = [
    { text: '13 Habits of Mentally Strong People', href: '/things-mentally-strong-people-do' },
    { text: 'What to Expect in Your First EMDR Session', href: '/what-happens-in-first-emdr-session' },
    { text: 'Can You Do EMDR on Yourself at Home?', href: '/can-you-do-emdr-on-yourself-at-home' },
    { text: 'EMDR vs CBT: Which Is Better for Trauma?', href: '/emdr-vs-cbt' },
    { text: 'BetterHelp Online Therapy Review (2026)', href: '/betterhelp' },
  ];

  const curatedLinksCol2 = [
    { text: 'Mental Health Day Off Email Generator', href: '/mental-health-day-off-email-generator' },
    { text: 'Free Clinical Anxiety & Depression Screener', href: '/screening' },
    { text: 'EMDR for Anxiety: How It Works & Cost', href: '/emdr-for-anxiety' },
    { text: 'How to Calm Anxious Attachment', href: '/how-to-self-soothe-anxious-attachment' },
    { text: 'Depression Treatments That Actually Work', href: '/depression-treatments' },
  ];

  return (
    <div className="space-y-0 text-[#5F695F]">
      
      {/* ========================================================================= */}
      {/* SECTION 1: HERO (Exact Elementor Section 1666181 with background #181E19) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#181E19] text-white pt-24 pb-28 overflow-hidden border-b border-[#2D372E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Titles */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#E2EBE2] font-semibold">
                This is mentalhealthday.org
              </span>
              <div className="w-12 h-1 bg-[#56B259] rounded-full" />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
                Small steps.<br />
                Big leaps.
              </h1>
            </div>

            {/* Right Column: Body paragraph & CTA */}
            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              <p className="text-base sm:text-lg text-[#E2EBE2] leading-relaxed">
                At <strong className="text-white">mentalhealthday.org</strong> you'll find a holistic approach to mental well-being. To improve mental illness we need to <span className="text-white font-medium">weave the mental, physical, spiritual, emotional, and environmental aspects of your mental well-being together.</span> If each of us take small steps to improve these, we can create big leaps in the world of mental health.
              </p>

              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#56B259] hover:bg-[#479E4A] text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:scale-105 transition-all text-xs uppercase tracking-wider"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Social Icons & Location tag */}
              <div className="pt-6 flex items-center justify-between border-t border-[#2D372E] text-xs text-[#A0ACA0]">
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/mentalhealthly/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#242D25] hover:bg-[#56B259] text-white flex items-center justify-center transition-colors shadow-xs"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/Mental-Health-Day-105848761504929"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#242D25] hover:bg-[#56B259] text-white flex items-center justify-center transition-colors shadow-xs"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com/mentalhealthly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#242D25] hover:bg-[#56B259] text-white flex items-center justify-center transition-colors shadow-xs"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center gap-1.5 text-[#E2EBE2] font-semibold">
                  <MapPin className="w-4 h-4 text-[#56B259]" />
                  <span>Everywhere</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: CONDITIONS (Exact Elementor Section 77b9258) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white border-b border-[#E8ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181E19]">
              Conditions
            </h2>
            <p className="text-base text-[#5F695F] leading-relaxed">
              If you have behavioural, emotional or mental health concerns that affect any aspect of your life, we can help find a solution that works for your unique situation.
            </p>
            <div className="pt-2">
              <Link
                href="/conditions"
                className="inline-flex items-center gap-2 bg-[#56B259] hover:bg-[#479E4A] text-white font-bold px-7 py-3 rounded-full shadow-xs hover:scale-105 transition-all text-xs uppercase tracking-wider"
              >
                <span>View All Conditions</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 3 Character Cutout Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            
            {/* Card 1: Anxiety */}
            <Link
              href="/conditions"
              className="group bg-[#F8FAF8] rounded-3xl p-8 border border-[#E8ECE8] hover:border-[#56B259] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="relative h-60 w-full mb-4 overflow-hidden">
                <Image
                  src="/wp-content/uploads/2021/01/anxiety-cutout-retina.png"
                  alt="Anxiety condition guide"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#181E19] group-hover:text-[#56B259] transition-colors">
                Anxiety
              </h3>
            </Link>

            {/* Card 2: Depression */}
            <Link
              href="/conditions"
              className="group bg-[#F8FAF8] rounded-3xl p-8 border border-[#E8ECE8] hover:border-[#56B259] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="relative h-60 w-full mb-4 overflow-hidden">
                <Image
                  src="/wp-content/uploads/2021/01/depression-cutout-retina.png"
                  alt="Depression condition guide"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#181E19] group-hover:text-[#56B259] transition-colors">
                Depression
              </h3>
            </Link>

            {/* Card 3: ADHD */}
            <Link
              href="/conditions"
              className="group bg-[#F8FAF8] rounded-3xl p-8 border border-[#E8ECE8] hover:border-[#56B259] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="relative h-60 w-full mb-4 overflow-hidden">
                <Image
                  src="/wp-content/uploads/2021/01/adhd-cutout-retina.png"
                  alt="ADHD condition guide"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#181E19] group-hover:text-[#56B259] transition-colors">
                ADHD
              </h3>
            </Link>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: OUR STORY (Exact Elementor Section 4f75758 + Pointing Green Jumper) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
                Our Story
              </span>
              <div className="w-12 h-1 bg-[#56B259] rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181E19] leading-tight">
                Supporting mind and body
              </h2>
              <div className="space-y-4 text-[#5F695F] text-base leading-relaxed">
                <p>
                  We know that the mind-body connection is real but that doesn't mean it's easy to understand. When it comes to gaining a deeper insight into your mental health and overall well-being, you need clear and concise information from experts who know what they're talking about and genuinely care about your wellbeing.
                </p>
                <p>
                  We want to transform how you explore your mental health and psychology topics in a way that's approachable, personal, and stigma-free. We want to break down the complex health jargon, reflect on the latest research, and present the most accurate information that empowers you to take an active role in understanding how your brain and mind work.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#56B259] hover:bg-[#479E4A] text-white font-bold px-8 py-3.5 rounded-full shadow-xs hover:scale-105 transition-all text-xs uppercase tracking-wider"
                >
                  <span>Read More</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-xl border border-[#E8ECE8]">
                <Image
                  src="/wp-content/uploads/2021/01/green-jumper-story-retina.jpg"
                  alt="Man pointing and smiling at mental health day org"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: 3 PILLARS (Exact Elementor Section c334c43) */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white border-y border-[#E8ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Box 1 */}
            <div className="flex gap-5 items-start p-8 rounded-3xl bg-[#F8FAF8] border border-[#E8ECE8] shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#EBF7EC] text-[#56B259] flex items-center justify-center shrink-0 shadow-2xs">
                <Lightbulb className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#181E19]">
                  Latest Research
                </h3>
                <p className="text-sm text-[#5F695F] leading-relaxed">
                  We're dedicated to finding and utilizing the latest research to improve the function of brains.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex gap-5 items-start p-8 rounded-3xl bg-[#F8FAF8] border border-[#E8ECE8] shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#EBF7EC] text-[#56B259] flex items-center justify-center shrink-0 shadow-2xs">
                <Heart className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#181E19]">
                  Whole Person
                </h3>
                <p className="text-sm text-[#5F695F] leading-relaxed">
                  True health is much more than the absence of disease. It is a total state of wellbeing, including physical, mental, emotional, spiritual and social components.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex gap-5 items-start p-8 rounded-3xl bg-[#F8FAF8] border border-[#E8ECE8] shadow-2xs hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#EBF7EC] text-[#56B259] flex items-center justify-center shrink-0 shadow-2xs">
                <Star className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#181E19]">
                  Quality sourced
                </h3>
                <p className="text-sm text-[#5F695F] leading-relaxed">
                  Our goal is to provide you with information, products, and connections that improve your mental and physical well-being.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: MENTAL WELLNESS SPACE (Exact Elementor Section 6db831e + Video) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
              Our Mental wellness space
            </span>
            <div className="w-12 h-1 bg-[#56B259] rounded-full mx-auto" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181E19]">
              The Home To Improve Your Brain.<br />Naturally. Sustainably.
            </h2>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#56B259] hover:bg-[#479E4A] text-white font-bold px-7 py-3 rounded-full shadow-xs hover:scale-105 transition-all text-xs uppercase tracking-wider"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Video Container matching original */}
          <div className="relative h-[340px] sm:h-[520px] w-full rounded-3xl overflow-hidden shadow-xl border border-[#E8ECE8] bg-slate-900 group">
            <Image
              src="/wp-content/uploads/2020/12/horticulture-greenhouse-video-thumbnail-1-1024x684.jpg"
              alt="Mental health day brain health greenhouse"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover opacity-90 group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <a
                href="https://www.youtube.com/watch?v=ga-MniJxQz8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-full bg-[#56B259] hover:bg-[#479E4A] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
                aria-label="Play video"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </a>
            </div>
          </div>

          {/* Description & Curated Checkmark Links matching original */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
            
            <div className="lg:col-span-6 space-y-4">
              <p className="text-base sm:text-lg text-[#5F695F] leading-relaxed">
                You're not stuck with the brain you have, you can make it better. If we want to end mental illness, it has to begin with a revolution in brain health.
              </p>
              <p className="text-base text-[#5F695F] leading-relaxed">
                Though the rates of conditions like depression, anxiety, bipolar disorders, addictions, PTSD, and ADHD are skyrocketing, the standard treatment and success rates in treating these conditions have barely changed in the last 70 years.
              </p>
            </div>

            <div className="lg:col-span-6">
              <h4 className="text-lg font-bold text-[#181E19] mb-4">
                Click to learn more
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-2.5">
                  {curatedLinksCol1.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="flex items-start gap-2 text-sm text-[#181E19] hover:text-[#56B259] transition-colors font-semibold"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#56B259] shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </Link>
                  ))}
                </div>
                <div className="space-y-2.5">
                  {curatedLinksCol2.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="flex items-start gap-2 text-sm text-[#181E19] hover:text-[#56B259] transition-colors font-semibold"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#56B259] shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: OUR PRIORITIES (Exact Elementor Section) */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white border-y border-[#E8ECE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
                Our Priorities
              </span>
              <div className="w-12 h-1 bg-[#56B259] rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181E19]">
                What We're all About
              </h2>
            </div>
            <Link
              href="/priorities"
              className="inline-flex items-center gap-2 bg-[#56B259] hover:bg-[#479E4A] text-white font-bold px-7 py-3 rounded-full shadow-xs hover:scale-105 transition-all text-xs uppercase tracking-wider"
            >
              <span>View All Priorities</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Priority 1 */}
            <div className="bg-[#F8FAF8] p-8 rounded-3xl border border-[#E8ECE8] space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
                Priority 01
              </span>
              <h3 className="text-2xl font-bold text-[#181E19]">
                Reducing stigma
              </h3>
              <p className="text-sm text-[#5F695F] leading-relaxed">
                Despite how prevalent these conditions are, being diagnosed with a mental illness or psychiatric disorder insidiously taints or stains everyone who struggles with perceived issues of the mind.
              </p>
            </div>

            {/* Priority 2 */}
            <div className="bg-[#F8FAF8] p-8 rounded-3xl border border-[#E8ECE8] space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
                Priority 02
              </span>
              <h3 className="text-2xl font-bold text-[#181E19]">
                Improving brain health
              </h3>
              <p className="text-sm text-[#5F695F] leading-relaxed">
                We want to educate everyone on basic brain health, so they can make smart decisions when it comes to how they treat their bodies. We know that brain health is central to all health, wellness and success.
              </p>
            </div>

            {/* Priority 3 */}
            <div className="bg-[#F8FAF8] p-8 rounded-3xl border border-[#E8ECE8] space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
                Priority 03
              </span>
              <h3 className="text-2xl font-bold text-[#181E19]">
                Suicide Prevention
              </h3>
              <p className="text-sm text-[#5F695F] leading-relaxed">
                Every day, 10 people in Canada die from suicide. The MHCC is working to build capacity across the country to address this silent crisis. Reducing suicides means empowering and supporting people to effectively intervene.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: FROM THE BLOG */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#56B259]">
                From The Blog
              </span>
              <div className="w-12 h-1 bg-[#56B259] rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181E19]">
                Latest Mental Health Guides
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#56B259] hover:underline"
            >
              <span>View All {allPosts.length} Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: NEWSLETTER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Newsletter />
      </section>

    </div>
  );
}
