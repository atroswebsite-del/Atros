'use client'
import Image from 'next/image';
import IconAtros from '@/assets/atros-logo.svg'
import IconAtrosGreen from '@/assets/atros-logo-green.svg'
import IconStars from '@/assets/stars.svg'
import IconAppstore from '@/assets/appstore.svg'
import Header from '@/ui/Header'
import Footer from '@/ui/Footer'
import IconAnthrop from '@/ui/IconAnthrop'
import Link from 'next/link';
import { createHeroView } from '@/anims/hero';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useI18n } from '@/components/I18nContext';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false); // 添加状态

  const heroViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroViewRef.current) return;
    const isPhone = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    createHeroView(heroViewRef.current, isPhone);
    setIsLoaded(true);
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

  const { t, locale } = useI18n();

  return (
    <div className=''>
      <Header />
      <div ref={heroViewRef} id="hero-view" className="flex relative cursor-none w-full h-full" />

      {isLoaded && (
        <>
          <div className="w-full mx-auto px-[30px] xl:px-[30px] lg:px-[30px] md:px-md-16">
            {/* 标题 这里的中文标题注意行高的变化 */}
            <div className="text-center mt-[130px] xl:mt-[80px] lg:mt-[100px] md:mt-md-60">
              {locale === 'en' ? (
                <>
                  {/* whitespace-pre-line 会保留\n的换行 */}
                  <a className="block font-xbold text-gray-1 whitespace-pre-line
               text-35 xl:text-xl-36 lg:text-lg-36 md:text-md-18">
                    {/* 两行 */}
                    <span className="inline md:hidden">
                      <span className="whitespace-nowrap">PLEASE LEARN MORE ABOUT ATROS ® AND</span>{'\n'}
                      <span className="whitespace-nowrap">EXPLORE THE PROFESSIONAL SERVICES WE OFFER.</span>
                    </span>
                    {/* md */}
                    <span className="hidden md:inline">
                      <span className="whitespace-nowrap">PLEASE LEARN MORE ABOUT ATROS ®</span>{'\n'}
                      <span className="whitespace-nowrap">AND EXPLORE THE PROFESSIONAL</span>{'\n'}
                      <span className="whitespace-nowrap">SERVICES WE OFFER.</span>{'\n'}
                    </span>
                  </a>
                </>
              ) : (
                <>
                  {/* whitespace-pre-line 会保留\n的换行 */}
                  <a className="block font-xbold xl:font-xbold-tight lg:font-xbold-tight md:font-xbold-normal text-gray-1 whitespace-pre-line
               text-35 xl:text-xl-36 lg:text-lg-36 md:text-md-18">
                    {/* 两行 */}
                    <span className="inline md:hidden whitespace-nowrap">
                      欢迎深入了解 ATROS®，探索我们为您提供的专业服务。
                    </span>
                    {/* md */}
                    <span className="hidden md:inline">
                      <span className="whitespace-nowrap">欢迎深入了解 ATROS®，探索我</span>{'\n'}
                      <span className="whitespace-nowrap">们为您提供的专业服务。</span>{'\n'}
                    </span>
                  </a>
                </>
              )}
            </div>

            {/* 图文区域 */}
            <section className="mt-[80px] xl:mt-[40px] lg:mt-[60px] md:mt-md-20">
              {/* 第一张 美元图片 */}
              {/* 默认布局 */}
              <div className="xl:hidden relative flex flex-row items-start 
                          pt-[20px] pb-[20px] border-gray-0 border-t-[1px]">
                <div className="relative flex w-[calc(100%*6/12)] h-full min-h-[300px] max-h-[650px]">
                  <Image
                    src="/home_dollar_l.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                {/* 文本这是mt多10px即30px */}
                <div className="ml-[calc(100%*1/12)] mt-[10px] w-[calc(100%*2/12)] relative flex flex-col justify-start">
                  <span className="text-[24px]  font-xbold mb-[15px] text-gray-0">
                    {t('text_dollar.title')}
                  </span>
                  <p className="text-[15px]  text-gray-0 font-medium">
                    {t('text_dollar.content')}
                  </p>
                </div>
              </div>

              {/* xl布局 */}
              <div className="hidden xl:flex lg:hidden flex-row items-start 
                          pt-[20px] pb-[20px] border-gray-0 border-t-[1px]">
                <div className="relative flex w-[calc(100%*3/6)] h-full min-h-[300px] max-h-[650px]">
                  <Image
                    src="/home_dollar_l.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="pt-[10px] ml-[30px] w-[calc(100%*3/6)] relative flex flex-col justify-start">
                  <span className="mb-[20px] text-[30px]  font-xbold text-gray-0">
                    {t('text_dollar.title')}
                  </span>
                  <p className="text-[20px]  text-gray-0 font-medium">
                    {t('text_dollar.content')}
                  </p>
                </div>
              </div>

              {/* lg布局 */}
              <div className="hidden lg:flex md:hidden flex-col pb-[90px]">
                {/* overflow-hidden 溢出裁剪 */}
                <div className="relative flex w-full aspect-[930/600] rounded-20 overflow-hidden">
                  <Image
                    src="/home_dollar_l.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="pl-[calc(100%*1/6)] w-full pt-[40px] relative flex flex-col justify-start">
                  <span className="mb-[16px] text-[33px]  font-xbold text-gray-0">
                    {t('text_dollar.title')}
                  </span>
                  <p className="text-[20px]  text-gray-0 font-medium">
                    {t('text_dollar.content')}
                  </p>
                </div>
              </div>

              {/* md布局*/}
              <div className="hidden md:flex flex-col pb-md-48">
                <div className="relative flex w-full aspect-[343/221] rounded-10 overflow-hidden">
                  <Image
                    src="/home_dollar_l.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="pl-md-57 w-full pt-md-24 relative flex flex-col justify-start">
                  <span className="mb-md-16 text-md-25  font-xbold text-gray-0">
                    {t('text_dollar.title')}
                  </span>
                  <p className="text-md-16  text-gray-0 font-medium">
                    {t('text_dollar.content')}
                  </p>
                </div>
              </div>

              {/* 第二张 股票图片 */}
              {/*  默认布局 */}
              <div className="xl:hidden relative flex flex-row items-start 
                          pt-[20px] pb-[20px] border-gray-0 border-t-[1px]">

                <div className="w-[calc(100%*2/12)] ml-[calc(100%*1/12)] mt-[10px] mr-[calc(100%*2/12)] relative flex flex-col justify-start">
                  <span className="text-[24px]  font-xbold mb-[15px] text-gray-0">
                    {t('text_stock.title')}
                  </span>
                  <p className="text-[15px]  text-gray-0 font-medium">
                    {t('text_stock.content')}
                  </p>
                </div>
                <div className="relative flex ml-[calc(100%*1/12)] w-[calc(100%*3/12)]  h-full min-h-[300px] max-h-[650px]">
                  <Image
                    src="/home_stock.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>

              {/* xl布局 */}
              <div className="hidden xl:flex lg:hidden flex-row items-start 
                          pt-[20px] pb-[20px] border-gray-0 border-t-[1px]">
                <div className="relative flex w-[calc(100%*3/6)] h-full min-h-[300px] max-h-[650px]">
                  <Image
                    src="/home_stock.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="pt-[10px] ml-[30px] w-[calc(100%*3/6)] relative flex flex-col justify-start">
                  <span className="mb-[20px] text-[30px]  font-xbold text-gray-0">
                    {t('text_stock.title')}
                  </span>
                  <p className="text-[20px]  text-gray-0 font-medium">
                    {t('text_stock.content')}
                  </p>
                </div>
              </div>

              {/* lg布局 */}
              <div className="hidden lg:flex md:hidden flex-col pb-[90px]">
                {/* overflow-hidden 溢出裁剪 */}
                <div className="relative flex w-full aspect-[930/600] rounded-20 overflow-hidden">
                  <Image
                    src="/home_stock.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="pl-[calc(100%*1/6)] w-full pt-[40px] relative flex flex-col justify-start">
                  <span className="mb-[16px] text-[33px]  font-xbold text-gray-0">
                    {t('text_stock.title')}
                  </span>
                  <p className="text-[20px]  text-gray-0 font-medium">
                    {t('text_stock.content')}
                  </p>
                </div>
              </div>

              {/* md布局*/}
              <div className="hidden md:flex flex-col pb-md-48">
                <div className="relative flex w-full aspect-[343/221] rounded-10 overflow-hidden">
                  <Image
                    src="/home_stock.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="pl-md-57 w-full pt-md-24 relative flex flex-col justify-start">
                  <span className=" mb-md-16 text-md-25  font-xbold text-gray-0">
                    {t('text_stock.title')}
                  </span>
                  <p className="text-md-16  text-gray-0 font-medium">
                    {t('text_stock.content')}
                  </p>
                </div>
              </div>


              {/* 第三张 Lake图片 */}
              {/*  默认布局 */}
              <div className="xl:hidden relative flex flex-row items-start 
                          pt-[20px] pb-[20px] border-gray-0 border-t-[1px]">
                <div className="relative flex ml-[calc(100%*3/12)] w-[calc(100%*3/12)]  h-full min-h-[320px] max-h-[650px]">
                  <Image
                    src="/home_lake.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="w-[calc(100%*2/12)] ml-[calc(100%*1/12)] mt-[10px] relative flex flex-col justify-start">
                  <span className="mb-[15px] text-[24px]  font-xbold text-gray-0">
                    {t('text_lake.title')}
                  </span>
                  <p className="text-[15px]  text-gray-0 font-medium">
                    {t('text_lake.content')}
                  </p>
                </div>
              </div>

              {/* xl布局 */}
              <div className="hidden xl:flex lg:hidden flex-row items-start 
                          pt-[20px] pb-[20px] border-gray-0 border-t-[1px]">
                <div className="relative flex w-[calc(100%*3/6)] h-full min-h-[320px] max-h-[650px]">
                  <Image
                    src="/home_lake.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="pt-[10px] ml-[30px] w-[calc(100%*3/6)] relative flex flex-col justify-start">
                  <span className="mb-[20px] text-[30px]  font-xbold text-gray-0">
                    {t('text_lake.title')}
                  </span>
                  <p className="text-[20px]  text-gray-0 font-medium">
                    {t('text_lake.content')}
                  </p>
                </div>
              </div>

              {/* lg布局 */}
              <div className="hidden lg:flex md:hidden flex-col pb-[90px]">
                {/* overflow-hidden 溢出裁剪 */}
                <div className="relative flex w-full aspect-[930/600] rounded-20 overflow-hidden">
                  <Image
                    src="/home_lake.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="pl-[calc(100%*1/6)] w-full pt-[40px] relative flex flex-col justify-start">
                  <span className="mb-[16px] text-[33px]  font-xbold text-gray-0">
                    {t('text_lake.title')}
                  </span>
                  <p className="text-[20px]  text-gray-0 font-medium">
                    {t('text_lake.content')}
                  </p>
                </div>
              </div>

              {/* md布局*/}
              <div className="hidden md:flex flex-col pb-md-48">
                <div className="relative flex w-full aspect-[343/221] rounded-10 overflow-hidden">
                  <Image
                    src="/home_lake.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="pl-md-57 w-full pt-md-24 relative flex flex-col justify-start">
                  <span className="mb-md-16 text-md-25  font-xbold text-gray-0">
                    {t('text_lake.title')}
                  </span>
                  <p className="text-md-16  text-gray-0 font-medium">
                    {t('text_lake.content')}
                  </p>
                </div>
              </div>

              {/* 第四张 GRAHAM图片 */}
              {/*  默认布局 */}
              <div className="xl:hidden relative flex flex-row items-stretch min-h-[300px] 
                          pt-[20px] pb-[20px] border-gray-0 border-t-[1px]">
                {/* 图片最小高度高一些 */}
                <div className="relative flex w-[calc(100%*3/12)]">
                  <Image
                    src="/home_graham.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="w-[calc(100%*2/12)] ml-[calc(100%*1/12)] mt-[10px] relative flex flex-col justify-start">
                  <span className="mb-[15px] text-[24px]  font-xbold text-gray-0">
                    {t('text_graham.title')}
                  </span>
                  <p className="text-[15px]  text-gray-0 font-medium">
                    {t('text_graham.content')}
                  </p>
                </div>
                {/* 给了图片一样的高度 加了一个pb */}
                <div className="w-[calc(100%*2/12)] ml-[calc(100%*1/12)] h-[300px] pb-[10px] flex flex-col justify-end">
                  {/* TODO: 其他尺寸是否要显示 目前设计上可能有问题 */}
                  <p className="text-[15px]  text-gray-0 font-medium">
                    {t('text_graham.subContent')}
                  </p>
                </div>
              </div>

              {/* xl布局 */}
              <div className="hidden xl:flex lg:hidden flex-row items-start 
                          pt-[20px] pb-[20px] border-gray-0 border-t-[1px]">
                <div className="relative flex w-[calc(100%*3/6)] h-full min-h-[300px] max-h-[650px]">
                  <Image
                    src="/home_graham.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="ml-[30px] w-[calc(100%*3/6)] relative flex flex-col justify-start">
                  <span className="pt-[10px] mb-[20px] text-[30px]  font-xbold text-gray-0">
                    {t('text_graham.title')}
                  </span>
                  <p className="text-[20px]  text-gray-0 font-medium">
                    {t('text_graham.content')}
                  </p>
                </div>
              </div>

              {/* lg布局 */}
              <div className="hidden lg:flex md:hidden flex-col pb-[90px]">
                {/* overflow-hidden 溢出裁剪 */}
                <div className="relative flex w-full aspect-[930/600] rounded-20 overflow-hidden">
                  <Image
                    src="/home_graham.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="pl-[calc(100%*1/6)] w-full pt-[40px] relative flex flex-col justify-start">
                  <span className="mb-[16px] text-[33px]  font-xbold text-gray-0">
                    {t('text_graham.title')}
                  </span>
                  <p className="text-[20px]  text-gray-0 font-medium">
                    {t('text_graham.content')}
                  </p>
                </div>
              </div>

              {/* md布局 */}
              <div className="hidden md:flex flex-col pb-md-48">
                <div className="relative flex w-full aspect-[343/221] rounded-10 overflow-hidden">
                  <Image
                    src="/home_graham.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="pl-md-57 w-full pt-md-24 relative flex flex-col justify-start">
                  <span className="mb-md-16 text-md-25  font-xbold text-gray-0">
                    {t('text_graham.title')}
                  </span>
                  <p className="text-md-16  text-gray-0 font-medium">
                    {t('text_graham.content')}
                  </p>
                </div>
              </div>

              {/* 第五张 小鸟图片 最后一张lg md不要pb */}
              {/*  默认布局 */}
              {/* min-h-[357px] 317 + 20 + 20 宽度较大时 容器及图片高度不变 */}
              {/* items-stretch 宽度较小时 拉伸高度让图片撑满父容器 */}
              <div className="xl:hidden relative flex flex-row items-stretch
                          pt-[20px] pb-[20px] min-h-[357px] 
                          border-gray-0 border-t-[1px] border-b-[1px]">
                <div className="ml-[calc(100%*1/12)] mt-[10px] mr-[0px] w-[calc(100%*2/12)] relative flex flex-col justify-start">
                  <span className="mb-[15px] text-[24px]  font-xbold text-gray-0">
                    {t('text_bird.title')}
                  </span>
                  <p className="text-[15px]  text-gray-0 font-medium">
                    {t('text_bird.content')}
                  </p>
                </div>
                <div className="ml-[calc(100%*1/12)] mt-[10px] mr-[0] pb-[39px] w-[calc(100%*2/12)] relative flex flex-col justify-end">
                  <span className="text-[15px]  font-normal italic text-gray-0">
                    {t('selected_venture')}
                  </span>
                  <IconAnthrop />
                </div>
                <div className="relative w-[calc(100%*6/12)]">
                  <Image
                    src="/home_bird_head.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>

              {/* xl布局 */}
              {/* 右侧加了品牌的内容 xl布局下调高min-h-[440px] */}
              <div className="hidden xl:flex lg:hidden flex-row items-start 
                          pt-[20px] pb-[20px] 
                          border-gray-0 border-t-[1px] border-b-[1px]">

                <div className="relative flex w-[calc(100%*3/6)] h-full min-h-[440px] max-h-[650px]">
                  <Image
                    src="/home_bird_head.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="pt-[10px] ml-[30px] w-[calc(100%*3/6)] relative flex flex-col justify-start">
                  <span className="mb-[20px] text-[30px]  font-xbold text-gray-0">
                    {t('text_bird.title')}
                  </span>
                  <p className="mb-[20px] text-[20px]  text-gray-0 font-medium">
                    {t('text_bird.content')}
                  </p>
                  <span className="text-[18px]  font-normal italic text-gray-0">
                    {t('selected_venture')}
                  </span>
                  <IconAnthrop />
                </div>
              </div>

              {/* lg布局 lg md不要pb*/}
              <div className="hidden lg:flex md:hidden flex-col">
                {/* overflow-hidden 溢出裁剪 */}
                <div className="relative flex w-full aspect-[930/600] rounded-20 overflow-hidden">
                  <Image
                    src="/home_bird_head.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="pl-[calc(100%*1/6)] w-full pt-[40px] relative flex flex-col justify-start">
                  <span className="mb-[16px] text-[33px]  font-xbold text-gray-0">
                    {t('text_bird.title')}
                  </span>
                  <p className="mb-[24px] text-[20px]  text-gray-0 font-medium">
                    {t('text_bird.content')}
                  </p>
                  <span className="text-[18px]  font-normal italic text-gray-0">
                    {t('selected_venture')}
                  </span>
                  <IconAnthrop />
                </div>
              </div>

              {/* md布局 */}
              <div className="hidden md:flex flex-col">
                <div className="relative flex w-full aspect-[343/221] rounded-10 overflow-hidden">
                  <Image
                    src="/home_bird_head.jpg"
                    alt=""
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div className="pl-md-57 w-full pt-md-24 relative flex flex-col justify-start">
                  <span className="mb-md-16 text-md-25  font-xbold text-gray-0">
                    {t('text_bird.title')}
                  </span>
                  <p className="md:mb-md-24 text-md-16  text-gray-0 font-medium">
                    {t('text_bird.content')}
                  </p>
                  <span className="text-md-14  font-normal italic text-gray-0">
                    {t('selected_venture')}
                  </span>
                  <IconAnthrop />
                </div>
              </div>
            </section>

            {/* 团队介绍区域  */}
            <section className="w-full mx-auto text-center 
                            mt-[40px] xl:[40px] lg:[90px] md:mt-md-48">
              {/* 默认布局 pb高一些*/}
              <div className="xl:hidden flex flex-col 
                          pb-[50px] border-gray-0 border-b-[1px]">
                {/* 1. 标题部分 大字vw */}
                <span className="text-120 font-xbold-tight text-gray-1 text-center">
                  {t('text_founders.title')}
                </span>
                {/* 2. 文字部分 */}
                <div className="flex flex-row mt-[40px] 
                                 text-left font-medium text-gray-0
                            text-[15px] ">
                  <p className="ml-[calc(100%*1/12)] w-[calc(100%*2/12)]">{t('text_founders.first')}</p>
                  <p className="ml-[calc(100%*1/12)] w-[calc(100%*2/12)]">{t('text_founders.second')}</p>
                  <p className="ml-[calc(100%*1/12)] w-[calc(100%*2/12)]">{t('text_founders.third')}</p>
                  <p className="ml-[calc(100%*1/12)] w-[calc(100%*2/12)]">{t('text_founders.fourth')}</p>
                </div>
                {/* 3. 图片部分 */}
                <div className="mt-[50px] w-full relative aspect-[1860/755]">
                  <Image
                    src="/home_founders.jpg"
                    alt="ATROS Founders"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* xl布局 pb高一些*/}
              <div className="hidden xl:flex lg:hidden w-full flex-col pb-[40px] border-gray-0 border-b-[1px]">
                {/* MARK: 英文是120px 中文是115px 需要设计统一 */}
                <span className="text-[120px] font-xbold-tight text-gray-1 text-center">
                  {t('text_founders.title')}
                </span>
                {/* 2. 文字部分 */}
                <div className="flex flex-row mt-[40px] gap-[27px] 
                            text-left font-medium text-gray-0 
                            text-[20px] ">
                  {/* flex-1 占距一半空间 */}
                  <div className="flex-1 flex flex-col gap-[23px]">
                    <p>{t('text_founders.first')}</p>
                    <p>{t('text_founders.second')}</p>
                  </div>
                  {/* flex-1 占距一半空间 */}
                  <div className="flex-1 flex flex-col gap-[23px]">
                    <p>{t('text_founders.third')}</p>
                    <p>{t('text_founders.fourth')}</p>
                  </div>
                </div>
                {/* 3. 图片部分 */}
                <div className="mt-[40px] w-full relative aspect-[930/537]">
                  <Image
                    src="/home_founders.jpg"
                    alt="ATROS Founders"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* lg布局 */}
              <div className="hidden lg:flex md:hidden w-full flex-col">
                {/* 图片部分 */}
                <div className="w-full relative aspect-[930/600] rounded-20 overflow-hidden">
                  <Image
                    src="/home_founders.jpg"
                    alt="ATROS Founders"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* 标题部分 */}
                <span className="mt-[40px] pl-[calc(100%*1/6)] text-left text-[50px] font-xbold-tight text-gray-1">
                  {t('text_founders.title')}
                </span>
                {/* 2. 文字部分 */}
                <div className="flex flex-col w-full 
                            pl-[calc(100%*1/6)] mt-[40px] gap-[36px] 
                            text-left text-gray-0 font-medium
                            text-[20px] ">
                  <p>{t('text_founders.first')}</p>
                  <p>{t('text_founders.second')}</p>
                  <p>{t('text_founders.third')}</p>
                  <p>{t('text_founders.fourth')}</p>
                </div>
              </div>

              {/* md布局 */}
              <div className="hidden md:flex w-full flex-col">
                {/* 图片部分 */}
                <div className="w-full relative aspect-[343/221] rounded-10 overflow-hidden">
                  <Image
                    src="/home_founders.jpg"
                    alt="ATROS Founders"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* 标题部分 */}
                <span className="mt-md-24 pl-md-57 text-left text-md-25 font-xbold-tight text-gray-1">
                  {t('text_founders.title')}
                </span>
                {/* 文字部分 */}
                <div className="flex flex-col w-full pl-md-57 mt-md-16 gap-md-22 text-left text-md-16  text-gray-0 font-medium">
                  <p>{t('text_founders.first')}</p>
                  <p>{t('text_founders.second')}</p>
                  <p>{t('text_founders.third')}</p>
                  <p>{t('text_founders.fourth')}</p>
                </div>
              </div>

            </section>

            {/* 不加背景色 SVG不显示 vw */}
            <IconAtros className="w-full 
                              h-398 xl:h-xl-200 lg:h-lg-200 md:h-md-68
                              mt-[139px] xl:mt-[80px] lg:mt-[135px] md:mt-md-42" />
          </div >

          {/* Image定位需要加relative */}
          <div className="w-full mt-[32px] xl:mt-[24px] lg:mt-[55px] md:mt-md-50 relative overflow-hidden 
                      aspect-[1920/779] xl:aspect-[990/779] lg:aspect-[990/971] md:aspect-[375/425]
                      h-[779px] xl:h-[779px] lg:h-[971px] md:h-md-425">
            <Image
              src="/home_bird.jpg"
              alt=""
              fill
              className="object-cover"
            />
            {/* lg md显示 */}
            <div className="hidden lg:flex md:flex relative w-full mx-auto flex-col items-center">
              <IconAtrosGreen className="lg:w-[160px] lg:h-[160px] lg:mt-[240px] 
                                         md:w-md-78 md:h-md-78 md:mt-md-47" />
              <IconStars className="lg:w-[352px] lg:h-[46px] md:w-md-172 md:h-md-22 
                                lg:mt-[27px] md:mt-md-13" />
              <Link className={`lg:text-[25px] md:text-md-12 
                            lg:mt-[27px] md:mt-md-13
                             font-bold  text-gray-1 bg-green-0
                             lg:rounded-50 md:rounded-25 border border-gray-0
                             flex items-center justify-center
                             lg:w-[200px] lg:h-[70px] 
                             md:w-md-98 md:h-md-34`}
                href={`/download.html`}
              >
                DOWNLOAD
              </Link>
              {/* 高度不设定 由内容撑开 lg宽度用比例 */}
              <div className="flex w-full flex-col 
                            lg:mt-[29px] md:mt-md-20
                            lg:w-[calc(100%*760/990)] md:w-md-326
                            lg:px-[50px] lg:py-[10px] 
                            md:px-md-20 md:py-md-10
                            lg:rounded-20 border border-gray-0
                            lg:text-[16px] md:text-md-8 font-medium  text-gray-0 text-center bg-white-0">
                <span className="">ALL INVESTING INVOLVES RISK.</span>
                <br />
                <span className="">
                  RHF,RHY,RHC,RCT,RHG, and RHS are affiliated entities and wholly owned subsidiaries of ATROS Markets, Inc. RHF,RHY,RHC,RCT,RHG, and RHS are not banks. Products offered by RHF are not FDIC insured and involve risk, including possible loss of principal. RHC isn’t a member of FINRA and accounts are not FDIC insured or protected by SIPC.
                </span>
                <br />
                <span className="">2024 ATROS ®</span>
              </div>
              <IconAppstore className="lg:w-[166px] lg:h-[48px] md:w-md-116 md:h-md-33 lg:mt-[55px] md:mt-md-24" />
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </>
      )}
    </div >
  );
}