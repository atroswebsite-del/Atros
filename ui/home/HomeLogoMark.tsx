'use client';

import IconAtros from '@/assets/atros-logo.svg';
import HomeWisdomSlogan from '@/ui/home/HomeWisdomSlogan';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

export default function HomeLogoMark() {
  const revealRef = useRevealOnScroll<HTMLElement>({
    childSelector: '[data-reveal]',
    y: 48,
    stagger: 0.16,
    duration: 1,
  });

  return (
    <section
      ref={revealRef}
      className="w-full overflow-visible bg-gray-2 px-[30px] pb-[min(12vh,120px)] pt-[min(10vh,100px)] md:px-md-16
                 md:pb-[min(10vh,96px)] md:pt-[min(8vh,88px)] xl:pt-[min(7vh,80px)] lg:pt-[min(8vh,88px)]"
    >
      <div className="mx-auto w-full max-w-[1860px] text-center">
        <div data-reveal>
          <HomeWisdomSlogan className="mb-[min(4vh,48px)] md:mb-md-32 xl:mb-[40px] lg:mb-[40px]" />
        </div>
        <div
          data-reveal
          className="w-full [&_svg]:mx-auto [&_svg]:block [&_svg]:h-auto [&_svg]:w-full [&_svg]:max-w-full"
        >
          <IconAtros className="h-auto w-full max-w-full" />
        </div>
      </div>
    </section>
  );
}
