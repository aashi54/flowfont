"use client"

import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import Navbar1 from '@/components/Navbar/Navbar1'
import MainNav from '@/components/Navbar/Navbar2'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'PaisaFlow.com',
//   description: 'We Finance You',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      
      setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
  }, []);


  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar/> */}
        {windowWidth <= 768 ? <Navbar1 /> : <Navbar />}
        {children}
        <Footer/>
        </body>
    </html>
  )
}
