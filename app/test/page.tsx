'use client'
import { createHeroView } from '@/anims/hero';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Home() {
  const heroViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroViewRef.current) return;
    createHeroView(heroViewRef.current);
  }, [])


  useEffect(() => {
    // 创建鼠标动效
    const maxTrail = 12;
    const trailElements: HTMLDivElement[] = [];

    // 初始化拖尾元素
    for (let i = 0; i < maxTrail; i++) {
      const circle = document.createElement("div");
      circle.className =
        "absolute left-0 top-0 z-10 bg-highlight rounded-full blur-[7px] overflow-hidden pointer-events-none";
      circle.style.width = `${20 - i}px`;
      circle.style.height = `${20 - i}px`;
      document.body.appendChild(circle);
      trailElements.push(circle);
    }

    // 使用GSAP上下文进行更高效的动画管理
    const ctx = gsap.context(() => { });

    // 事件处理函数
    const handlePointerMove = (event: PointerEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      trailElements.forEach((trail, index) => {
        gsap.to(trail, {
          x: mouseX - 8,
          y: mouseY - 8,
          delay: index * 0.007,
          duration: 0.1,
          ease: "power2.out",
          overwrite: true, // 防止动画堆积
        });
      });
    };

    // 添加事件监听
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // 清理函数
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      trailElements.forEach(element => {
        document.body.removeChild(element);
      });
      ctx.revert(); // 清理所有GSAP动画
    };
  }, []);

  return (
    <>

      <main>
        <div className="mx-auto flex justify-center items-center w-full">
          <div ref={heroViewRef} id="hero-view" className="flex relative cursor-none"></div>
        </div>

      </main>
    </>
  )
}
