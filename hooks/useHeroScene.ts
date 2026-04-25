import { createHeroView } from '@/anims/hero';
import { useEffect, useRef, useState } from 'react';

export function useHeroScene() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroViewRef.current) return;
    const isPhone =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    createHeroView(heroViewRef.current, isPhone);
    setIsLoaded(true);
  }, []);

  return { heroViewRef, isLoaded };
}
