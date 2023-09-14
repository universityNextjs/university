import React, { useState } from 'react'
// import icons
import { getDictionary } from '@/lib/dictionary'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
// FaBars 
  export default async function NavMobile({ lang }){
  const { navigation } = await getDictionary(lang)

  // const [isOpen, setisOpen] = useState(false);
  return (
    <nav className='lg:hidden relative z-20'>
      {/* menu icons */}
      <button >
        <span className='content-none absolute -top-1 -right-1 w-4 h-4 bg-[#1A173E] p-4 rounded-sm'></span> <FaBars size={22} className="text-[#04C873] relative" />
      </button>
      {/* nav list */}
      <ul className={`${isOpen ? 'right-0' : 'right-full'
        } bg-[#1A173E] fixed top-0 w-full h-screen text-white transition-all flex flex-col
          justify-center items-center space-y-8 text-lg ` }>
        {/* close button */}
        <button  className='absolute top-6 left-6'>
          <AiOutlineClose size={22} className="text-[#fff]" />
        </button>
        <li>
        <Link href={`/${lang}`}>{navigation.home}</Link>
        </li>
        <li>
        <Link href={`/${lang}/about`}>{navigation.about}</Link>
        </li>
      </ul>
    </nav >

  )
}
