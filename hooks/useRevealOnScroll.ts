'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealOptions = {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  /** If set, animate matching descendants instead of the root */
  childSelector?: string;
  start?: string;
};

/**
 * Fade + rise on scroll. Respects prefers-reduced-motion.
 * Returns a ref to attach to the section/container trigger.
 */
export function useRevealOnScroll<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {},
) {
  const {
    y = 36,
    duration = 0.85,
    stagger = 0,
    delay = 0,
    childSelector,
    start = 'top 88%',
  } = options;

  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const targets = childSelector
          ? root.querySelectorAll(childSelector)
          : root;

        if (childSelector && (targets as NodeListOf<Element>).length === 0) {
          return;
        }

        gsap.from(targets, {
          opacity: 0,
          y,
          duration,
          delay,
          ease: 'power3.out',
          stagger,
          scrollTrigger: {
            trigger: root,
            start,
            toggleActions: 'play none none none',
          },
        });
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  return ref;
}
