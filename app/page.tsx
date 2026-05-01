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

// Hero：`useHeroScene()` = heroViewRef + createHeroView(…, isPhone) + isLoaded（原页内 useRef/useEffect 已抽到 hook）

export default function Home() {
  const { heroViewRef, isLoaded } = useHeroScene();
  usePointerTrail();

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Header />
      <div
        ref={heroViewRef}
        id="hero-view"
        className="relative flex min-h-[100dvh] w-full max-w-full cursor-none overflow-x-hidden"
      />

      {isLoaded && (
        <>
          <div className="mx-auto w-full max-w-full px-[30px] xl:px-[30px] lg:px-[30px] md:px-md-16">
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
