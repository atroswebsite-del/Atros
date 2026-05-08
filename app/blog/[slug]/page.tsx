'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { PostType } from '@/services';
import Header from '@/ui/layout/Header';
import BlogDetailCard from '@/ui/blog/BlogDetailCard';
import BlogFooter from '@/ui/blog/BlogFooter';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<PostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((posts: PostType[]) => {
        const found = posts.find((p) => String(p.slug) === String(slug));
        setPost(found ?? null);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [slug]);

  return (
    <div>
      <div className="w-full mx-auto px-[30px] xl:px-[30px] lg:px-[30px] md:px-md-16">
        <Header />
        {!isLoading && post && (
          <div className="pt-[226px] xl:pt-[190px] lg:pt-[190px] md:pt-[140px]">
            <BlogDetailCard {...post} />
          </div>
        )}
        {!isLoading && !post && (
          <div className="pt-[226px] text-gray-1 text-[32px]">Post not found.</div>
        )}
      </div>
      {!isLoading && <BlogFooter />}
    </div>
  );
}
