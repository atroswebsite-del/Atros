import { PostType } from '@/services';
import type { Locale } from '@/components/I18nContext';
import { useEffect, useState } from 'react';

function withCardSize(posts: PostType[]): PostType[] {
  return posts.map((post, index) => ({
    ...post,
    size: index < 3 ? 'large' : 'small',
  }));
}

function filterByLocale(posts: PostType[], locale: Locale): PostType[] {
  return posts.filter((post) => {
    if (!post.lang) return true;
    return post.lang === locale;
  });
}

export function useBlogPosts(locale: Locale) {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    fetch('/api/posts')
      .then((res) => res.json())
      .then((data: PostType[]) => {
        if (cancelled) return;
        const filtered = filterByLocale(data, locale);
        setPosts(withCardSize(filtered));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [locale]);

  return { posts, isLoading };
}
