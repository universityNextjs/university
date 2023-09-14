'use client'
import Link from 'next/link'
import React, { useState } from 'react'

// import icons
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'

// FaBars
const NavMobile = () => {
  const [isOpen, setisOpen] = useState(false);
  console.log(isOpen);
  return (
    <nav className='relative z-20 lg:hidden'>
      {/* menu icons */}
      <button type='button' onClick={() => setisOpen(prev => !prev)}>
        <span className='absolute -right-1 -top-1 h-4 w-4 rounded-sm bg-[#1A173E] p-4 content-none'></span>{' '}
        <FaBars size={22} className='relative text-[#04C873]' />
      </button>
      {/* nav list */}
      <ul
        className={`${
          isOpen ? 'right-0' : 'right-full'
        } fixed top-0 flex h-screen w-full flex-col items-center justify-center space-y-8
          bg-[#1A173E] text-lg text-white transition-all`}
      >
        {/* close button */}
        <button className='absolute left-6 top-6'>
          <AiOutlineClose size={22} className='text-[#fff]' onClick={() => setisOpen(false)} />
        </button>
        <li>
          <Link className='cursor-pointer' href='/'>
            {' '}
            الرئيسية
          </Link>
        </li>
        <li>
          <Link className='cursor-pointer' href='/privacy'>
            المعالجين{' '}
          </Link>
        </li>
        <li>
          <Link className='cursor-pointer' href='/terms'>
            كيف تحجز جلستك؟
          </Link>
        </li>
        <li>
          <button
            className='rounded-[26px] border border-[#04C873] px-6 py-3 text-xl font-medium leading-6 text-[#04C873]
        hover:bg-[#04C873] hover:text-white'
          >
            احجز &nbsp; الأن
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavMobile
