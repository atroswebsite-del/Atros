'use client';

import Image from 'next/image';
import { useI18n } from '@/components/I18nContext';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

export default function HomeFoundersSection() {
  const { t } = useI18n();
  const revealRef = useRevealOnScroll<HTMLElement>({
    childSelector: '[data-reveal]',
    y: 40,
    stagger: 0.14,
    duration: 0.9,
  });

  return (
    <section
      ref={revealRef}
      className="mt-[40px] w-full max-w-full border-gray-0 border-b-[1px] pb-[50px] text-left xl:mt-[40px] xl:pb-[40px] lg:mt-[90px] md:mt-md-48 md:pb-md-48"
    >
      <span
        data-reveal
        className="block px-[16px] text-center font-xbold-tight text-gray-1 text-120 xl:text-[min(12vw,120px)] lg:text-lg-36 md:text-md-25"
      >
        {t('text_founders.title')}
      </span>
      <div
        data-reveal
        className="mt-[40px] flex w-full flex-row gap-[80px] px-[16px] lg:gap-[48px] md:mt-md-16 md:flex-col md:gap-md-32"
      >
        <div className="flex flex-1 flex-col gap-[16px] text-[15px] font-medium text-gray-0 lg:gap-[20px] lg:text-[18px] md:gap-md-16 md:text-md-16">
          <h3 className="font-xbold text-gray-1 text-[28px] lg:text-[24px] md:text-md-20">
            {t('text_founders.na_region')}
          </h3>
          <p className="font-xbold text-gray-1">{t('text_founders.na_name')}</p>
          <p className="whitespace-pre-line">{t('text_founders.na_body')}</p>
          <p>{t('text_founders.na_tagline')}</p>
        </div>
        <div className="flex flex-1 flex-col gap-[16px] text-[15px] font-medium text-gray-0 lg:gap-[20px] lg:text-[18px] md:gap-md-16 md:text-md-16">
          <h3 className="font-xbold text-gray-1 text-[28px] lg:text-[24px] md:text-md-20">
            {t('text_founders.asia_region')}
          </h3>
          <p className="font-xbold text-gray-1">{t('text_founders.asia_name')}</p>
          <p className="whitespace-pre-line">{t('text_founders.asia_body')}</p>
        </div>
      </div>
      <div
        data-reveal
        className="relative mx-auto mt-[40px] w-full overflow-hidden rounded-0 aspect-[1860/755] xl:mt-[40px] xl:aspect-[930/537] lg:mt-[40px] lg:aspect-[930/600] lg:rounded-20 md:mt-md-16 md:aspect-[343/221] md:rounded-10"
      >
        <Image src="/home_founders.jpg" alt="ATROS Partners" fill className="object-cover" />
      </div>
    </section>
  );
}
