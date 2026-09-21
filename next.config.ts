import type { NextConfig } from next;

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/tools',
        destination: '/mental-health-day-off-email-generator',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-notice',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/generator',
        destination: '/mental-health-day-off-email-generator',
        permanent: true,
      },
      {
        source: '/email-generator',
        destination: '/mental-health-day-off-email-generator',
        permanent: true,
      },
      {
        source: '/best-mental-health-quotes',
        destination: '/mental-health-quotes',
        permanent: true,
      },
      {
        source: '/world-mental-health-day-quotes',
        destination: '/mental-health-quotes',
        permanent: true,
      },
      {
        source: '/world-mental-health-day-activities',
        destination: '/mental-health-activities',
        permanent: true,
      },
      {
        source: '/shop',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cart',
        destination: '/',
        permanent: true,
      },
      {
        source: '/checkout',
        destination: '/',
        permanent: true,
      },
      {
        source: '/my-account',
        destination: '/',
        permanent: true,
      },
      {
        source: '/why-is-my-wife-yelling-at-me',
        destination: '/conditions',
        permanent: true,
      },
      {
        source: '/crystals-that-help-with-anxiety',
        destination: '/emdr-for-anxiety',
        permanent: true,
      },
      {
        source: '/why-is-this-life-so-hard',
        destination: '/things-mentally-strong-people-do',
        permanent: true,
      },
      {
        source: '/am-i-overthinking-or-is-he-losing-interest',
        destination: '/how-to-self-soothe-anxious-attachment',
        permanent: true,
      },
      {
        source: '/anxiety-sucks',
        destination: '/emdr-for-anxiety',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
