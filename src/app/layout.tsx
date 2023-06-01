import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { ProvidersWrapper } from '@/modules/ProvidersWrapper'

const inter = Inter({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Todo List',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  )
}
