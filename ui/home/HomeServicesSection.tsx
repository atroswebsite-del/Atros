'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useI18n } from '@/components/I18nContext';
import IconAnthrop from '@/ui/IconAnthrop';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeServicesSection() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const root = sectionRef.current;
      if (!root || !contextSafe) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const cols = root.querySelectorAll('[data-service-col]');

        gsap.from(cols, {
          opacity: 0,
          y: 32,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: root,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      });

      mm.add(
        '(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)',
        () => {
          const cols = gsap.utils.toArray<HTMLElement>(
            root.querySelectorAll('[data-service-col]'),
          );

          const cleanups = cols.map((col) => {
            const title = col.querySelector('[data-service-title]');
            if (!title) return () => {};

            const onEnter = contextSafe(() => {
              gsap.to(title, {
                y: -4,
                duration: 0.35,
                ease: 'power2.out',
                overwrite: 'auto',
              });
            });

            const onLeave = contextSafe(() => {
              gsap.to(title, {
                y: 0,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: 'auto',
              });
            });

            col.addEventListener('pointerenter', onEnter);
            col.addEventListener('pointerleave', onLeave);

            return () => {
              col.removeEventListener('pointerenter', onEnter);
              col.removeEventListener('pointerleave', onLeave);
            };
          });

          return () => cleanups.forEach((fn) => fn());
        },
      );

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="mt-[80px] xl:mt-[40px] lg:mt-[60px] md:mt-md-20 border-gray-0 border-t-[1px] border-b-[1px]"
    >
      <div className="flex w-full max-w-full flex-row items-start justify-center gap-[clamp(10px,1.8vw,36px)] px-[4px] py-[24px] text-left font-medium text-gray-0 text-[15px] md:py-md-20 md:text-md-16 lg:flex-col lg:gap-[28px] xl:gap-[20px]">
        <div
          data-service-col
          className="min-w-0 w-full max-w-full flex-1 basis-0 lg:basis-auto xl:min-h-0"
        >
          <span
            data-service-title
            className="mb-[12px] block text-[24px] font-xbold text-gray-0 xl:text-[22px] lg:text-[22px] md:mb-md-16 md:text-md-25"
          >
            {t('text_dollar.title')}
          </span>
          <p className="break-words">{t('text_dollar.content')}</p>
        </div>
        <div
          data-service-col
          className="min-w-0 w-full max-w-full flex-1 basis-0 lg:basis-auto xl:min-h-0"
        >
          <span
            data-service-title
            className="mb-[12px] block text-[24px] font-xbold text-gray-0 xl:text-[22px] lg:text-[22px] md:mb-md-16 md:text-md-25"
          >
            {t('text_stock.title')}
          </span>
          <p className="break-words">{t('text_stock.content')}</p>
        </div>
        <div
          data-service-col
          className="min-w-0 w-full max-w-full flex-1 basis-0 lg:basis-auto xl:min-h-0"
        >
          <span
            data-service-title
            className="mb-[12px] block text-[24px] font-xbold text-gray-0 xl:text-[22px] lg:text-[22px] md:mb-md-16 md:text-md-25"
          >
            {t('text_bird.title')}
          </span>
          <p className="mb-[16px] break-words md:mb-md-24">{t('text_bird.content')}</p>
          <span className="mb-[8px] block text-[15px] font-normal italic text-gray-0 md:text-md-14">
            {t('selected_venture')}
          </span>
          <IconAnthrop />
        </div>
      </div>
    </section>
  );
}
