'use client';

import Link from 'next/link';
import { PostType } from '@/services';
import BlogCard from '@/ui/blog/BlogCard';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

type Props = {
  posts: PostType[];
};

export default function BlogListDesktop({ posts }: Props) {
  const revealRef = useRevealOnScroll<HTMLDivElement>({
    childSelector: '[data-blog-item]',
    y: 40,
    stagger: 0.12,
    duration: 0.8,
    start: 'top 90%',
  });

  return (
    <div
      ref={revealRef}
      className="w-full mx-auto
                      flex-col hidden xl:flex
                      gap-[56px] xl:gap-[40px] lg:gap-[56px] md:gap-md-16
                      px-0 xl:px-0 lg:px-0 md:px-0
                      pt-[226px] xl:pt-[190px] lg:pt-[190px] md:pt-[140px]"
    >
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} data-blog-item>
          <BlogCard {...post} />
        </Link>
      ))}
    </div>
  );
}
