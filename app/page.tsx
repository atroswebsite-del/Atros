'use client';

import Footer from '@/ui/layout/Footer';
import Header from '@/ui/layout/Header';
import HomeBirdCta from '@/ui/home/HomeBirdCta';
import HomeFoundersSection from '@/ui/home/HomeFoundersSection';
import HomeIntroHeadline from '@/ui/home/HomeIntroHeadline';
import HomeLogoMark from '@/ui/home/HomeLogoMark';
import HomeServicesSection from '@/ui/home/HomeServicesSection';
import { useHeroScene } from '@/hooks/useHeroScene';
import { usePointerTrail } from '@/hooks/usePointerTrail';

export default function Home() {
  const { heroViewRef, isLoaded } = useHeroScene();
  usePointerTrail();

  return (
    <div className="">
      <Header />
      <div ref={heroViewRef} id="hero-view" className="flex relative cursor-none w-full h-full" />

      {isLoaded && (
        <>
          <div className="w-full mx-auto px-[30px] xl:px-[30px] lg:px-[30px] md:px-md-16">
            <HomeIntroHeadline />
            <HomeServicesSection />
            <HomeFoundersSection />
            <HomeLogoMark />
          </div>

          <HomeBirdCta />
          <Footer />
        </>
      )}
    </div>
  );
}
