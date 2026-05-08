'use client';

import Image from 'next/image';

export default function HomeBirdCta() {
  return (
    <div
      className="w-full mt-[32px] xl:mt-[24px] lg:mt-[55px] md:mt-md-50 relative overflow-hidden 
                      aspect-[1920/779] xl:aspect-[990/779] lg:aspect-[990/971] md:aspect-[375/425]
                      h-[779px] xl:h-[779px] lg:h-[971px] md:h-md-425"
    >
      <Image src="/Sheeler.png" alt="" fill className="object-cover" sizes="100vw" />
    </div>
  );
}
