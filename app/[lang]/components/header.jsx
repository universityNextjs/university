import React from 'react'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'

export default async function Header({ lang }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='py-6'>
      <nav className='container flex items-center justify-between'>
        <div className={` scroll-smooth fixed z-[10000]`}
    >
      <div
        className={`active shadow-sm shadow-[#cccc]'}
        p-3 lg:px-0 w-full  fixed top-0 left-0 z-[10000]
        transition-all duration-300 text-black bg-white `}
      >
        <div className=' mx-auto lg:mx-24 flex items-center px-4   justify-between '>
          {/* logo  */}
           <h3 className="text-2xl font-medium">Uinversity</h3>
       <div className='flex justify-between items-center '>
              {/* nav */}
              <li className="block px-4 py-2 text-lg  hover:text-[#cccc] ">
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li className="block px-4 py-2 text-lg  hover:text-[#cccc] ">
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
          <li className="block px-4 py-2 text-lg  hover:text-[#cccc] ">
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li className="block px-4 py-2 text-lg  hover:text-[#cccc] ">
            <Link href={`/${lang}/about`}>{navigation.about}</Link>
          </li>
          {/* nav-mobile */}
          {/* <NavMobile /> */}
        </div>
        <LocaleSwitcher />
       </div>
        </div>
      </header>
    </div>

      </nav>
    </header>
  )
}
