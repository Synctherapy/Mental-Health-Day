'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  GraduationCap, 
  Users, 
  Heart, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Download,
  Calendar,
  Layers,
  Smile,
  Compass,
  FileText
} from 'lucide-react';
import Newsletter from '@/components/Newsletter';

interface Activity {
  id: number;
  title: string;
  category: 'Workplace & Corporate' | 'Remote & Distributed' | 'Schools & Classrooms' | 'Personal & Solo';
  time: string;
  materials: string;
  summary: string;
  steps: string[];
  tips: string;
}

const allActivities: Activity[] = [
  // 1. Workplace & Corporate (1–8)
  {
    id: 1,
    title: "1. 'No Internal Meetings' Focus & Restoration Day",
    category: "Workplace & Corporate",
    time: "Full Day (October 10)",
    materials: "Calendar announcement, Slack notification",
    summary: "Clear all internal team meetings for the day, allowing workers uninterrupted focus, deep work, and guilt-free mental breathers.",
    steps: [
      "Send a company-wide announcement 1 week in advance declaring October 10 meeting-free.",
      "Instruct managers to decline/reschedule non-urgent standing check-ins.",
      "Provide optional asynchronous reflection prompts in team channels at 9:00 AM.",
      "Encourage employees to block 60–90 minutes for personal wellness (walking, reading, stretching)."
    ],
    tips: "Executive buy-in is vital. Have C-suite executives publicly announce their meeting-free calendar."
  },
  {
    id: 2,
    title: "2. Executive Vulnerability & Listening Town Hall",
    category: "Workplace & Corporate",
    time: "45–60 Minutes",
    materials: "Fireside setup or Zoom webinar, anonymous Q&A tool (Slido/Mentimeter)",
    summary: "A transparent session where executive leaders share personal stories of navigating burnout and work-life tension, followed by open listening.",
    steps: [
      "Select 2–3 leaders prepared to share candid, authentic experiences without corporate spin.",
      "Open an anonymous submission board for team members to voice workplace stressors.",
      "Dedicate the final 20 minutes to highlighting mental health resources (EAP, therapy stipends, leave policies).",
      "Follow up with a summarized action plan within 48 hours."
    ],
    tips: "Focus on psychological safety; acknowledge organizational shortcomings without defensiveness."
  },
  {
    id: 3,
    title: "3. 'Walk & Talk' 1-on-1 Meeting Policy",
    category: "Workplace & Corporate",
    time: "30 Minutes",
    materials: "Headphones, walking shoes",
    summary: "Shift all 1-on-1 conversations from video/conference rooms to outdoor phone walks to encourage movement and reduce screen fatigue.",
    steps: [
      "Designate Wednesday or October 10 as Walk & Talk Day.",
      "Pair colleagues for casual, non-project check-ins ('How are you really doing?').",
      "Encourage a brisk 20–30 minute stroll in green spaces or local parks."
    ],
    tips: "Studies show walking side-by-side lowers anxiety and encourages deeper emotional honesty."
  },
  {
    id: 4,
    title: "4. Professional Somatic & Mindfulness Workshop",
    category: "Workplace & Corporate",
    time: "45 Minutes",
    materials: "Guest facilitator or licensed therapist, quiet room or livestream",
    summary: "Hire an external clinical psychologist or somatic practitioner to teach nervous system calming, box-breathing, and desk ergonomics.",
    steps: [
      "Book a qualified clinical facilitator 2–3 weeks prior to October 10.",
      "Structure the session: 15 mins neuroscience theory, 20 mins experiential breathwork, 10 mins Q&A.",
      "Distribute a 1-page PDF summary cheat sheet for employees' desks."
    ],
    tips: "Record the session so shift workers and absent team members can access it on demand."
  },
  {
    id: 5,
    title: "5. Employee Wellness Stipend Distribution",
    category: "Workplace & Corporate",
    time: "All Day",
    materials: "Expensify or payroll credit ($50–$150/employee)",
    summary: "Provide a direct, one-time wellness reimbursement for books, meditation apps, massage therapy, fitness equipment, or mental health days.",
    steps: [
      "Establish simple, broad eligibility criteria (anything supporting brain/body wellness).",
      "Announce the credit on October 10 with a deadline to submit by month-end.",
      "Create a voluntary Slack/Teams channel where coworkers share what books or wellness habits they tried."
    ],
    tips: "Keep reimbursement approvals friction-free to maximize employee participation."
  },
  {
    id: 6,
    title: "6. Mental Health Resource Audit & EAP Refresher",
    category: "Workplace & Corporate",
    time: "20 Minutes (Asynchronous)",
    materials: "Benefits portal link, updated infographic",
    summary: "Demystify corporate Employee Assistance Programs (EAPs), clarifying how many free counseling sessions are covered and ensuring total confidentiality.",
    steps: [
      "Create a simplified, jargon-free 1-page graphic on how to access therapy confidentially.",
      "Highlight specific provider networks and family member eligibility.",
      "Address common fears: confirm HR receives zero individualized usage data."
    ],
    tips: "Average EAP utilization is under 5% largely due to stigma and confidentiality confusion."
  },
  {
    id: 7,
    title: "7. Company-Wide Gratitude & Recognition Chain",
    category: "Workplace & Corporate",
    time: "15 Minutes",
    materials: "Kudos board, Slack #shoutouts channel, sticky notes",
    summary: "Encourage every employee to send 2 genuine, specific notes of appreciation to colleagues who supported them during difficult weeks.",
    steps: [
      "Kick off the morning with an executive prompt on the team chat.",
      "Provide physical affirmation cards in office breakrooms.",
      "Highlight non-metric contributions (empathy, teamwork, reliability)."
    ],
    tips: "Neuroscience proves expressing gratitude triggers immediate dopamine and oxytocin release."
  },
  {
    id: 8,
    title: "8. Healthy Brain Fuel Catering & Nutrition Hour",
    category: "Workplace & Corporate",
    time: "Lunchtime",
    materials: "Nutrient-dense catering (berries, walnuts, dark leafy greens, herbal teas)",
    summary: "Replace sugary donuts and processed snacks with brain-nourishing foods known to support gut-microbiome and mental resilience.",
    steps: [
      "Coordinate with local catering for anti-inflammatory, whole-food lunch spreads.",
      "Display small informative cards explaining how omega-3s and antioxidants support serotonin synthesis.",
      "Host an informal social lunch where work talk is politely discouraged."
    ],
    tips: "Pair nutrition with hydration stations featuring herbal adaptogenic teas (chamomile, ashwagandha)."
  },

  // 2. Remote & Distributed Teams (9–14)
  {
    id: 9,
    title: "9. Asynchronous 'Mental Weather Report' Slack Thread",
    category: "Remote & Distributed",
    time: "5 Minutes",
    materials: "Team Slack or Microsoft Teams channel",
    summary: "A low-pressure, creative way for remote coworkers to signal their capacity using weather metaphors without over-explaining.",
    steps: [
      "Post a morning prompt: 'What is your mental weather today? ☀️ Sunny, ⛅ Partly Cloudy, 🌧️ Rainy, ⛈️ Stormy'.",
      "Encourage teammates to use emojis to express their bandwidth.",
      "Train managers to reach out privately with support if someone posts stormy/rainy icons."
    ],
    tips: "Remind workers that all weather states are normal and welcomed."
  },
  {
    id: 10,
    title: "10. Virtual 'Coffee & Furry Friends' Pet Social",
    category: "Remote & Distributed",
    time: "30 Minutes",
    materials: "Zoom / Google Meet",
    summary: "An informal video call where remote colleagues introduce their pets, share funny stories, and socialize without work agendas.",
    steps: [
      "Schedule a 30-minute afternoon session.",
      "Encourage team members to bring their dogs, cats, or house plants on camera.",
      "Run light icebreakers (e.g., 'What is your pet's funny quirk?')."
    ],
    tips: "Animal interaction has been clinically shown to lower blood pressure and cortisol levels."
  },
  {
    id: 11,
    title: "11. Remote 'Digital Sunset' Challenge",
    category: "Remote & Distributed",
    time: "Evening",
    materials: "Device settings, evening routine",
    summary: "Challenge the remote workforce to disconnect from all work email, Slack, and notifications at precisely 5:00 PM on October 10.",
    steps: [
      "Leadership sends a broadcast at 4:45 PM reminding everyone to sign off.",
      "Mute all organizational channels and email servers after 5:30 PM.",
      "Provide a list of offline evening ideas (cooking, journaling, reading)."
    ],
    tips: "Remote workers report 2.5 hours longer working days without firm boundary setting."
  },
  {
    id: 12,
    title: "12. Guided Virtual Sound Bath or Lo-Fi Co-Working Hour",
    category: "Remote & Distributed",
    time: "60 Minutes",
    materials: "Livestream link with relaxing ambient music / binaural beats",
    summary: "An optional drop-in virtual room with calming ambient background music where remote workers work quietly together without speaking.",
    steps: [
      "Open an ambient co-working video room with cameras optional.",
      "Stream relaxing 432Hz calming soundscapes or gentle lo-fi beats.",
      "Provide a 5-minute guided deep breath at the halfway point."
    ],
    tips: "Provides parallel connection and reduces remote isolation without social battery drain."
  },
  {
    id: 13,
    title: "13. Remote Book Club: Mental Wellness Literature",
    category: "Remote & Distributed",
    time: "45 Minutes",
    materials: "Selected book or podcast episode (e.g., Matt Haig, Brené Brown)",
    summary: "Host a discussion on a curated chapter or podcast episode focusing on emotional regulation and vulnerability.",
    steps: [
      "Distribute a 20-minute podcast episode or short article 1 week in advance.",
      "Host a lunch breakout session to discuss key takeaways.",
      "Compile a shared digital library of recommended wellness books."
    ],
    tips: "Keep discussions grounded in personal reflection rather than literary critique."
  },
  {
    id: 14,
    title: "14. Desk Ergonomics & Posture Alignment Workshop",
    category: "Remote & Distributed",
    time: "20 Minutes",
    materials: "Webcam, desk chair",
    summary: "A physiotherapist or fitness coach demonstrates posture correction and tension-release exercises for laptop workers.",
    steps: [
      "Demonstrate neck stretches, trap releases, and chest openers for computer workers.",
      "Review proper monitor height and lumbar support setups.",
      "Teach 30-second micro-breaks to perform between tasks."
    ],
    tips: "Chronic physical tension in the neck and shoulders directly amplifies anxiety signals to the brain."
  },

  // 3. Schools & Classrooms (15–20)
  {
    id: 15,
    title: "15. The 'Emotion Wheel' Morning Check-In",
    category: "Schools & Classrooms",
    time: "15 Minutes",
    materials: "Printable Emotion Wheel poster / cards",
    summary: "Teach students to move beyond 'fine' or 'bad' by identifying specific secondary emotions (e.g., overwhelmed, optimistic, vulnerable).",
    steps: [
      "Hand out visual emotion wheels to each student.",
      "Ask students to point to their current emotional quadrant.",
      "Discuss how naming an emotion ('name it to tame it') calms the amygdala."
    ],
    tips: "Ensure students know there are zero wrong or punished emotions."
  },
  {
    id: 16,
    title: "16. Classroom 'Calming Corner' Setup",
    category: "Schools & Classrooms",
    time: "Ongoing",
    materials: "Bean bag, noise-canceling headphones, tactile sensory toys, grounding cards",
    summary: "Designate a safe, sensory-friendly corner where students can independently self-soothe when feeling overstimulated or distressed.",
    steps: [
      "Designate a quiet nook away from high-traffic classroom doors.",
      "Equip with visual 5-4-3-2-1 sensory grounding cards and tactile squeeze balls.",
      "Set a simple 5-minute timer policy for students to reset and rejoin the group."
    ],
    tips: "Position the calming corner as a healthy regulation tool, never as a disciplinary timeout."
  },
  {
    id: 17,
    title: "17. 'Words of Kindness' Hallway Affirmation Wall",
    category: "Schools & Classrooms",
    time: "All Day",
    materials: "Butcher paper, colorful sticky notes, markers",
    summary: "An interactive school-wide wall where students and faculty post anonymous notes of encouragement for anyone who is having a tough day.",
    steps: [
      "Mount large banner paper in central hallways or cafeterias.",
      "Provide pre-printed prompts: 'You are worthy because...', 'Remember that...'.",
      "Allow students to take a note if they need encouragement or leave one for a peer."
    ],
    tips: "Student council or peer mentors can help moderate and replenish supplies."
  },
  {
    id: 18,
    title: "18. Youth Suicide Prevention & 988 Education Session",
    category: "Schools & Classrooms",
    time: "45 Minutes",
    materials: "Presenter slides, 988 wallet cards",
    summary: "An age-appropriate, evidence-based presentation teaching teens how to recognize warning signs in friends and how to contact the 988 Lifeline or Crisis Text Line.",
    steps: [
      "Partner with school counselors or local mental health crisis centers.",
      "Teach the ACT model: Acknowledge, Care, Tell a trusted adult.",
      "Have every student save 988 and Crisis Text Line (741741 in US / 686868 in Canada) into their mobile phones."
    ],
    tips: "Ensure school counseling staff is on standby throughout the day for follow-up support."
  },
  {
    id: 19,
    title: "19. Mindful Art & Creative Expression Workshop",
    category: "Schools & Classrooms",
    time: "45 Minutes",
    materials: "Watercolors, clay, sketch pads, calming music",
    summary: "Allow students to express complex internal feelings through non-verbal creative mediums without grades or critique.",
    steps: [
      "Play instrumental music and invite students to paint/draw how their brain feels.",
      "Emphasize process over product—no artistic skill required.",
      "Offer voluntary sharing circles for students who wish to explain their artwork."
    ],
    tips: "Creative expression provides an emotional outlet for students who struggle with verbal processing."
  },
  {
    id: 20,
    title: "20. Teacher & Faculty Wellness Circle",
    category: "Schools & Classrooms",
    time: "30 Minutes (Staff meeting)",
    materials: "Healthy refreshments, peer support prompts",
    summary: "A dedicated staff meeting honoring educators, addressing secondary traumatic stress, and establishing peer support buddies.",
    steps: [
      "Replace regular administrative agenda items with a teacher wellness check-in.",
      "Discuss strategies for setting boundaries with grading and after-hours parent emails.",
      "Pair teachers up as quarterly 'Wellness Buddies' for check-ins."
    ],
    tips: "Educators cannot pour into students when suffering from acute professional burnout."
  },

  // 4. Personal & Solo Self-Care (21–25)
  {
    id: 21,
    title: "21. 24-Hour Social Media & News Fast",
    category: "Personal & Solo",
    time: "24 Hours",
    materials: "App blockers, screen-free hobbies",
    summary: "Temporarily uninstall doomscrolling apps (Instagram, TikTok, X, News) to reset baseline dopamine and reduce social comparison.",
    steps: [
      "Log out of social media apps at 8:00 AM on October 10.",
      "Replace screen time with reading a physical book, walking outside, or journaling.",
      "Notice moments of impulse checking and take 3 deep breaths instead."
    ],
    tips: "Clinical studies demonstrate significant anxiety drops after just 24 hours off social feeds."
  },
  {
    id: 22,
    title: "22. The 5-4-3-2-1 Somatic Grounding Ritual",
    category: "Personal & Solo",
    time: "10 Minutes",
    materials: "Quiet space",
    summary: "A powerful sensory grounding technique that pulls the nervous system out of fight-or-flight back into present physical reality.",
    steps: [
      "Acknowledge 5 things you can SEE around you.",
      "Acknowledge 4 things you can physically TOUCH (your sweater, chair, floor).",
      "Acknowledge 3 things you can HEAR (traffic, birds, clock ticking).",
      "Acknowledge 2 things you can SMELL (coffee, fresh air).",
      "Acknowledge 1 thing you can TASTE."
    ],
    tips: "Use this ritual whenever racing thoughts or panic sensations begin to surface."
  },
  {
    id: 23,
    title: "23. Brain-Dump & Worry Journaling Session",
    category: "Personal & Solo",
    time: "15 Minutes",
    materials: "Notebook, pen",
    summary: "Write down every single lingering fear, to-do item, and catastrophic worry onto paper, then categorize them by control vs non-control.",
    steps: [
      "Set a timer for 10 minutes and write continuously without editing.",
      "Draw two columns: 'Things I Can Control' and 'Things Outside My Control'.",
      "Highlight 1 small action for the control column; intentionally surrender the rest."
    ],
    tips: "Getting thoughts onto physical paper reduces working-memory overload in the prefrontal cortex."
  },
  {
    id: 24,
    title: "24. Forest Bathing (Shinrin-Yoku) & Nature Walk",
    category: "Personal & Solo",
    time: "45 Minutes",
    materials: "Comfortable shoes, phone left on silent",
    summary: "Immerse yourself in a natural park or wooded area, focusing entirely on the sights, scents, and sounds of the ecosystem.",
    steps: [
      "Find a local trail, botanical garden, or quiet park.",
      "Walk at a deliberately slow, meditative pace without headphones.",
      "Breathe deeply to inhale phytoncides (natural plant compounds that boost immune and mood function)."
    ],
    tips: "20 minutes in nature has been proven to significantly lower salivary cortisol levels."
  },
  {
    id: 25,
    title: "25. Take a Clinically Validated Mental Health Screener",
    category: "Personal & Solo",
    time: "5 Minutes",
    materials: "Computer or mobile phone",
    summary: "Take a free, evidence-based PHQ-9 or GAD-7 assessment to objectively benchmark your depression and anxiety symptoms.",
    steps: [
      "Visit the MentalHealthDay.org clinical screener.",
      "Answer 7–9 brief clinical questions honestly regarding the past 2 weeks.",
      "Print or save your confidential score to guide discussions with your physician."
    ],
    tips: "Screeners are educational benchmarks that provide clarity and empowerment."
  }
];

export default function MentalHealthActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Workplace & Corporate', 'Remote & Distributed', 'Schools & Classrooms', 'Personal & Solo'];

  const filtered = selectedCategory === 'All' 
    ? allActivities 
    : allActivities.filter(a => a.category === selectedCategory);

  return (
    <div className="space-y-0 text-[#5F695F]">
      
      {/* Hero */}
      <section className="bg-[#181E19] text-white py-20 border-b border-[#2D372E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#56B259]/20 text-[#56B259] text-xs font-bold uppercase tracking-wider border border-[#56B259]/40">
            <Sparkles className="w-4 h-4" />
            <span>25 Actionable Initiatives • Updated [2026]</span>
          </div>
          <div className="w-12 h-1 bg-[#56B259] rounded-full mx-auto" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            25 Evidence-Based Mental Health Day Activities <br className="hidden sm:block" />for Work & School [2026]
          </h1>
          <p className="text-lg text-[#E2EBE2] leading-relaxed max-w-3xl mx-auto">
            Practical, zero-cost, and step-by-step initiatives for corporate teams, remote workers, teachers, and individuals to observe World Mental Health Day on October 10 and year-round.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b border-[#E8ECE8] sticky top-20 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#56B259] text-white shadow-xs'
                  : 'bg-[#F8FAF8] text-[#5F695F] border border-[#E8ECE8] hover:bg-slate-100 hover:text-[#181E19]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Activities List */}
      <section className="py-16 bg-[#F8FAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex items-center justify-between text-sm text-[#7A8A7B]">
            <span>Showing <strong>{filtered.length}</strong> activities</span>
          </div>

          <div className="space-y-8">
            {filtered.map((act) => (
              <article
                key={act.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8ECE8] shadow-2xs hover:shadow-md hover:border-[#56B259] transition-all space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E8ECE8] pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#56B259] bg-[#EBF7EC] px-3 py-1 rounded-full">
                      {act.category}
                    </span>
                    <h2 className="text-2xl font-bold text-[#181E19] mt-2">
                      {act.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#7A8A7B] bg-[#F8FAF8] px-3 py-1.5 rounded-full border border-[#E8ECE8] self-start sm:self-auto">
                    <Clock className="w-3.5 h-3.5 text-[#56B259]" />
                    <span>{act.time}</span>
                  </div>
                </div>

                <p className="text-base text-[#5F695F] leading-relaxed">
                  {act.summary}
                </p>

                <div className="space-y-3 bg-[#F8FAF8] p-6 rounded-2xl border border-[#E8ECE8]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#181E19]">
                    Step-by-Step Implementation:
                  </h3>
                  <ol className="space-y-2 text-sm text-[#5F695F]">
                    {act.steps.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#EBF7EC] text-[#56B259] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#7A8A7B] pt-2">
                  <span><strong>Materials:</strong> {act.materials}</span>
                  <span className="text-[#56B259] font-semibold italic">Pro Tip: {act.tips}</span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Cross Links */}
      <section className="py-16 bg-white border-t border-[#E8ECE8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-[#181E19]">More Resources for Mental Wellness</h3>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link href="/world-mental-health-day" className="inline-flex items-center gap-2 bg-[#56B259] text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider">
              <span>Main WMHD Toolkit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/mental-health-quotes" className="inline-flex items-center gap-2 bg-[#181E19] text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider">
              <span>72+ Inspirational Quotes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/screening" className="inline-flex items-center gap-2 bg-[#F8FAF8] text-[#181E19] border border-[#E8ECE8] font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider">
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
