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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Free Mental Health Self-Screening Assessment',
  url: 'https://mentalhealthday.org/screening',
  description: 'Take a confidential 3-minute self-check assessment for anxiety, stress, and low mood. Get instant clinically-backed insights and recommended next steps.',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
