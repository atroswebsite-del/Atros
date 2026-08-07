'use client';

import IconAtros from '@/assets/atros-logo.svg';
import Footer from '@/ui/layout/Footer';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

/** 博客列表页底部：大 Logo + 全站 Footer（已去掉 Stay connected / 社交图标区） */
const BlogFooter = () => {
  const revealRef = useRevealOnScroll<HTMLDivElement>({
    childSelector: '[data-reveal]',
    y: 40,
    duration: 0.9,
    start: 'top 92%',
  });

  return (
    <div ref={revealRef} className="mt-[247px] xl:mt-[465px] lg:mt-[542px] md:mt-md-119">
      <div data-reveal>
        <IconAtros
          className="w-full mx-auto
                            px-30 xl:px-xl-30 lg:px-lg-30 md:px-md-16
                            h-398 xl:h-xl-200 lg:h-lg-200 md:h-md-68
                            mt-[110px] xl:mt-[91px] lg:mt-[91px] md:mt-md-32
                            mb-[50px] xl:mb-[36px] lg:mb-[36px] md:mb-md-10"
        />
      </div>
      <Footer />
    </div>
  );
};

export default BlogFooter;
