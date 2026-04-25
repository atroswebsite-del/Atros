'use client';

import Image from 'next/image';
import { useI18n } from '@/components/I18nContext';

export default function HomeFoundersSection() {
  const { t } = useI18n();

  return (
    <section className="mt-[40px] w-full max-w-full border-gray-0 border-b-[1px] pb-[50px] text-center xl:mt-[40px] xl:pb-[40px] lg:mt-[90px] md:mt-md-48 md:pb-md-48">
      <span className="block px-[16px] font-xbold-tight text-gray-1 text-120 xl:text-[min(12vw,120px)] lg:text-lg-36 md:text-md-25">
        {t('text_founders.title')}
      </span>
      <div className="mx-auto mt-[40px] flex w-full max-w-[min(100%,920px)] justify-center px-[16px] md:mt-md-16">
        <div className="flex w-full flex-col gap-[23px] text-center text-[15px] font-medium text-gray-0 lg:gap-[36px] lg:text-[20px] md:gap-md-22 md:text-md-16">
          <p>{t('text_founders.first')}</p>
          <p>{t('text_founders.second')}</p>
        </div>
      </div>
      <div className="relative mx-auto mt-[40px] w-full overflow-hidden rounded-0 aspect-[1860/755] xl:mt-[40px] xl:aspect-[930/537] lg:mt-[40px] lg:aspect-[930/600] lg:rounded-20 md:mt-md-16 md:aspect-[343/221] md:rounded-10">
        <Image src="/home_founders.jpg" alt="ATROS Founders" fill className="object-cover" />
      </div>
    </section>
  );
}
