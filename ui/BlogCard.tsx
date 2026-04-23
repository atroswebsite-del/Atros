import Tag from './Tag';
import SmallTag from './SmallTag';
import Image from 'next/image';
import { PostType } from '@/services';
import { useI18n } from '@/components/I18nContext';

// TOOD: 文本少 用pb 需要调整
export default function BlogCard({
  title,
  date,
  slug,
  author,
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
        {/* 大卡片 高度不给了h-759 xl:h-xl-451 */}
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
                <Image
                  src={coverImage}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-start ml-[30px] xl:ml-[25px]">
                <span className="text-[32px] xl:text-[28px]  font-xbold text-gray-1">
                  {title}
                </span>

                <p className="text-[26px] xl:text-[24px]  font-normal text-left text-gray-1 
                              mt-[40px] xl:mt-[32px]
                              line-clamp-5 xl:line-clamp-5 text-ellipsis whitespace-pre-line">
                  {excerpt}
                </p>

                <span className="text-[18px] xl:text-[20px]  font-xbold text-gray-1 
                               mt-[40px] xl:mt-[32px]">
                  {t('read_more')}
                </span>
              </div>
            </div>
            <div className="border-t-[1px] border-gray-0 w-full mt-[45px] xl:mt-[30px]"></div>
            {/* MARK: 底部名字居中 职位居左固定宽度  预估值w-[70%]*/}
            <div className={"w-full mx-auto flex flex-row justify-between items-start pt-[18px] xl:pt-[15px]"}>
              <div className={`flex space-x-[10px]`}>
                <Tag label="AI" />
                <Tag label="TRADING" />
              </div>
              <div className="xl:hidden flex flex-row w-[70%] justify-between items-center">
                <Tag label="FROM" />
                <span lang='en' className="text-center text-[32px] font-bold  text-gray-1 whitespace-nowrap">
                  {author.name}
                </span>
                <span lang='en' className="text-left w-[180px] text-[18px] font-bold  text-gray-1 whitespace-nowrap">
                  {author.position}<br />{author.company}
                </span>
              </div>
              {/* xl 只显示名字 */}
              <span lang='en' className="hidden xl:flex lg:hidden xl:text-[28px] font-bold  text-gray-1 whitespace-nowrap">
                {author.name}
              </span>
              <span lang='en' className="text-[18px] xl:text-[16px] font-bold  text-gray-1 whitespace-nowrap">
                {date}
              </span>
            </div>
          </div>


        ) : (
          // 小卡片 高度不给了h-403 xl:h-xl-282
          <div className="max-w-[1440px] mx-auto  flex-col
        bg-white-0 rounded-30 overflow-hidden border-gray-0 border-[1px]
          px-[75px] pt-[75px] pb-[45px] pr-[75px]
          xl:px-[30px] xl:pt-[30px] xl:pb-[30px]
          ">
            <h2 className="text-[36px] xl:text-[28px]  font-xbold text-gray-1">
              {title}
            </h2>
            {/* 全部最大三行 */}
            <p className="text-[30px] xl:text-[24px]  font-normal text-left text-gray-1 
                          mt-[40px] xl:mt-[32px]
                          line-clamp-3 text-ellipsis whitespace-pre-line">
              {excerpt}
            </p>

            <div className="border-t-[1px] border-gray-0 w-full 
                          mt-[45px] xl:mt-[30px]"></div>
            <div className={"w-full mx-auto flex flex-row justify-between items-center pt-[18px] xl:pt-[15px]"}>
              <div className={`flex space-x-[10px]`}>
                <Tag label="AI" />
                <Tag label="TRADING" />
              </div>

              {/* 中间区域单独提出来 两边对齐 中间居中 宽度占比为1/2 */}
              <div className="xl:hidden flex flex-row w-[70%] justify-between items-center">
                <Tag label="FROM" />
                <span className="text-center text-[36px] font-bold  text-gray-1 whitespace-nowrap">
                  {author.name}
                </span>
                <span className="text-left w-[180px] text-[18px] font-bold  text-gray-1 whitespace-nowrap">
                  {author.position}<br />{author.company}
                </span>
              </div>

              {/* xl 只显示名字 */}
              <span className="hidden xl:flex lg:hidden xl:text-[28px] font-bold  text-gray-1 whitespace-nowrap">
                {author.name}
              </span>

              <span className="text-[18px] xl:text-[16px] font-bold  text-gray-1 whitespace-nowrap">
                {date}
              </span>
            </div>
          </div>
        )
        }
      </div >

      {/* lg md 垂直展示============================================================================= */}
      <div className="hidden lg:flex">
        {/* 大卡片 lg:h-lg-1194 md:h-md-508删除 */}
        {isLarge ? (
          <div className="w-full mx-auto flex-col justify-start overflow-hidden
                        lg:pb-[32px] md:pb-md-16
                      bg-white-0 lg:rounded-40 md:rounded-20 border-gray-0 border-[1px]">

            <div className="relative overflow-hidden border-gray-0 border-b-[1px]
                              lg:aspect-[930/500] md:aspect-[343/184] 
                              w-full lg:h-[500px] md:h-md-184">
              <Image
                src={coverImage}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            {/* calc(100%/6) 1/6 */}
            <div className="w-full 
                              lg:pl-[calc(100%/6)] lg:pr-[30px] 
                              lg:mt-[64px] md:mt-md-24 
                              lg:gap-[32px] md:gap-md-16
                              flex-1 flex flex-col justify-start text-left">
              <p className="lg:text-[28px] md:text-md-20  lg:uppercase md:uppercase font-xbold text-gray-1">
                {title}
              </p>
              <p className="lg:text-[24px] md:text-md-16  font-normal text-left text-gray-1 
                            lg:line-clamp-7 md:line-clamp-6 text-ellipsis whitespace-pre-line">
                {excerpt}
              </p>
              <span className="md:hidden lg:text-[20px] xl:text-[20px]  font-xbold text-gray-1">
                {t('read_more')}
              </span>
            </div>


            {/* lg底部展示 使用SmallTag */}
            <div className={"md:hidden w-full mx-auto flex flex-col justify-start lg:mt-[96px] lg:px-[30px] lg:gap-[20px]"}>
              <div className="w-full flex flex-row justify-between items-center">
                < div className={`flex space-x-[10px]`}>
                  <SmallTag label="AI" />
                  <SmallTag label="TRADING" />
                </div>
                <span className="lg:text-[16px] font-bold  text-gray-1 whitespace-nowrap">
                  {date}
                </span>
              </div>
              <div className="border-t-[1px] border-gray-0 w-full"></div>
              <div className="w-full flex flex-row justify-between items-center">
                <SmallTag label="FROM" />
                <span className="lg:text-[28px] font-bold  text-gray-1 whitespace-nowrap">
                  {author.name}
                </span>
                <span className="lg:text-[16px] font-bold  text-gray-1 whitespace-nowrap">
                  {author.position}
                </span>
              </div>
            </div>

            {/* md底部展示 */}
            <div className={"hidden md:flex flex-col justify-start w-full mx-auto  md:mt-md-64 md:px-md-16"}>
              <div className="border-t-[1px] border-gray-0 w-full"></div>
              <div className="w-full flex flex-row justify-between items-center md:mt-md-10">
                < div className={`flex md:space-x-md-8`}>
                  <Tag label="AI" />
                  <Tag label="TRADING" />
                </div>
                <span className="md:text-md-12 font-bold  text-gray-1 whitespace-nowrap">
                  {date}
                </span>
              </div>
            </div>
          </div>
        ) : (
          // 小卡片 高度不给了lg:h-lg-344 md:h-md-211
          <div className="w-full mx-auto  flex-col
        bg-white-0 lg:rounded-40 md:rounded-20 overflow-hidden border-gray-0 border-[1px]
          lg:px-[30px] lg:pt-[30px] lg:pb-[30px]
          md:px-md-16 md:pt-md-16 md:pb-md-16
          ">
            {/* lg md标题字要变大写 */}
            <p className="lg:text-[34px] md:text-md-20  lg:uppercase md:uppercase font-xbold text-gray-1">
              {title}
            </p>
            {/* 全部最大三行 */}
            <p className="lg:text-[28px] md:text-md-16  font-normal text-left text-gray-1 
                          lg:mt-[32px] md:mt-md-16
                          line-clamp-3 text-ellipsis whitespace-pre-line">
              {excerpt}
            </p>
            {/* 底部展示 */}
            <div className={"flex flex-col justify-start w-full mx-auto lg:mt-[32px] md:mt-md-16"}>
              <div className="border-t-[1px] border-gray-0 w-full"></div>
              <div className="w-full flex flex-row justify-between items-center lg:mt-[20px] md:mt-md-10">
                < div className={`flex space-x-[10px]`}>
                  <SmallTag label="AI" />
                  <SmallTag label="TRADING" />
                </div>
                <span className="lg:text-[18px] md:text-md-12 font-bold  text-gray-1 whitespace-nowrap">
                  {date}
                </span>
              </div>
            </div>
          </div>
        )
        }
      </div>
    </>

  );
}