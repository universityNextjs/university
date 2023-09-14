import React from 'react'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import NavMobile from './NavMobile'
import Nav from './Nav'

export default async function Header({ lang }) {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='py-6' >
      <nav className='container flex items-center justify-between'>
        <div className={` scroll-smooth fixed z-[10000]`}
    >
      <div
        className={`active shadow-sm shadow-[#1F2937]'}
        p-4 lg:px-0 w-full  fixed top-0 left-0 z-[10000]
        transition-all duration-300 text-white bg-[#1F2937] `}
      >
        <div className='flex lg:flex   mx-auto lg:mx-14  items-center px-4   justify-between '>
             <h3 className="text-2xl font-medium">Uinversity</h3>
             <Nav lang={lang} navigation={navigation}/>
            <LocaleSwitcher />
           <NavMobile  />
       </div>
        </div>
      </div>
      </nav>

    </header>
  )
}
