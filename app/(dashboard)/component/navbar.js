'use client';
import { useEffect, useState, useContext,React } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import images from '@/assets'

const Navbar = () => {
  const {theme, setTheme} = useTheme();
  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black border-nft-gray-1">
      <Link href="/">
        <div>
          <Image src={images.logo02} objectFit='contain' width={32} height={32} alt='logoNavbar' />
        </div>
      </Link>
    </nav>
  )
}

export default Navbar