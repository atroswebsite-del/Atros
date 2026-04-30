'use client';

import { useI18n } from '@/components/I18nContext';

type HomeWisdomSloganProps = {
  /** 外边距：紧挨大字 ATROS 时用 mb-*；若单独放在 hero 下则用 mt-* */
  className?: string
}

/** 首页「广告语」：文案随语言切换 */
export default function HomeWisdomSlogan({ className = '' }: HomeWisdomSloganProps) {
  const { locale } = useI18n();

  return (
    <div className={`text-center overflow-hidden ${className}`}>
      {locale === 'en' ? (
        <a
          lang="en"
          className="text-gray-1 block whitespace-pre-line text-120 font-xbold-tight
                     xl:text-xl-120 lg:text-lg-116 md:text-md-42"
        >
          <span className="inline xl:hidden">
            WISDOM & INTELLIGENCE{'\n'}THE KNOWN & THE UNKNOWN
          </span>
          <span className="hidden xl:inline">
            <span className="whitespace-nowrap">WISDOM &</span>
            {'\n'}
            <span className="whitespace-nowrap">INTELLIGENCE</span>
            {'\n'}
            <span className="whitespace-nowrap">THE KNOWN &</span>
            {'\n'}
            <span className="whitespace-nowrap">THE UNKNOWN</span>
          </span>
        </a>
      ) : (
        <a
          lang="zh-CN"
          className="text-gray-1 block whitespace-pre-line text-120 font-xbold-tight
                     xl:text-xl-120 lg:text-lg-116 md:text-md-42"
        >
          <span className="inline xl:hidden">
            智慧、才智与{'\n'}已知与未知
          </span>
          <span className="hidden xl:inline">
            <span className="whitespace-nowrap">智慧、</span>
            {'\n'}
            <span className="whitespace-nowrap">才智与</span>
            {'\n'}
            <span className="whitespace-nowrap">已知与</span>
            {'\n'}
            <span className="whitespace-nowrap">未知</span>
          </span>
        </a>
      )}
    </div>
  );
}
