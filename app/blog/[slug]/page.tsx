'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PostType } from '@/services';
import Header from '@/ui/layout/Header';
import BlogDetailCard from '@/ui/blog/BlogDetailCard';
import BlogFooter from '@/ui/blog/BlogFooter';
import IconClose from '@/assets/close.svg';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
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
          <div className="pt-[226px] xl:pt-[190px] lg:pt-[190px] md:pt-[140px] relative">
            <div className="relative max-w-[1440px] mx-auto">
              <button
                onClick={() => router.push('/blog')}
                aria-label="返回列表"
                className="absolute top-[30px] right-[30px] xl:top-[20px] xl:right-[20px] md:top-md-16 md:right-md-16 z-10 flex items-center justify-center"
              >
                <IconClose className="w-[32px] h-[32px] md:w-md-30 md:h-md-30" />
              </button>
              <BlogDetailCard {...post} />
            </div>
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
