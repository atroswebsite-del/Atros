import Image from 'next/image';
import { PostType } from '@/services';
import { useI18n } from '@/components/I18nContext';

export default function BlogCard({
  title,
  date,
  slug,
  coverImage,
  excerpt,
  size,
}: PostType) {
  const isLarge = size === 'large';
  console.log(slug);
  const { t } = useI18n();
  return (
    <>
      {/* 默认 xl 水平展示 */}
      <div className="lg:hidden">
        {isLarge ? (
          <div className="max-w-[1440px] w-full mx-auto 
                          flex-col overflow-hidden
                        bg-white-0 rounded-30 border-gray-0 border-[1px]
                          px-[45px] pt-[45px] pb-[30px]
                          xl:px-[30px] xl:pt-[30px] xl:pb-[30px]
                         ">
            <div className="flex flex-row">
              <div className="relative aspect-[345/496] xl:aspect-[345/496] overflow-hidden 
                              rounded-20 border-gray-0 border-[1px] 
                              w-[245px] xl:w-[219px]">
                <Image src={coverImage} alt="" fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-start ml-[30px] xl:ml-[25px]">
                <span className="text-[32px] xl:text-[28px] font-xbold text-gray-1">
                  {title}
                </span>
                <p className="text-[26px] xl:text-[24px] font-normal text-left text-gray-1 
                              mt-[40px] xl:mt-[32px]
                              line-clamp-5 xl:line-clamp-5 text-ellipsis whitespace-pre-line">
                  {excerpt}
                </p>
                <span className="text-[18px] xl:text-[20px] font-xbold text-gray-1 
                               mt-[40px] xl:mt-[32px]">
                  {t('read_more')}
                </span>
              </div>
            </div>
            <div className="border-t-[1px] border-gray-0 w-full mt-[45px] xl:mt-[30px]"></div>
            <div className="w-full mx-auto flex flex-row justify-end items-center pt-[18px] xl:pt-[15px]">
              <span lang='en' className="text-[18px] xl:text-[16px] font-bold text-gray-1 whitespace-nowrap">
                {date}
              </span>
            </div>
          </div>

        ) : (
          <div className="max-w-[1440px] mx-auto flex-col
                        bg-white-0 rounded-30 overflow-hidden border-gray-0 border-[1px]
                          px-[75px] pt-[75px] pb-[45px] pr-[75px]
                          xl:px-[30px] xl:pt-[30px] xl:pb-[30px]
                          ">
            <h2 className="text-[36px] xl:text-[28px] font-xbold text-gray-1">
              {title}
            </h2>
            <p className="text-[30px] xl:text-[24px] font-normal text-left text-gray-1 
                          mt-[40px] xl:mt-[32px]
                          line-clamp-3 text-ellipsis whitespace-pre-line">
              {excerpt}
            </p>
            <div className="border-t-[1px] border-gray-0 w-full mt-[45px] xl:mt-[30px]"></div>
            <div className="w-full mx-auto flex flex-row justify-end items-center pt-[18px] xl:pt-[15px]">
              <span lang='en' className="text-[18px] xl:text-[16px] font-bold text-gray-1 whitespace-nowrap">
                {date}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* lg md 垂直展示 */}
      <div className="hidden lg:flex">
        {isLarge ? (
          <div className="w-full mx-auto flex-col justify-start overflow-hidden
                        lg:pb-[32px] md:pb-md-16
                      bg-white-0 lg:rounded-40 md:rounded-20 border-gray-0 border-[1px]">
            <div className="relative overflow-hidden border-gray-0 border-b-[1px]
                              lg:aspect-[930/500] md:aspect-[343/184] 
                              w-full lg:h-[500px] md:h-md-184">
              <Image src={coverImage} alt="" fill className="object-cover" />
            </div>
            <div className="w-full 
                              lg:pl-[calc(100%/6)] lg:pr-[30px] 
                              lg:mt-[64px] md:mt-md-24 
                              lg:gap-[32px] md:gap-md-16
                              flex-1 flex flex-col justify-start text-left">
              <p className="lg:text-[28px] md:text-md-20 lg:uppercase md:uppercase font-xbold text-gray-1">
                {title}
              </p>
              <p className="lg:text-[24px] md:text-md-16 font-normal text-left text-gray-1 
                            lg:line-clamp-7 md:line-clamp-6 text-ellipsis whitespace-pre-line">
                {excerpt}
              </p>
              <span className="md:hidden lg:text-[20px] font-xbold text-gray-1">
                {t('read_more')}
              </span>
            </div>

            {/* 底部：仅日期 */}
            <div className="w-full mx-auto flex flex-row justify-end
                            lg:mt-[32px] lg:px-[30px]
                            md:mt-md-16 md:px-md-16">
              <div className="border-t-[1px] border-gray-0 w-full mb-[12px] md:mb-md-10"></div>
            </div>
            <div className="w-full flex flex-row justify-end lg:px-[30px] md:px-md-16">
              <span className="lg:text-[16px] md:text-md-12 font-bold text-gray-1 whitespace-nowrap">
                {date}
              </span>
            </div>
          </div>
        ) : (
          <div className="w-full mx-auto flex-col
                        bg-white-0 lg:rounded-40 md:rounded-20 overflow-hidden border-gray-0 border-[1px]
                          lg:px-[30px] lg:pt-[30px] lg:pb-[30px]
                          md:px-md-16 md:pt-md-16 md:pb-md-16
                          ">
            <p className="lg:text-[34px] md:text-md-20 lg:uppercase md:uppercase font-xbold text-gray-1">
              {title}
            </p>
            <p className="lg:text-[28px] md:text-md-16 font-normal text-left text-gray-1 
                          lg:mt-[32px] md:mt-md-16
                          line-clamp-3 text-ellipsis whitespace-pre-line">
              {excerpt}
            </p>
            <div className="flex flex-col justify-start w-full mx-auto lg:mt-[32px] md:mt-md-16">
              <div className="border-t-[1px] border-gray-0 w-full"></div>
              <div className="w-full flex flex-row justify-end lg:mt-[20px] md:mt-md-10">
                <span className="lg:text-[18px] md:text-md-12 font-bold text-gray-1 whitespace-nowrap">
                  {date}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
