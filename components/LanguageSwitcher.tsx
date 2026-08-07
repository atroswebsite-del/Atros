import React, { useState, useRef, useEffect } from 'react';
import { useI18n, Locale } from './I18nContext';
import IconCheckOn from '@/assets/check-on.svg';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import type { PostType } from '@/services';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = async (newLocale: Locale) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    setLocale(newLocale);
    setIsOpen(false);

    // 列表页 / 其它页面：留在当前路由，由 locale 过滤即可
    const detailMatch = pathname?.match(/^\/blog\/([^/]+)$/);
    if (!detailMatch) return;

    // 详情页：跳到同日期对应语言的文章；找不到则回博客列表（不再回首页）
    const currentSlug = detailMatch[1];
    try {
      const posts: PostType[] = await fetch('/api/posts').then((res) => res.json());
      const current = posts.find((p) => String(p.slug) === String(currentSlug));
      const counterpart = current
        ? posts.find((p) => p.lang === newLocale && p.date === current.date)
        : undefined;

      router.push(counterpart ? `/blog/${counterpart.slug}` : '/blog');
    } catch {
      router.push('/blog');
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="rounded-50 border border-gray-0 flex items-center justify-center 
                   w-[64px] h-[50px]
                   xl:w-[56px] xl:h-[40px]
                   lg:w-[56px] lg:h-[40px]
                   md:w-md-40 md:h-md-30
                   "
        onClick={() => setIsOpen((v) => !v)}
      >
        <div
          className="relative w-[32px] h-[32px] 
                            xl:w-[24px] xl:h-[24px]
                            lg:w-[24px] lg:h-[24px]
                            md:w-md-18 md:h-md-18
                            "
        >
          <Image
            src="/web.png"
            alt=""
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute -translate-x-1/2 mt-[9px] z-20
                        w-[150px] h-[118px] px-[16px] py-[24px]
                        md:w-md-150 md:h-md-118 md:px-md-16 md:py-md-24
                        bg-white-0 border rounded-15 border-gray-0"
        >
          <div className="flex flex-col space-y-[24px] md:space-y-md-24">
            <button
              onClick={() => changeLanguage('zh_cn')}
              className="flex items-center justify-between"
            >
              <span className="text-[18px] md:text-md-18 font-normal  text-gray-0">
                中文
              </span>
              {locale === 'zh_cn' && <IconCheckOn className="w-7 h-7 ml-8" />}
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className="flex items-center justify-between"
            >
              <span className="text-[18px] md:text-md-18 font-normal  text-gray-0">
                English
              </span>
              {locale === 'en' && <IconCheckOn className="w-7 h-7 ml-8" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
