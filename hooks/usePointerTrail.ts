import gsap from 'gsap';
import { useEffect } from 'react';

export function usePointerTrail() {
  useEffect(() => {
    const maxTrail = 12;
    const trailElements: HTMLDivElement[] = [];

    for (let i = 0; i < maxTrail; i++) {
      const circle = document.createElement('div');
      circle.className =
        'absolute left-0 top-0 z-10 bg-highlight rounded-full blur-[7px] overflow-hidden pointer-events-none';
      circle.style.width = `${20 - i}px`;
      circle.style.height = `${20 - i}px`;
      document.body.appendChild(circle);
      trailElements.push(circle);
    }

    const ctx = gsap.context(() => {});

    const handlePointerMove = (event: PointerEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      trailElements.forEach((trail, index) => {
        gsap.to(trail, {
          x: mouseX - 8,
          y: mouseY - 8,
          delay: index * 0.007,
          duration: 0.1,
          ease: 'power2.out',
          overwrite: true,
        });
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      trailElements.forEach((element) => {
        document.body.removeChild(element);
      });
      ctx.revert();
    };
  }, []);
}
