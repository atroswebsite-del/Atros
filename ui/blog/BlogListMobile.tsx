'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PostType } from '@/services';
import BlogCard from '@/ui/blog/BlogCard';
import BlogDetailCard from '@/ui/blog/BlogDetailCard';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  posts: PostType[];
};

export default function BlogListMobile({ posts }: Props) {
  const [selectedPostIndex, setSelectedPostIndex] = useState<number | null>(null);
  const expandedRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

  useGSAP(
    () => {
      const root = listRef.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const items = root.querySelectorAll('[data-blog-item]');

        gsap.from(items, {
          opacity: 0,
          y: 36,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: root,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });

      return () => mm.revert();
    },
    { scope: listRef, dependencies: [posts.length], revertOnUpdate: true },
  );

  return (
    <div
      ref={listRef}
      className="w-full mx-auto
                      flex flex-col xl:hidden
                      gap-[56px]
                      px-0
                      pt-[226px]"
    >
      {posts.map((post, index) => (
        <div key={post.slug} data-blog-item>
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
