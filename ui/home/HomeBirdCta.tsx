'use client';

import Image from 'next/image';
import Link from 'next/link';
import IconAtrosGreen from '@/assets/atros-logo-green.svg';
import IconStars from '@/assets/stars.svg';
import IconAppstore from '@/assets/appstore.svg';

export default function HomeBirdCta() {
  return (
    <div
      className="w-full mt-[32px] xl:mt-[24px] lg:mt-[55px] md:mt-md-50 relative overflow-hidden 
                      aspect-[1920/779] xl:aspect-[990/779] lg:aspect-[990/971] md:aspect-[375/425]
                      h-[779px] xl:h-[779px] lg:h-[971px] md:h-md-425"
    >
      <Image src="/home_bird.jpg" alt="" fill className="object-cover" />
      <div className="hidden lg:flex md:flex relative w-full mx-auto flex-col items-center">
        <IconAtrosGreen
          className="lg:w-[160px] lg:h-[160px] lg:mt-[240px] 
                                         md:w-md-78 md:h-md-78 md:mt-md-47"
        />
        <IconStars
          className="lg:w-[352px] lg:h-[46px] md:w-md-172 md:h-md-22 
                                lg:mt-[27px] md:mt-md-13"
        />
        <Link
          className={`lg:text-[25px] md:text-md-12 
                            lg:mt-[27px] md:mt-md-13
                             font-bold  text-gray-1 bg-green-0
                             lg:rounded-50 md:rounded-25 border border-gray-0
                             flex items-center justify-center
                             lg:w-[200px] lg:h-[70px] 
                             md:w-md-98 md:h-md-34`}
          href="/download.html"
        >
          DOWNLOAD
        </Link>
        <div
          className="flex w-full flex-col 
                            lg:mt-[29px] md:mt-md-20
                            lg:w-[calc(100%*760/990)] md:w-md-326
                            lg:px-[50px] lg:py-[10px] 
                            md:px-md-20 md:py-md-10
                            lg:rounded-20 border border-gray-0
                            lg:text-[16px] md:text-md-8 font-medium  text-gray-0 text-center bg-white-0"
        >
          <span className="">ALL INVESTING INVOLVES RISK.</span>
          <br />
          <span className="">
            RHF,RHY,RHC,RCT,RHG, and RHS are affiliated entities and wholly owned subsidiaries of
            ATROS Markets, Inc. RHF,RHY,RHC,RCT,RHG, and RHS are not banks. Products offered by RHF
            are not FDIC insured and involve risk, including possible loss of principal. RHC isn’t a
            member of FINRA and accounts are not FDIC insured or protected by SIPC.
          </span>
          <br />
          <span className="">2024 ATROS ®</span>
        </div>
        <IconAppstore className="lg:w-[166px] lg:h-[48px] md:w-md-116 md:h-md-33 lg:mt-[55px] md:mt-md-24" />
      </div>
    </div>
  );
}
