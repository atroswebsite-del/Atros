'use client';

import { useState } from 'react';
import { PostType } from '@/services';
import BlogCard from '@/ui/blog/BlogCard';
import BlogDetailCard from '@/ui/blog/BlogDetailCard';

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
        <div key={post.slug} onClick={() => handlePostClick(index)} className="cursor-pointer">
          {selectedPostIndex === index ? (
            <BlogDetailCard {...post} />
          ) : (
            <BlogCard {...post} />
          )}
        </div>
      ))}
    </div>
  );
}
