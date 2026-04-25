'use client';

import { useI18n } from '@/components/I18nContext';

export default function HomeIntroHeadline() {
  const { locale } = useI18n();

  return (
    <div className="text-center mt-[130px] xl:mt-[80px] lg:mt-[100px] md:mt-md-60">
      {locale === 'en' ? (
        <>
          <a
            className="block font-xbold text-gray-1 whitespace-pre-line
               text-35 xl:text-xl-36 lg:text-lg-36 md:text-md-18"
          >
            <span className="inline md:hidden">
              <span className="whitespace-nowrap">PLEASE LEARN MORE ABOUT ATROS ® AND</span>
              {'\n'}
              <span className="whitespace-nowrap">EXPLORE THE PROFESSIONAL SERVICES WE OFFER.</span>
            </span>
            <span className="hidden md:inline">
              <span className="whitespace-nowrap">PLEASE LEARN MORE ABOUT ATROS ®</span>
              {'\n'}
              <span className="whitespace-nowrap">AND EXPLORE THE PROFESSIONAL</span>
              {'\n'}
              <span className="whitespace-nowrap">SERVICES WE OFFER.</span>
              {'\n'}
            </span>
          </a>
        </>
      ) : (
        <>
          <a
            className="block font-xbold xl:font-xbold-tight lg:font-xbold-tight md:font-xbold-normal text-gray-1 whitespace-pre-line
               text-35 xl:text-xl-36 lg:text-lg-36 md:text-md-18"
          >
            <span className="inline md:hidden whitespace-nowrap">
              欢迎深入了解 ATROS®，探索我们为您提供的专业服务。
            </span>
            <span className="hidden md:inline">
              <span className="whitespace-nowrap">欢迎深入了解 ATROS®，探索我</span>
              {'\n'}
              <span className="whitespace-nowrap">们为您提供的专业服务。</span>
              {'\n'}
            </span>
          </a>
        </>
      )}
    </div>
  );
}
