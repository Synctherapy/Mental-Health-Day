import postsData from '@/data/posts.json';
import pagesData from '@/data/pages.json';
import { Post, PageContent } from '@/types';

const posts: Post[] = (postsData as unknown) as Post[];
const pages: Record<string, PageContent> = (pagesData as unknown) as Record<string, PageContent>;

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  if (category === 'All') return posts;
  return posts.filter(
    (p) =>
      p.category.toLowerCase() === category.toLowerCase() ||
      p.allCategories.some((c) => c.toLowerCase() === category.toLowerCase())
  );
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): Post[] {
  return posts
    .filter((p) => p.slug !== currentSlug)
    .filter(
      (p) =>
        p.category.toLowerCase() === category.toLowerCase() ||
        p.allCategories.some((c) => c.toLowerCase() === category.toLowerCase())
    )
    .slice(0, limit);
}

export function getAllCategories(): string[] {
  const cats = new Set<string>();
  posts.forEach((p) => {
    cats.add(p.category);
    p.allCategories.forEach((c) => cats.add(c));
  });
  return Array.from(cats);
}

export function getPageBySlug(slug: string): PageContent | undefined {
  return pages[slug];
}
