import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '50+ Mental Health Day Activities for Work & School [2026]',
  description: 'Discover 50+ engaging mental health activities for workplaces, classrooms, remote teams, and individuals. Free printable ideas to celebrate October 10.',
  alternates: {
    canonical: 'https://mentalhealthday.org/mental-health-activities',
  },
  openGraph: {
    title: '50+ Calming Mental Health Activities for Workplaces & Schools',
    description: 'Practical, evidence-backed mindfulness and wellness exercises for teams, classrooms, and individuals on World Mental Health Day.',
    url: 'https://mentalhealthday.org/mental-health-activities',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
