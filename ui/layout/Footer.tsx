'use client';

import Image from 'next/image';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

const Footer = () => {
  const revealRef = useRevealOnScroll<HTMLElement>({
    y: 24,
    duration: 0.75,
    start: 'top 95%',
  });

  return (
    <footer
      ref={revealRef}
      lang="en"
      className="w-full mx-auto flex flex-row justify-between items-center
                       bg-green-0 text-black  
                         h-[160px] xl:h-[160px] lg:h-[160px] md:h-md-60
                         px-[30px] xl:px-[30px] lg:px-[30px] md:px-md-16
                        "
    >
      <div className="relative flex items-center w-[160px] h-[120px] xl:w-[160px] xl:h-[120px] lg:w-[160px] lg:h-[120px] md:w-md-60 md:h-md-45">
        <Image
          src="/logo.png"
          alt=""
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <a
        href="https://abtros-paper.s3.amazonaws.com/Online+Privacy+Policy+atros.pdf"
        className="hover:underline font-bold text-[30px] xl:text-[25px] lg:text-[25px] md:text-md-9 "
      >
        Private Notice
      </a>
      <a
        href="https://abtros-paper.s3.amazonaws.com/Website+Terms+of+Use+atros.pdf"
        className="hover:underline font-bold text-[30px] xl:text-[25px] lg:text-[25px] md:text-md-9 "
      >
        Term of Use
      </a>
      <p className="font-bold text-[30px] xl:text-[25px] lg:text-[25px] md:text-md-9 ">
        © 2024 Atros Tech Inc.
      </p>
    </footer>
  );
};

export default Footer;
