import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Tag from './Tag';
import { ComponentProps } from 'react';
import { PostType } from '@/services';

const MarkdownComponents = {
  // 标题一
  h1: ({ children, ...props }: ComponentProps<'h1'>) => (
    <h1 className="mb-[40px] xl:mb-[40px] lg:mb-[40px] md:mb-md-20 
                   text-[32px] xl:text-[32px] lg:text-[32px] 
                   md:text-md-20 font-xbold  text-gray-1 block clear-both" {...props}>
      {children}
    </h1>
  ),
  // 标题二 xl lg没有二级标题
  h2: ({ children, ...props }: ComponentProps<'h2'>) => (
    <span className="mb-[40px] xl:mb-[40px] lg:mb-[40px] md:mb-md-20 text-[26px] xl:text-[26px] lg:text-[26px] 
                     md:text-md-20 font-xbold  text-gray-1 block clear-both" {...props}>
      {children}
    </span>
  ),
  // 正常段落样式以确保文本正确换行 不要用p标签
  p: ({ children, ...props }: ComponentProps<'p'>) => (
    <div className="mb-[40px] xl:mb-[40px] lg:mb-[40px] md:mb-md-20 text-[26px] xl:text-[26px] lg:text-[26px] 
                    md:text-md-16 font-normal  text-gray-1" {...props}>
      {children}
    </div>
  ),
  // 缩进文本用它
  blockquote: ({ children, ...props }: ComponentProps<'blockquote'>) => (
    <blockquote className="text-[26px] xl:text-[26px] lg:text-[26px] md:text-md-16 font-normal  text-gray-1 block clear-both
                           xl:pl-[calc((1/6)*100%)] lg:pl-[calc((1/6)*100%)] md:pl-[calc((1/6)*100%)]"
      {...props}>
      {children}
    </blockquote>
  ),
  // 图片
  img: ({ src, alt }: ComponentProps<'img'>) => (
    <div className="w-full mx-auto mb-[40px] xl:mb-[40px] lg:mb-[40px] md:mb-md-20">
      <div className="relative aspect-[1010/540] xl:aspect-[930/584] lg:aspect-[930/584] md:aspect-[343/216]
                      rounded-20 xl:rounded-30 lg:rounded-30 md:rounded-15 overflow-hidden
                      border-gray-0 border-[1px]">
        <Image
          src={src ?? ''}
          alt={alt ?? ''}
          fill
          className="object-cover"
        />
      </div>
    </div>
  ),
};

// 博客详情Card
export default function BlogDetailCard({
  date,
  author,
  content,
}: PostType) {
  return (
    // px默认尺寸特殊加一个75
    <div className="max-w-[1440px] mx-auto flex-col overflow-hidden
                        bg-white-0 xl:bg-gray-2 lg:bg-gray-2 md:bg-gray-2
                          rounded-30 xl:rounded-0 lg:rounded-0 md:rounded-0 
                        border-gray-0 border-[1px] xl:border-0 lg:border-0 md:border-0
                          px-[45px] pt-[75px] pb-[206px]
                          xl:px-0 xl:pt-[25px] xl:pb-[80px]
                          lg:px-0 lg:pt-[25px] lg:pb-[80px]
                          md:px-0 md:pt-md-18 md:pb-md-64
                         ">
      {/* MARK: 与BlogCard保持一致 */}
      <div className={"xl:hidden w-full mx-auto flex flex-row justify-between items-start"}>
        <div className={`flex space-x-[10px]`}>
          <Tag label="AI" />
          <Tag label="TRADING" />
        </div>
        <div className="flex flex-row w-[70%] justify-between items-center">
          <Tag label="FROM" />
          <span lang='en' className="text-center text-[32px] font-bold  text-gray-1 whitespace-nowrap">
            {author.name}
          </span>
          <span lang='en' className="text-left w-[180px] text-[16px] font-bold  text-gray-1 whitespace-nowrap">
            {author.position}<br />{author.company}
          </span>
        </div>
        <span lang='en' className="text-[16px] xl:text-[16px] font-bold  text-gray-1 whitespace-nowrap">
          {date}
        </span>
      </div>

      {/* xl lg顶部展示 */}
      <div className={"hidden xl:flex lg:flex md:hidden w-full mx-auto flex-col justify-start xl:gap-[20px] lg:gap-[20px]"}>
        <div className="w-full flex flex-row justify-between items-center">
          < div className={`flex space-x-[10px]`}>
            <Tag label="AI" />
            <Tag label="TRADING" />
          </div>
          <span lang='en' className="xl:text-[16px] lg:text-[16px] font-bold  text-gray-1 whitespace-nowrap">
            {date}
          </span>
        </div>
        <div className="border-t-[1px] border-gray-0 w-full"></div>
        <div className="w-full flex flex-row justify-between items-center">
          <Tag label="FROM" />
          <span lang='en' className="xl:text-[32px] lg:text-[32px] font-bold  text-gray-1 whitespace-nowrap">
            {author.name}
          </span>
          <span lang='en' className="xl:text-[16px] lg:text-[16px] font-bold  xl:text-right lg:text-right text-gray-1 whitespace-nowrap">
            {author.position}<br />{author.company}
          </span>
        </div>
      </div>

      {/* md顶部展示 */}
      <div className={"hidden md:flex w-full mx-auto flex-col justify-start md:gap-md-10"}>
        <div className="w-full flex flex-row justify-between items-center">
          < div className={`flex md:space-x-md-8`}>
            <Tag label="AI" />
            <Tag label="TRADING" />
          </div>
          <span lang='en' className="md:text-md-14 font-bold  text-gray-1 whitespace-nowrap">
            {date}
          </span>
        </div>
        <div className="border-t-[1px] border-gray-0 w-full"></div>
        <div className="w-full flex flex-row justify-between items-center">
          <span lang='en' className="md:text-md-22 font-bold  text-gray-1 whitespace-nowrap">
            {author.name}
          </span>
          <span lang='en' className="md:text-md-14 font-bold  md:text-right text-gray-1 whitespace-nowrap">
            {author.position}<br />{author.company}
          </span>
        </div>
      </div>

      <div className="w-full pl-[calc((2.5/9)*100%)] xl:pl-0 lg:pl-0 md:pl-0 mt-[75px] xl:mt-[180px] lg:mt-[180px] md:mt-md-80">
        <ReactMarkdown components={MarkdownComponents}>
          {content}
        </ReactMarkdown>
      </div>
    </div >
  );
}