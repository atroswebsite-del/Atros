'use client';

import { useEffect, useRef, useState } from 'react';
import { PostType } from '@/services';
import BlogCard from '@/ui/blog/BlogCard';
import BlogDetailCard from '@/ui/blog/BlogDetailCard';

type Props = {
  posts: PostType[];
};

export default function BlogListMobile({ posts }: Props) {
  const [selectedPostIndex, setSelectedPostIndex] = useState<number | null>(null);
  const expandedRef = useRef<HTMLDivElement>(null);

  // 点击文章外部区域时收起
  useEffect(() => {
    if (selectedPostIndex === null) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (expandedRef.current && !expandedRef.current.contains(event.target as Node)) {
        setSelectedPostIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedPostIndex]);

  return (
    <div
      className="w-full mx-auto
                      flex flex-col xl:hidden
                      gap-[56px]
                      px-0
                      pt-[226px]"
    >
      {posts.map((post, index) => (
        <div key={post.slug}>
          {selectedPostIndex === index ? (
            <div ref={expandedRef}>
              <BlogDetailCard {...post} />
            </div>
          ) : (
            <div onClick={() => setSelectedPostIndex(index)} className="cursor-pointer">
              <BlogCard {...post} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
