'use client';

import { useI18n } from '@/components/I18nContext';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import BlogFooter from '@/ui/blog/BlogFooter';
import BlogListDesktop from '@/ui/blog/BlogListDesktop';
import BlogListMobile from '@/ui/blog/BlogListMobile';
import Header from '@/ui/layout/Header';

export default function BlogListPage() {
  const { locale } = useI18n();
  const { posts, isLoading } = useBlogPosts(locale);

  return (
    <div>
      <div className="w-full mx-auto px-[30px] xl:px-[30px] lg:px-[30px] md:px-md-16">
        <Header />
        {!isLoading && (
          <>
            <BlogListMobile posts={posts} />
            <BlogListDesktop posts={posts} />
          </>
        )}
      </div>
      {!isLoading && <BlogFooter />}
    </div>
  );
}
