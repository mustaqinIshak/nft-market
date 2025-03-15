'use client';// Tambahkan ini di bagian atas file
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react';
import Navbar from './component/navbar';
import Footer from './component/footer';

const DashboardLayout = ({children}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // atau tampilkan fallback UI
  }
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark text-black bg-white min-h-screen">
          <Navbar />
              {children}
          <Footer />
      </div>
    </ThemeProvider>
  )
}

export default DashboardLayout