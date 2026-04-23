/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'size': 'width, height'
      }
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      character: {
      },
      green: {
        0: '#00EA67' // 绿
      },
      gray: {
        0: '#000000', // 纯黑 线 小字
        1: '#212121', // 文字黑 大字
        2: '#EAEAEA', // 背景灰
      },
      white: {
        0: '#FFFFFF', // 纯白 卡片背景
      },
    }),
    // 方案一
    screens: {                  // 默认 1920设计稿
      'xl': { max: '1690px' },  // 大屏 990设计稿 
      'lg': { max: '990px' },   // 中屏 990设计稿
      'md': { max: '500px' },   // 小屏 移动端
      'sm': { max: '375px' }    // 小屏手机
    },
    // 方案二
    // screens: {                  // 默认 1920设计稿
    //   'xl': { max: '1690px' },  // 大屏 990设计稿 
    //   'lg': { max: '990px' },   // 中屏 990设计稿
    //   'md': { max: '640px' },   // 小屏 375设计稿 移动端
    //   'sm': { max: '480px' }    // 小屏手机
    // },
    // 方案三
    // screens: {                   // 默认 1920设计稿
    //   'xl': { max: '1280px' },   // 大屏 990设计稿
    //   'lg': { max: '1024px' },   // 中屏 990设计稿 
    //   'md': { max: '768px' },    // 小屏 375设计稿
    //   'sm': { max: '640px' }     // 小屏手机
    // },
    // 边框弧度用如下配置
    borderRadius: {
      '0': '0px',
      '10': '0.625rem',     // 10px
      '15': '0.9375rem',    // 15px
      '20': '1.25rem',      // 20px
      '25': '1.5625rem',    // 25px
      '30': '1.875rem',     // 30px
      '40': '2.5rem',      // 40px
      '50': '3.125rem',    // 50px
      'full': '9999px',
    },
    spacing: {
      // 默认值（1920设计稿） 
      '0': ['0vw'],
      '30': ['1.56vw'],
      '398': ['20.73vw'],

      // xl断点（990设计稿）
      'xl-30': ['3.03vw'],
      'xl-200': ['20.20vw'],

      // lg断点（990设计稿）
      'lg-30': ['3.03vw'],
      'lg-200': ['20.20vw'],

      // md断点（375设计稿）
      'md-8': ['2.13vw'],
      'md-10': ['2.67vw'],
      'md-12': ['3.2vw'],
      'md-15': ['4vw'],
      'md-16': ['4.27vw'],
      'md-18': ['4.8vw'],
      'md-230': ['61.33vw'],
      'md-139': ['37.07vw'],
      'md-20': ['5.33vw'],
      'md-22': ['5.76vw'],
      'md-24': ['6.4vw'],
      'md-25': ['6.667vw'],
      'md-30': ['8vw'],
      'md-32': ['8.53vw'],
      'md-40': ['10.67vw'],
      'md-42': ['11.2vw'],
      'md-45': ['12.00vw'],
      'md-48': ['12.8vw'],
      'md-50': ['13.33vw'],
      'md-57': ['15.2vw'],
      'md-60': ['16.13vw'],
      'md-64': ['17.07vw'],
      'md-68': ['18.13vw'],
      'md-72': ['19.2vw'],
      'md-78': ['20.8vw'],
      'md-80': ['21.33vw'],
      'md-93': ['24.8vw'],
      'md-119': ['31.73vw'],
      'md-172': ['45.87vw'],
      'md-180': ['48vw'],
      'md-184': ['49.07vw'],
      'md-230': ['61.33vw'],
      'md-248': ['66.13vw'],
      'md-147': ['39.2vw'],
      'md-425': '113.33vw',
      'md-116': '30.93vw',
      'md-33': '8.8vw',
      'md-98': '26.13vw',
      'md-34': '9.07vw',
      'md-326': '86.93vw',
      'md-47': '12.53vw',
      'md-13': '3.47vw',
      'md-20': '5.33vw',
      'md-24': '6.4vw',
      'md-142': '37.87vw',
      'md-90': '24vw',
      'md-144': '38.4vw',
      'md-150': '40vw',
      'md-118': '31.47vw',

    },
    // 字体大小 text-xl-20 leading-[1.0]
    fontSize: {
      // 默认值（1920设计稿）
      '35': ['1.85vw'],
      '36': ['1.875vw'],
      '120': ['6.25vw'],

      // xl断点（990设计稿）
      'xl-24': ['2.42vw'],
      'xl-36': ['3.63vw'],
      'xl-120': ['12.12vw'],

      // lg断点（990设计稿）
      'lg-24': ['2.42vw'],
      'lg-36': ['3.63vw'],
      'lg-116': ['11.72vw'],
      'lg-120': ['12.12vw'],

      // md断点（375设计稿）
      'md-8': '2.13vw',
      'md-9': ['2.52vw'],
      'md-12': ['3.2vw'],
      'md-14': ['3.73vw'],
      'md-16': ['4.27vw'],
      'md-18': ['4.8vw'],
      'md-20': ['5.33vw'],
      'md-22': ['5.87vw'],
      'md-25': ['6.67vw'],
      'md-40': ['10.67vw'],
      'md-42': ['11.2vw'],
      'md-45': ['12vw'],
    },
    // 行高/倍数 目前全用 leading-[1.0]
    lineHeight: {
      // '36': '2.25rem',    // 行高 leading-36
      // '1.0': '1.0',       // 无单位数值
    },
    // fontWeight: {
    //   thin: '100',
    //   extralight: '200',
    //   light: '300',
    //   normal: '400',
    //   medium: '500', // 中等粗细
    //   semibold: '600',
    //   bold: '700',  // 粗体
    //   xbold: '800', // 最粗的字
    //   black: '900',
    // },
    // max-w-lg max-w-full
    maxWidth: ({ theme, breakpoints }) => {
      const screens = theme('screens')
      const newScreens = {}
      for (const key in screens) {
        if (screens.hasOwnProperty(key)) {
          newScreens[key] = screens[key].max
        }
      }
      return {
        none: 'none',
        0: '0rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '90rem',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
        prose: '65ch',
        ...breakpoints(newScreens),
      }
    },
  },
  plugins: [],
};
