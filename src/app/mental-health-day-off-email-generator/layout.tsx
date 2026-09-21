import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mental Health Day Off Email Generator | Free PTO Tool [2026]',
  description: 'Generate a professional, guilt-free mental health day-off email in 10 seconds. Choose your tone, customize your details, and copy your script instantly.',
  alternates: {
    canonical: 'https://mentalhealthday.org/mental-health-day-off-email-generator',
  },
  openGraph: {
    title: 'Workplace Mental Health Day-Off Email Generator (Free Tool)',
    description: 'Need a mental health rest day? Generate a polite, professional, and guilt-free PTO email in 10 seconds.',
    url: 'https://mentalhealthday.org/mental-health-day-off-email-generator',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
