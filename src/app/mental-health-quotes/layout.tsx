import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '100+ Inspiring Mental Health Quotes for Tough Days [2026]',
  description: 'Explore 100+ uplifting mental health quotes on healing, strength, self-care, and hope. Filter by theme, copy your favorites, or share with loved ones.',
  alternates: {
    canonical: 'https://mentalhealthday.org/mental-health-quotes',
  },
  openGraph: {
    title: '100+ Inspiring Mental Health Quotes for Tough Days',
    description: 'Curated uplifting quotes on resilience, inner strength, and hope when you need comfort and encouragement.',
    url: 'https://mentalhealthday.org/mental-health-quotes',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
