import React, { useState, useRef, useEffect } from 'react';
import { useI18n, Locale } from './I18nContext';
import IconCheckOn from '@/assets/check-on.svg';
import { useRouter } from 'next/navigation'; // Add this import at the top
import Image from 'next/image';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Add this line with other hooks


  useEffect(() => {
    // 点击外部区域关闭下拉菜单
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
    // 语言切换后跳转到首页 刷新一下防止中英文文章混在一起
    router.push("/");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="rounded-50 border border-gray-0 flex items-center justify-center 
                   w-[64px] h-[50px]
                   xl:w-[56px] xl:h-[40px]
                   lg:w-[56px] lg:h-[40px]
                   md:w-md-40 md:h-md-30
                   "
        onClick={() => setIsOpen((v) => !v)}
      >
        <div className="relative w-[32px] h-[32px] 
                            xl:w-[24px] xl:h-[24px]
                            lg:w-[24px] lg:h-[24px]
                            md:w-md-18 md:h-md-18
                            ">
          <Image
            src="/web.png"
            alt=""
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>

      </div>

      {isOpen && (
        <div className="absolute -translate-x-1/2 mt-[9px] z-20
                        w-[150px] h-[118px] px-[16px] py-[24px]
                        md:w-md-150 md:h-md-118 md:px-md-16 md:py-md-24
                        bg-white-0 border rounded-15 border-gray-0">
          <div className="flex flex-col space-y-[24px] md:space-y-md-24">
            <button
              onClick={() => changeLanguage('zh_cn')}
              className="flex items-center justify-between"
            >
              <span className='text-[18px] md:text-md-18 font-normal  text-gray-0'>中文</span>
              {locale === 'zh_cn' && (
                <IconCheckOn className="w-7 h-7 ml-8" />
              )}
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className="flex items-center justify-between"
            >
              <span className='text-[18px] md:text-md-18 font-normal  text-gray-0'>English</span>
              {locale === 'en' && (
                <IconCheckOn className="w-7 h-7 ml-8" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}