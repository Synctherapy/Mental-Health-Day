import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Mental Health Self-Screening Assessment [2026]',
  description: 'Take a confidential 3-minute self-check assessment for anxiety, stress, and low mood. Get instant clinically-backed insights and recommended next steps.',
  alternates: {
    canonical: 'https://mentalhealthday.org/screening',
  },
  openGraph: {
    title: 'Free Mental Health Self-Screening Assessment [2026]',
    description: 'Take a confidential 3-minute self-check assessment for anxiety, stress, and low mood. Get instant clinically-backed insights.',
    url: 'https://mentalhealthday.org/screening',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
