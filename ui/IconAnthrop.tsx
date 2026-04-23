// import React from 'react';
// import Image from 'next/image';

// // 第五张图小鸟 品牌图标部分
// const IconAnthrop = () => {
//   return (
//     <>
//       <div className="relative flex items-center flex-row
//                       w-[286px] h-[18px] mt-[12px] 
//                       md:w-md-286 md:h-md-18 md:mt-md-12">
//         <div className="relative w-[139px] md:w-md-139 h-full">
//           <Image
//             src="/anthrop.png"
//             alt=""
//             fill
//             style={{
//               objectFit: 'contain',
//             }}
//           />
//         </div>
//         <div className="relative flex-1 h-full">
//           <Image
//             src="/xai.png"
//             alt=""
//             fill
//             style={{
//               objectFit: 'contain',
//             }}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default IconAnthrop;




import React from 'react';
import Image from 'next/image';

// 第五张图小鸟 品牌图标部分 
// MARK: md下图标大小能优一下更好
const IconAnthrop = () => {
  return (
    <>
      <div className="relative flex items-center flex-row
                      w-[230px] h-[18px] mt-[12px] 
                      md:w-md-230 md:h-md-18 md:mt-md-12">
        <Image
          src="/anthrop.png"
          alt=""
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </>
  );
};

export default IconAnthrop;


