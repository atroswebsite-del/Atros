// import '@/styles/globals.css'
// import React from 'react'

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <title>Atros</title>
//         <meta name="referrer" content="origin" />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
//         />
//         <meta
//           name="description"
//           content="Atros is a place where traders gather, gear up, and do what traders do, trade. Option flow, dark pool info, and most importantly the collected wisdom from millions of brilliant minds."
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </head>
//       <body className='bg-gray-2'>
//         {children}
//       </body>
//     </html>
//   )
// }



// import '@/styles/globals.css'
// import React from 'react'
// import { I18nProvider } from '@/components/I18nContext'

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <title>Atros</title>
//         <meta name="referrer" content="origin" />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
//         />
//         <meta
//           name="description"
//           content="Atros is a place where traders gather, gear up, and do what traders do, trade. Option flow, dark pool info, and most importantly the collected wisdom from millions of brilliant minds."
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </head>
//       <body className='bg-gray-2'>
//         <I18nProvider>
//           {children}
//         </I18nProvider>
//       </body>
//     </html>
//   )
// }


// MARK: 中英文字体
'use client'
import '@/styles/globals.css'
import React from 'react'
import { I18nProvider, useI18n } from '@/components/I18nContext'

// 创建一个内部组件来使用 useI18n
function InnerLayout({ children }: { children: React.ReactNode }) {
  const { locale } = useI18n()
  return (
    <html lang={locale || 'en'}>
      <head>
        <title>Atros</title>
        <meta name="referrer" content="origin" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content="Atros is a place where traders gather, gear up, and do what traders do, trade. Option flow, dark pool info, and most importantly the collected wisdom from millions of brilliant minds."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className='bg-gray-2'>
        {children}
      </body>
    </html>
  )
}

// 主布局组件
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <I18nProvider>
      <InnerLayout>{children}</InnerLayout>
    </I18nProvider>
  )
}