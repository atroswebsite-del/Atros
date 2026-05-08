'use client';

import { useState } from 'react';
import { PostType } from '@/services';
import BlogCard from '@/ui/blog/BlogCard';
import BlogDetailCard from '@/ui/blog/BlogDetailCard';
import IconClose from '@/assets/close.svg';

type Props = {
  posts: PostType[];
};

export default function BlogListMobile({ posts }: Props) {
  const [selectedPostIndex, setSelectedPostIndex] = useState<number | null>(null);

  const handlePostClick = (index: number) => {
    setSelectedPostIndex((current) => (current === index ? null : index));
  };

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
            <div>
              {/* 关闭按钮 */}
              <div className="flex justify-end mb-[16px] lg:mb-[12px] md:mb-md-10">
                <button
                  onClick={() => setSelectedPostIndex(null)}
                  className="flex items-center justify-center"
                  aria-label="关闭"
                >
                  <IconClose className="w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] md:w-md-40 md:h-md-40" />
                </button>
              </div>
              <BlogDetailCard {...post} />
            </div>
          ) : (
            <div onClick={() => handlePostClick(index)} className="cursor-pointer">
              <BlogCard {...post} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
