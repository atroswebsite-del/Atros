"use client";
import BlogCard from '@/ui/BlogCard';
import Header from '@/ui/Header'
import BlogFooter from '@/ui/BlogFooter'
import { PostType } from '@/services'
import { useEffect, useState } from 'react';
import Link from 'next/link'
import BlogDetailCard from '@/ui/BlogDetailCard';
import { useI18n } from '@/components/I18nContext';

export default function BlogListPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [selectedPostIndex, setSelectedPostIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const { t, locale } = useI18n();
  console.log(t('blog'));

  // 点击处理函数
  const handlePostClick = (index: number) => {
    if (selectedPostIndex === index) {
      // 如果点击已选中的博客，取消选中
      setSelectedPostIndex(null);
    } else {
      // 否则，选中点击的博客
      setSelectedPostIndex(index);
    }
  };



  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(data => {
        // 添加原来的处理逻辑
        const processedPosts = data.map((post: PostType, index: number) => ({
          ...post,
          size: index < 3 ? 'large' : 'small'  // 在数据获取时设置 size
        }));
        const filteredPosts = processedPosts.filter((post: PostType) => {
          if (!locale) return true;
          if (!post.lang) return true;
          return post.lang === locale;
        });
        setPosts(filteredPosts);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error)
        setIsLoading(false);
      });
  }, [locale]);

  return (
    <div>
      <div className="w-full mx-auto px-[30px] xl:px-[30px] lg:px-[30px] md:px-md-16">
        {/* Header头部 LOGO  */}
        <Header />
        {/* 由于Header使用绝对定位 所以这里要把Header的高度加上 */}
        {/* pt-[116 + 110px] */}
        {/* 默认布局 Card与详情Card切换 */}

        {!isLoading && (
          <>
            <div className="w-full mx-auto
                      flex flex-col xl:hidden
                      gap-[56px]
                      px-0
                      pt-[226px]">
              {posts.map((post, index) => (
                <div key={index}
                  onClick={() => handlePostClick(index)}
                  className="cursor-pointer">
                  {selectedPostIndex === index ? (
                    <BlogDetailCard {...post} />
                  ) : (
                    <BlogCard {...post} />
                  )}
                </div>
              ))}
            </div>
            {/* xl lg md布局 */}
            {/* 由于Header使用绝对定位 所以这里要把Header的高度加上 */}
            {/* pt-[226px] (116 + 110) xl:pt-[190px] (100 + 90) lg:pt-[190px] (100 + 90) md:pt-[140px] (70 + 70)*/}
            <div className="w-full mx-auto
                      flex-col hidden xl:flex
                      gap-[56px] xl:gap-[40px] lg:gap-[56px] md:gap-md-16
                      px-0 xl:px-0 lg:px-0 md:px-0
                      pt-[226px] xl:pt-[190px] lg:pt-[190px] md:pt-[140px]">
              {posts.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`}>
                  <BlogCard key={index} {...post} />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
      {!isLoading && (<BlogFooter />)}
    </div>
  );
}

