// "use client"
// import React, { useState } from 'react';
// import IconHamburger from '@/assets/hamburger.svg'
// import IconAtros from '@/assets/atros-logo.svg'
// import Link from 'next/link'
// import Modal from '@/ui/Modal';
// import Button from '@/ui/Button';

// const Header = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       {/* Header头部 LOGO absolute 头部固定用它 fixed z-[999]*/}
//       <header className="fixed bg-gray-2 z-[990] top-0 left-0 right-0 flex justify-between items-center
//                           px-[30px] xl:px-[30px] lg:px-[30px] md:px-md-16
//                            pt-[30px] xl:pt-[30px] lg:pt-[30px] md:pt-md-16
//                            pb-[30px] xl:pb-[30px] lg:pb-[30px] md:pb-md-16">
//         <Link href={`/`}>
//           <IconAtros className="w-[185px] h-[50px] 
//                                 xl:w-[140px] xl:h-[30px] 
//                                 lg:w-[140px] lg:h-[30px] 
//                                 md:w-[93px] md:h-[20px]"/>
//         </Link>
//         {/* <span className="text-gray-0">
//           <span className="xl:hidden">Default</span>
//           <span className="hidden xl:inline lg:hidden">XL</span>
//           <span className="hidden lg:inline md:hidden">LG</span>
//           <span className="hidden md:inline">MD</span>
//         </span> */}
//         <div className="flex flex-row space-x-[20px]">
//           <Button type={0} href={`/blog`} className="md:hidden">
//             Blog
//           </Button>
//           {/* 隐藏时不要用lg:block 否则对样式有影响 */}
//           <Button type={1} href={`/download.html`} className="hidden lg:flex md:hidden">
//             DOWNLOAD
//           </Button>
//           <button
//             onClick={openModal}
//             className="md:flex hidden lg:hidden"
//           >
//             <IconHamburger className="md:w-[40px] md:h-[40px]" />
//           </button>
//         </div>
//       </header>
//       {/* 模态框组件 */}
//       <Modal isOpen={isModalOpen} onClose={closeModal} />
//     </>
//   );
// };

// export default Header;



"use client"
import { useState } from 'react';
import IconAtros from '@/assets/atros-logo.svg'
import IconHamburger from '@/assets/hamburger.svg'
import Link from 'next/link'
import Button from '@/ui/Button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Modal from '@/ui/Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Header头部 LOGO absolute 头部固定用它 fixed z-[999]*/}
      <header className="fixed bg-gray-2 z-[990] top-0 left-0 right-0 flex justify-between items-center
                          px-[30px] xl:px-[30px] lg:px-[30px] md:px-md-16
                           pt-[30px] xl:pt-[30px] lg:pt-[30px] md:pt-md-16
                           pb-[30px] xl:pb-[30px] lg:pb-[30px] md:pb-md-16">
        <Link href={`/`}>
          <IconAtros className="w-[185px] h-[50px] 
                                xl:w-[140px] xl:h-[30px] 
                                lg:w-[140px] lg:h-[30px] 
                                md:w-md-93 md:h-md-20"/>
        </Link>

        {/* 桌面端：语言切换 + MARC SAYS */}
        <div className="flex flex-row space-x-[20px] md:hidden">
          <LanguageSwitcher />
          <Button type={0} href={`/blog`}>
            MARC SAYS
          </Button>
        </div>

        {/* 手机端：汉堡菜单按钮 */}
        <button
          className="hidden md:flex items-center justify-center"
          onClick={() => setIsModalOpen(true)}
        >
          <IconHamburger className="md:w-md-40 md:h-md-40" />
        </button>
      </header>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
