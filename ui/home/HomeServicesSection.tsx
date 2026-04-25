'use client';

import { useI18n } from '@/components/I18nContext';
import IconAnthrop from '@/ui/IconAnthrop';

export default function HomeServicesSection() {
  const { t } = useI18n();

  return (
    <section className="mt-[80px] xl:mt-[40px] lg:mt-[60px] md:mt-md-20 border-gray-0 border-t-[1px] border-b-[1px]">
      <div className="flex flex-row items-start justify-center gap-[clamp(10px,1.8vw,36px)] px-[4px] py-[24px] text-left font-medium text-gray-0 text-[15px] xl:gap-[20px] lg:flex-col lg:gap-[28px] md:py-md-20 md:text-md-16">
        <div className="min-w-0 flex-1 basis-0 xl:min-h-0">
          <span className="mb-[12px] block text-[24px] font-xbold text-gray-0 xl:text-[22px] lg:text-[22px] md:mb-md-16 md:text-md-25">
            {t('text_dollar.title')}
          </span>
          <p>{t('text_dollar.content')}</p>
        </div>
        <div className="min-w-0 flex-1 basis-0 xl:min-h-0">
          <span className="mb-[12px] block text-[24px] font-xbold text-gray-0 xl:text-[22px] lg:text-[22px] md:mb-md-16 md:text-md-25">
            {t('text_stock.title')}
          </span>
          <p>{t('text_stock.content')}</p>
        </div>
        <div className="min-w-0 flex-1 basis-0 xl:min-h-0">
          <span className="mb-[12px] block text-[24px] font-xbold text-gray-0 xl:text-[22px] lg:text-[22px] md:mb-md-16 md:text-md-25">
            {t('text_bird.title')}
          </span>
          <p className="mb-[16px] md:mb-md-24">{t('text_bird.content')}</p>
          <span className="mb-[8px] block text-[15px] font-normal italic text-gray-0 md:text-md-14">
            {t('selected_venture')}
          </span>
          <IconAnthrop />
        </div>
      </div>
    </section>
  );
}
