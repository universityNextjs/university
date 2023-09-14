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
        <span className='absolute -right-1 -top-1 h-4 w-4 rounded-sm bg-[#ffffff] p-4 content-none'></span>{' '}
        <FaBars size={22} className='relative text-black' />
      </button>
      {/* nav list */}
      <ul
        className={`${
          isOpen ? 'right-0' : 'right-full'
        } fixed top-0 flex h-screen w-full flex-col items-center justify-center space-y-8
          bg-[#25546b] text-lg text-black transition-all`}
      >
        {/* close button */}
        <button className='absolute left-6 top-6'>
          <AiOutlineClose size={22} className='text-[#000]' onClick={() => setisOpen(false)} />
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
      </ul>
    </nav>
  )
}

export default NavMobile
