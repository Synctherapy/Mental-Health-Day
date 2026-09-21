# MentalHealthDay.org (Next.js 15)

High-performance, SEO-optimized web application for [MentalHealthDay.org](https://mentalhealthday.org) built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Blazing Fast Performance**: 100% Static Site Generation (SSG) with sub-50ms TTFB.
- **Complete SEO Architecture**:
  - `MedicalWebPage` & `Article` Schema.org JSON-LD structured data.
  - `BreadcrumbList` schema.
  - Automated dynamic `sitemap.xml`, `robots.txt`, and RSS Feed (`/feed.xml`).
  - OpenGraph & Twitter image cards for every article.
- **Zero WooCommerce Bloat**: Purged all legacy store scripts, placeholder routes, and unused database schemas.
- **Interactive Tools Hub (`/tools`)**:
  - **4-7-8 Calm Breathing Circle**: Visual nervous system regulation tool.
  - **2-Minute Wellness Check-In**: Interactive self-assessment quiz.
  - **24/7 Crisis Helplines Directory**: 988 Lifeline, Crisis Text Line, and international support.
- **Full Media Library Preserved**: 8,000+ images from WordPress media library stored in `/public/wp-content/uploads/`.
- **E-E-A-T Healthcare Compliant**: Prominent medical disclaimers, editorial team attribution, and clear crisis intervention badges.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

## Building for Production

```bash
npm run build
npm run start
```
