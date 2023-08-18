import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Header from './components/Header';
import CenterLayout from './components/CenterLayout';
import PostMenu from './components/PostMenu';

const inter = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProjectsHub',
  description: 'ProjectsHub is a blog by ProjectsHub.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
       <PostMenu />
        <CenterLayout>
          {/* <MyInfo /> */}
         {/* <MyTabs /> */}
           
        {children}
       </CenterLayout>

        <Newsletter />
        <Footer />
        </body>
      <Analytics />
    </html>
  )
}
