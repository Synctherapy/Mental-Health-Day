import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { Post } from '@/types';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-[#E8ECE8] shadow-2xs hover:shadow-md hover:border-[#56B259] transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
        <Image
          src={post.image || '/logo.png'}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#56B259] text-white shadow-xs">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#7A8A7B] mb-2 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readingTime}
            </span>
          </div>
          <h3 className="text-lg font-bold text-[#181E19] group-hover:text-[#56B259] transition-colors leading-snug mb-2 line-clamp-2">
            <Link href={`/${post.slug}`} className="focus:outline-none">
              {post.title}
            </Link>
          </h3>
          <p className="text-[#5F695F] text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-2 border-t border-[#E8ECE8] flex items-center justify-between">
          <span className="text-xs text-[#7A8A7B] font-medium">By {post.author}</span>
          <Link
            href={`/${post.slug}`}
            className="text-xs font-bold text-[#56B259] group-hover:underline flex items-center gap-1"
          >
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
