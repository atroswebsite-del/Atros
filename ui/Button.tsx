// "use client"

// import React from 'react';
// import Link from 'next/link';

// interface ButtonProps {
//   type: 0 | 1; // 0 blog 1 download
//   href: string;
//   children: React.ReactNode;
//   className?: string; // 外部传入控制样式
// }

// // Blog Download 按钮
// const Button: React.FC<ButtonProps> = ({
//   type,
//   href,
//   children,
//   className,
// }) => {
//   return (
//     type === 0 ? (
//       <Link className={`text-[30px] xl:text-[25px] lg:text-[25px] md:text-md-20 
//                              font-bold leading-[1.0] text-gray-1 
//                              rounded-50 border border-gray-0
//                              flex items-center justify-center
//                              w-[185px] h-[50px] 
//                              xl:w-[155px] xl:h-[40px] 
//                              lg:w-[155px] lg:h-[40px] 
//                              md:w-md-147 md:h-md-45
//                              ${className}`}
//         href={href}
//       >
//         {children}
//       </Link>
//     ) : (
//       <Link className={`text-[30px] xl:text-[25px] lg:text-[25px] md:text-md-20 
//                              font-bold leading-[1.0] text-gray-1 bg-green-0
//                              rounded-50 border border-gray-0
//                              flex items-center justify-center
//                              w-[185px] h-[50px] 
//                              xl:w-[155px] xl:h-[40px] 
//                              lg:w-[180px] lg:h-[40px] 
//                              md:w-md-180 md:h-md-45
//                              ${className}`}
//         href={href}
//       >
//         {children}
//       </Link>
//     )
//   );
// };

// export default Button;


"use client"

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  type: 0 | 1; // 0 blog 1 download
  href: string;
  children: React.ReactNode;
  className?: string; // 外部传入控制样式
  onClick?: () => void;
}

// Blog Download 按钮
const Button: React.FC<ButtonProps> = ({
  type,
  href,
  children,
  className,
  onClick,
}) => {
  return (
    type === 0 ? (
      <Link lang='en' className={`text-[30px] xl:text-[25px] lg:text-[25px] md:text-md-18 
                             font-bold  text-gray-1 
                             rounded-50 border border-gray-0
                             flex items-center justify-center whitespace-nowrap
                             w-[240px] h-[50px] 
                             xl:w-[200px] xl:h-[40px] 
                             lg:w-[200px] lg:h-[40px] 
                             md:w-[min(90vw,280px)] md:h-md-30
                             ${className}`}
        href={href}
        onClick={onClick}
      >
        {children}
      </Link>
    ) : (
      <Link lang='en' className={`text-[30px] xl:text-[25px] lg:text-[25px] md:text-md-20 
                             font-bold  text-gray-1 bg-green-0
                             rounded-50 border border-gray-0
                             flex items-center justify-center
                             w-[185px] h-[50px] 
                             xl:w-[155px] xl:h-[40px] 
                             lg:w-[180px] lg:h-[40px] 
                             md:w-md-180 md:h-md-45
                             ${className}`}
        href={href}
        onClick={onClick}
      >
        {children}
      </Link>
    )
  );
};

export default Button;