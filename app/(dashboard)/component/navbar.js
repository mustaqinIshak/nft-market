'use client';
import { useEffect, useState, useContext,React } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import images from '@/assets'

const Navbar = () => {
  const {theme, setTheme} = useTheme();

  console.log({theme})
  return (
    <nav className="flex justify-between w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div className="md:flex md:justify-center hidden cursor-pointer" onClick={() => {}}>
            <Image src={images.logo02} objectFit='contain' width={32} height={32} alt='logoNavbar' />
            <p className="dark:text-white text-nft-black-1 font-bold text-lg ml-1">CryptoKet</p>
          </div>
        </Link>
        <Link href="/">
          <div className='md:hidden flex cursor-pointer' onClick={() => {}}>
            <Image src={images.logo02} objectFit='contain' width={32} height={32} alt='logo' />
          </div>
        </Link>
      </div>
      <div className="flex flex-row flex-initial justify-end">
        {/* toggle mode light/dark */}
        <div className="flex items-center mr-2">
          <input className="checkbox" type="checkbox" id="checkbox" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}  />
          <label htmlFor="checkbox" className="w-8 h-4 flexBetween relative bg-black rounded-2xl p-1 label ">
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>
        {/* end toggle mode light/dark */}
      </div>
      <div>
        mainmenu
      </div>
    </nav>
  )
}

export default Navbar