'use client';

import Link from 'next/link';
import { PostType } from '@/services';
import BlogCard from '@/ui/blog/BlogCard';

type Props = {
  posts: PostType[];
};

export default function BlogListDesktop({ posts }: Props) {
  return (
    <div
      className="w-full mx-auto
                      flex-col hidden xl:flex
                      gap-[56px] xl:gap-[40px] lg:gap-[56px] md:gap-md-16
                      px-0 xl:px-0 lg:px-0 md:px-0
                      pt-[226px] xl:pt-[190px] lg:pt-[190px] md:pt-[140px]"
    >
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <BlogCard {...post} />
        </Link>
      ))}
    </div>
  );
}
