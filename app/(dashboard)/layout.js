'use client';// Tambahkan ini di bagian atas file
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react';
import {Navbar, Footer} from './component';
import '../globals.css'
const DashboardLayout = ({children}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // atau tampilkan fallback UI
  }
  return (
    <ThemeProvider attribute="class" >
      <div className="dark:bg-nft-dark dark:text-white text-black bg-white min-h-screen">
          <Navbar />
              {children}
          <Footer />
      </div>

      <Script src="https://kit.fontawesome.com/09ebbbb1f0.js" crossorigin="anonymous"></Script>
    </ThemeProvider>
  )
}

export default DashboardLayout