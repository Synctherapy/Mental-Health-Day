import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import CrisisBanner from '@/components/CrisisBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mentalhealthday.org'),
  title: {
    default: 'Mental Health Day | Small steps. Big leaps.',
    template: '%s | Mental Health Day',
  },
  description:
    'At mentalhealthday.org you will find a holistic approach to mental well-being, weaving mental, physical, spiritual, emotional, and environmental wellness together.',
  keywords: [
    'Mental Health Day',
    'World Mental Health Day',
    'Mental wellness',
    'Anxiety relief',
    'Depression treatments',
    'EMDR therapy',
    'Brain health',
  ],
  authors: [{ name: 'Mental Health Day Editorial Team', url: 'https://mentalhealthday.org/about' }],
  creator: 'Mental Health Day',
  publisher: 'Mental Health Day',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mentalhealthday.org',
    siteName: 'Mental Health Day',
    title: 'Mental Health Day | Small steps. Big leaps.',
    description:
      'At mentalhealthday.org you will find a holistic approach to mental well-being. Small steps. Big leaps.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mental Health Day',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mental Health Day | Small steps. Big leaps.',
    description: 'Evidence-based guides, daily practices, and interactive wellness tools.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://mentalhealthday.org',
    types: {
      'application/rss+xml': [{ url: 'https://mentalhealthday.org/feed.xml', title: 'Mental Health Day RSS Feed' }],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Deep Entity-Stacking Schema (James Dooley & David Quaid Knowledge Graph standard)
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Mental Health Day',
    url: 'https://mentalhealthday.org',
    logo: 'https://mentalhealthday.org/logo.png',
    description: 'An international digital publication and advocacy resource dedicated to holistic mental wellness, brain health, and evidence-based trauma recovery.',
    sameAs: [
      'https://twitter.com/mentalhealthly',
      'https://facebook.com/Mental-Health-Day-105848761504929',
      'https://www.instagram.com/mentalhealthly/',
      'https://www.wikidata.org/wiki/Q1143822',
      'https://en.wikipedia.org/wiki/World_Mental_Health_Day'
    ],
    knowsAbout: [
      {
        '@type': 'MedicalCondition',
        name: 'Major Depressive Disorder',
        sameAs: 'https://en.wikipedia.org/wiki/Major_depressive_disorder'
      },
      {
        '@type': 'MedicalCondition',
        name: 'Anxiety Disorder',
        sameAs: 'https://en.wikipedia.org/wiki/Anxiety_disorder'
      },
      {
        '@type': 'MedicalCondition',
        name: 'Post-Traumatic Stress Disorder',
        sameAs: 'https://en.wikipedia.org/wiki/Post-traumatic_stress_disorder'
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Eye Movement Desensitization and Reprocessing',
        sameAs: 'https://en.wikipedia.org/wiki/Eye_movement_desensitization_and_reprocessing'
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Brainspotting',
        sameAs: 'https://en.wikipedia.org/wiki/Brainspotting'
      }
    ],
    medicalSpecialty: [
      'https://schema.org/Psychiatric',
      'https://schema.org/CommunityHealth'
    ]
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#F8FAF8]">
        <CrisisBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
