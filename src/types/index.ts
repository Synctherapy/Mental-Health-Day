export interface Heading {
  level: number;
  text: string;
  slug: string;
}

export interface Post {
  id: number | string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  modifiedDate?: string;
  author: string;
  category: string;
  allCategories: string[];
  tags: string[];
  image: string;
  readingTime: string;
  headings: Heading[];
}

export interface PageContent {
  id: number | string;
  slug: string;
  title: string;
  content: string;
  date: string;
}
